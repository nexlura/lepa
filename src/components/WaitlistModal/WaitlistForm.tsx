'use client'

import { useContext, useMemo, useState } from "react"
import { z } from "zod"
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid"
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"

import { Combobox, ComboboxLabel, ComboboxOption } from "../UIKit/ComboBox"
import { ErrorMessage, Field, Label } from "../UIKit/Fieldset"
import { Input } from "../UIKit/Input"
import { FeedbackContext } from "@/context/feedback"

const levels = [
    { id: 1, name: 'Pre-Primary' },
    { id: 2, name: 'Primary' },
    { id: 3, name: 'Secondary' },
    { id: 4, name: 'All Levels' }
]

const WaitlistSchema = z.object({
    schoolName: z.string().min(2, 'School name is required'),
    adminFullName: z.string().min(2, 'Full name is required'),
    adminPhone: z
        .string()
        .min(7, 'Phone number is required')
        .regex(/^[+()\-\s0-9]{7,}$/i, 'Enter a valid phone number'),
})

export type Waitlist = z.infer<typeof WaitlistSchema>
interface WaitlistFormProps {
    onSubmittingChange?: (isSubmitting: boolean) => void
    onSuccess?: () => void
    setIsOpen: (args: boolean) => void
}

const Alert = (props: { message: string, setShowAlert: (args: boolean) => void }) => {
    return (
        <div className="rounded-md bg-red-50 p-4">
            <div className="flex">
                <div className="shrink-0">
                    <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">{
                        props.message
                    }</p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500 hover:bg-red-100 focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 focus-visible:ring-offset-red-50 focus-visible:outline-hidden"
                            onClick={() => props.setShowAlert(false)}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XMarkIcon aria-hidden="true" className="size-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


const WaitlistForm = ({ onSubmittingChange, onSuccess, setIsOpen }: WaitlistFormProps) => {
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset,
    } = useForm<Waitlist>({
        resolver: zodResolver(WaitlistSchema),
    })

    const { setFeedback } = useContext(FeedbackContext)


    const [selectedLevel, setSelectedLevel] = useState(levels[1])
    const [showAlert, setShowAlert] = useState(false)
    const [submittionRes, setSubmittionRes] = useState<string>('')

    const handleLevelChange = (level: typeof levels[0] | null) => {
        if (level) {
            setSelectedLevel(level)
        }
    }

    const onSubmit = async (data: Waitlist) => {
        const { adminFullName, adminPhone, schoolName } = data

        setSubmittionRes('')
        const formData = new FormData()

        formData.append('adminFullName', adminFullName)
        formData.append('adminPhone', adminPhone)
        formData.append('schoolName', schoolName)

        const payload = {
            schoolName: String(formData.get('schoolName')).trim(),
            schoolLevel: selectedLevel?.name ?? '',
            adminFullName: String(formData.get('adminFullName')).trim(),
            adminPhone: String(formData.get('adminPhone')).trim(),
        }

        onSubmittingChange?.(true)
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })

            if (!res.ok) {
                const body = await res.json().catch(() => ({}))
                const message = body?.error || 'Failed to submit. Please try again.'
                setSubmittionRes(message)
                return
            } else {
                setIsOpen(false)
                setFeedback({ status: 'success', text: `Thanks for joining!  We’ll notify you when your spot is available` })
            }

            onSuccess?.()
            reset()
        } finally {
            onSubmittingChange?.(false)
        }
    }

    useMemo(() => submittionRes ? setShowAlert(true) : setShowAlert(false), [submittionRes])

    return (
        <>
            {showAlert && (<Alert message={submittionRes} setShowAlert={setShowAlert} />)}
            <form id="waitlist-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-1 mt-10">
                    <div className="border-gray-900/10 pb-8">
                        <h2 className="text-base/7 font-semibold text-gray-900">School Information</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            <Field className="w-full">
                                <Label className="text-sm/6 text-gray-900 font-medium">School Name</Label>
                                <Input
                                    placeholder="School Name"
                                    invalid={errors.schoolName ? true : false}
                                    {...register("schoolName")}
                                />
                                {errors.schoolName ? <ErrorMessage>{errors.schoolName.message}</ErrorMessage> : null}
                            </Field>
                            <Field>
                                <Label className="text-sm/6 text-gray-900 font-medium">School Level</Label>
                                <Combobox
                                    name="school-level"
                                    options={levels}
                                    displayValue={(level) => (level as typeof levels[number])?.name}
                                    defaultValue={selectedLevel}
                                    onChange={handleLevelChange}
                                >
                                    {(level) => (
                                        <ComboboxOption value={level}>
                                            <ComboboxLabel>{(level as typeof levels[number]).name}</ComboboxLabel>
                                        </ComboboxOption>
                                    )}
                                </Combobox>
                            </Field>
                        </div>
                    </div>
                    <div className=" border-gray-900/10 pb-8">
                        <h2 className="text-base/7 font-semibold text-gray-900">Admin Information</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            <Field>
                                <Label className="text-sm/6 text-gray-900 font-medium">Full Name</Label>
                                <Input
                                    placeholder="Full Name"
                                    invalid={errors.adminFullName ? true : false}
                                    {...register("adminFullName")}
                                />
                                {errors.adminFullName ? <ErrorMessage>{errors.adminFullName.message}</ErrorMessage> : null}
                            </Field>
                            <Field>
                                <Label className="text-sm/6 text-gray-900 font-medium">Phone Number</Label>
                                <Input
                                    type="tel" placeholder="Phone Number"
                                    invalid={errors.adminPhone ? true : false}
                                    {...register("adminPhone")}
                                />
                                {errors.adminPhone ? <ErrorMessage>{errors.adminPhone.message}</ErrorMessage> : null}
                            </Field>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default WaitlistForm