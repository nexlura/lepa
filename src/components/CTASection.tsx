'use client'

import Link from 'next/link'
import { useState } from 'react'

import WaitlistModal from './WaitlistModal'
import { Button } from '@headlessui/react'
// import { Button } from './UIKit/Button'

const CTASection = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <section id="demo" className="py-20 bg-primary-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Admissions Process?
                    </h2>
                    <p className="text-xl text-primary-100 mb-8 font-serif">
                        &ldquo;
                        Join the waitlist and be among the first to streamline your admissions with Lepa.&rdquo;
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={() => setOpen(true)}
                            className="bg-white text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
                        >
                            Join waitlist
                        </Button>
                        <Link
                            href="#contact"
                            className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
            <WaitlistModal isOpen={open} setIsOpen={setOpen} />
        </>
    )
}

export default CTASection