'use client'

import { useCallback, useContext, useMemo, useState } from "react"
import { z } from "zod"
import { XCircleIcon, XMarkIcon } from "@heroicons/react/20/solid"

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
    schoolLevel: z.string().min(1, 'School level is required'),
    adminFullName: z.string().min(2, 'Full name is required'),
    adminPhone: z
        .string()
        .min(7, 'Phone number is required')
        .regex(/^[+()\-\s0-9]{7,}$/i, 'Enter a valid phone number'),
})

type WaitlistFormErrors = Partial<Record<keyof z.infer<typeof WaitlistSchema>, string>>

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
    const { setFeedback } = useContext(FeedbackContext)


    const [selectedLevel, setSelectedLevel] = useState(levels[0])
    const [errors, setErrors] = useState<WaitlistFormErrors>({})
    const [showAlert, setShowAlert] = useState(false)
    const [submittionRes, setSubmittionRes] = useState<string>('')

    const handleLevelChange = (level: typeof levels[0] | null) => {
        if (level) {
            setSelectedLevel(level)
        }
    }

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setSubmittionRes('')

        const form = event.currentTarget
        const formData = new FormData(form)

        const payload = {
            schoolName: String(formData.get('school-name') || '').trim(),
            schoolLevel: selectedLevel?.name ?? '',
            adminFullName: String(formData.get('full-name') || '').trim(),
            adminPhone: String(formData.get('phone-number') || '').trim(),
        }

        const parsed = WaitlistSchema.safeParse(payload)
        if (!parsed.success) {
            const fieldErrors: WaitlistFormErrors = {}
            const flat = parsed.error.flatten().fieldErrors
            if (flat.schoolName?.[0]) fieldErrors.schoolName = flat.schoolName[0]
            if (flat.schoolLevel?.[0]) fieldErrors.schoolLevel = flat.schoolLevel[0]
            if (flat.adminFullName?.[0]) fieldErrors.adminFullName = flat.adminFullName[0]
            if (flat.adminPhone?.[0]) fieldErrors.adminPhone = flat.adminPhone[0]
            setErrors(fieldErrors)
            return
        }

        setErrors({})
        onSubmittingChange?.(true)
        try {
            const res = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(parsed.data),
            })

            if (!res.ok) {
                const body = await res.json().catch(() => ({}))
                const message = body?.error || 'Failed to submit. Please try again.'
                setSubmittionRes(message)
                return
            } else {
                setIsOpen(false)
                setFeedback({ status: 'success', text: 'Thanks for joining!  We’ll notify you when your spot is available' })
            }

            onSuccess?.()
            form.reset()
        } finally {
            onSubmittingChange?.(false)
        }
    }, [onSubmittingChange, onSuccess, selectedLevel, setFeedback, setIsOpen])

    useMemo(() => submittionRes ? setShowAlert(true) : setShowAlert(false), [submittionRes])

    return (
        <>
            {showAlert && (<Alert message={submittionRes} setShowAlert={setShowAlert} />)}
            <form id="waitlist-form" onSubmit={handleSubmit}>
                <div className="space-y-1 mt-10">
                    <div className="border-gray-900/10 pb-8">
                        <h2 className="text-base/7 font-semibold text-gray-900">School Information</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            <Field className="w-full">
                                <Label className="text-sm/6 text-gray-900 font-medium">School Name</Label>
                                <Input name="school-name" placeholder="School Name" required data-invalid={Boolean(errors.schoolName)} aria-invalid={Boolean(errors.schoolName)} />
                                {errors.schoolName ? <ErrorMessage>{errors.schoolName}</ErrorMessage> : null}
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
                                {errors.schoolLevel ? <ErrorMessage>{errors.schoolLevel}</ErrorMessage> : null}
                            </Field>
                        </div>
                    </div>
                    <div className=" border-gray-900/10 pb-8">
                        <h2 className="text-base/7 font-semibold text-gray-900">Admin Information</h2>
                        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                            <Field>
                                <Label className="text-sm/6 text-gray-900 font-medium">Full Name</Label>
                                <Input name="full-name" placeholder="Full Name" required data-invalid={Boolean(errors.adminFullName)} aria-invalid={Boolean(errors.adminFullName)} />
                                {errors.adminFullName ? <ErrorMessage>{errors.adminFullName}</ErrorMessage> : null}
                            </Field>
                            <Field>
                                <Label className="text-sm/6 text-gray-900 font-medium">Phone Number</Label>
                                <Input name="phone-number" type="tel" placeholder="Phone Number" required data-invalid={Boolean(errors.adminPhone)} aria-invalid={Boolean(errors.adminPhone)} />
                                {errors.adminPhone ? <ErrorMessage>{errors.adminPhone}</ErrorMessage> : null}
                            </Field>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default WaitlistForm