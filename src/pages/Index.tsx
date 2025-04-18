
import { useState } from 'react';
import ScarcityTimer from '@/components/ScarcityTimer';
import VideoSection from '@/components/VideoSection';
import PricingCards from '@/components/PricingCards';
import GuaranteeSection from '@/components/GuaranteeSection';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  const [showOffer, setShowOffer] = useState(false);

  const handleVideoProgress = (seconds: number) => {
    if (seconds >= 10) {
      setShowOffer(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScarcityTimer />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 space-y-16">
        {/* Video Section */}
        <section className="mb-12">
          <VideoSection onVideoProgress={handleVideoProgress} />
        </section>

        {/* Offer Section - Hidden by default */}
        <section className={`transition-all duration-500 ${showOffer ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
          <div className="text-center mb-12">
            <span className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-bold mb-4">
              Oferta Especial por Tempo Limitado
            </span>
            <h2 className="text-3xl font-bold mb-8">Escolha Seu Plano Perfeito</h2>
            <PricingCards />
          </div>

          <div className="space-y-16 mt-16">
            <GuaranteeSection />
            <FaqSection />
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 mt-16 border-t">
          <p className="text-gray-600">© {new Date().getFullYear()} Sua Empresa. Todos os direitos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-purple-600 hover:text-purple-800">Política de Privacidade</a>
            <a href="#" className="text-purple-600 hover:text-purple-800">Termos de Serviço</a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
