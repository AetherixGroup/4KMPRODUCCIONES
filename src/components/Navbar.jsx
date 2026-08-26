import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Calendar, Gamepad2, Menu, X, Calculator, Award, ChevronDown, RotateCcw } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio',     action: () => { window.location.href = './'; } },
  { label: 'Paquetes',   id: 'paquetes' },
  { label: 'Servicios',  id: 'servicios' },
  { label: 'Portafolio', id: 'portafolio' },
];

const PORTFOLIO_PAGES = [
  ['Bodas', 'bodas'], ['Corporativos', 'corporativos'], ['Drone 4K', 'drone'],
  ['15 Años', 'quinceanos'], ['Reels y TikTok', 'reels'], ['Institucionales', 'institucionales'],
];

export const Navbar = () => {
  const { cart, setCartOpen, setBookingOpen, setQuoteOpen, setGameOpen, rewardsPoints } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    // If on category page, redirect home to that anchor
    if (new URLSearchParams(window.location.search).get('portafolio')) {
      window.location.href = `./#${id}`;
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleResetHome = () => {
    // Reset/reload app to home
    window.location.href = './';
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.96)'
            : 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(24px) saturate(120%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(200,164,77,0.2)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.8)' : 'none',
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-20">

            {/* ── Prominent Logo & 4KM Name (Clicking resets to Home) ── */}
            <button
              onClick={handleResetHome}
              className="flex items-center gap-3 group text-left cursor-pointer"
              aria-label="Reiniciar / Inicio 4KM Producciones"
              title="Haz clic para reiniciar e ir al inicio"
            >
              <div
                className="relative w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 rounded-xl overflow-hidden border border-[rgba(200,164,77,0.4)] p-1 bg-[#141418]"
              >
                <img src="./img/logo.jpg" alt="4KM Producciones" className="w-full h-full object-contain block bg-[#0A0A0A] rounded-lg" />
              </div>
              
              <div>
                <div
                  className="font-cinzel font-black tracking-[0.15em] text-2xl sm:text-3xl text-gold-gradient transition-all duration-200 group-hover:scale-105"
                >
                  4KM
                </div>
                <div className="type-label text-[#C8A44D] tracking-[0.25em] text-[0.55rem] font-bold">
                  PRODUCCIONES
                </div>
              </div>
            </button>

            {/* ── Desktop Nav Links ── */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.label}
                  onClick={link.action ?? (() => scrollTo(link.id))}
                  className="relative px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 text-[#A0A0A8] hover:text-white"
                >
                  {link.label}
                </button>
              ))}
              <div className="relative">
                <button
                  onClick={() => setCollectionsOpen((open) => !open)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 text-[#A0A0A8] hover:text-white"
                  aria-expanded={collectionsOpen}
                >
                  <span>Categorías</span> <ChevronDown className="w-3.5 h-3.5 text-[#C8A44D]" />
                </button>
                {collectionsOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 p-2 z-50 bg-[#141418] border border-[rgba(200,164,77,0.3)] rounded-2xl shadow-2xl space-y-1">
                    {PORTFOLIO_PAGES.map(([label, id]) => (
                      <a
                        key={id}
                        href={`?portafolio=${id}`}
                        onClick={() => setCollectionsOpen(false)}
                        className="block px-3.5 py-2.5 rounded-xl text-xs font-semibold text-white hover:bg-white/10 hover:text-[#C8A44D] transition-colors"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-200 text-[#A0A0A8] hover:text-white"
              >
                <Calculator className="w-3.5 h-3.5 text-[#C8A44D]" />
                <span>Cotizar</span>
              </button>
            </div>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-3">

              {/* Reset Quick Action */}
              <button
                onClick={handleResetHome}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[0.7rem] font-bold text-[#A0A0A8] hover:text-[#C8A44D] bg-white/5 border border-white/10 transition-colors"
                title="Reiniciar aplicación al inicio"
              >
                <RotateCcw className="w-3 h-3 text-[#C8A44D]" />
                <span>Reiniciar</span>
              </button>

              {/* Rewards Pill */}
              <button
                onClick={() => setGameOpen(true)}
                className="hidden xl:flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-[rgba(200,164,77,0.1)] border border-[rgba(200,164,77,0.25)] hover:border-[rgba(200,164,77,0.5)] transition-all cursor-pointer"
                title="4KM Rewards — Canjea puntos"
              >
                <Award className="w-3.5 h-3.5 text-[#C8A44D]" />
                <span className="text-[0.7rem] font-bold text-[#C8A44D]">{rewardsPoints} pts</span>
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[rgba(200,164,77,0.4)] transition-all cursor-pointer"
                aria-label="Carrito de compras"
              >
                <ShoppingBag className="w-4 h-4 text-[#A0A0A8]" />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-black font-bold text-[10px] bg-[#C8A44D]"
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* CTA — RESERVAR */}
              <button
                onClick={() => setBookingOpen(true)}
                className="btn-gold hidden sm:inline-flex text-[0.6875rem] py-2.5 px-5"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>RESERVAR</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-[#A0A0A8]"
                aria-label="Abrir menú"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
        }}
      >
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className="absolute top-20 left-4 right-4 rounded-2xl p-6 space-y-3 bg-[#141418] border border-[rgba(200,164,77,0.3)] shadow-2xl"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={link.action ?? (() => scrollTo(link.id))}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-bold text-[#A0A0A8] hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <div className="px-4 pt-3 text-[0.65rem] font-bold tracking-wider text-[#C8A44D]">CATEGORÍAS</div>
          <div className="grid grid-cols-2 gap-2 px-4">
            {PORTFOLIO_PAGES.map(([label, id]) => (
              <a
                key={id}
                href={`?portafolio=${id}`}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2 text-xs font-semibold bg-[#0A0A0A] border border-white/10 rounded-lg text-white"
              >
                {label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 space-y-2">
            <button
              onClick={handleResetHome}
              className="btn-outline-gold w-full py-3 text-xs"
            >
              <RotateCcw className="w-4 h-4" /> REINICIAR AL INICIO
            </button>

            <button
              onClick={() => { setMobileOpen(false); setBookingOpen(true); }}
              className="btn-gold w-full py-3 text-xs"
            >
              <Calendar className="w-4 h-4" /> RESERVAR AHORA
            </button>
          </div>
        </div>
      </div>

      <div className="h-20" />
    </>
  );
};
