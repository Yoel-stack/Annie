'use client';

import React, { useEffect, useState } from 'react';
import { SwiperS } from '@/src/components/article/SwiperSlide';
import { Article } from '@/src/interfaces';
import { RedirectToSignIn, useClerk, useUser } from "@clerk/nextjs";


interface Props { 
  article: Article;
};


export default function ArticleDetails({ article }: Props) {
  
  const { isLoaded, isSignedIn } = useUser(); // Obtenemos el estado de autenticación
  const [shouldRedirect] = useState(false);

  const { openSignIn } = useClerk();

  const [isLiked, setIsLiked] = useState(false);
  const [toast, setToast] = useState({ mensaje: "", visible: false })
  
  useEffect(() => {
    // Solo leemos el localStorage si Clerk ya cargó y el usuario está logueado
    if (isLoaded && isSignedIn) {
      const saveData = localStorage.getItem("annie-likes");
      if (saveData) {
        try {
          const favorites: Article[] = JSON.parse(saveData);
          const existe = favorites.some((item) => item.slug === article.slug);
          setIsLiked(existe);
        } catch (error) {
          console.error("Error al leer favoritos:", error);
        }
      }
    } else {
      // Si el usuario cierra sesión, nos aseguramos de resetear el estado visual del botón
      setIsLiked(false);
    }
  }, [article.slug, isLoaded, isSignedIn]);

  const handleLike = () => {
    if (!isSignedIn) {
      openSignIn();
      return;
    }

    // Si llegó aquí, significa que SÍ está logueado
    const newState = !isLiked;
    setIsLiked(newState);

    const savedData = localStorage.getItem("annie-likes");
    let favorites: Article[] = savedData ? JSON.parse(savedData) : [];

    if (newState === true) {
      favorites.push(article);
      triggerToast("Añadido a tus favoritos");
    } else {
      favorites = favorites.filter((item) => item.slug !== article.slug);
      triggerToast("Quitado de favoritos");
    }
    localStorage.setItem("annie-likes", JSON.stringify(favorites));
  };

  if (shouldRedirect) {
    return <RedirectToSignIn />;
  };

  const triggerToast = (mensaje: string) => {
    setToast({ mensaje, visible: true });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  };

  return (
    <div className="pt-3 px-4 md:px-8 w-full max-w-6xl mx-auto">
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
            <p className="text-gray-800 text-2xl sm:text-3xl font-medium">
              ${article.price}
            </p>
          )}

          {article.description && (
            <p className="mt-4 text-gray-500 leading-relaxed text-sm sm:text-base md:text-lg">
              {article.description}
            </p>
          )}

          <div className="mt-6 sm:mt-10">
            <button
              onClick={handleLike}
              disabled={!isLoaded}
              aria-label="Agregar a favoritos"
              className="w-full sm:w-auto text-center cursor-pointer px-6 py-3 bg-[#FBB4A5] text-[#7A4A43] text-xs sm:text-sm font-bold uppercase tracking-widest rounded-xl hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm "
            >
              {isLiked ? "Quitar" : "Me encanta"}
            </button>
            {toast.visible && (
              <div className="fixed bottom-5 right-5 bg-zinc-900 text-white px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-fade-in-up z-40 text-sm font-medium border border-zinc-800">
                {toast.mensaje}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
