import React, { useEffect, useState } from 'react';

export const SplashScreen = ({ onFinish }) => {
  const [phase, setPhase] = useState('enter'); // enter → logo → bar → exit

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('bar'), 400);
    const t2 = setTimeout(() => setPhase('exit'), 3000);
    const t3 = setTimeout(() => { if (onFinish) onFinish(); }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: '#0A0A0A',
        opacity: phase === 'exit' ? 0 : 1,
        transition: 'opacity 500ms cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,164,77,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
        }}
      />

      {/* Logo Container */}
      <div
        className="relative z-10 flex flex-col items-center gap-8"
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'scale(0.92) translateY(12px)' : 'scale(1) translateY(0)',
          transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1), transform 600ms cubic-bezier(0.4,0,0.2,1)',
        }}
      >
        {/* Logo mark */}
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full overflow-hidden"
            style={{
              border: '1px solid rgba(200,164,77,0.35)',
              boxShadow: '0 0 40px rgba(200,164,77,0.18), 0 0 80px rgba(200,164,77,0.07)',
            }}
          >
            <img
              src="/img/logo.jpg"
              alt="4KM Producciones"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Outer ring pulse */}
          <div
            className="absolute -inset-3 rounded-full"
            style={{
              border: '1px solid rgba(200,164,77,0.15)',
              animation: 'pulseGold 2.5s ease-in-out infinite',
            }}
          />
        </div>

        {/* Brand name */}
        <div className="text-center space-y-1">
          <h1
            className="font-cinzel text-4xl md:text-5xl font-bold tracking-widest"
            style={{ color: '#F7F7F7', letterSpacing: '0.2em' }}
          >
            4KM
          </h1>
          <p
            className="type-label"
            style={{ color: '#C8A44D', letterSpacing: '0.32em', fontSize: '0.65rem' }}
          >
            PRODUCCIONES
          </p>
          <p
            className="type-label"
            style={{ color: '#444444', letterSpacing: '0.18em', fontSize: '0.55rem', marginTop: '6px' }}
          >
            CINEMATOGRAFÍA · MARKETING · IA
          </p>
        </div>

        {/* Progress bar */}
        <div
          className="overflow-hidden rounded-full"
          style={{ width: '160px', height: '2px', background: 'rgba(255,255,255,0.06)' }}
        >
          {phase !== 'enter' && (
            <div
              className="h-full rounded-full splash-bar"
              style={{
                background: 'linear-gradient(90deg, #B8892D, #D4AF37, #C8A44D)',
              }}
            />
          )}
        </div>
      </div>

      {/* Skip */}
      <button
        onClick={() => { setPhase('exit'); setTimeout(() => { if (onFinish) onFinish(); }, 500); }}
        className="absolute bottom-8 right-8 btn-ghost text-xs"
        style={{ color: '#444444', fontSize: '0.7rem' }}
      >
        Omitir intro →
      </button>
    </div>
  );
};
