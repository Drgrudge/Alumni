// src/components/common/Navbar/Navbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        {/* Logo and Brand Name */}
                        <div>
                            <a href="#" className="flex items-center py-4 px-2">
                                <img src="https://www.tezu.ernet.in/images/tulogo.png" alt="Logo" className="h-8 w-8 mr-2"/>
                                <span className="font-semibold text-gray-500 text-lg">Alumni Information Sytem</span>
                            </a>
                        </div>
                        {/* Primary Navbar Items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold">Home</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Services</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
                        </div>
                    </div>
                    {/* Secondary Navbar Items */}
                    <div className="hidden md:flex items-center space-x-3">
                        <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                        <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                <ul className="">
                    <li><a href="#" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300">Home</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300">Services</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300">About</a></li>
                    <li><a href="#" className="block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
