import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Calendar, Gamepad2, ShieldCheck, Menu, X, Calculator, Film, Award, ChevronDown } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Inicio',     action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
  { label: 'Portafolio', id: 'portafolio' },
  { label: 'Servicios',  id: 'servicios' },
  { label: 'Drone 4K',   id: 'drone' },
];

export const Navbar = () => {
  const { cart, setCartOpen, setBookingOpen, setQuoteOpen, setGameOpen, rewardsPoints, adminOpen, setAdminOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const cartCount = cart.reduce((s, i) => s + i.quantity, 0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.95)'
            : 'linear-gradient(180deg, rgba(10,10,10,0.85) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(24px) saturate(120%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(42,42,42,0.8)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div className="container-xl">
          <div className="flex items-center justify-between h-20">

            {/* ── Logo ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
              aria-label="Inicio 4KM Producciones"
            >
              <div
                className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 transition-all duration-300 group-hover:scale-105"
                style={{
                  border: '1px solid rgba(200,164,77,0.35)',
                  boxShadow: '0 0 16px rgba(200,164,77,0.12)',
                }}
              >
                <img src="/img/logo.jpg" alt="4KM" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div
                  className="font-cinzel font-bold tracking-[0.18em] text-lg transition-colors duration-200 group-hover:text-[#D4AF37]"
                  style={{ color: '#F7F7F7' }}
                >
                  4KM
                </div>
                <div className="type-label" style={{ color: '#C8A44D', letterSpacing: '0.2em', fontSize: '0.52rem' }}>
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
                  className="relative px-4 py-2 rounded-lg text-[0.8125rem] font-semibold tracking-wide transition-all duration-200"
                  style={{ color: '#A0A0A8' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#F7F7F7'}
                  onMouseLeave={e => e.currentTarget.style.color = '#A0A0A8'}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => setQuoteOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-[0.8125rem] font-semibold tracking-wide transition-all duration-200"
                style={{ color: '#A0A0A8' }}
                onMouseEnter={e => e.currentTarget.style.color = '#F7F7F7'}
                onMouseLeave={e => e.currentTarget.style.color = '#A0A0A8'}
              >
                <Calculator className="w-3.5 h-3.5" style={{ color: '#C8A44D' }} />
                <span>Cotizar</span>
              </button>
            </div>

            {/* ── Right Actions ── */}
            <div className="flex items-center gap-3">

              {/* Rewards Pill */}
              <button
                onClick={() => setGameOpen(true)}
                className="hidden md:flex items-center gap-2 rounded-full px-3 py-1.5 transition-all duration-200"
                style={{
                  background: 'rgba(200,164,77,0.08)',
                  border: '1px solid rgba(200,164,77,0.20)',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200,164,77,0.14)'; e.currentTarget.style.borderColor = 'rgba(200,164,77,0.35)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(200,164,77,0.08)'; e.currentTarget.style.borderColor = 'rgba(200,164,77,0.20)'; }}
                title="4KM Rewards — Canjea puntos"
              >
                <Award className="w-3.5 h-3.5" style={{ color: '#C8A44D' }} />
                <span className="text-[0.7rem] font-bold" style={{ color: '#C8A44D' }}>{rewardsPoints} pts</span>
              </button>

              {/* Cart */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2.5 rounded-xl transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(42,42,42,0.8)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(200,164,77,0.35)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(42,42,42,0.8)'}
                aria-label="Carrito de compras"
              >
                <ShoppingBag className="w-[18px] h-[18px]" style={{ color: '#A0A0A8' }} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-black font-bold text-[10px]"
                    style={{ background: 'var(--gold)' }}
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

              {/* Admin toggle */}
              <button
                onClick={() => setAdminOpen(!adminOpen)}
                className="hidden md:flex p-2.5 rounded-xl transition-all duration-200 items-center gap-1.5 text-[0.65rem] font-bold tracking-wider"
                style={{
                  background: adminOpen ? 'rgba(200,164,77,0.15)' : 'rgba(255,255,255,0.04)',
                  border: adminOpen ? '1px solid rgba(200,164,77,0.4)' : '1px solid rgba(42,42,42,0.8)',
                  color: adminOpen ? '#C8A44D' : '#444444',
                }}
              >
                <ShieldCheck className="w-4 h-4" />
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg"
                style={{ color: '#A0A0A8' }}
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
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
          onClick={() => setMobileOpen(false)}
        />
        {/* Panel */}
        <div
          className="absolute top-20 left-4 right-4 rounded-2xl p-6 space-y-3"
          style={{
            background: '#141418',
            border: '1px solid rgba(42,42,42,0.9)',
            boxShadow: '0 32px 64px rgba(0,0,0,0.8)',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-8px)',
            transition: 'transform 300ms cubic-bezier(0.4,0,0.2,1)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={link.action ?? (() => scrollTo(link.id))}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200"
              style={{ color: '#A0A0A8' }}
              onMouseEnter={e => e.currentTarget.style.color = '#F7F7F7'}
              onMouseLeave={e => e.currentTarget.style.color = '#A0A0A8'}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => { setMobileOpen(false); setQuoteOpen(true); }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors duration-200"
            style={{ color: '#A0A0A8' }}
          >
            <Calculator className="w-4 h-4" style={{ color: '#C8A44D' }} /> Cotizador IA
          </button>
          <button
            onClick={() => { setMobileOpen(false); setGameOpen(true); }}
            className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors duration-200"
            style={{ color: '#A0A0A8' }}
          >
            <Gamepad2 className="w-4 h-4" style={{ color: '#C8A44D' }} /> 4KM Rewards · {rewardsPoints} pts
          </button>

          <div className="pt-3 border-t" style={{ borderColor: '#2A2A2A' }}>
            <button
              onClick={() => { setMobileOpen(false); setBookingOpen(true); }}
              className="btn-gold w-full py-3"
            >
              <Calendar className="w-4 h-4" /> RESERVAR AHORA
            </button>
          </div>
        </div>
      </div>

      {/* Spacer so content doesn't hide under fixed nav */}
      <div className="h-20" />
    </>
  );
};
