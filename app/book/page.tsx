import BookingForm from '@/components/BookingForm';
import Navbar from '@/components/Navbar';

export default function BookPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Book Your Cylinder</h1>
          <p className="text-gray-500 mt-2">Please verify your details before confirming.</p>
        </div>
        <BookingForm />
      </div>
    </main>
  );
}