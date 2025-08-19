'use client';

import {
    BellIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
    onSidebarToggle: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {

    return (
        <header className="bg-white sm:py-3">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                {/* Left side - Mobile menu button */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={onSidebarToggle}
                        className="px-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>

                {/* Center - Search bar */}
                <div className="flex-1 max-w-lg mx-4 lg:mx-8">

                </div>

                {/* Right side - User menu and notifications */}
                <div className="flex items-center space-x-4">
                    {/* Notifications */}
                    <button className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 relative">
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-400"></span>
                    </button>

                    {/* User avatar and menu */}
                    <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-end">
                            <span className="text-sm font-medium text-gray-900">Admin User</span>
                            <span className="text-xs text-gray-500">admin@lepa.com</span>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">A</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
} 