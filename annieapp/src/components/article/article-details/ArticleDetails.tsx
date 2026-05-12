'use client';

import React from 'react';
import { SwiperS } from '@/src/components/article/SwiperSlide';

// Definimos la interfaz para que TypeScript sepa qué tiene un artículo
interface Article {
  title: string;
  images: string[];
  price?: number;
  description?: string;
}

interface Props { 
  article: Article;
}


export default function ArticleDetails({ article }: Props) {

  const handleLike = () => {
    // 1. Obtenemos lo que ya existe en favoritos
    const savedLikes = JSON.parse(localStorage.getItem('annie-likes') || '[]');
    
    // 2. Verificamos si ya existe para no duplicar
    const exists = savedLikes.some((item: Article) => item.title === article.title);
    
    if (!exists) {
      const newLikes = [...savedLikes, article];
      localStorage.setItem('annie-likes', JSON.stringify(newLikes));
      alert('¡Añadido a tus favoritos de Annie! ✨');
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Sección del Swiper */}
  <div className="col-span-1">
    <SwiperS title={article.title} images={article.images} />
  </div>

  {/* Sección de Información con estilo Annie */}
  <div className="col-span-1 px-5 flex flex-col">
    {/* Título con color café suave de tu diseño */}
  <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2">
       Papelería Creativa
     </span>
    <h1 className="text-4xl font-light tracking-tight mb-3 leading-tight text-[#4A4540]">
      {article.title}
    </h1>

    {/* Línea divisoria sutil para mantener el look de "libreta" */}
    <div className="w-full border-t border-gray-100 my-4" />

    {/* Precio con el mismo estilo de gris/negro suave */}
    {article.price && (
      <p className="text-gray-700 text-3xl font-medium">
        ${article.price}
      </p>
    )}

    {/* Descripción con texto más aireado */}
    {article.description && (
      <p className="mt-6 text-gray-500 leading-relaxed text-lg">
        {article.description}
      </p>
    )}

    {/* Botón de acción (ej. Comprar o Agregar) con tu color pastel */}
    <div className="mt-10">
      <button 
          onClick={handleLike}
          className="px-8 py-3 bg-[#FCC6BB] text-[#7A4A43] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm"
        >
          Me encanta
        </button>
    </div>
  </div>
</div>
  );
};
