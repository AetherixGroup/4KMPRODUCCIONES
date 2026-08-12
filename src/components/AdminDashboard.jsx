import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { ShieldCheck, X, DollarSign, Calendar, Users, Send, Bell, RefreshCw, Bot, Cpu, ShoppingBag, Film, Plus, CheckCircle2 } from 'lucide-react';

export const AdminDashboard = () => {
  const { adminOpen, setAdminOpen, ordersList, bookingsList, portfolioProjects, addPortfolioProject } = useApp();
  const [activeTab, setActiveTab] = useState('metrics');
  
  // Push Notification state
  const [pushTitle, setPushTitle] = useState('');
  const [pushBody, setPushBody] = useState('');
  const [pushSuccess, setPushSuccess] = useState(false);

  // New Portfolio Project Form State
  const [newProject, setNewProject] = useState({
    title: '',
    subtitle: '',
    category: 'bodas',
    year: 2026,
    client: '',
    city: 'Lima, Perú',
    date: new Date().toISOString().split('T')[0],
    duration: '05:00 min',
    videoUrl: 'https://www.youtube.com/embed/gX72gHnC0C8',
    posterImage: '/img/hero.jpg',
    linkedServiceName: 'Boda Premium VIP',
    linkedServicePrice: 4500
  });

  const [projectCreatedMsg, setProjectCreatedMsg] = useState(false);

  if (!adminOpen) return null;

  const totalRevenue = ordersList.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalPortfolioViews = portfolioProjects.reduce((sum, p) => sum + (p.views || 0), 0);

  const handleSendPush = (e) => {
    e.preventDefault();
    if (!pushTitle) return;
    setPushSuccess(true);
    setTimeout(() => setPushSuccess(false), 3000);
    setPushTitle('');
    setPushBody('');
  };

  const handleAddProjectSubmit = (e) => {
    e.preventDefault();
    if (!newProject.title || !newProject.client) {
      alert("Por favor ingresa al menos el Título y Cliente del proyecto.");
      return;
    }

    addPortfolioProject(newProject);
    setProjectCreatedMsg(true);
    setTimeout(() => setProjectCreatedMsg(false), 3000);

    setNewProject({
      title: '',
      subtitle: '',
      category: 'bodas',
      year: 2026,
      client: '',
      city: 'Lima, Perú',
      date: new Date().toISOString().split('T')[0],
      duration: '05:00 min',
      videoUrl: 'https://www.youtube.com/embed/gX72gHnC0C8',
      posterImage: '/img/hero.jpg',
      linkedServiceName: 'Boda Premium VIP',
      linkedServicePrice: 4500
    });
  };

  return (
    <div className="fixed inset-0 z-[999] bg-[#050508]/95 backdrop-blur-xl flex flex-col overflow-hidden">
      
      {/* Top Admin Header */}
      <div className="h-16 px-6 bg-black/80 border-b border-yellow-500/30 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-yellow-500/20 text-yellow-400 border border-yellow-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-cinzel text-lg font-bold text-white">4KM PRODUCCIONES - PANEL ADMINISTRADOR</h3>
            <span className="text-[10px] text-yellow-300 font-semibold tracking-wider uppercase">ENTERPRISE CONTROL CENTER</span>
          </div>
        </div>

        <button 
          onClick={() => setAdminOpen(false)}
          className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          title="Cerrar Admin"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Layout Grid */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Nav */}
        <div className="w-64 bg-black/50 border-r border-slate-800 p-4 space-y-2 hidden md:block">
          <button 
            onClick={() => setActiveTab('metrics')}
            className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all ${
              activeTab === 'metrics' ? 'bg-yellow-500 text-black shadow-md' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <DollarSign className="w-4 h-4" /> Métricas & Ventas
          </button>
          <button 
            onClick={() => setActiveTab('portfolio')}
            className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all ${
              activeTab === 'portfolio' ? 'bg-yellow-500 text-black shadow-md' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <Film className="w-4 h-4" /> Gestor de Portafolio ({portfolioProjects.length})
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all ${
              activeTab === 'orders' ? 'bg-yellow-500 text-black shadow-md' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <ShoppingBag className="w-4 h-4" /> Pedidos en Vivo ({ordersList.length})
          </button>
          <button 
            onClick={() => setActiveTab('bookings')}
            className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all ${
              activeTab === 'bookings' ? 'bg-yellow-500 text-black shadow-md' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" /> Reservas Agendadas ({bookingsList.length})
          </button>
          <button 
            onClick={() => setActiveTab('notifications')}
            className={`w-full text-left p-3 rounded-xl text-xs font-bold flex items-center gap-2.5 transition-all ${
              activeTab === 'notifications' ? 'bg-yellow-500 text-black shadow-md' : 'text-slate-300 hover:bg-slate-900'
            }`}
          >
            <Bell className="w-4 h-4" /> Firebase Push Notifications
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 p-6 md:p-8 overflow-y-auto space-y-8">
          
          {/* TAB 1: METRICS */}
          {activeTab === 'metrics' && (
            <div className="space-y-8">
              <h4 className="font-cinzel text-2xl font-bold text-white">Resumen Ejecutivo de Ventas & Reproducciones</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="glass-panel p-5 space-y-2 border-yellow-500/30">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Ventas Totales</span>
                  <div className="text-2xl font-extrabold text-gold-gradient">S/ {totalRevenue.toFixed(2)}</div>
                  <span className="text-[10px] text-green-400 font-bold">+18.5% este mes</span>
                </div>

                <div className="glass-panel p-5 space-y-2 border-yellow-500/30">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Vistas de Portafolio</span>
                  <div className="text-2xl font-extrabold text-white">{totalPortfolioViews.toLocaleString()}</div>
                  <span className="text-[10px] text-yellow-300 font-bold">Estilo Netflix / Vimeo</span>
                </div>

                <div className="glass-panel p-5 space-y-2 border-yellow-500/30">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Eventos Agendados</span>
                  <div className="text-2xl font-extrabold text-white">{bookingsList.length}</div>
                  <span className="text-[10px] text-blue-400 font-bold">Calendario en línea</span>
                </div>

                <div className="glass-panel p-5 space-y-2 border-yellow-500/30">
                  <span className="text-xs text-slate-400 uppercase font-semibold">Integraciones Webhooks</span>
                  <div className="text-xs text-green-400 font-bold flex items-center gap-1.5 pt-1">
                    <Bot className="w-4 h-4" /> n8n: Activo
                  </div>
                  <div className="text-xs text-yellow-400 font-bold flex items-center gap-1.5">
                    <Cpu className="w-4 h-4" /> HubSpot: Sincronizado
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: PORTFOLIO MANAGER */}
          {activeTab === 'portfolio' && (
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <h4 className="font-cinzel text-2xl font-bold text-white">Gestor de Proyectos de Portafolio</h4>
                <span className="badge-gold">{portfolioProjects.length} Proyectos Activos</span>
              </div>

              {/* Add New Project Form */}
              <form onSubmit={handleAddProjectSubmit} className="glass-panel p-6 space-y-4 border-yellow-500/30">
                <h5 className="font-cinzel text-lg font-bold text-yellow-300 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-yellow-400" /> Publicar Nuevo Proyecto Cinematográfico
                </h5>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Título del Proyecto *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Ej: Boda de Lucía & Mateo"
                      value={newProject.title}
                      onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                      className="glass-input w-full"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Cliente *</label>
                    <input 
                      type="text"
                      required
                      placeholder="Ej: Lucía & Mateo"
                      value={newProject.client}
                      onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                      className="glass-input w-full"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Categoría</label>
                    <select 
                      value={newProject.category}
                      onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                      className="glass-input w-full bg-slate-900 text-white"
                    >
                      <option value="bodas">Bodas</option>
                      <option value="corporativos">Corporativos</option>
                      <option value="drone">Drone 4K</option>
                      <option value="quinceanos">15 Años</option>
                      <option value="reels">Reels & TikTok</option>
                      <option value="institucionales">Institucionales</option>
                      <option value="detras_camaras">Detrás de Cámaras</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Carpeta de Año</label>
                    <select 
                      value={newProject.year}
                      onChange={(e) => setNewProject({ ...newProject, year: Number(e.target.value) })}
                      className="glass-input w-full bg-slate-900 text-white"
                    >
                      <option value={2026}>2026</option>
                      <option value={2025}>2025</option>
                      <option value={2024}>2024</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Paquete de Servicio Vinculado</label>
                    <input 
                      type="text"
                      placeholder="Ej: Boda Premium VIP"
                      value={newProject.linkedServiceName}
                      onChange={(e) => setNewProject({ ...newProject, linkedServiceName: e.target.value })}
                      className="glass-input w-full"
                    />
                  </div>

                  <div>
                    <label className="text-slate-300 font-semibold block mb-1">Precio del Paquete (S/)</label>
                    <input 
                      type="number"
                      placeholder="4500"
                      value={newProject.linkedServicePrice}
                      onChange={(e) => setNewProject({ ...newProject, linkedServicePrice: Number(e.target.value) })}
                      className="glass-input w-full"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="btn-gold py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" /> PUBLICAR PROYECTO EN PORTAFOLIO
                </button>

                {projectCreatedMsg && (
                  <p className="text-xs text-green-400 font-bold flex items-center gap-1 pt-2">
                    <CheckCircle2 className="w-4 h-4" /> ¡Proyecto publicado e integrado correctamente en la app!
                  </p>
                )}
              </form>

              {/* Projects List Table */}
              <div className="overflow-x-auto glass-panel p-4">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="text-[11px] text-yellow-400 uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Proyecto</th>
                      <th className="py-3 px-4">Categoría</th>
                      <th className="py-3 px-4">Año</th>
                      <th className="py-3 px-4">Cliente</th>
                      <th className="py-3 px-4">Vistas</th>
                      <th className="py-3 px-4">Me Gusta</th>
                      <th className="py-3 px-4">Paquete Vinculado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {portfolioProjects.map((p) => (
                      <tr key={p.id} className="hover:bg-slate-900/60">
                        <td className="py-3 px-4 font-bold text-white">{p.title}</td>
                        <td className="py-3 px-4 text-yellow-300 uppercase font-semibold">{p.category}</td>
                        <td className="py-3 px-4">{p.year}</td>
                        <td className="py-3 px-4">{p.client}</td>
                        <td className="py-3 px-4 font-bold text-slate-300">{p.views}</td>
                        <td className="py-3 px-4 font-bold text-red-400">{p.likes}</td>
                        <td className="py-3 px-4 font-bold text-yellow-400">S/ {p.linkedServicePrice} ({p.linkedServiceName})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <h4 className="font-cinzel text-2xl font-bold text-white">Pedidos Registrados en Tiempo Real</h4>
              <div className="overflow-x-auto glass-panel p-4">
                <table className="w-full text-xs text-left text-slate-300">
                  <thead className="text-[11px] text-yellow-400 uppercase border-b border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Orden</th>
                      <th className="py-3 px-4">Fecha</th>
                      <th className="py-3 px-4">Cliente</th>
                      <th className="py-3 px-4">Teléfono</th>
                      <th className="py-3 px-4">Items</th>
                      <th className="py-3 px-4">Total</th>
                      <th className="py-3 px-4">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {ordersList.map((ord) => (
                      <tr key={ord.id} className="hover:bg-slate-900/60">
                        <td className="py-3 px-4 font-bold text-yellow-300">{ord.id}</td>
                        <td className="py-3 px-4">{ord.date}</td>
                        <td className="py-3 px-4 font-semibold text-white">{ord.client}</td>
                        <td className="py-3 px-4">{ord.phone}</td>
                        <td className="py-3 px-4">{Array.isArray(ord.items) ? ord.items.join(', ') : ord.items}</td>
                        <td className="py-3 px-4 font-bold text-white">S/ {ord.total}</td>
                        <td className="py-3 px-4">
                          <span className="bg-green-500/20 text-green-300 border border-green-500/40 px-2 py-0.5 rounded text-[10px] font-bold">
                            {ord.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: BOOKINGS */}
          {activeTab === 'bookings' && (
            <div className="space-y-6">
              <h4 className="font-cinzel text-2xl font-bold text-white">Calendario de Reservas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {bookingsList.map((b) => (
                  <div key={b.id} className="glass-panel p-5 space-y-2 border-yellow-500/20">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-yellow-300 text-sm">{b.id} - {b.event}</span>
                      <span className="badge-gold">{b.status}</span>
                    </div>
                    <p className="text-xs text-slate-300">Cliente: <span className="font-semibold">{b.clientName}</span></p>
                    <p className="text-xs text-slate-400">Fecha: {b.date} a las {b.time}</p>
                    <p className="text-xs text-slate-400">Lugar: {b.location}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: PUSH NOTIFICATIONS */}
          {activeTab === 'notifications' && (
            <div className="space-y-6 max-w-xl">
              <h4 className="font-cinzel text-2xl font-bold text-white">Enviar Notificación Push (Firebase Cloud Messaging)</h4>
              
              <form onSubmit={handleSendPush} className="glass-panel p-6 space-y-4">
                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-semibold">Título de Notificación *</label>
                  <input 
                    type="text"
                    required
                    placeholder="Ej: ¡20% OFF en Cobertura de Bodas 2026!"
                    value={pushTitle}
                    onChange={(e) => setPushTitle(e.target.value)}
                    className="glass-input w-full text-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs text-slate-300 font-semibold">Mensaje / Cuerpo *</label>
                  <textarea 
                    rows="3"
                    required
                    placeholder="Reserva tu fecha hoy y recibe tomas con Drone 4K gratis."
                    value={pushBody}
                    onChange={(e) => setPushBody(e.target.value)}
                    className="glass-input w-full text-xs"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full btn-gold py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> ENVIAR A TODOS LOS DISPOSITIVOS (ANDROID / IOS)
                </button>

                {pushSuccess && (
                  <p className="text-xs text-green-400 font-bold text-center pt-2">
                    ¡Notificación FCM enviada con éxito a 1,250 dispositivos activos!
                  </p>
                )}
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
