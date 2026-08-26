import React, { useState } from 'react';
import { CATEGORIES, AUDIOVISUAL_EVENTS, MARKETING_PACKAGES } from '../data/catalog';
import { useApp } from '../context/AppContext';
import { Camera, Video, CheckCircle2, ShoppingBag, Calendar, Calculator, Clock, Users, Disc, Check, Bot, Cpu, ExternalLink, Film, Play, X } from 'lucide-react';

const LOCAL_SHOWREEL_VIDEOS = [
  { title: 'Inmobiliaria', src: './img/YDRAY-ALEYDA-INMOBILIARIA_web.mp4', cover: './img/Screenshot_1.png' },
  { title: 'Comercial 15 Anos', src: './img/YDRAY-COMERCIAL-15-ANOS_web.mp4', cover: './img/Screenshot_2.png' },
  { title: 'Comercial Donattos', src: './img/YDRAY-COMERCIAL-DONATTOS-2_web.mp4', cover: './img/Screenshot_3.png' },
  { title: 'Publicidad Manya', src: './img/YDRAY-MANYA-PUBLICIDAD_web.mp4', cover: './img/Screenshot_4.png' },
  { title: 'Publicidad Power Brasa', src: './img/YDRAY-power-brasa-publicidad_web.mp4', cover: './img/Screenshot_5.png' },
  { title: 'Proyecto Ortiz', src: './img/YDRAY-PROYECTO-ORTIZ_web.mp4', cover: './img/Screenshot_6.png' },
  { title: 'Produccion Drone', src: './img/YDRAY-PUBLICIDAD-DRONE-OFICIAL_web.mp4', cover: './img/Screenshot_7.png' },
  { title: 'Reel Carrera de Motos', src: './img/YDRAY-REEL-carrera-de-motos_web.mp4', cover: './img/Screenshot_8.png' },
  { title: 'Torneo Parrillero', src: './img/YDRAY-torneo-parrillero-nmr-2-OFICIAL-_web.mp4', cover: './img/Screenshot_9.png' },
];

const TIKTOK_VIDEOS = [
  '7557432358794792200', '7556768882837474578', '7555224096309579029',
  '7548975867892878610', '7527554039676931334', '7518257567231970565',
  '7514528204477058360', '7470758061188123909', '7419502976491851013',
  '7413898058867543302', '7397621056841796870', '7397124804161146118',
  '7387611790709918981',
].map((id, index) => ({
  id,
  title: `TikTok 4KM ${String(index + 1).padStart(2, '0')}`,
  url: `https://www.tiktok.com/@4kmproducciones/video/${id}`,
}));

/* ──────────────────────────────────────────
   Package Card
────────────────────────────────────────── */
const PackageCard = ({ pkg, isVip = false, onCart, onBook, onQuote }) => (
  <article
    className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 group"
    style={{
      background: '#141418',
      border: isVip ? '1px solid rgba(200,164,77,0.35)' : '1px solid #2A2A2A',
      boxShadow: isVip
        ? '0 0 0 1px rgba(200,164,77,0.10), 0 24px 48px -12px rgba(0,0,0,0.7)'
        : '0 1px 3px rgba(0,0,0,0.5), 0 16px 32px -8px rgba(0,0,0,0.6)',
    }}
    onMouseEnter={e => {
      e.currentTarget.style.borderColor = 'rgba(200,164,77,0.40)';
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 0 0 1px rgba(200,164,77,0.18), 0 28px 56px -12px rgba(0,0,0,0.8)';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.borderColor = isVip ? 'rgba(200,164,77,0.35)' : '#2A2A2A';
      e.currentTarget.style.transform = 'none';
      e.currentTarget.style.boxShadow = isVip
        ? '0 0 0 1px rgba(200,164,77,0.10), 0 24px 48px -12px rgba(0,0,0,0.7)'
        : '0 1px 3px rgba(0,0,0,0.5), 0 16px 32px -8px rgba(0,0,0,0.6)';
    }}
  >
    {/* Image Thumbnail */}
    {pkg.image && (
      <div className="relative w-full aspect-video overflow-hidden bg-black/30">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
    )}

    {/* VIP banner */}
    {isVip && (
      <div className="type-label px-4 py-2 text-center text-[0.6rem]"
        style={{ background: 'rgba(200,164,77,0.10)', color: '#C8A44D', borderBottom: '1px solid rgba(200,164,77,0.20)' }}>
        ★ PREMIERE VIP
      </div>
    )}

    <div className="p-6 space-y-5 flex-1">
      <div>
        <h4 className="font-cinzel text-[1.0625rem] font-bold mb-1" style={{ color: '#F7F7F7' }}>{pkg.name}</h4>
        <div className="flex items-baseline gap-1 mt-3">
          <span style={{ color: '#A0A0A8', fontSize: '0.75rem', fontWeight: 600 }}>S/</span>
          <span className="text-gold-gradient font-bold" style={{ fontSize: '2rem', lineHeight: 1 }}>{pkg.price}</span>
          <span style={{ color: '#666672', fontSize: '0.75rem' }}>/ evento</span>
        </div>
      </div>

      {/* Specs */}
      <div className="space-y-2.5" style={{ borderTop: '1px solid #2A2A2A', paddingTop: '20px' }}>
        {[
          { icon: Clock, val: pkg.hours },
          { icon: Users, val: pkg.people },
          { icon: Camera, val: pkg.cameras },
          { icon: Video, val: pkg.drone },
          { icon: Disc, val: pkg.photos },
        ].map(({ icon: Icon, val }, i) => (
          <div key={i} className="flex items-center gap-2.5" style={{ color: '#A0A0A8', fontSize: '0.75rem' }}>
            <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#C8A44D' }} />
            <span>{val}</span>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="space-y-2">
        {pkg.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2" style={{ color: '#A0A0A8', fontSize: '0.75rem' }}>
            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#C8A44D' }} />
            <span>{f}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Actions */}
    <div className="p-5 space-y-2.5" style={{ borderTop: '1px solid #2A2A2A' }}>
      <button onClick={onCart} className="btn-gold w-full py-3 text-[0.6875rem]">
        <ShoppingBag className="w-3.5 h-3.5" /> AGREGAR AL CARRITO
      </button>
      <div className="grid grid-cols-2 gap-2">
        <button onClick={onBook} className="btn-outline-gold py-2.5 text-[0.65rem]">
          <Calendar className="w-3.5 h-3.5" /> Reservar
        </button>
        <button onClick={onQuote}
          className="py-2.5 rounded-lg text-[0.65rem] font-bold tracking-wider transition-all duration-200 flex items-center justify-center gap-1.5"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid #2A2A2A', color: '#666672' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#444444'; e.currentTarget.style.color = '#A0A0A8'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; e.currentTarget.style.color = '#666672'; }}
        >
          <Calculator className="w-3.5 h-3.5" /> Cotizar
        </button>
      </div>
    </div>
  </article>
);

/* ──────────────────────────────────────────
   Marketing Card
────────────────────────────────────────── */
const MarketingCard = ({ mkt, onCart, onBook }) => (
  <article
    className="flex flex-col justify-between rounded-2xl overflow-hidden transition-all duration-300 group"
    style={{
      background: '#141418',
      border: mkt.recommended ? '1px solid rgba(200,164,77,0.40)' : '1px solid #2A2A2A',
      boxShadow: mkt.recommended
        ? '0 0 0 1px rgba(200,164,77,0.10), 0 24px 48px -12px rgba(0,0,0,0.7)'
        : '0 1px 3px rgba(0,0,0,0.4), 0 16px 32px -8px rgba(0,0,0,0.5)',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(200,164,77,0.40)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = mkt.recommended ? 'rgba(200,164,77,0.40)' : '#2A2A2A'; e.currentTarget.style.transform = 'none'; }}
  >
    {/* Image Thumbnail */}
    {mkt.image && (
      <div className="relative w-full aspect-video overflow-hidden bg-black/30">
        <img
          src={mkt.image}
          alt={mkt.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={e => { e.target.style.display = 'none'; }}
        />
      </div>
    )}

    {mkt.recommended && (
      <div className="type-label px-4 py-2 text-center text-[0.6rem]"
        style={{ background: 'rgba(200,164,77,0.10)', color: '#C8A44D', borderBottom: '1px solid rgba(200,164,77,0.20)' }}>
        ★ MÁS POPULAR
      </div>
    )}

    <div className="p-6 space-y-5 flex-1">
      <div>
        <div className="type-label mb-2" style={{ color: '#C8A44D', fontSize: '0.6rem' }}>{mkt.badge}</div>
        <h4 className="font-cinzel text-[1.0625rem] font-bold" style={{ color: '#F7F7F7' }}>{mkt.name}</h4>
        <div className="flex items-baseline gap-1 mt-3">
          <span style={{ color: '#A0A0A8', fontSize: '0.75rem', fontWeight: 600 }}>S/</span>
          <span className="text-gold-gradient font-bold" style={{ fontSize: '2rem', lineHeight: 1 }}>{mkt.price}</span>
          <span style={{ color: '#666672', fontSize: '0.75rem' }}>{mkt.period}</span>
        </div>
      </div>

      <div className="space-y-2.5" style={{ borderTop: '1px solid #2A2A2A', paddingTop: '20px' }}>
        {mkt.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2.5" style={{ color: '#A0A0A8', fontSize: '0.75rem' }}>
            <Check className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: '#C8A44D' }} />
            <span>{f}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-2">
        {mkt.n8n && (
          <span className="badge-dark flex items-center gap-1">
            <Bot className="w-3 h-3" style={{ color: '#C8A44D' }} /> n8n Auto
          </span>
        )}
        {mkt.hubspot && (
          <span className="badge-dark flex items-center gap-1">
            <Cpu className="w-3 h-3" style={{ color: '#C8A44D' }} /> HubSpot CRM
          </span>
        )}
      </div>
    </div>

    <div className="p-5 space-y-2.5" style={{ borderTop: '1px solid #2A2A2A' }}>
      <button onClick={onCart} className="btn-gold w-full py-3 text-[0.6875rem]">
        <ShoppingBag className="w-3.5 h-3.5" /> CONTRATAR PLAN
      </button>
      <button onClick={onBook} className="btn-outline-gold w-full py-2.5 text-[0.65rem]">
        Agendar reunión estratégica
      </button>
    </div>
  </article>
);

/* ──────────────────────────────────────────
   Main Export
────────────────────────────────────────── */
export const ServicesCatalog = () => {
  const { addToCart, openBookingWithItem, setQuoteOpen } = useApp();
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const closeVideo = () => setSelectedVideo(null);
  const closeOnSwipe = (event) => {
    if (touchStart !== null && event.changedTouches[0].clientY - touchStart > 90) closeVideo();
    setTouchStart(null);
  };

  return (
    <section id="servicios" className="section-pad" style={{ background: '#0A0A0A' }}>
      <div className="container-xl space-y-16">

        {/* Header */}
        <div className="section-intro">
          <div className="type-label label">Portafolio de Servicios</div>
          <h2 className="type-heading title" style={{ color: '#F7F7F7' }}>
            Paquetes <span className="text-gold-gradient">Premiere</span>
          </h2>
          <div className="divider-gold" />
          <p className="subtitle mt-4">
            Selecciona el paquete ideal para tu evento, campaña o proyecto audiovisual. Cada uno diseñado con estándares de producción internacional.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className="px-4 py-2 rounded-full text-[0.75rem] font-semibold whitespace-nowrap transition-all duration-200"
              style={{
                background: activeCategory === cat.id ? '#C8A44D' : 'rgba(255,255,255,0.04)',
                color: activeCategory === cat.id ? '#0A0A0A' : '#A0A0A8',
                border: activeCategory === cat.id ? '1px solid transparent' : '1px solid #2A2A2A',
                fontWeight: activeCategory === cat.id ? 700 : 500,
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Audiovisual Events */}
        {(activeCategory === 'todos' || activeCategory === 'audiovisual') && (
          <div className="space-y-16">
            {AUDIOVISUAL_EVENTS.map((event) => (
              <div key={event.type} className="space-y-8">
                {/* Event section header */}
                <div className="flex items-start gap-4">
                  <div className="w-1 self-stretch rounded-full" style={{ background: 'linear-gradient(180deg, #C8A44D, #B8892D)', minHeight: '48px' }} />
                  <div>
                    <h3 className="font-cinzel text-2xl font-bold" style={{ color: '#F7F7F7' }}>{event.title}</h3>
                    <p style={{ color: '#666672', fontSize: '0.875rem', marginTop: '4px' }}>{event.description}</p>
                  </div>
                </div>

                <div className="grid-3">
                  {event.packages.map((pkg) => (
                    <PackageCard
                      key={pkg.id}
                      pkg={pkg}
                      isVip={pkg.name.includes('VIP') || pkg.name.includes('Premium')}
                      onCart={() => addToCart({ ...pkg, type: 'audiovisual' })}
                      onBook={() => openBookingWithItem(pkg)}
                      onQuote={() => setQuoteOpen(true)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {(activeCategory === 'todos' || activeCategory === 'audiovisual') && (
          <div className="space-y-8 pt-8" style={{ borderTop: '1px solid #1E1E1E' }}>
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch" style={{ background: '#C8A44D', minHeight: '48px' }} />
              <div>
                <p className="type-label mb-2" style={{ color: '#C8A44D' }}>MUESTRA DE TRABAJOS</p>
                <h3 className="font-cinzel text-2xl font-bold" style={{ color: '#F7F7F7' }}>Videos reales de 4KM</h3>
                <p className="text-sm mt-1" style={{ color: '#A0A0A8' }}>Reproduce una muestra local o abre nuestra coleccion completa en TikTok.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {LOCAL_SHOWREEL_VIDEOS.map((video) => (
                <article key={video.src} className="overflow-hidden" style={{ background: '#141418', border: '1px solid #2A2A2A', borderRadius: '8px' }}>
                  <button onClick={() => setSelectedVideo({ ...video, type: 'local' })} className="relative block w-full aspect-video overflow-hidden bg-black group" aria-label={`Reproducir ${video.title}`}>
                    <img src={video.cover} alt="" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" onError={(event) => { event.currentTarget.src = './img/mockup.jpg'; }} />
                    <span className="absolute inset-0 grid place-items-center bg-black/35 group-hover:bg-black/20"><span className="grid place-items-center w-12 h-12 rounded-full text-black" style={{ background: '#C8A44D' }}><Play className="w-5 h-5 fill-current ml-0.5" /></span></span>
                  </button>
                  <div className="flex items-center gap-2 p-4">
                    <Film className="w-4 h-4 shrink-0" style={{ color: '#C8A44D' }} />
                    <h4 className="font-cinzel text-sm font-bold" style={{ color: '#F7F7F7' }}>{video.title}</h4>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-3">
              {TIKTOK_VIDEOS.map((video) => (
                <button key={video.id} onClick={() => setSelectedVideo({ ...video, type: 'tiktok' })} className="flex items-center justify-between gap-2 p-3 text-left text-xs font-bold transition-colors" style={{ background: '#141418', border: '1px solid #2A2A2A', borderRadius: '6px', color: '#F7F7F7' }}>
                  <span className="truncate">{video.title}</span>
                  <Play className="w-3.5 h-3.5 shrink-0" style={{ color: '#C8A44D' }} />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedVideo && (
          <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 md:p-6" style={{ background: 'rgba(0,0,0,.9)' }} onClick={closeVideo} onTouchStart={(event) => setTouchStart(event.touches[0].clientY)} onTouchEnd={closeOnSwipe} role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
            <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
              <button onClick={closeVideo} className="absolute -top-11 right-0 grid place-items-center w-9 h-9 text-white" style={{ border: '1px solid #555', borderRadius: '6px', background: '#141418' }} aria-label="Cerrar video"><X className="w-5 h-5" /></button>
              <div className={selectedVideo.type === 'tiktok' ? 'mx-auto w-full max-w-[390px] aspect-[9/16] overflow-hidden bg-black' : 'w-full aspect-video overflow-hidden bg-black'} style={{ borderRadius: '8px', border: '1px solid #333' }}>
                {selectedVideo.type === 'local' ? (
                  <video src={selectedVideo.src} controls autoPlay playsInline preload="metadata" className="w-full h-full object-contain" />
                ) : (
                  <iframe src={`https://www.tiktok.com/player/v1/${selectedVideo.id}?controls=1&description=0`} title={selectedVideo.title} className="w-full h-full" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
                )}
              </div>
              <div className="flex items-center justify-between gap-4 mt-3">
                <p className="text-sm font-semibold text-white">{selectedVideo.title}</p>
                {selectedVideo.type === 'tiktok' && <a href={selectedVideo.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold" style={{ color: '#C8A44D' }}>Abrir TikTok <ExternalLink className="w-3.5 h-3.5" /></a>}
              </div>
            </div>
          </div>
        )}

        {/* Marketing Packages */}
        {(activeCategory === 'todos' || activeCategory === 'marketing') && (
          <div className="space-y-8 pt-8" style={{ borderTop: '1px solid #1E1E1E' }}>
            <div className="flex items-start gap-4">
              <div className="w-1 self-stretch rounded-full" style={{ background: 'linear-gradient(180deg, #C8A44D, #B8892D)', minHeight: '48px' }} />
              <div>
                <h3 className="font-cinzel text-2xl font-bold" style={{ color: '#F7F7F7' }}>Agencia de Marketing & Automatizaciones</h3>
                <p style={{ color: '#666672', fontSize: '0.875rem', marginTop: '4px' }}>Meta Ads, Google Ads, Embudos de venta automatizados y CRM empresarial.</p>
              </div>
            </div>
            <div className="grid-3">
              {MARKETING_PACKAGES.map((mkt) => (
                <MarketingCard
                  key={mkt.id}
                  mkt={mkt}
                  onCart={() => addToCart({ ...mkt, type: 'marketing' })}
                  onBook={() => openBookingWithItem(mkt)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
