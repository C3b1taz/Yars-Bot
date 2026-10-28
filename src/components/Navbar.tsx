import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, Clock, MapPin, Fish } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

interface NavbarProps {
  onOpenChat: (initialQuery?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Carta Marina', href: '#carta' },
    { label: 'Delivery & Pedidos', href: '#delivery' },
    { label: 'Horario', href: '#horario' },
    { label: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B2545]/95 backdrop-blur-md shadow-lg border-b border-cyan-900/60 py-2.5'
          : 'bg-gradient-to-b from-[#0B2545]/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00A896] to-cyan-300 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <span className="text-xl">🐟</span>
            </div>
            <div>
              <div className="font-heading font-extrabold text-xl tracking-wider text-white flex items-center gap-1">
                YAR'S
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#00A896]/20 text-[#00A896] border border-[#00A896]/40 hidden sm:inline-block">
                  Cevichería
                </span>
              </div>
              <div className="text-[10px] tracking-widest uppercase text-cyan-200/80 font-medium">
                Marisquería Marina
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-slate-200 hover:text-[#00A896] transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Dynamic Status + Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Status Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#134074]/80 border border-cyan-800/80 text-xs text-cyan-100">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium">Abierto hoy hasta las 5:00 PM</span>
            </div>

            {/* Asistente Button */}
            <button
              onClick={() => onOpenChat()}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-lg bg-[#134074] hover:bg-[#1c5596] text-cyan-200 hover:text-white border border-cyan-700/60 transition-all shadow-sm active:scale-95"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#00A896]" />
              <span>Asistente IA</span>
            </button>

            {/* WhatsApp Contact */}
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg bg-[#00A896] hover:bg-[#028090] text-white transition-all shadow-md shadow-teal-900/40 hover:shadow-teal-700/60 active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>971 281 473</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenChat()}
              className="p-2 rounded-lg bg-[#134074] text-cyan-300 border border-cyan-700/60 text-xs flex items-center gap-1"
            >
              <Fish className="w-4 h-4 text-[#00A896]" />
              <span className="font-semibold">IA</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#134074]/80 text-slate-200 hover:text-white border border-cyan-800"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B2545]/98 border-b border-cyan-900/80 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="flex items-center justify-between py-2 border-b border-cyan-950 text-xs text-cyan-200">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Abierto hoy hasta las 5:00 PM
            </span>
            <span className="text-slate-400">Corte cocina: 4:30 PM</span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-[#134074] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#134074] text-cyan-100 font-semibold text-sm border border-cyan-700"
            >
              <MessageSquare className="w-4 h-4 text-[#00A896]" />
              Habla con nuestro Asistente Virtual
            </button>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#00A896] text-white font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              Escríbenos por WhatsApp (971 281 473)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
