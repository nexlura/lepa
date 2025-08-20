'use client'

import { useMemo, useState } from 'react'
import {
    BookOpenIcon,
    PlusIcon,
    ArrowUpTrayIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/UIKit/Button'
import ImportCsvModal from '@/components/Classes/ImportModal'
import AddClassModal from '@/components/Classes/AddClassModal'


type SchoolClass = {
    id: number
    name: string
    teacher?: string
    capacity?: number
    createdAt: string
}

export default function ClassesPage() {
    const [classes, setClasses] = useState<SchoolClass[]>([
        {
            id: 1,
            name: 'Class 1',
            teacher: '',
            capacity: 0,
            createdAt: '2024-01-12',
        },
        {
            id: 2,
            name: 'Class 2',
            teacher: 'Mr. Yolo',
            capacity: 35,
            createdAt: '2024-01-12',
        },
        {
            id: 3,
            name: 'Class 3',
            teacher: 'Ms. Mensah',
            capacity: 20,
            createdAt: '2024-01-12',
        },
    ])

    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isImportOpen, setIsImportOpen] = useState(false)

    const totalCapacity = useMemo(
        () => classes.reduce((sum, c) => sum + (c.capacity || 0), 0),
        [classes]
    )

    return (
        <div className="space-y-6">
            {/* Page header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Classes</h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Manage all classes, add new ones, or import in bulk via CSV.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button color="primary" onClick={() => setIsImportOpen(true)}>
                        <ArrowUpTrayIcon data-slot="icon" />
                        Import CSV
                    </Button>
                    <Button color="primary" onClick={() => setIsAddOpen(true)}>
                        <PlusIcon data-slot="icon" />
                        Add Class
                    </Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <BookOpenIcon className="h-6 w-6 text-gray-400" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Total Classes
                                    </dt>
                                    <dd className="text-lg font-medium text-gray-900">{classes.length}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                    <div className="p-5">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <BookOpenIcon className="h-6 w-6 text-green-400" />
                            </div>
                            <div className="ml-5 w-0 flex-1">
                                <dl>
                                    <dt className="text-sm font-medium text-gray-500 truncate">
                                        Total Capacity
                                    </dt>
                                    <dd className="text-lg font-medium text-gray-900">{totalCapacity}</dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Classes table */}
            <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                        All Classes
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teacher</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capacity</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {classes.map((klass) => (
                                    <tr key={klass.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">{klass.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{klass.teacher || '-'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-900">{klass.capacity ?? '-'}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{klass.createdAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Add Class Modal */}
            <AddClassModal
                open={isAddOpen}
                onClose={setIsAddOpen}
                onSubmit={(data) => {
                    setClasses((prev) => {
                        const nextId = (prev.at(-1)?.id || 0) + 1
                        return [
                            ...prev,
                            {
                                id: nextId,
                                name: data.name.trim(),
                                grade: data.grade.trim(),
                                section: data.section?.trim() || undefined,
                                homeroomTeacher: data.homeroomTeacher?.trim() || undefined,
                                capacity: data.capacity ? Number(data.capacity) : undefined,
                                createdAt: new Date().toISOString().slice(0, 10),
                            },
                        ]
                    })
                    setIsAddOpen(false)
                }}
            />

            {/* CSV Import Modal */}
            <ImportCsvModal
                open={isImportOpen}
                onClose={setIsImportOpen}
                onImport={(rows) => {
                    setClasses((prev) => {
                        let nextId = (prev.at(-1)?.id || 0)
                        const toAdd: SchoolClass[] = rows.map((r) => ({
                            id: ++nextId,
                            name: r.name?.trim() || 'Untitled Class',
                            grade: r.grade?.trim() || '-',
                            section: r.section?.trim() || undefined,
                            homeroomTeacher: r.homeroomTeacher?.trim() || undefined,
                            capacity: r.capacity ? Number(r.capacity) : undefined,
                            createdAt: new Date().toISOString().slice(0, 10),
                        }))
                        return [...prev, ...toAdd]
                    })
                    setIsImportOpen(false)
                }}
            />
        </div>
    )
}



