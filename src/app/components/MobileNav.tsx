'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <div className="md:hidden">
            {/* Mobile menu button */}
            <button
                type="button"
                className="text-foreground hover:text-primary-600 transition-colors"
                onClick={toggleMenu}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white border-b border-primary-100 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            href="#features"
                            className="block px-3 py-2 text-foreground hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            Features
                        </Link>
                        <Link
                            href="#contact"
                            className="block px-3 py-2 text-foreground hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                            onClick={closeMenu}
                        >
                            Contact
                        </Link>
                        <Link
                            href="#demo"
                            className="block px-3 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors"
                            onClick={closeMenu}
                        >
                            Join Wait List
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
} 