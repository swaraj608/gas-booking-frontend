import React from 'react';

interface Service {
  title: string;
  desc: string;
  icon: string;
}

const services: Service[] = [
  { 
    title: "Instant Refill", 
    desc: "Refill your existing cylinder with a single tap on your mobile.", 
    icon: "🔥" 
  },
  { 
    title: "Track Order", 
    desc: "Watch your delivery in real-time from the warehouse to your door.", 
    icon: "📍" 
  },
  { 
    title: "Digital Wallet", 
    desc: "Integrated payments and subsidy tracking for transparency.", 
    icon: "💳" 
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why choose GasGo?</h2>
          <p className="text-gray-500 mt-4">We've redesigned the gas distribution experience to be faster and more reliable.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((item, index) => (
            <div key={index} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center text-3xl mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;