'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';

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
    const savedData = localStorage.getItem('annie-likes');
    
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
          className="p-4 rounded-2xl shadow-sm border border-[#F3E5E2]"
        >
          <Image
           src={`/${item.images[0]}`} 
    alt={item.title} 
    fill // Esto hace que ocupe todo el div padre
    className="object-cover"
          />
          <h3 className="text-[#4A4540] font-medium">{item.title}</h3>
          <p className="text-[#F07C65]">${item.price}</p>
        </div>
      ))}
    </div>
  );
};
