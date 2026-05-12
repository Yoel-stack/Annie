import LikedArticles from '@/src/components/likedarticles/LikedArticles'
import React from 'react'

export default function likedArticles() {
  return (
    <main className="min-h-screen bg-[#FDF8F7] pt-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-light text-[#4A4540] px-6 mb-8">
          Mis Favoritos
        </h1>
        <LikedArticles />
      </div>
    </main>
  )
}