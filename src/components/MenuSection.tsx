import React, { useState } from 'react';
import { Search, MessageSquare, Phone, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO, MenuItem } from '../data/menu';

interface MenuSectionProps {
  onAskAboutDish: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onAskAboutDish }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Toda la Carta' },
    { id: 'entradas', label: 'Entradas & Clásicos' },
    { id: 'ceviches', label: 'Ceviches' },
    { id: 'tiraditos', label: 'Tiraditos' },
    { id: 'calientes', label: 'Platos Calientes' },
    { id: 'combinados', label: 'Combinados Insignia' },
    { id: 'bebidas', label: 'Bebidas' },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="carta" className="py-20 bg-[#0B2545] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/50 border border-cyan-700/60 text-cyan-200 text-xs font-semibold uppercase tracking-wider mb-3">
            <span>🐟</span> Nuestra Carta Marina
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Sabores del Litoral
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Preparados al momento con pesca fresca garantizada, recetas criollas auténticas e insumos de primera calidad.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-10 space-y-4">
          {/* Search bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar ceviche, arroz con mariscos, parihuela, chicha..."
              className="w-full pl-11 pr-4 py-3 bg-[#134074]/60 border border-cyan-800/80 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-slate-800"
              >
                Limpiar
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-xl font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#00A896] text-white shadow-lg shadow-teal-900/40 border border-teal-300/40 scale-105'
                      : 'bg-[#134074]/50 hover:bg-[#134074] text-slate-300 hover:text-white border border-cyan-900/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-[#134074]/40 hover:bg-[#134074]/70 border border-cyan-900/70 hover:border-cyan-500/50 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {dish.name}
                  </h3>
                  <div className="text-right shrink-0">
                    <span className="font-heading text-xl font-extrabold text-[#00A896]">
                      S/ {dish.price.toFixed(2)}
                    </span>
                    {dish.priceNote && (
                      <span className="block text-[10px] text-cyan-200 font-medium">
                        {dish.priceNote}
                      </span>
                    )}
                  </div>
                </div>

                {dish.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-700/50 text-[10px] font-bold tracking-wide uppercase mb-3">
                    {dish.badge}
                  </span>
                )}

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {dish.description}
                </p>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-cyan-900/60 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => onAskAboutDish(`¿Tienen disponible hoy el plato: ${dish.name}?`)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0B2545] hover:bg-[#081a32] text-cyan-200 hover:text-white border border-cyan-800/80 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#00A896]" />
                  <span>Preguntar a IA</span>
                </button>

                <a
                  href={`${RESTAURANT_INFO.whatsappUrl}?text=${encodeURIComponent(
                    `¡Hola YAR'S! Deseo pedir: ${dish.name} (S/ ${dish.price.toFixed(2)})`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#00A896]/20 hover:bg-[#00A896] text-cyan-100 hover:text-white border border-[#00A896]/50 transition-all font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A896] group-hover:text-white" />
                  <span>Pedir WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#134074]/20 rounded-2xl border border-cyan-900/40">
            <span className="text-4xl">🐟</span>
            <p className="mt-3 text-slate-300 font-medium">No encontramos platos con "{searchTerm}"</p>
            <p className="text-xs text-slate-400 mt-1">Prueba con otra palabra o consulta a nuestro asistente virtual.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('todos');
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-[#00A896] text-white text-xs font-bold"
            >
              Ver toda la carta
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
