import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Film, Play, X, ExternalLink, Sparkles, Clapperboard } from 'lucide-react';

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

export const ServicesCatalog = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [touchStart, setTouchStart] = useState(null);

  const closeVideo = () => setSelectedVideo(null);
  const closeOnSwipe = (event) => {
    if (touchStart !== null && event.changedTouches[0].clientY - touchStart > 90) closeVideo();
    setTouchStart(null);
  };

  return (
    <section id="trabajos" className="section-pad" style={{ background: '#0D0D10' }}>
      <div className="container-xl space-y-12">

        {/* Header */}
        <div className="section-intro">
          <div className="badge-gold inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>Portafolio Audiovisual</span>
          </div>
          <h2 className="type-heading font-cinzel text-3xl sm:text-4xl font-bold" style={{ color: '#F7F7F7' }}>
            Muestra de <span className="text-gold-gradient">Trabajos</span>
          </h2>
          <div className="divider-gold" />
          <p className="subtitle mt-4">
            Reproduce una muestra local con los videos reales producidos por 4KM o abre nuestra coleccion completa en TikTok.
          </p>
        </div>

        {/* Local showreel videos */}
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

        {/* TikTok videos */}
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-1 self-stretch" style={{ background: '#C8A44D', minHeight: '48px' }} />
            <div>
              <p className="type-label mb-2" style={{ color: '#C8A44D' }}>TIKTOK OFICIAL</p>
              <h3 className="font-cinzel text-2xl font-bold" style={{ color: '#F7F7F7' }}>Coleccion completa en TikTok</h3>
              <p className="text-sm mt-1" style={{ color: '#A0A0A8' }}>Mira todos nuestros videos virales y reels.</p>
            </div>
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
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 md:p-6" style={{ background: 'rgba(0,0,0,.9)' }} onClick={closeVideo} onTouchStart={(event) => setTouchStart(event.touches[0].clientY)} onTouchEnd={closeOnSwipe} role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button onClick={closeVideo} className="absolute -top-11 right-0 grid place-items-center w-9 h-9 text-white" style={{ border: '1px solid #555', borderRadius: '6px', background: '#141418' }} aria-label="Cerrar video"><X className="w-5 h-5" /></button>
            <div className={selectedVideo.type === 'tiktok' ? 'mx-auto w-full max-w-[390px] aspect-[9/16] overflow-hidden bg-black' : 'w-full aspect-video overflow-hidden bg-black'} style={{ borderRadius: '8px', border: '1px solid #333' }}>
              {selectedVideo.type === 'local' ? (
                <video src={selectedVideo.src} controls playsInline preload="none" className="w-full h-full object-contain" />
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
    </section>
  );
};
