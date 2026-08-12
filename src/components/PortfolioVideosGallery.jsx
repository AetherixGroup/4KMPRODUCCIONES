import React, { useEffect, useMemo, useState } from 'react';
import { ExternalLink, Play, X } from 'lucide-react';
import { PORTFOLIO_VIDEOS, VIDEO_CATEGORIES_PORTFOLIO } from '../data/catalog';

const playerUrl = (video) => {
  if (video.type === 'tiktok') return `https://www.tiktok.com/player/v1/${video.tiktokVideoId}?controls=1&description=0`;
  if (video.type === 'facebook') return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(video.videoUrl)}&show_text=false&width=1280`;
  return video.videoUrl;
};

const VideoPlayer = ({ video, compact = false }) => {
  if (video.type === 'direct') {
    return <video src={video.videoUrl} controls playsInline preload="metadata" className="w-full h-full object-contain bg-black" />;
  }

  return (
    <iframe
      src={playerUrl(video)}
      title={video.title}
      className="w-full h-full bg-black"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      allowFullScreen
      loading={compact ? 'lazy' : 'eager'}
    />
  );
};

export const PortfolioVideosGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const videos = useMemo(
    () => PORTFOLIO_VIDEOS.filter((video) => selectedCategory === 'todos' || video.category === selectedCategory),
    [selectedCategory],
  );

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setSelectedVideo(null);
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="pt-12 md:pt-16" aria-label="Videos del portafolio">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-7">
        <div className="border-l-4 border-yellow-400 pl-4">
          <p className="type-label mb-2" style={{ color: '#C8A44D' }}>VIDEOS REALES</p>
          <h3 className="font-cinzel text-2xl font-bold text-white">Producciones en movimiento</h3>
        </div>
        <p className="text-sm max-w-xl" style={{ color: '#A0A0A8' }}>Reproduce los trabajos directamente desde Facebook y TikTok sin salir del portafolio.</p>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none" aria-label="Filtrar videos">
        {VIDEO_CATEGORIES_PORTFOLIO.map((category) => {
          const active = selectedCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className="shrink-0 px-3 py-2 text-xs font-bold transition-colors"
              style={{ borderRadius: '6px', border: `1px solid ${active ? '#C8A44D' : '#2A2A2A'}`, background: active ? '#C8A44D' : 'transparent', color: active ? '#0A0A0A' : '#A0A0A8' }}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {videos.map((video) => (
          <article key={video.id} className="overflow-hidden" style={{ background: '#141418', border: '1px solid #2A2A2A', borderRadius: '8px' }}>
            <button onClick={() => setSelectedVideo(video)} className="relative block w-full aspect-video bg-black text-left group" aria-label={`Reproducir ${video.title}`}>
              <img src={video.thumbnail} alt="" className="w-full h-full object-cover opacity-75 transition-transform duration-300 group-hover:scale-105" onError={(event) => { event.currentTarget.src = './img/hero.jpg'; }} />
              <span className="absolute inset-0 grid place-items-center bg-black/35 group-hover:bg-black/20 transition-colors">
                <span className="grid place-items-center w-12 h-12 rounded-full bg-[#C8A44D] text-black"><Play className="w-5 h-5 fill-current ml-0.5" /></span>
              </span>
              <span className="absolute top-3 left-3 px-2 py-1 text-[0.62rem] font-bold uppercase" style={{ borderRadius: '4px', background: 'rgba(0,0,0,.72)', color: '#F7F7F7' }}>{video.type === 'tiktok' ? 'TikTok' : 'Facebook'}</span>
            </button>
            <div className="p-4">
              <h4 className="font-cinzel font-bold text-[0.95rem] text-white leading-snug">{video.title}</h4>
              <p className="mt-2 text-xs leading-5 line-clamp-2" style={{ color: '#A0A0A8' }}>{video.description}</p>
            </div>
          </article>
        ))}
      </div>

      {selectedVideo && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 md:p-6" style={{ background: 'rgba(0,0,0,.9)' }} onClick={() => setSelectedVideo(null)} role="dialog" aria-modal="true" aria-label={selectedVideo.title}>
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button onClick={() => setSelectedVideo(null)} className="absolute -top-11 right-0 p-2 text-white" aria-label="Cerrar video"><X className="w-6 h-6" /></button>
            <div className={selectedVideo.type === 'tiktok' ? 'mx-auto w-full max-w-[390px] aspect-[9/16] overflow-hidden bg-black' : 'w-full aspect-video overflow-hidden bg-black'} style={{ borderRadius: '8px', border: '1px solid #333' }}>
              <VideoPlayer video={selectedVideo} />
            </div>
            <div className="flex items-center justify-between gap-4 mt-3">
              <p className="text-sm font-semibold text-white">{selectedVideo.title}</p>
              <a href={selectedVideo.videoUrl} target="_blank" rel="noreferrer" className="shrink-0 inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: '#C8A44D' }}>Abrir original <ExternalLink className="w-3.5 h-3.5" /></a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
