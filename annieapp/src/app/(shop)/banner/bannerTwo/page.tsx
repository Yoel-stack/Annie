import { Title, transformArticle } from '@/src/components'
import { SelectArticles } from '@/src/components/selectarticles/SelectArticles'
import { prisma } from '@/src/lib/prisma'
import React from 'react'




export default async function selectArticles () {

  const selectArt = await prisma.article.findMany({
    where: {
      varios: true
    }
  })

  const articles = selectArt.map(transformArticle);

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

