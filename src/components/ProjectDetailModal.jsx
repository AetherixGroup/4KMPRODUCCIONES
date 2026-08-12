import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Play, Heart, Share2, Calendar, MapPin, Camera, Video, Users, ShoppingBag, Sparkles, CheckCircle2, Award, ChevronRight, Eye } from 'lucide-react';

export const ProjectDetailModal = () => {
  const { 
    selectedProject, 
    setSelectedProject, 
    likedProjects, 
    toggleLikeProject, 
    addToCart, 
    openBookingWithItem, 
    portfolioProjects 
  } = useApp();

  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!selectedProject) return null;

  const isLiked = likedProjects.includes(selectedProject.id);

  // Convert to cart item
  const handleHireService = () => {
    addToCart({
      id: selectedProject.linkedServiceId || `service-${selectedProject.id}`,
      name: selectedProject.linkedServiceName || selectedProject.title,
      price: selectedProject.linkedServicePrice || 2500,
      quantity: 1
    });
    setSelectedProject(null);
  };

  // Find similar projects (AI Recommendation)
  const similarProjects = portfolioProjects
    .filter(p => p.category === selectedProject.category && p.id !== selectedProject.id)
    .slice(0, 3);

  return (
    <div className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 md:p-4 overflow-y-auto">
      <div className="w-full max-w-4xl bg-[#08080c] border border-yellow-500/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.25)] relative max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header Bar */}
        <div className="h-14 px-6 bg-black/80 border-b border-slate-800 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>PORTAFOLIO PREMIERE &bull; {selectedProject.category.toUpperCase()}</span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => toggleLikeProject(selectedProject.id)}
              className={`p-2 rounded-full border transition-all ${
                isLiked ? 'bg-red-500/20 border-red-500 text-red-400' : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-400' : ''}`} />
            </button>

            <button 
              onClick={() => setSelectedProject(null)}
              className="p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto space-y-8 p-6">
          
          {/* Main Video Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-yellow-500/30 shadow-2xl">
            <iframe 
              src={selectedProject.videoUrl} 
              title={selectedProject.title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Title & Quick Conversion Bar */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/80 p-6 rounded-2xl border border-slate-800">
            <div className="space-y-1">
              <span className="badge-gold">{selectedProject.year} &bull; {selectedProject.city}</span>
              <h2 className="font-cinzel text-2xl md:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h2>
              <p className="text-xs text-slate-300 font-light">{selectedProject.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button 
                onClick={handleHireService}
                className="btn-gold py-3 px-6 text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>QUIERO ESTE SERVICIO (S/ {selectedProject.linkedServicePrice})</span>
              </button>

              <button 
                onClick={() => {
                  openBookingWithItem({ name: selectedProject.linkedServiceName });
                  setSelectedProject(null);
                }}
                className="btn-outline-gold py-3 px-5 text-xs font-bold uppercase tracking-wider"
              >
                RESERVAR FECHA
              </button>
            </div>
          </div>

          {/* Technical Specs & Equipment Used */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="glass-panel p-6 space-y-4 border-yellow-500/20">
              <h4 className="font-cinzel text-lg font-bold text-yellow-300 flex items-center gap-2">
                <Camera className="w-5 h-5 text-yellow-400" /> Ficha Técnica & Equipamiento
              </h4>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Cliente:</span>
                  <span className="font-semibold text-white">{selectedProject.client}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Fecha del Evento:</span>
                  <span className="font-semibold text-white">{selectedProject.date}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Cámaras Utilizadas:</span>
                  <span className="font-semibold text-yellow-300">{selectedProject.equipment?.cameras}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Drone Aéreo:</span>
                  <span className="font-semibold text-yellow-300">{selectedProject.equipment?.drone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-2">
                  <span className="text-slate-400">Lentes & Óptica:</span>
                  <span className="font-semibold text-white">{selectedProject.equipment?.lenses}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Equipo Humano:</span>
                  <span className="font-semibold text-white">{selectedProject.equipment?.crew}</span>
                </div>
              </div>
            </div>

            {/* Customer Story / Testimonial Block */}
            {selectedProject.customerStory && (
              <div className="glass-panel p-6 space-y-4 border-yellow-500/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <Award className="w-4 h-4" /> HISTORIAS DE NUESTROS CLIENTES
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-white mb-2">
                    "{selectedProject.customerStory.title}"
                  </h4>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "{selectedProject.customerStory.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-xs">
                  <span className="font-bold text-yellow-300">- {selectedProject.client}</span>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(selectedProject.customerStory.rating)}
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Photo Gallery Lightbox Section */}
          {selectedProject.gallery && selectedProject.gallery.length > 0 && (
            <div className="space-y-4">
              <h4 className="font-cinzel text-lg font-bold text-white flex items-center gap-2">
                <Camera className="w-5 h-5 text-yellow-400" /> Galería de Fotografía Fine Art
              </h4>

              <div className="grid grid-cols-3 gap-4">
                {selectedProject.gallery.map((imgUrl, idx) => (
                  <div 
                    key={idx}
                    onClick={() => { setActivePhoto(idx); setLightboxOpen(true); }}
                    className="relative h-36 md:h-44 rounded-xl overflow-hidden border border-slate-800 cursor-pointer group hover:border-yellow-400 transition-all"
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Galería ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Eye className="w-6 h-6 text-yellow-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Recommended Similar Projects */}
          {similarProjects.length > 0 && (
            <div className="space-y-4 pt-6 border-t border-slate-800">
              <div className="flex items-center gap-2 text-xs font-bold text-yellow-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>RECOMENDACIONES DE IA &bull; PROYECTOS SIMILARES</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {similarProjects.map((p) => (
                  <div 
                    key={p.id}
                    onClick={() => setSelectedProject(p)}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-yellow-400 cursor-pointer flex items-center gap-3 transition-all"
                  >
                    <img 
                      src={p.posterImage} 
                      alt={p.title} 
                      className="w-16 h-16 object-cover rounded-lg shrink-0"
                    />
                    <div className="overflow-hidden text-xs">
                      <p className="font-bold text-slate-200 truncate">{p.title}</p>
                      <p className="text-[11px] text-yellow-400 font-semibold">{p.linkedServiceName}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Lightbox Overlay */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 text-white"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedProject.gallery[activePhoto]} 
            alt="Full view" 
            className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-yellow-500/40"
          />
        </div>
      )}
    </div>
  );
};
