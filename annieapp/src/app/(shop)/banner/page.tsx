import { ArticlesGrid, Title } from '@/src/components'
import { initialData } from '@/src/seed'
import React from 'react'


const articles = initialData.articles


export default function newArticles () {
  return (
    <div className="mt-8">
      <nav className="flex justify-center uppercase text-sm sm:text-base font-bold text-[#7A4A43]">
        <Title title="" subtitle="Agregados recientemente" />
      </nav>
      <nav className="mt-4 px-4">
        <ArticlesGrid articles={articles} />
      </nav>
    </div>
  )
};
