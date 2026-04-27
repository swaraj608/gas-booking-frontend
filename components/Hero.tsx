import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32">
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-[1.1]">
            Cooking Gas <br />
            <span className="text-blue-600">Simplified.</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-lg leading-relaxed">
            The modern way to manage your energy needs. Instant booking, real-time tracking, 
            and digital receipts all in one place.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
              Book a Refill
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 transition-all">
              New Connection
            </button>
          </div>
        </div>

        <div className="md:w-1/2 mt-16 md:mt-0 relative flex justify-center">
          {/* Abstract Shape Background */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-70"></div>
          <div className="w-full max-w-md h-[400px] bg-gradient-to-br from-blue-600 to-blue-400 rounded-[2rem] transform rotate-3 shadow-2xl flex items-center justify-center">
             <span className="text-white font-medium opacity-80">gonna add some illustration later</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;