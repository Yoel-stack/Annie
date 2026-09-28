import { ArticlesGrid, Title, transformArticle } from '@/src/components'
import { prisma } from '@/src/lib/prisma'
import React from 'react'


export default async function newArticles () {

  const newArt = await prisma.article.findMany({
    orderBy: {
      createdAt: 'desc'
    },
    take: 5
  });

  const articles = newArt.map(transformArticle);

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

