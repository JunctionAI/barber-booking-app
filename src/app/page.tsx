'use client';

import { useState } from 'react';
import { Calendar, Clock, Scissors, User, Phone, MapPin } from 'lucide-react';

const services = [
  { id: 1, name: 'Classic Haircut', price: 25, duration: '30 min' },
  { id: 2, name: 'Beard Trim', price: 15, duration: '15 min' },
  { id: 3, name: 'Full Service', price: 35, duration: '45 min' },
  { id: 4, name: 'Hot Towel Shave', price: 20, duration: '25 min' }
];

const barbers = [
  { id: 1, name: 'Mike Johnson', specialty: 'Classic Cuts' },
  { id: 2, name: 'Alex Rodriguez', specialty: 'Modern Styles' },
  { id: 3, name: 'Sam Wilson', specialty: 'Beard Expert' }
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [isBooked, setIsBooked] = useState(false);

  const handleBooking = () => {
    if (selectedService && selectedBarber && selectedDate && selectedTime && customerName && customerPhone) {
      setIsBooked(true);
    }
  };

  const resetBooking = () => {
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate('');
    setSelectedTime('');
    setCustomerName('');
    setCustomerPhone('');
    setIsBooked(false);
  };

  if (isBooked) {
    const service = services.find(s => s.id === selectedService);
    const barber = barbers.find(b => b.id === selectedBarber);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 mt-8">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">Your appointment has been scheduled</p>
          </div>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Scissors className="w-5 h-5 text-amber-600" />
              <span>{service?.name} - ${service?.price}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-amber-600" />
              <span>{barber?.name}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-amber-600" />
              <span>{selectedDate}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-amber-600" />
              <span>{selectedTime}</span>
            </div>
          </div>
          
          <button
            onClick={resetBooking}
            className="w-full bg-amber-600 text-white py-3 rounded-xl font-semibold hover:bg-amber-700 transition-colors"
          >
            Book Another Appointment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-amber-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 p-6 text-white text-center">
          <Scissors className="w-12 h-12 mx-auto mb-3" />
          <h1 className="text-2xl font-bold">Premium Barber Shop</h1>
          <p className="text-amber-100 mt-1">Book your perfect cut</p>
        </div>

        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(555) 123-4567</span>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">123 Main St, Downtown</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Scissors className="w-5 h-5 text-amber-600" />
              Select Service
            </h3>
            <div className="grid gap-2">
              {services.map(service => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    selectedService === service.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-gray-800">{service.name}</div>
                      <div className="text-sm text-gray-500">{service.duration}</div>
                    </div>
                    <div className="text-lg font-bold text-amber-600">${service.price}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Barber Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <User className="w-5 h-5 text-amber-600" />
              Choose Barber
            </h3>
            <div className="grid gap-2">
              {barbers.map(barber => (
                <button
                  key={barber.id}
                  onClick={() => setSelectedBarber(barber.id)}
                  className={`p-3 rounded-xl border-2 text-left transition-all ${
                    selectedBarber === barber.id
                      ? 'border-amber-500 bg-amber-50'
                      : 'border-gray-200 hover:border-amber-300'
                  }`}
                >
                  <div className="font-medium text-gray-800">{barber.name}</div>
                  <div className="text-sm text-gray-500">{barber.specialty}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Date Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-amber-600" />
              Select Date
            </h3>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Time Selection */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-600" />
              Available Times
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map(time => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 rounded-lg border-2 text-sm font-medium transition-all ${
                    selectedTime === time
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-gray-200 hover:border-amber-300 text-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>

          {/* Customer Info */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Your Information</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none"
            />
          </div>

          {/* Book Button */}
          <button
            onClick={handleBooking}
            disabled={!selectedService || !selectedBarber || !selectedDate || !selectedTime || !customerName || !customerPhone}
            className="w-full bg-amber-600 text-white py-4 rounded-xl font-bold text-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-amber-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
}