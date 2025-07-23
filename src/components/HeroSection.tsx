import Link from 'next/link'


const HeroSection = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
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
                        <Link
                            href="#demo"
                            className="bg-primary-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-600 transition-colors"
                        >
                            Join Wait List
                        </Link>
                        {/* <Link
              href="#features"
              className="border-2 border-primary-500 text-primary-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Learn More
            </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection