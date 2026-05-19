'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { IoTrashBinOutline } from "react-icons/io5";

interface Article {
  title: string;
  slug: string;
  images: string[];
  price?: number;
  description?: string;
}


export default function LikedArticles() {
  const [favorites, setFavorites] = useState<Article[]>([]);

  useEffect(() => {
    // Intentamos obtener los datos de localStorage
    const savedData = localStorage.getItem("annie-likes");

    if (savedData) {
      try {
        const parsedData: Article[] = JSON.parse(savedData);
        setFavorites(parsedData);
      } catch (error) {
        console.error("Error al parsear los favoritos de Annie:", error);
      }
    }
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="py-20 text-center text-[#8C7E74] font-light">
        Aún no tienes artículos guardados en tu lista.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {favorites.map((item) => (
        <div
          key={item.slug}
          className="flex items-center gap-4 p-4 rounded-2xl shadow-sm border bg-[#FFF0ED] border-[#F3E5E2] hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-xl bg-white border border-[#F3E5E2]">
            <Image
              src={`/articles/${item.images[0]}`}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Contenedor de la información al costado derecho */}
          <div className="flex flex-col justify-center min-w-0">
            <h3 className="text-[#4A4540] font-medium text-base truncate mb-1">
              {item.title}
            </h3>
            {item.price && (
              <p className="text-[#F07C65] font-semibold text-base">
                ${item.price}
              </p>
            )}
          </div>
          <div className='flex items-center justify-center'>

          <button
        // onClick={() => handleDelete(item.slug)}
        className="cursor-pointer p-2 rounded-xl text-[#A39389] hover:text-[#E06A55] hover:bg-[#FBE3DF] transition-colors duration-200"
        title="Eliminar de favoritos"
        aria-label="Eliminar de favoritos"
        >
        <IoTrashBinOutline size={17} />
      </button>
        </div>
        </div>
      ))}
    </div>
  );
};
