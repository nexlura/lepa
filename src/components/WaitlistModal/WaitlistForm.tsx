'use client'

import { Combobox, ComboboxLabel, ComboboxOption } from "../UIKit/ComboBox"
import { Field, Label } from "../UIKit/Fieldset"
import { Input } from "../UIKit/Input"
import { useState } from "react"

const levels = [
    { id: 1, name: 'Pre-Primary' },
    { id: 2, name: 'Primary' },
    { id: 3, name: 'Secondary' },
    { id: 4, name: 'All Levels' }
]

const WaitlistForm = () => {
    const [selectedLevel, setSelectedLevel] = useState(levels[0])

    const handleLevelChange = (level: typeof levels[0] | null) => {
        if (level) {
            setSelectedLevel(level)
        }
    }

    return (
        <form>
            <div className="space-y-1 mt-10">
                <div className="border-gray-900/10 pb-8">
                    <h2 className="text-base/7 font-semibold text-gray-900">School Information</h2>
                    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                        <Field className="w-full">
                            <Label className="text-sm/6 text-gray-900 font-medium">School Name</Label>
                            <Input name="school-name" placeholder="School Name" />
                        </Field>
                        <Field>
                            <Label className="text-sm/6 text-gray-900 font-medium">School Level</Label>
                            <Combobox
                                name="school-level"
                                options={levels}
                                displayValue={(level) => level?.name}
                                defaultValue={selectedLevel}
                                onChange={handleLevelChange}
                            >
                                {(level) => (
                                    <ComboboxOption value={level}>
                                        <ComboboxLabel>{level.name}</ComboboxLabel>
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
                            <Input name="full-name" placeholder="Full Name" />
                        </Field>
                        <Field>
                            <Label className="text-sm/6 text-gray-900 font-medium">Phone Number</Label>
                            <Input name="phone-number" placeholder="Phone Number" />
                        </Field>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default WaitlistForm