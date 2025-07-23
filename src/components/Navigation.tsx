'use client'

import Link from 'next/link'
import { useState } from 'react'

import WaitListModal from './WaitlistModal'
import { Button } from './UIKit/Button'


const Navigation = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="border-b border-primary-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <h1 className="text-2xl font-bold text-primary-600">Lepa</h1>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#features" className="text-foreground hover:text-primary-600 transition-colors">
                                Features
                            </Link>
                            {/* <Link href="#pricing" className="text-foreground hover:text-primary-600 transition-colors">
                                Pricing
                            </Link> */}
                            <Link href="#contact" className="text-foreground hover:text-primary-600 transition-colors">
                                Contact
                            </Link>
                            <button
                                onClick={() => setOpen(true)}
                                type='button'
                                className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                            >
                                Join Waitlist
                            </button>
                        </div>

                        {/* Mobile Join Wait List Button */}
                        <Button
                            onClick={() => setOpen(true)}
                            className="md:hidden rounded-lg"
                            color='primary'
                        >
                            Join waitlist
                        </Button>
                    </div>
                </div>
            </nav>
            <WaitListModal isOpen={open} setIsOpen={setOpen} />
        </>

    )
}

export default Navigation