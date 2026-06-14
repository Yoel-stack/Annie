import LikedArticles from '@/src/components/likedarticles/LikedArticles'
import React from 'react'

export default function likedArticles() {
  return (
    <main className="mt-8 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <h1 className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
          Mis Favoritos
        </h1>

        <div className="w-full">
          <LikedArticles />
        </div>
      </div>
    </main>
  );
};