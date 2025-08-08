'use client'

import { useState } from 'react'

import WaitlistModal from './WaitlistModal'
import { Button } from './UIKit/Button'


const HeroSection = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-20 lg:py-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                            Streamline Student
                            <span className="text-primary-600 block">Admissions</span>
                        </h1>
                        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8 font-serif">
                            The modern solution for schools to manage admissions,
                            track applications, and welcome new students with ease.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                onClick={() => setOpen(true)}
                                className=" rounded-lg md:w-sm md:py-2 md:text-lg"
                                color='primary'

                            >
                                Join waitlist
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            <WaitlistModal isOpen={open} setIsOpen={setOpen} />
        </>
    )
}

export default HeroSection