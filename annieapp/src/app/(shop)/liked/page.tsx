import LikedArticles from '@/src/components/likedarticles/LikedArticles'
import React from 'react'

export default function likedArticles() {
  return (
    <main className="mt-7 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6">
        <h1 className="flex justify-center uppercase text-lg font-bold text-[#4A4540] tracking-wider">
          Mis Favoritos
        </h1>

        <div className="w-full">
          <LikedArticles />
        </div>
      </div>
    </main>
  );
}