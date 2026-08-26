import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioVisualPackages } from './components/AudioVisualPackages';
import { PortfolioModule } from './components/PortfolioModule';
import { About4KM } from './components/About4KM';
import { PortfolioCategoryPage } from './components/PortfolioCategoryPage';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ServicesCatalog } from './components/ServicesCatalog';
import { DroneShowcase } from './components/DroneShowcase';
import { SmartCartDrawer } from './components/SmartCartDrawer';
import { BookingModal } from './components/BookingModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { Game4KMRewards } from './components/Game4KMRewards';
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
          <Hero />
          <AudioVisualPackages />
          <ServicesCatalog />
          <PortfolioModule />
          <About4KM />
          <DroneShowcase />
        </main>
      )}

      <Footer />

      {/* Global Modals & Drawers */}
      <ProjectDetailModal />
      <SmartCartDrawer />
      <BookingModal />
      <QuoteCalculatorModal />
      <Game4KMRewards />
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
