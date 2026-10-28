import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, Sparkles, Phone, ArrowRight, Minimize2, CheckCircle2 } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menu';

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  time: string;
}

const STARTERS = [
  "¿Cuál es la pesca del día hoy?",
  "Ver precios de ceviches y tríos",
  "¿Hasta qué hora reciben pedidos?",
  "Quiero hacer un pedido para delivery"
];

interface ChatAssistantProps {
  isOpen: boolean;
  onToggle: () => void;
  initialQuery?: string;
  onClearInitialQuery?: () => void;
}

export const ChatAssistant: React.FC<ChatAssistantProps> = ({
  isOpen,
  onToggle,
  initialQuery,
  onClearInitialQuery
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'greeting',
      role: 'assistant',
      text: '¡Hola! Te doy la bienvenida a YAR\'S 🌊 ¿En qué delicia marina te provoco ayudar hoy? Puedo mostrarte nuestra carta, consultar disponibilidad o tomar los datos de tu pedido.',
      time: 'Justo ahora'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  // Handle external query (e.g. from Hero button or menu items)
  useEffect(() => {
    if (initialQuery && isOpen) {
      sendMessage(initialQuery);
      if (onClearInitialQuery) onClearInitialQuery();
    }
  }, [initialQuery, isOpen]);

  const sendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    setHasInteracted(true);
    const userText = textToSend.trim();
    setInput('');

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    setLoading(true);

    try {
      // Map history for Gemini API
      const apiPayload = updatedMessages.map(m => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        text: m.text
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiPayload }),
      });

      if (!response.ok) {
        throw new Error('Error al conectar con el asistente de YAR\'S');
      }

      const data = await response.json();
      const assistantReply = data.reply || '¡Con gusto te atiendo en YAR\'S! Cuéntame qué plato o consulta tienes hoy 🐟';

      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: assistantReply,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch {
      // Friendly fallback
      setMessages(prev => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: 'Estamos listos para atenderte con la pesca más fresca del día 🐟 Puedes consultarnos cualquier plato o confirmar directamente al WhatsApp 971 281 473.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={onToggle}
          aria-label="Abrir Asistente YAR'S"
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-gradient-to-r from-[#00A896] to-[#028090] text-white px-4 py-3.5 rounded-full shadow-2xl hover:shadow-[0_10px_25px_rgba(0,168,150,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 group border border-teal-300/40"
        >
          <div className="relative">
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center font-bold text-lg">
              🐟
            </div>
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-xs font-semibold text-teal-100 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-amber-300 animate-pulse" /> Asistente YAR'S
            </div>
            <div className="text-sm font-bold tracking-tight">¿Qué se te antoja hoy?</div>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-w-full h-[620px] max-h-[85vh] bg-[#0B2545] border border-cyan-800/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl animate-in fade-in slide-in-from-bottom-6 duration-300 ring-1 ring-cyan-500/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0B2545] via-[#134074] to-[#0B2545] p-4 border-b border-cyan-800/50 flex items-center justify-between text-white shadow-md relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#00A896] to-cyan-400 p-[2px] shadow-inner">
                  <div className="w-full h-full bg-[#0B2545] rounded-full flex items-center justify-center text-xl">
                    🐟
                  </div>
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#0B2545] rounded-full"></span>
              </div>
              <div>
                <div className="flex items-center gap-1.5 font-bold text-base text-white">
                  <span>Asistente YAR'S</span>
                  <span className="text-lg">🐟</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  En línea | Cocina abierta
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 text-slate-300">
              <a
                href={RESTAURANT_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                title="Atención humana WhatsApp"
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-emerald-400 hover:text-emerald-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={onToggle}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white"
                aria-label="Cerrar chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Notice Badge */}
          <div className="bg-[#134074]/50 border-b border-cyan-900/40 px-3 py-1.5 text-[11px] text-cyan-200/90 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              Atención Martes a Domingo 11:30 AM a 5:00 PM
            </span>
            <span className="text-cyan-300 font-semibold">Corte: 4:30 PM</span>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-[#0B2545]/90 via-[#0d2e55]/60 to-[#0B2545]">
            {messages.map((msg) => {
              const isAssistant = msg.role === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-md ${
                      isAssistant
                        ? 'bg-[#134074] text-slate-100 rounded-tl-sm border border-cyan-900/60'
                        : 'bg-gradient-to-r from-[#00A896] to-[#028090] text-white rounded-tr-sm shadow-teal-900/40'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.time}
                  </span>
                </div>
              );
            })}

            {/* Quick Starters (Hidden once user has interacted) */}
            {!hasInteracted && (
              <div className="pt-2 pb-1 space-y-2">
                <p className="text-xs text-cyan-300 font-medium px-1 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" /> Consultas frecuentes:
                </p>
                <div className="flex flex-col gap-1.5">
                  {STARTERS.map((starter, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(starter)}
                      className="text-left text-xs bg-[#134074]/70 hover:bg-[#1d508f] text-cyan-100 hover:text-white px-3 py-2 rounded-xl border border-cyan-700/40 transition-all hover:border-cyan-400 flex items-center justify-between group active:scale-[0.98]"
                    >
                      <span>{starter}</span>
                      <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing indicator */}
            {loading && (
              <div className="flex items-start">
                <div className="bg-[#134074] text-cyan-200 rounded-2xl rounded-tl-sm px-4 py-3 text-xs flex items-center gap-2 border border-cyan-900/60">
                  <span className="text-xs">escribiendo...</span>
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Action Helper Banner */}
          <div className="px-4 py-1.5 bg-[#081a32] border-t border-cyan-950 flex items-center justify-between text-[11px] text-slate-300">
            <span className="text-slate-400">¿Prefieres confirmar tu orden ya?</span>
            <a
              href={RESTAURANT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 transition-colors"
            >
              WhatsApp 971 281 473 <ArrowRight className="w-3 h-3" />
            </a>
          </div>

          {/* Input Form */}
          <div className="p-3 bg-[#0B2545] border-t border-cyan-900/60">
            <div className="flex items-center gap-2 bg-[#134074]/60 rounded-xl p-1.5 border border-cyan-800/60 focus-within:border-cyan-400 focus-within:ring-1 focus-within:ring-cyan-400/50 transition-all">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu consulta o pedido aquí..."
                disabled={loading}
                className="flex-1 bg-transparent text-sm text-white placeholder-slate-400 px-2 py-1 outline-none disabled:opacity-50"
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                aria-label="Enviar mensaje"
                className="w-9 h-9 rounded-lg bg-[#00A896] hover:bg-[#028090] disabled:bg-slate-700 disabled:opacity-40 text-white flex items-center justify-center transition-all cursor-pointer disabled:cursor-not-allowed shadow-md"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Required Footer Legend */}
            <p className="text-[10px] text-slate-400 text-center mt-2 px-1 leading-tight">
              Asistente virtual. Los pedidos y pagos los confirma nuestro equipo humano al 971 281 473.
            </p>
          </div>
        </div>
      )}
    </>
  );
};
