import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedTherapies } from './components/FeaturedTherapies';
import { TherapiesCatalog } from './components/TherapiesCatalog';
import { AboutSection } from './components/AboutSection';
import { PractitionerSection } from './components/PractitionerSection';
import { WhyAyushKaya } from './components/WhyAyushKaya';
import { ClientExperiences } from './components/ClientExperiences';
import { HowBookingWorks } from './components/HowBookingWorks';
import { BookingSection } from './components/BookingSection';
import { LocationSection } from './components/LocationSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { WhatsAppAIAssistant } from './components/WhatsAppAIAssistant';
import { TherapyDetailModal } from './components/TherapyDetailModal';
import { BookingModal } from './components/BookingModal';
import { Therapy } from './data/ayushkayaData';

export default function App() {
  const [selectedTherapyForDetail, setSelectedTherapyForDetail] = useState<Therapy | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedTherapy, setPreselectedTherapy] = useState<string>('Kati Basti');

  const handleOpenBooking = (therapyName?: string) => {
    if (therapyName) {
      setPreselectedTherapy(therapyName);
    }
    setIsBookingModalOpen(true);
  };

  const handleOpenChatFromPractitioner = () => {
    // Scrolls to booking or triggers the assistant
    const el = document.getElementById('booking');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1E2922] flex flex-col font-sans relative selection:bg-[#059669]/20 selection:text-[#0E2A21]">
      
      {/* 1. Sticky Header */}
      <Header onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* 2. Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Trust / Quick Information Strip */}
        <TrustStrip />

        {/* 5. Featured Therapies */}
        <FeaturedTherapies
          onSelectTherapy={(therapy) => setSelectedTherapyForDetail(therapy)}
          onBookTherapy={(name) => handleOpenBooking(name)}
        />

        {/* 4. Complete Therapies Section (All 24 modalities categorized) */}
        <TherapiesCatalog
          onSelectTherapy={(therapy) => setSelectedTherapyForDetail(therapy)}
          onBookTherapy={(name) => handleOpenBooking(name)}
        />

        {/* 6. About AyushKaya */}
        <AboutSection />

        {/* 7. Practitioner Section */}
        <PractitionerSection
          onOpenBooking={() => handleOpenBooking()}
          onOpenChat={handleOpenChatFromPractitioner}
        />

        {/* 8. Why AyushKaya */}
        <WhyAyushKaya />

        {/* Client Experiences - Social proof & authentic patient feedback */}
        <ClientExperiences />

        {/* 9. How Booking Works */}
        <HowBookingWorks onOpenBooking={() => handleOpenBooking()} />

        {/* 11. Prominent Booking Form Section */}
        <BookingSection initialTherapyName={preselectedTherapy} />

        {/* 12. Location Section */}
        <LocationSection />

        {/* 13. FAQ Section */}
        <FAQSection />

        {/* 14. Final High-Contrast CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />

      </main>

      {/* 15. Footer */}
      <Footer />

      {/* 10. WhatsApp AI Assistant (Floating widget with quick replies) */}
      <WhatsAppAIAssistant onOpenBooking={handleOpenBooking} />

      {/* Interactive Detail Modal for Therapy cards */}
      <TherapyDetailModal
        therapy={selectedTherapyForDetail}
        onClose={() => setSelectedTherapyForDetail(null)}
        onBook={(name) => handleOpenBooking(name)}
      />

      {/* Quick Booking Modal dialog */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedTherapyName={preselectedTherapy}
      />

    </div>
  );
}
