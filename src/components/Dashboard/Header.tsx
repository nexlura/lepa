'use client';

import { useState } from 'react';
import {
    MagnifyingGlassIcon,
    BellIcon,
    Bars3Icon,
} from '@heroicons/react/24/outline';

interface HeaderProps {
    onSidebarToggle: () => void;
}

export default function Header({ onSidebarToggle }: HeaderProps) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
                {/* Left side - Mobile menu button */}
                <div className="flex items-center lg:hidden">
                    <button
                        onClick={onSidebarToggle}
                        className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                    >
                        <Bars3Icon className="h-6 w-6" />
                    </button>
                </div>

                {/* Center - Search bar */}
                <div className="flex-1 max-w-lg mx-4 lg:mx-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        />
                    </div>
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