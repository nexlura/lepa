

const FeaturesSection = () => {
    return (
        <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">
                        Everything You Need
                    </h2>
                    <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                        Comprehensive tools designed specifically for educational institutions
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Application Management</h3>
                        <p className="text-foreground/70">
                            Streamlined application forms, document uploads, and progress tracking for every student.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Analytics Dashboard</h3>
                        <p className="text-foreground/70">
                            Real-time insights into application trends, enrollment rates, and school performance metrics.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-accent-50 to-accent-100 p-8 rounded-xl">
                        <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center mb-4">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">Parent Communication</h3>
                        <p className="text-foreground/70">
                            Automated notifications, status updates, and direct messaging with parents and guardians.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection