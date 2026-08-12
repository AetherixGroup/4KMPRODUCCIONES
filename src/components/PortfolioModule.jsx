import React, { useState } from 'react';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import { useApp } from '../context/AppContext';
import { Search, Play, Heart, Sparkles, Filter, Eye, Award, Calendar, Video, Camera, ArrowRight, ShieldCheck } from 'lucide-react';

export const PortfolioModule = () => {
  const { portfolioProjects, setSelectedProject, likedProjects, toggleLikeProject, setBookingOpen, setQuoteOpen } = useApp();

  const [activeCategory, setActiveCategory] = useState('todos');
  const [activeYear, setActiveYear] = useState('todos'); // todos | 2026 | 2025 | 2024
  const [searchTerm, setSearchTerm] = useState('');

  // Filtering Logic
  const filteredProjects = portfolioProjects.filter((p) => {
    const matchesCategory = activeCategory === 'todos' || p.category === activeCategory;
    const matchesYear = activeYear === 'todos' || p.year.toString() === activeYear;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      !searchTerm ||
      p.title.toLowerCase().includes(searchLower) ||
      p.client.toLowerCase().includes(searchLower) ||
      p.city.toLowerCase().includes(searchLower) ||
      p.tags.some(t => t.toLowerCase().includes(searchLower));

    return matchesCategory && matchesYear && matchesSearch;
  });

  const featuredList = portfolioProjects.filter(p => p.featured);
  const storiesList = portfolioProjects.filter(p => p.customerStory);

  return (
    <section id="portafolio" className="section-pad relative overflow-hidden" style={{ background: '#0A0A0A', borderTop: '1px solid #1A1A1A' }}>
      
      {/* Ambient glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 pointer-events-none" style={{ width: '600px', height: '300px', background: 'radial-gradient(ellipse, rgba(200,164,77,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="container-xl space-y-12">
        
        {/* Module Title */}
        <div className="section-intro">
          <div className="badge-gold label" style={{ display: 'inline-flex', marginBottom: '16px' }}>
            <Sparkles className="w-3 h-3" style={{ color: '#C8A44D' }} />
            PORTAFOLIO CINEMATOGRÁFICO PREMIERE
          </div>

          <h2 className="type-heading title" style={{ color: '#F7F7F7' }}>
            Nuestros Trabajos <span className="text-gold-gradient">Cinematográficos</span>
          </h2>
          <div className="divider-gold" />

          <p className="subtitle mt-4">
            Explora producciones audiovisuales de bodas, eventos corporativos, comerciales y tomas aéreas 4K. Selecciona cualquier proyecto para contratar directamente.
          </p>
        </div>

        {/* Search Bar & Year Folder Selector */}
        <div className="glass-panel p-4 md:p-6 space-y-4 border-yellow-500/30">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-yellow-400" />
              <input 
                type="text"
                placeholder="Buscar por cliente, evento, etiquetas, ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-input w-full text-xs pl-10"
              />
            </div>

            {/* Folder Year Buttons (2026, 2025, 2024) */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-semibold uppercase tracking-wider hidden sm:inline">Año:</span>
              {['todos', '2026', '2025', '2024'].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setActiveYear(yr)}
                  className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                    activeYear === yr
                      ? 'bg-yellow-500 text-black shadow-md'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-yellow-400'
                  }`}
                >
                  {yr === 'todos' ? 'Todos los Años' : yr}
                </button>
              ))}
            </div>

          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 scrollbar-none">
            {PORTFOLIO_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-yellow-500 to-amber-600 text-black font-extrabold shadow-[0_0_15px_rgba(212,175,55,0.4)]'
                    : 'bg-slate-900/90 text-slate-300 border border-slate-800 hover:text-yellow-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 1: HISTORIAS DE NUESTROS CLIENTES (Customer Stories Highlight) */}
        {activeCategory === 'todos' && !searchTerm && (
          <div className="space-y-6 pt-4">
            <div className="flex justify-between items-end border-l-4 border-yellow-400 pl-4">
              <div>
                <span className="text-xs font-bold text-yellow-400 uppercase tracking-widest">CASOS REALES & TESTIMONIOS</span>
                <h3 className="font-cinzel text-2xl font-bold text-white">Historias de Nuestros Clientes</h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {storiesList.map((proj) => (
                <div 
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="glass-panel glass-panel-hover p-6 flex flex-col md:flex-row gap-6 cursor-pointer border-yellow-500/20"
                >
                  <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden shrink-0 border border-slate-800">
                    <img src={proj.posterImage} alt={proj.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/90 text-black flex items-center justify-center shadow-lg">
                        <Play className="w-5 h-5 ml-0.5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 flex-1">
                    <div className="flex justify-between items-center">
                      <span className="badge-gold">{proj.client}</span>
                      <div className="flex text-yellow-400 text-xs">
                        {'★'.repeat(proj.customerStory?.rating || 5)}
                      </div>
                    </div>

                    <h4 className="font-cinzel text-lg font-bold text-white leading-snug">
                      "{proj.customerStory?.title}"
                    </h4>

                    <p className="text-xs text-slate-300 line-clamp-2 italic">
                      "{proj.customerStory?.quote}"
                    </p>

                    <div className="pt-2 flex justify-between items-center text-xs font-bold text-yellow-300">
                      <span>Ver Historia & Película</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 2: GRID DE PROYECTOS (Filtered List) */}
        <div className="space-y-6">
          <div className="flex justify-between items-center border-l-4 border-yellow-400 pl-4">
            <h3 className="font-cinzel text-2xl font-bold text-white">
              Catálogo de Producciones ({filteredProjects.length})
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((proj) => {
              const isLiked = likedProjects.includes(proj.id);

              return (
                <div 
                  key={proj.id}
                  className="glass-panel glass-panel-hover flex flex-col justify-between overflow-hidden group border-slate-800"
                >
                  {/* Poster Thumbnail */}
                  <div 
                    onClick={() => setSelectedProject(proj)}
                    className="relative w-full h-52 overflow-hidden cursor-pointer"
                  >
                    <img 
                      src={proj.posterImage} 
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-600 text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.6)]">
                        <Play className="w-5 h-5 ml-0.5 fill-black" />
                      </div>
                    </div>

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center text-[10px] font-bold">
                      <span className="bg-black/80 backdrop-blur-md text-yellow-300 px-2.5 py-1 rounded border border-yellow-500/30 uppercase tracking-wider">
                        {proj.category}
                      </span>
                      <span className="bg-black/80 backdrop-blur-md text-slate-300 px-2 py-1 rounded">
                        {proj.duration}
                      </span>
                    </div>

                    {/* Bottom Stats */}
                    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-[11px] text-slate-300">
                      <span className="flex items-center gap-1 font-semibold">
                        <Eye className="w-3.5 h-3.5 text-yellow-400" /> {proj.views} vistas
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <Heart className="w-3.5 h-3.5 text-red-400" /> {proj.likes}
                      </span>
                    </div>
                  </div>

                  {/* Card Info */}
                  <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-center text-[11px] text-slate-400 mb-1">
                        <span>{proj.client}</span>
                        <span>{proj.city}</span>
                      </div>
                      <h4 
                        onClick={() => setSelectedProject(proj)}
                        className="font-cinzel text-lg font-bold text-white group-hover:text-yellow-300 transition-colors cursor-pointer"
                      >
                        {proj.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-2 mt-1 font-light">{proj.subtitle}</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-800 space-y-2">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="w-full btn-gold py-2.5 text-xs font-bold uppercase tracking-wider"
                      >
                        <span>▶ VER PROYECTO & DETALLES</span>
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
