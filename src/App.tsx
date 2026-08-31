import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroCarousel } from './components/HeroCarousel';
import { CampaignCarousel } from './components/CampaignCarousel';
import { About4KM } from './components/About4KM';
import { ReelSection } from './components/ReelSection';
import { ServicesCatalog } from './components/ServicesCatalog';
import { CategoryShowcase } from './components/CategoryShowcase';
import { PortfolioModule } from './components/PortfolioModule';
import { ServicesPortfolio } from './components/ServicesPortfolio';
import { MarketingAgencySection } from './components/MarketingAgencySection';
import { DroneShowcase } from './components/DroneShowcase';
import { AudioVisualPackages } from './components/AudioVisualPackages';
import { ProductSection } from './components/ProductSection';
import { PortfolioCategoryPage } from './components/PortfolioCategoryPage';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { SmartCartDrawer } from './components/SmartCartDrawer';
import { BookingModal } from './components/BookingModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { LegalModal } from './components/LegalModal';
import { Footer } from './components/Footer';

function AppContent() {
  const [showSplash, setShowSplash] = useState(true);
  const portfolioCategory = new URLSearchParams(window.location.search).get('portafolio');

  return (
    <div className="min-h-screen relative bg-[#0A0A0A] text-[#F7F7F7]">
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}

      <Navbar />

      {portfolioCategory ? (
        <PortfolioCategoryPage categoryId={portfolioCategory} />
      ) : (
        <main>
          {/* 1. Hero Carousel - Imagenes y videos de public/img, auto 3s */}
          <HeroCarousel />

          {/* 2. Campana Fin de Ano */}
          <CampaignCarousel />

          {/* 3. Sobre 4KM Producciones */}
          <About4KM />

          {/* 4. Reel Profesional 4KM */}
          <ReelSection />

          {/* 5. Muestra de Trabajos - Videos reales */}
          <ServicesCatalog />

          {/* 6. Explora por Categoria */}
          <CategoryShowcase />

          {/* 7. Portafolio Cinematografico Premiere */}
          <PortfolioModule />

          {/* 8. Portafolio de Servicios Paquetes Premiere */}
          <ServicesPortfolio />

          {/* 9. Agencia de Marketing & Automatizaciones */}
          <MarketingAgencySection />

          {/* 10. Tecnologia Aerea Drone 4K Cinema */}
          <DroneShowcase />

          {/* 11. Opciones & Tarifas - Paquetes Audiovisuales */}
          <AudioVisualPackages />

          {/* 12. Productos Relacionados */}
          <ProductSection />
        </main>
      )}

      <Footer />

      {/* Global Modals & Drawers */}
      <ProjectDetailModal />
      <SmartCartDrawer />
      <BookingModal />
      <QuoteCalculatorModal />
      <LegalModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
