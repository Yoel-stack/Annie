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
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    //   <div className="col-span-1">
    //     <SwiperS title={article.title} images={article.images} />
    //   </div>

    //   <div className="col-span-1 px-5">
    //     <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
    //     {article.price && (
    //       <p className="text-black text-2xl font-semibold">${article.price}</p>
    //     )}
    //     {article.description && (
    //       <p className="mt-4 text-gray-600 leading-relaxed">
    //         {article.description}
    //       </p>
    //     )}
    //   </div>
    // </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
  {/* Sección del Swiper */}
  <div className="col-span-1">
    <SwiperS title={article.title} images={article.images} />
  </div>

  {/* Sección de Información con estilo Annie */}
  <div className="col-span-1 px-5 flex flex-col">
    {/* Título con color café suave de tu diseño */}
    <h1 className="text-3xl font-semibold mb-2 text-[#4A4540]">
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
      <p className="mt-6 text-gray-500 leading-relaxed text-sm">
        {article.description}
      </p>
    )}

    {/* Botón de acción (ej. Comprar o Agregar) con tu color pastel */}
    <div className="mt-10">
      <button className="px-8 py-3 bg-[#FCC6BB] text-[#7A4A43] text-sm font-bold uppercase tracking-widest rounded-full hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm">
        Me encanta
      </button>
    </div>
  </div>
</div>
  );
};