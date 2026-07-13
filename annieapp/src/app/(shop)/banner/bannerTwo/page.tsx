import { Title } from '@/src/components'
import { SelectArticles } from '@/src/components/selectarticles/SelectArticles'
import { initialData } from '@/src/seed'
import React from 'react'


const articles = initialData.articles


export default function selectArticles () {
  return (
    <div className="mt-4 sm:mt-8">
      <nav className="flex justify-center uppercase text-sm sm:text-base font-bold text-[#7A4A43]">
        <Title title="" subtitle="Articulos seleccionados" />
      </nav>
      <nav className="mt-2 sm:mt-4 px-4">
        <SelectArticles articles={articles} />
      </nav>
    </div>
  )
};

