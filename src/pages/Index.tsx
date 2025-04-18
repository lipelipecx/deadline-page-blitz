
import { useState } from 'react';
import ScarcityTimer from '@/components/ScarcityTimer';
import VideoSection from '@/components/VideoSection';
import PricingCards from '@/components/PricingCards';
import GuaranteeSection from '@/components/GuaranteeSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  const [showOffer, setShowOffer] = useState(false); // This would be controlled by video progress

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Scarcity Banner */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-lg mb-2">This exclusive offer expires in:</p>
          <ScarcityTimer />
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Video Section */}
        <section className="mb-12">
          <VideoSection />
        </section>

        {/* Offer Section - Hidden by default */}
        <section className={`transition-all duration-500 ${showOffer ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-bold mb-4">
              Special Limited Time Offer
            </span>
            <h2 className="text-3xl font-bold mb-8">Choose Your Perfect Plan</h2>
            <PricingCards />
          </div>

          <div className="space-y-16 mt-16">
            <GuaranteeSection />
            <FaqSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 mt-16 border-t">
          <p className="text-gray-600">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">Privacy Policy</a>
            <a href="#" className="text-purple-600 hover:text-purple-800">Terms of Service</a>
          </div>
        </footer>
      </div>

      {/* Debug Controls - Remove in production */}
      <button
        className="fixed bottom-4 right-4 bg-black text-white p-2 rounded"
        onClick={() => setShowOffer(!showOffer)}
      >
        Toggle Offer
      </button>
    </div>
  );
};

export default Index;
