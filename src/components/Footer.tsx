
const Footer = () => {
    return (
        <footer id="contact" className="bg-foreground text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-2xl font-bold text-primary-400 mb-4">Lepa</h3>
                        <p className="text-white/70 mb-4 max-w-md">
                            The modern solution for primary and secondary schools to manage student admissions efficiently and effectively.
                        </p>
                    </div>

                    {/* <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Demo</a></li>
              </ul>
            </div> */}

                    {/* <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy</a></li>
              </ul>
            </div> */}
                </div>

                <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/70">
                    <p>&copy; 2024 Lepa. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer