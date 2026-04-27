import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600 tracking-tight">
        Gas<span className="text-gray-800">Go</span>
      </div>
      
      <div className="hidden md:flex space-x-8 font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-600 font-medium hover:text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;