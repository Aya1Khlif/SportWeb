function Footer() {
    return (
        <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1: About */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">About Us</h3>
                    <p className="text-sm leading-relaxed text-gray-400">
                        We are dedicated to promoting a healthy and active lifestyle. Our sports club provides top-notch facilities and expert guidance to help you achieve your fitness goals.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#home" className="hover:text-blue-400 transition">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="hover:text-blue-400 transition">About</a>
                        </li>
                        <li>
                            <a href="#services" className="hover:text-blue-400 transition">Services</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact Info */}
                <div className="space-y-4">
                    <h3 className="text-lg font-bold">Contact Us</h3>
                    <p className="text-sm text-gray-400">
                        Phone: <span className="text-blue-400">0988-811-122</span>
                    </p>
                    <p className="text-sm text-gray-400">
                        Email: <span className="text-blue-400">info@sportsclub.com</span>
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-blue-400 transition">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="hover:text-blue-400 transition">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Sports Club. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
