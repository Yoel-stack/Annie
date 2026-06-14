'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoTrashBinOutline } from "react-icons/io5";


interface Article {
  title: string;
  slug: string;
  images: string[];
  price?: number;
  description?: string;
};


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

  const handleDelete = (slug: string) => {
    const updatedFavorites = favorites.filter((item) => item.slug !== slug);

    setFavorites(updatedFavorites);

    localStorage.setItem("annie-likes", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <div className="py-20 text-center text-[#8C7E74] font-light">
        Aún no tienes artículos guardados en tu lista.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {favorites.map((item) => (
        <div
          key={item.slug}
          className="flex items-center gap-4 p-3 rounded-xl shadow-sm bg-foreground border-[#F3E5E2] hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-20 h-20 sm:w-30 sm:h-30 flex-shrink-0 overflow-hidden rounded-xl">
            <Image
              src={`/articles/${item.images[0]}`}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center min-w-0 flex-1">
            <Link href= {`/article/${item.slug}`}>
            <h3 className="text-[#4A4540] cursor-pointer font-medium text-sm break-words sm:text-base mb-1">
              {item.title}
            </h3>
            </Link>
            {item.price && (
              <p className="text-black text-base">
                ${item.price}
              </p>
            )}
          </div>
          <div className='flex items-center justify-center'>

          <button
        onClick={() => handleDelete(item.slug)}
        className="cursor-pointer p-2 rounded-xl text-[#7A4A43] hover:bg-[#FBB4A5] transition-colors duration-200"
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
