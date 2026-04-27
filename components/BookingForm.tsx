"use client"; // Important for Next.js interactive components
import React, { useState } from 'react';
import { BookingData } from '@/types/booking';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    consumerId: '',
    cylinderType: '14.2kg',
    deliveryAddress: '',
    contactNumber: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking Submitted:", formData);
    alert("Booking initiated! (We will link this to the backend later)");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Refill Request</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Consumer ID */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Consumer ID</label>
          <input 
            type="text" 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="e.g. 75000000123"
            value={formData.consumerId}
            onChange={(e) => setFormData({...formData, consumerId: e.target.value})}
          />
        </div>

        {/* Cylinder Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Cylinder Size</label>
          <select 
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={formData.cylinderType}
            onChange={(e) => setFormData({...formData, cylinderType: e.target.value as any})}
          >
            <option value="5kg">5kg (Small)</option>
            <option value="14.2kg">14.2kg (Domestic)</option>
            <option value="19kg">19kg (Commercial)</option>
          </select>
        </div>

        {/* Delivery Address */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Delivery Address</label>
          <textarea 
            required
            rows={3}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Your full address..."
            value={formData.deliveryAddress}
            onChange={(e) => setFormData({...formData, deliveryAddress: e.target.value})}
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
          <input 
            type="tel" 
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="+91 XXXXX XXXXX"
            value={formData.contactNumber}
            onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
          />
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition shadow-lg active:scale-95"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookingForm;