import React, { createContext, useContext, useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Cart State
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Modals State
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedBookingItem, setSelectedBookingItem] = useState(null);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);
  const [adminOpen, setAdminOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalType, setLegalType] = useState('privacy');

  // Portfolio Specific State
  const [portfolioProjects, setPortfolioProjects] = useState(PORTFOLIO_PROJECTS);
  const [selectedProject, setSelectedProject] = useState(null);
  const [likedProjects, setLikedProjects] = useState(['proj-1', 'proj-3']);

  // User & Rewards State
  const [user, setUser] = useState({
    name: 'Cliente VIP',
    email: 'cliente@4kmproducciones.com',
    role: 'cliente',
    isLoggedIn: true
  });
  const [rewardsPoints, setRewardsPoints] = useState(150);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Dashboard Mock Data
  const [ordersList, setOrdersList] = useState([
    {
      id: "4KM-9821",
      date: "2026-08-05",
      client: "María Torres",
      email: "maria.torres@gmail.com",
      phone: "+51 987654321",
      items: ["Boda Standard", "USB de Cristal 64GB"],
      total: 3050,
      status: "Confirmado",
      paymentMethod: "Mercado Pago"
    },
    {
      id: "4KM-9822",
      date: "2026-08-06",
      client: "Inmobiliaria Horizon",
      email: "contacto@horizon.pe",
      phone: "+51 912345678",
      items: ["Inspección & Inmobiliaria Drone", "Marketing Standard Pro"],
      total: 3350,
      status: "En Proceso",
      paymentMethod: "Transferencia BCP"
    }
  ]);

  const [bookingsList, setBookingsList] = useState([
    {
      id: "BK-401",
      clientName: "Familia Rivas",
      date: "2026-09-15",
      time: "16:00",
      event: "15 Años Standard",
      location: "Miraflores, Lima",
      status: "Agendado"
    }
  ]);

  // Cart Functions
  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.id === id) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Cart Subtotals & Taxes (IGV 18%)
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedCoupon ? (subtotal * appliedCoupon.percentage) / 100 : 0;
  const taxableAmount = subtotal - discountAmount;
  const igvAmount = taxableAmount * 0.18;
  const total = taxableAmount + igvAmount;

  // Apply Coupon Code
  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === "4KMREWARDS" || cleanCode === "CINE2026" || cleanCode === "DESCUENTO10") {
      setAppliedCoupon({ code: cleanCode, percentage: 10 });
      return { success: true, message: "¡Cupon de 10% aplicado correctamente!" };
    }
    if (cleanCode === "PUNTOS50") {
      if (rewardsPoints >= 50) {
        setAppliedCoupon({ code: cleanCode, percentage: 15 });
        setRewardsPoints((prev) => prev - 50);
        return { success: true, message: "¡Has canjeado 50 Puntos por 15% de descuento!" };
      } else {
        return { success: false, message: "Necesitas al menos 50 Puntos 4KM para este cupón." };
      }
    }
    return { success: false, message: "Cupón no válido o expirado." };
  };

  // Open Booking with pre-selected item
  const openBookingWithItem = (item) => {
    setSelectedBookingItem(item);
    setBookingOpen(true);
  };

  // Portfolio functions
  const toggleLikeProject = (id) => {
    setLikedProjects((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
    setPortfolioProjects((prev) =>
      prev.map((p) => {
        if (p.id === id) {
          const isLiked = likedProjects.includes(id);
          return { ...p, likes: p.likes + (isLiked ? -1 : 1) };
        }
        return p;
      })
    );
  };

  const addPortfolioProject = (newProj) => {
    const created = {
      id: `proj-${Date.now()}`,
      views: 0,
      likes: 0,
      featured: true,
      trending: true,
      ...newProj
    };
    setPortfolioProjects((prev) => [created, ...prev]);
    return created;
  };

  // Add points from minijuego
  const addRewardPoints = (points) => {
    setRewardsPoints((prev) => prev + points);
  };

  // Add new order
  const createOrder = (orderData) => {
    const newOrder = {
      id: `4KM-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().split('T')[0],
      ...orderData,
      status: "Confirmado"
    };
    setOrdersList((prev) => [newOrder, ...prev]);
    clearCart();
    return newOrder;
  };

  // Add new booking
  const createBooking = (bookingData) => {
    const newBooking = {
      id: `BK-${Math.floor(100 + Math.random() * 900)}`,
      ...bookingData,
      status: "Agendado"
    };
    setBookingsList((prev) => [newBooking, ...prev]);
    return newBooking;
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        cartOpen,
        setCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        discountAmount,
        igvAmount,
        total,
        appliedCoupon,
        applyCoupon,
        bookingOpen,
        setBookingOpen,
        selectedBookingItem,
        openBookingWithItem,
        quoteOpen,
        setQuoteOpen,
        gameOpen,
        setGameOpen,
        adminOpen,
        setAdminOpen,
        legalOpen,
        setLegalOpen,
        legalType,
        setLegalType,
        portfolioProjects,
        selectedProject,
        setSelectedProject,
        likedProjects,
        toggleLikeProject,
        addPortfolioProject,
        user,
        setUser,
        rewardsPoints,
        addRewardPoints,
        ordersList,
        createOrder,
        bookingsList,
        createBooking
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
