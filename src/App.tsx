/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Specialties } from './components/Specialties';
import { MenuSection } from './components/MenuSection';
import { OrderConditions } from './components/OrderConditions';
import { HoursAndContact } from './components/HoursAndContact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInitialQuery, setChatInitialQuery] = useState<string | undefined>(undefined);

  const handleOpenChat = (query?: string) => {
    if (query) {
      setChatInitialQuery(query);
    }
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen(prev => !prev);
  };

  const handleClearInitialQuery = () => {
    setChatInitialQuery(undefined);
  };

  return (
    <div className="min-h-screen bg-[#0B2545] text-slate-100 flex flex-col font-sans selection:bg-[#00A896] selection:text-white">
      {/* Top Sticky Navigation */}
      <Navbar onOpenChat={handleOpenChat} />

      {/* Main Single Page Scroll Content */}
      <main className="flex-1">
        {/* 1. Portada (Hero) */}
        <Hero onOpenChat={() => handleOpenChat()} />

        {/* 3. Especialidades y Combinados (Dúos, Tríos, Parihuela) */}
        <Specialties onAskAboutDish={handleOpenChat} />

        {/* 2. Carta Marina Completa (Entradas, Ceviches, Tiraditos, Calientes, Bebidas) */}
        <MenuSection onAskAboutDish={handleOpenChat} />

        {/* 4. Condiciones de Pedido & Delivery */}
        <OrderConditions />

        {/* 5. Horario de Atención & 6. Contacto */}
        <HoursAndContact onOpenChat={() => handleOpenChat()} />
      </main>

      {/* Footer */}
      <Footer onOpenChat={() => handleOpenChat()} />

      {/* Persistent Virtual Assistant Chatbot */}
      <ChatAssistant
        isOpen={isChatOpen}
        onToggle={handleToggleChat}
        initialQuery={chatInitialQuery}
        onClearInitialQuery={handleClearInitialQuery}
      />
    </div>
  );
}
