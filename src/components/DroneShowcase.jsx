import React from 'react';
import { DRONE_SERVICES } from '../data/catalog';
import { useApp } from '../context/AppContext';
import { Video, ShieldCheck, Camera, Check, ShoppingBag, Calendar } from 'lucide-react';

export const DroneShowcase = () => {
  const { addToCart, openBookingWithItem } = useApp();

  return (
    <section
      id="drone"
      className="section-pad relative overflow-hidden"
      style={{ background: '#0D0D0D', borderTop: '1px solid #1A1A1A', borderBottom: '1px solid #1A1A1A' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none"
        style={{
          width: '480px', height: '480px',
          background: 'radial-gradient(circle, rgba(200,164,77,0.07) 0%, transparent 70%)',
          filter: 'blur(48px)',
        }}
      />

      <div className="container-xl relative z-10 space-y-16">

        {/* ── Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="space-y-7">
            <div className="badge-gold" style={{ display: 'inline-flex' }}>
              <Video className="w-3 h-3" style={{ color: '#C8A44D' }} />
              TECNOLOGÍA AÉREA DE VANGUARDIA
            </div>

            <h2 className="type-heading" style={{ color: '#F7F7F7' }}>
              Categoría Exclusiva{' '}
              <span className="text-gold-gradient">Drone 4K Cinema</span>
            </h2>

            <p style={{ color: '#A0A0A8', fontSize: '0.9375rem', lineHeight: 1.75, fontWeight: 400 }}>
              Capturamos la grandeza desde las alturas. Pilotos certificados por la MTC, aeronaves de última generación 4K HDR 60fps y póliza de seguro aeronáutico activa para cualquier localización en el Perú.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: ShieldCheck, label: 'Licencia MTC Oficial' },
                { icon: Camera,      label: 'Video 4K HDR 60fps' },
                { icon: ShieldCheck, label: 'Seguro Aeronáutico' },
                { icon: Camera,      label: 'Cobertura Nacional' },
              ].map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl"
                  style={{ background: '#141418', border: '1px solid #2A2A2A' }}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#C8A44D' }} />
                  <span style={{ color: '#A0A0A8', fontSize: '0.75rem', fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Drone image */}
          <div className="relative group">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: '1px solid rgba(200,164,77,0.30)',
                boxShadow: '0 0 60px rgba(200,164,77,0.12), 0 32px 64px rgba(0,0,0,0.8)',
              }}
            >
              <img
                src="/img/drone.jpg"
                alt="Drone 4K Cinema 4KM Producciones"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ height: '360px' }}
                onError={e => { e.target.src = '/img/hero.jpg'; }}
              />
              <div className="absolute inset-0" style={{
                background: 'linear-gradient(180deg, transparent 50%, rgba(10,10,10,0.9) 100%)',
              }} />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <p className="type-label mb-1" style={{ color: '#C8A44D', fontSize: '0.55rem' }}>DRONE PILOT CERTIFIED</p>
                  <h4 className="font-cinzel font-bold text-lg" style={{ color: '#F7F7F7' }}>4KM Aerial Systems</h4>
                </div>
                <span className="badge-gold text-[0.55rem]">DISPONIBILIDAD NACIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Service Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DRONE_SERVICES.map((drone) => (
            <article
              key={drone.id}
              className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300"
              style={{ background: '#141418', border: '1px solid #2A2A2A', boxShadow: '0 1px 3px rgba(0,0,0,0.5), 0 16px 32px -8px rgba(0,0,0,0.6)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.40)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 0 0 1px rgba(200,164,77,0.15), 0 28px 56px rgba(0,0,0,0.8)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.5), 0 16px 32px -8px rgba(0,0,0,0.6)'; }}
            >
              <div className="p-6 space-y-5 flex-1">
                <h4 className="font-cinzel text-[1.0625rem] font-bold" style={{ color: '#C8A44D' }}>{drone.title}</h4>
                <p style={{ color: '#A0A0A8', fontSize: '0.8125rem', lineHeight: 1.7, fontWeight: 400 }}>{drone.description}</p>

                <div className="flex items-baseline gap-1">
                  <span style={{ color: '#A0A0A8', fontSize: '0.75rem', fontWeight: 600 }}>S/</span>
                  <span className="text-gold-gradient font-bold" style={{ fontSize: '2rem', lineHeight: 1 }}>{drone.price}</span>
                  <span style={{ color: '#666672', fontSize: '0.75rem' }}>{drone.unit}</span>
                </div>

                <div className="space-y-2" style={{ borderTop: '1px solid #2A2A2A', paddingTop: '20px' }}>
                  {drone.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2" style={{ color: '#A0A0A8', fontSize: '0.75rem' }}>
                      <Check className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C8A44D' }} />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 space-y-2" style={{ borderTop: '1px solid #2A2A2A' }}>
                <button
                  onClick={() => addToCart({ ...drone, type: 'drone' })}
                  className="btn-gold w-full py-3 text-[0.6875rem]"
                >
                  <ShoppingBag className="w-3.5 h-3.5" /> CONTRATAR DRONE
                </button>
                <button
                  onClick={() => openBookingWithItem(drone)}
                  className="btn-outline-gold w-full py-2.5 text-[0.65rem]"
                >
                  <Calendar className="w-3.5 h-3.5" /> RESERVAR FECHA
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};
