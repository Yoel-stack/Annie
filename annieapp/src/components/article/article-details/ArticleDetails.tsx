'use client';

import React from 'react';
import { SwiperS } from '@/src/components/article/SwiperSlide';
import { Article } from '@/src/interfaces';


interface Props { 
  article: Article;
};


export default function ArticleDetails({ article }: Props) {

  const handleLike = () => {

    const savedLikes = JSON.parse(localStorage.getItem("annie-likes") || "[]");

    const exists = savedLikes.some(
      (item: Article) => item.slug === article.slug,
    );

    if (!exists) {
      const newLikes = [...savedLikes, article];
      localStorage.setItem("annie-likes", JSON.stringify(newLikes));
      alert("¡Añadido a tus favoritos de Annie! ✨");
    }
  };

  return (
    <div className='pt-3 px-4 md:px-8 w-full max-w-6xl mx-auto'>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
      <div className="col-span-1 w-full max-w-[360px] sm:max-w-[450px] md:max-w-none mx-auto aspect-square max-h-[360px] sm:max-h-[450px] md:max-h-none overflow-hidden rounded-xl">
        <SwiperS title={article.title} images={article.images} />
      </div>

      <div className="col-span-1 px-2 flex flex-col mt-2 md:mt-0">
        <span className="text-xs sm:text-xs uppercase tracking-[0.25em] text-gray-500 mb-1.5">
          Papelería Creativa
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight mb-2 leading-tight text-[#4A4540]">
          {article.title}
        </h1>

        <div className="w-full border-t border-gray-100 my-4" />

        {article.price && (
          <p className="text-gray-700 text-2xl sm:text-3xl font-medium">${article.price}</p>
        )}

        {article.description && (
          <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base md:text-lg">
            {article.description}
          </p>
        )}

        <div className="mt-6 sm:mt-10">
          <button
            onClick={handleLike}
            className="w-full sm:w-auto text-center cursor-pointer px-8 py-3 bg-[#FCC6BB] text-[#7A4A43] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm"
            >
            Me encanta
          </button>
        </div>
      </div>
    </div>
            </div>
  );
};
