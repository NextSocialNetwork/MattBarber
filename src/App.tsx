import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Heritage } from './components/Heritage';
import { HouseCallInfo } from './components/HouseCallInfo';
import { ChicagoMap } from './components/ChicagoMap';
import { Gallery } from './components/Gallery';
import { ChicagoAreas } from './components/ChicagoAreas';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingForm } from './components/BookingForm';
import { MyBookingsModal } from './components/MyBookingsModal';
import { PrivacyModal } from './components/PrivacyModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { AiChat } from './components/AiChat';
import { Appointment, LocationType } from './types';
import { Language } from './i18n/translations';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingServiceId, setBookingServiceId] = useState<string>('haircut');
  const [bookingLocationType, setBookingLocationType] = useState<LocationType>('in_studio');
  const [isMyBookingsOpen, setIsMyBookingsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [bookings, setBookings] = useState<Appointment[]>([]);

  // Load language preference and bookings from localStorage
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('matt_cuts_chicago_lang') as Language;
      if (savedLang && ['en', 'lt', 'pl', 'ru', 'es'].includes(savedLang)) {
        setCurrentLang(savedLang);
      }

      const stored = localStorage.getItem('matt_cuts_chicago_bookings');
      if (stored) {
        setBookings(JSON.parse(stored));
      }
    } catch (err) {
      console.error('Failed to load initial storage state', err);
    }
  }, []);

  const handleSelectLang = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem('matt_cuts_chicago_lang', lang);
    } catch (e) {
      console.error('Failed to save language preference', e);
    }
  };

  const handleOpenBooking = (
    serviceId: string = 'haircut',
    locationType: LocationType = 'in_studio'
  ) => {
    setBookingServiceId(serviceId);
    setBookingLocationType(locationType);
    setIsBookingOpen(true);
  };

  const handleSelectService = (serviceId: string) => {
    handleOpenBooking(serviceId, 'in_studio');
  };

  const handleOpenHouseCall = () => {
    handleOpenBooking('haircut', 'house_call');
  };

  const handleBookingSuccess = (newAppointment: Appointment) => {
    setBookings((prev) => [newAppointment, ...prev]);
  };

  const handleCancelBooking = (id: string) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    try {
      localStorage.setItem('matt_cuts_chicago_bookings', JSON.stringify(updated));
    } catch (e) {
      console.error('Storage update error', e);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col antialiased selection:bg-amber-400 selection:text-neutral-950 pb-16 lg:pb-0">
      {/* Top Bar with Language Selector */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
        onOpenMyBookings={() => setIsMyBookingsOpen(true)}
        bookingCount={bookings.length}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
          onSelectService={handleSelectService}
        />

        <Services
          currentLang={currentLang}
          onSelectService={handleSelectService}
        />

        <Heritage
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
        />

        <HouseCallInfo
          currentLang={currentLang}
          onOpenBookingWithHouseCall={handleOpenHouseCall}
        />

        {/* Chicago Interactive Map & Neighborhood Zone Explorer */}
        <ChicagoMap
          currentLang={currentLang}
          onOpenBookingWithHouseCall={handleOpenHouseCall}
        />

        <Gallery
          currentLang={currentLang}
          onSelectService={handleSelectService}
        />

        <ChicagoAreas onOpenBookingWithHouseCall={handleOpenHouseCall} />

        <Reviews currentLang={currentLang} />

        <FAQ currentLang={currentLang} />
      </main>

      {/* Footer with links, privacy, and languages */}
      <Footer
        currentLang={currentLang}
        onSelectLang={handleSelectLang}
        onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
      />

      {/* Interactive Online Booking Flow Modal */}
      <BookingForm
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentLang={currentLang}
        initialServiceId={bookingServiceId}
        initialLocationType={bookingLocationType}
        onBookingSuccess={handleBookingSuccess}
      />

      {/* My Bookings History & Cancellation Modal */}
      <MyBookingsModal
        isOpen={isMyBookingsOpen}
        onClose={() => setIsMyBookingsOpen(false)}
        bookings={bookings}
        onCancelBooking={handleCancelBooking}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        currentLang={currentLang}
      />

      {/* AI Barber Chat Assistant */}
      <AiChat
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking('haircut', 'in_studio')}
      />
    </div>
  );
}
