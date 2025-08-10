'use client'

import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/20/solid'
import { useEffect } from 'react'
import clsx from 'clsx'

interface AlertProps {
    text: string | undefined
    status: 'error' | 'success' | undefined
    autoHideDuration?: number
    className?: string
    onClose: () => void
}

const Alert = ({
    text,
    status,
    autoHideDuration,
    className,
    onClose }: AlertProps) => {

    useEffect(() => {
        setTimeout(() => {
            onClose()
        }, autoHideDuration);
    }, [autoHideDuration, onClose]);


    return (
        <div
            className={clsx("md:min-w-96 rounded-md p-4 z-50 fixed bottom-10 right-5 left-5 md:left-auto md:right-10",
                status === 'success' ? "bg-green-100" : "bg-red-100", `${className}`)
            }>
            <div className="flex">
                <div className="shrink-0">
                    {status === 'success' ? (
                        <CheckCircleIcon
                            aria-hidden="true"
                            className={"size-5 text-green-400"}
                        />
                    ) : (
                        <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
                    )}
                </div>
                <div className="ml-3">
                    {status === 'success' ? (
                        <h3 className="text-sm font-medium text-green-800">Request Completed</h3>
                    ) : (
                        <h3 className="text-sm font-medium text-red-800">Request Failed</h3>
                    )}
                    <div className={clsx("mt-2 text-sm",
                        status === 'success' ? 'text-green-800' : 'text-red-800')
                    }>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Alert