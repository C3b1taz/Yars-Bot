export interface MenuItem {
  id: string;
  name: string;
  category: 'entradas' | 'ceviches' | 'tiraditos' | 'calientes' | 'combinados' | 'bebidas';
  price: number;
  priceNote?: string;
  description: string;
  isSpecialty?: boolean;
  badge?: string;
  image: string;
}

export const RESTAURANT_INFO = {
  name: "YAR'S - Marisquería & Cevichería",
  tagline: "El auténtico sabor del mar, fresco en tu mesa",
  phone: "971 281 473",
  phoneFormatted: "+51 971 281 473",
  whatsappUrl: "https://wa.me/51971281473",
  schedule: {
    days: "Martes a Domingo",
    hours: "11:30 a.m. a 5:00 p.m.",
    kitchenClose: "4:30 p.m.",
    closedDay: "Lunes cerrado (descanso y abastecimiento fresco)"
  },
  paymentMethods: ["Yape", "Plin", "Transferencia bancaria", "Tarjetas débito/crédito", "Efectivo contra entrega/salón"]
};

export const MENU_ITEMS: MenuItem[] = [
  // Entradas y Clásicos
  {
    id: 'leche-tigre',
    name: 'Leche de Tigre Clásica o al Ají Amarillo',
    category: 'entradas',
    price: 18.00,
    description: 'Con trozos de pesca del día, chicharrón crocante de pota, choclo tierno desgranado y canchita chulpi dorada.',
    badge: 'Frescura total',
    image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trilogia-tiraditos',
    name: 'Trilogía de Tiraditos',
    category: 'tiraditos',
    price: 32.00,
    description: 'Cortes finos y delicados de pesca del día marinados en tres exquisitas salsas: clásica al limón, crema de ají amarillo y rocoto ahumado.',
    badge: 'Tradición y color',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'tequenos-marinos',
    name: 'Tequeños Marinos (6 unid.)',
    category: 'entradas',
    price: 20.00,
    description: 'Crujientes masa wantán rellena de mixtura de mariscos selectos salteados, acompañados con crema de guacamole criollo.',
    badge: 'Para picar',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'
  },

  // Ceviches
  {
    id: 'ceviche-clasico',
    name: 'Ceviche Clásico de Pesca del Día',
    category: 'ceviches',
    price: 32.00,
    description: 'Pescado fresco del día cortado al momento, jugo de limón norteño, cebolla roja crujiente, camote glaseado, choclo y canchita.',
    badge: 'Emblemático',
    image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ceviche-mixto',
    name: 'Ceviche Mixto',
    category: 'ceviches',
    price: 38.00,
    description: 'Pesca fresca del día acompañada de calamares tiernos, pulpo seleccionado y langostinos en punto exacto de cocción marina.',
    badge: 'Imperdible',
    image: 'https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ceviche-carretillero',
    name: 'Ceviche Carretillero',
    category: 'ceviches',
    price: 36.00,
    description: 'Nuestro ceviche clásico tradicional servido en generosa porción con abundante chicharrón crocante y dorado de pota.',
    badge: 'El más pedido',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80'
  },

  // Platos Calientes y Especialidades
  {
    id: 'arroz-mariscos',
    name: 'Arroz con Mariscos',
    category: 'calientes',
    price: 36.00,
    description: 'Arroz salteado criollo al wok con generosa mixtura de mariscos al vino blanco, aderezo norteño y toque de queso parmesano.',
    badge: 'Cremoso y aromático',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chaufa-mariscos',
    name: 'Chaufa de Mariscos / Marino',
    category: 'calientes',
    price: 34.00,
    description: 'Granos de arroz al wok a fuego vivo con salsa de soya, cebollita china, huevo, aceite de ajonjolí y mixtura marina.',
    badge: 'Sabor al wok',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chicharron-pescado',
    name: 'Chicharrón de Pescado / Mixto',
    category: 'calientes',
    price: 35.00,
    description: 'Trozos marinados crocantes dorados a la perfección con yucas fritas suaves por dentro, sarza criolla y crema tártara de la casa.',
    badge: 'Puro crocante',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'parihuela-especial',
    name: 'Parihuela Especial',
    category: 'calientes',
    price: 40.00,
    description: 'Concentrado sustancioso y reconstituyente de pescado entero fresco, mixtura de mariscos, cangrejo y conchas en caldo aromatizado con chicha de jora.',
    isSpecialty: true,
    badge: 'Favorito del salón',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80'
  },

  // Combinados Insignia
  {
    id: 'duo-marino',
    name: 'Dúo Marino',
    category: 'combinados',
    price: 38.00,
    description: 'La combinación perfecta: Ceviche clásico de pesca del día + Tu elección entre Arroz con mariscos criollo o Chicharrón crocante.',
    isSpecialty: true,
    badge: 'Favorito del salón',
    image: 'https://images.unsplash.com/photo-1535400255456-984241443b29?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'trio-marino-yars',
    name: 'Trío Marino YAR\'S',
    category: 'combinados',
    price: 45.00,
    description: 'La experiencia marina completa y definitiva: Ceviche clásico refrescante + Arroz con mariscos criollo + Chicharrón crocante con tártara.',
    isSpecialty: true,
    badge: 'Favorito del salón',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80'
  },

  // Bebidas
  {
    id: 'chicha-morada-jarra',
    name: 'Jarra de Chicha Morada Casera (1L)',
    category: 'bebidas',
    price: 14.00,
    description: 'Elaborada artesanalmente con maíz morado hervido con piña, manzana, membrillo, canela y toques de limón.',
    priceNote: 'Vaso: S/ 5.00',
    badge: '100% Natural',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maracuya-jarra',
    name: 'Jarra de Maracuyá (1L)',
    category: 'bebidas',
    price: 14.00,
    description: 'Fruta fresca de maracuyá seleccionada, balance perfecto entre dulzor y acidez cítrica refrescante.',
    priceNote: 'Vaso: S/ 5.00',
    badge: 'Refrescante',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chicha-morada-vaso',
    name: 'Vaso de Chicha Morada Casera',
    category: 'bebidas',
    price: 5.00,
    description: 'Vaso individual helado de nuestra tradicional chicha morada hecha en casa.',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'maracuya-vaso',
    name: 'Vaso de Maracuyá',
    category: 'bebidas',
    price: 5.00,
    description: 'Vaso individual frío con jugo natural de maracuyá.',
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gaseosas',
    name: 'Bebidas personales / Gaseosas',
    category: 'bebidas',
    price: 5.00,
    priceNote: 'S/ 5.00 - S/ 7.00',
    description: 'Inca Kola, Coca Cola, Sprite y agua mineral (variedad regular y sin azúcar en presentación personal).',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80'
  }
];
