import React, { useState, useEffect } from 'react';
import { PROMO_SLIDES } from '../data/catalog';
import { useApp } from '../context/AppContext';
import { ChevronLeft, ChevronRight, Play, Calendar, ChevronDown } from 'lucide-react';

export const HeroCarousel3D = () => {
  const { setBookingOpen, setQuoteOpen } = useApp();
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const total = PROMO_SLIDES.length;

  useEffect(() => {
    const interval = setInterval(() => advance(1), 7000);
    return () => clearInterval(interval);
  }, [current]);

  const advance = (dir) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(prev => (prev + dir + total) % total);
    setTimeout(() => setAnimating(false), 600);
  };

  const slide = PROMO_SLIDES[current];

  return (
    <section className="relative w-full" style={{ height: 'min(90vh, 720px)', minHeight: '520px' }}>

      {/* ── Background Image ── */}
      <div className="absolute inset-0">
        <img
          key={slide.id}
          src={slide.bgImage}
          alt={slide.title}
          className="w-full h-full object-cover"
          style={{
            opacity: animating ? 0 : 1,
            transform: animating ? 'scale(1.02)' : 'scale(1)',
            transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 800ms cubic-bezier(0.4,0,0.2,1)',
          }}
          onError={e => { e.target.src = '/img/hero.jpg'; }}
        />
        {/* Cinematic vignette */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 60% 50%, transparent 20%, rgba(10,10,10,0.65) 80%)',
        }} />
        {/* Bottom fade */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.0) 35%, rgba(10,10,10,0.75) 80%, rgba(10,10,10,1) 100%)',
        }} />
        {/* Left side fade for text legibility */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.5) 50%, transparent 100%)',
        }} />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container-xl w-full">
          <div
            className="max-w-xl space-y-6"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateX(-8px)' : 'translateX(0)',
              transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1), transform 500ms cubic-bezier(0.4,0,0.2,1)',
            }}
          >
            {/* Label */}
            <div className="badge-gold" style={{ display: 'inline-flex' }}>
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#C8A44D', animation: 'pulseGold 2s ease-in-out infinite' }} />
              {slide.badge}
            </div>

            {/* Title */}
            <h1 className="type-display" style={{ color: '#F7F7F7', textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
              {slide.title.split(' ').slice(0, -2).join(' ')}{' '}
              <span style={{ color: '#C8A44D' }}>
                {slide.title.split(' ').slice(-2).join(' ')}
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{ color: '#A0A0A8', fontSize: '1rem', lineHeight: 1.7, fontWeight: 400, maxWidth: '480px' }}>
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button className="btn-gold py-3.5 px-7 text-[0.75rem]" onClick={() => setBookingOpen(true)}>
                <Calendar className="w-4 h-4" />
                <span>{slide.actionText}</span>
              </button>
              <button className="btn-outline-gold py-3.5 px-7 text-[0.75rem]" onClick={() => setQuoteOpen(true)}>
                Solicitar Cotización
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={() => advance(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-200"
        style={{
          background: 'rgba(20,20,24,0.7)',
          border: '1px solid rgba(42,42,42,0.8)',
          backdropFilter: 'blur(12px)',
          color: '#A0A0A8',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.5)'; e.currentTarget.style.color = '#C8A44D'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,42,42,0.8)'; e.currentTarget.style.color = '#A0A0A8'; }}
        aria-label="Anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => advance(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full transition-all duration-200"
        style={{
          background: 'rgba(20,20,24,0.7)',
          border: '1px solid rgba(42,42,42,0.8)',
          backdropFilter: 'blur(12px)',
          color: '#A0A0A8',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.5)'; e.currentTarget.style.color = '#C8A44D'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(42,42,42,0.8)'; e.currentTarget.style.color = '#A0A0A8'; }}
        aria-label="Siguiente"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* ── Dots ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {PROMO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => { if (!animating) { setAnimating(true); setCurrent(i); setTimeout(() => setAnimating(false), 600); } }}
            className="rounded-full transition-all duration-300"
            style={{
              width: current === i ? '28px' : '6px',
              height: '6px',
              background: current === i ? '#C8A44D' : 'rgba(255,255,255,0.25)',
            }}
            aria-label={`Diapositiva ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-8 z-20 hidden md:flex flex-col items-center gap-2">
        <ChevronDown className="w-4 h-4 animate-bounce" style={{ color: '#444444' }} />
      </div>
    </section>
  );
};
