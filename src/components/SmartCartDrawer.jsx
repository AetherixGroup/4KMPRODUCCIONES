import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { UPSELL_PRODUCTS } from '../data/catalog';
import { X, Trash2, Plus, Minus, Tag, CreditCard, Send, CheckCircle2, Sparkles, ShieldCheck, ShoppingBag } from 'lucide-react';

export const SmartCartDrawer = () => {
  const { 
    cart, 
    cartOpen, 
    setCartOpen, 
    removeFromCart, 
    updateQuantity, 
    addToCart, 
    subtotal, 
    discountAmount, 
    igvAmount, 
    total, 
    appliedCoupon, 
    applyCoupon, 
    createOrder 
  } = useApp();

  const [couponCode, setCouponCode] = useState('');
  const [couponMsg, setCouponMsg] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('mercadopago');
  const [clientData, setClientData] = useState({ name: '', phone: '', email: '', notes: '' });
  const [orderSuccess, setOrderSuccess] = useState(null);

  if (!cartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode) return;
    const res = applyCoupon(couponCode);
    setCouponMsg(res);
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    if (!clientData.name || !clientData.phone) {
      alert("Por favor ingresa tu Nombre y Teléfono para procesar el pedido.");
      return;
    }

    const newOrder = createOrder({
      client: clientData.name,
      phone: clientData.phone,
      email: clientData.email || 'cliente@4kmproducciones.com',
      items: cart.map(i => `${i.name || i.title} (x${i.quantity})`),
      subtotal,
      discount: discountAmount,
      igv: igvAmount,
      total,
      paymentMethod,
      notes: clientData.notes
    });

    setOrderSuccess(newOrder);
  };

  const sendWhatsAppOrder = (order) => {
    const text = `*NUEVO PEDIDO 4KM PRODUCCIONES*%0A` +
      `*Orden:* ${order.id}%0A` +
      `*Cliente:* ${order.client}%0A` +
      `*Teléfono:* ${order.phone}%0A` +
      `*Items:* ${order.items.join(', ')}%0A` +
      `*Total con IGV:* S/ ${order.total.toFixed(2)}%0A` +
      `*Método:* ${order.paymentMethod}`;
    window.open(`https://wa.me/51994253131?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-lg bg-[#0a0a0f] border-l border-yellow-500/30 h-full flex flex-col justify-between shadow-2xl relative">
        
        {/* Drawer Header */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-black/40">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-yellow-400" />
            <h3 className="font-cinzel text-xl font-bold text-white">Carrito Inteligente 4KM</h3>
          </div>
          <button 
            onClick={() => { setCartOpen(false); setOrderSuccess(null); }}
            className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Order Success View */}
        {orderSuccess ? (
          <div className="p-8 text-center space-y-6 flex-1 flex flex-col justify-center items-center">
            <div className="w-20 h-20 rounded-full bg-yellow-500/20 border-2 border-yellow-400 flex items-center justify-center text-yellow-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h4 className="font-cinzel text-2xl font-bold text-white">¡PEDIDO REGISTRADO!</h4>
            <p className="text-sm text-slate-300">
              Número de Orden: <span className="font-bold text-yellow-400">{orderSuccess.id}</span>
            </p>
            <p className="text-xs text-slate-400">
              Hemos enviado tu confirmación y activado el flujo automático en n8n & CRM HubSpot.
            </p>

            <div className="space-y-3 w-full max-w-xs pt-4">
              <button 
                onClick={() => sendWhatsAppOrder(orderSuccess)}
                className="w-full btn-gold py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>CONFIRMAR POR WHATSAPP (994253131)</span>
              </button>

              <button 
                onClick={() => { setCartOpen(false); setOrderSuccess(null); }}
                className="w-full btn-outline-gold py-2.5 text-xs font-bold"
              >
                <span>SEGUIR NAVEGANDO</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Drawer Body - Items & Upsells */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              
              {cart.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <ShoppingBag className="w-16 h-16 text-slate-700 mx-auto" />
                  <p className="text-slate-400 text-sm">Tu carrito de servicios está vacío.</p>
                  <p className="text-xs text-slate-500">Agrega un paquete de boda, corporativo, drone o marketing para iniciar.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Servicios Seleccionados</span>
                  {cart.map((item) => (
                    <div 
                      key={item.id}
                      className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 space-y-1">
                        <h5 className="font-semibold text-sm text-yellow-300">{item.name || item.title}</h5>
                        <p className="text-xs font-bold text-slate-300">S/ {item.price} c/u</p>
                      </div>

                      <div className="flex items-center gap-2 bg-black/60 rounded-lg p-1 border border-slate-700">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-white px-2">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-slate-400 hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-400 hover:text-red-300"
                        title="Eliminar"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* UPSELL CROSS-SELLING SECTION */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-xs font-bold text-yellow-300 uppercase tracking-wider">ADICIONALES RECOMENDADOS (UPSELL)</span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {UPSELL_PRODUCTS.slice(0, 3).map((prod) => (
                    <div 
                      key={prod.id}
                      className="p-3 rounded-xl bg-slate-900/60 border border-yellow-500/10 hover:border-yellow-500/30 flex items-center justify-between gap-3 text-xs"
                    >
                      <div>
                        <p className="font-semibold text-slate-200">{prod.name}</p>
                        <p className="text-yellow-400 font-bold">S/ {prod.price}</p>
                      </div>

                      <button
                        onClick={() => addToCart({ ...prod, quantity: 1 })}
                        className="btn-outline-gold py-1.5 px-3 text-[10px] font-bold uppercase shrink-0"
                      >
                        + AGREGAR
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coupon Section */}
              <div className="pt-4 border-t border-slate-800 space-y-2">
                <span className="text-xs font-semibold text-slate-400">Cupón de Descuento / Puntos 4KM:</span>
                <form onSubmit={handleApplyCoupon} className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ej: 4KMREWARDS o PUNTOS50"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="glass-input text-xs flex-1 uppercase"
                  />
                  <button type="submit" className="btn-outline-gold text-xs py-2 px-3">
                    APLICAR
                  </button>
                </form>
                {couponMsg && (
                  <p className={`text-[11px] ${couponMsg.success ? 'text-green-400' : 'text-red-400'}`}>
                    {couponMsg.message}
                  </p>
                )}
              </div>

              {/* Client Info Form */}
              {cart.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Datos de Contacto</span>
                  <input 
                    type="text"
                    placeholder="Tu Nombre completo *"
                    value={clientData.name}
                    onChange={(e) => setClientData({ ...clientData, name: e.target.value })}
                    className="glass-input w-full text-xs"
                    required
                  />
                  <input 
                    type="tel"
                    placeholder="Teléfono / WhatsApp (Ej: 994253131) *"
                    value={clientData.phone}
                    onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                    className="glass-input w-full text-xs"
                    required
                  />
                </div>
              )}

              {/* Payment Method Selector */}
              {cart.length > 0 && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">Método de Pago</span>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('mercadopago')}
                      className={`p-2.5 rounded-lg border text-center font-semibold transition-all ${
                        paymentMethod === 'mercadopago' 
                          ? 'border-yellow-400 bg-yellow-500/10 text-yellow-300' 
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      Mercado Pago / Visa
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('yape_plin')}
                      className={`p-2.5 rounded-lg border text-center font-semibold transition-all ${
                        paymentMethod === 'yape_plin' 
                          ? 'border-yellow-400 bg-yellow-500/10 text-yellow-300' 
                          : 'border-slate-800 bg-slate-900 text-slate-400'
                      }`}
                    >
                      Yape / Plin / BCP
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Drawer Footer - Totals & Submit */}
            {cart.length > 0 && (
              <div className="p-6 bg-black/80 border-t border-slate-800 space-y-4">
                <div className="space-y-1.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>S/ {subtotal.toFixed(2)}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-yellow-400 font-semibold">
                      <span>Descuento ({appliedCoupon?.code}):</span>
                      <span>- S/ {discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-400">
                    <span>IGV (18%):</span>
                    <span>S/ {igvAmount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-slate-800">
                    <span>TOTAL A PAGAR:</span>
                    <span className="text-gold-gradient">S/ {total.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full btn-gold py-3.5 text-sm font-bold uppercase tracking-wider"
                >
                  <span>CONFIRMAR Y CONTRATAR</span>
                </button>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
};
