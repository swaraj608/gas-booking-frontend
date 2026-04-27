import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Navigation Bar */}
      <Navbar />

      {/* 2. Hero Section (Introduction) */}
      <Hero />

      {/* 3. Features Section (Services) */}
      <Features />

      {/* 4. Call to Action (CTA) Section */}
      <section className="py-20 px-8">
        <div className="max-w-5xl mx-auto bg-blue-600 rounded-[2.5rem] p-12 text-center text-white shadow-2xl relative overflow-hidden">
          {/* Decorative background circle */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full opacity-50 shadow-inner"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-extrabold mb-6">
              Ready to book your next refill?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Join over 10,000 households who trust GasGo for their daily energy needs. 
              Sign up today and get your first delivery within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all active:scale-95">
                Register Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all">
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-blue-600 mb-4">
              Gas<span className="text-gray-800">Go</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Leading the digital revolution in gas distribution across the nation since 2026.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-gray-900">Company</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Safety Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900">Support</h4>
            <ul className="text-gray-500 space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Leakage Emergency</a></li>
              <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-gray-900">Contact</h4>
            <p className="text-gray-500 text-sm mb-2">Email: support@gasgo.com</p>
            <p className="text-gray-500 text-sm">Phone: 1800-GAS-SAFE</p>
          </div>
        </div>
        
        <div className="text-center mt-16 text-gray-400 text-xs">
          © 2026 GasGo Systems Private Limited. Built with ❤️ in Bihar.
        </div>
      </footer>
    </main>
  );
}