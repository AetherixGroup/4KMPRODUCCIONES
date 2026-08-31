import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onFinish?: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const [phase, setPhase] = useState<'enter' | 'loading' | 'exit'>('enter');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    const tEnter = setTimeout(() => setPhase('loading'), 200);
    const tExit = setTimeout(() => setPhase('exit'), 3500);
    const tFinish = setTimeout(() => {
      if (onFinish) onFinish();
    }, 4000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(tEnter);
      clearTimeout(tExit);
      clearTimeout(tFinish);
    };
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]"
      style={{
        opacity: phase === 'exit' ? 0 : 1,
        transition: 'opacity 600ms cubic-bezier(0.4,0,0.2,1)',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Ambient animated glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 40%, rgba(200,164,77,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Center Brand & Loading Box */}
      <div className="relative z-10 container-xl px-6 flex flex-col items-center justify-center space-y-8 text-center max-w-xl mx-auto">
        
        {/* Brand Logo Box */}
        <div className="relative group">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden p-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-105"
            style={{
              background: '#141418',
              border: '1px solid rgba(200,164,77,0.4)',
              boxShadow: '0 0 50px rgba(200,164,77,0.2), 0 20px 40px rgba(0,0,0,0.8)'
            }}
          >
            <img
              src="./img/logo.jpg"
              alt="4KM Producciones Logo"
              className="w-full h-full object-contain bg-[#0A0A0A] rounded-xl"
            />
          </div>
          <div className="absolute -inset-4 rounded-3xl border border-[rgba(200,164,77,0.2)] animate-pulse pointer-events-none" />
        </div>

        {/* Titles */}
        <div className="space-y-2">
          <h1 className="font-cinzel text-4xl sm:text-5xl font-extrabold text-white tracking-widest">
            4KM <span className="text-gold-gradient">PRODUCCIONES</span>
          </h1>
          <p className="font-montserrat text-xs tracking-[0.3em] text-[#C8A44D] font-bold uppercase">
            CINEMATOGRAFÍA AUDIOVISUAL & TECNOLOGÍA
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-xs space-y-2">
          <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
            <div
              className="h-full rounded-full transition-all duration-100"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #9A7020 0%, #C8A44D 50%, #E8C96A 100%)'
              }}
            />
          </div>

          <div className="flex items-center justify-between text-[0.65rem] font-semibold text-[#888892] tracking-wider">
            <span>INICIALIZANDO EXPERIENCIA 4KM</span>
            <span className="text-[#C8A44D] font-bold">{progress}%</span>
          </div>
        </div>

      </div>

      {/* Skip Button */}
      <button
        onClick={() => {
          setPhase('exit');
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 300);
        }}
        className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-lg bg-[#141418]/80 hover:bg-[#141418] border border-white/10 hover:border-[rgba(200,164,77,0.4)] text-xs text-[#A0A0A8] hover:text-[#C8A44D] font-semibold transition-all backdrop-blur-md cursor-pointer"
      >
        Omitir intro →
      </button>

    </div>
  );
};
