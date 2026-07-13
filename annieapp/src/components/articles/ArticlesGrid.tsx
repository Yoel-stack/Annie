import React from 'react'
import { ArticlesGridItem } from './ArticlesGridItem';
import { Article } from '@/src/interfaces';


interface Props { 
  articles: Article[];
};


export const ArticlesGrid = ({ articles }:Props) => {
  
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
      {articles.map((article) => (
        <ArticlesGridItem key={article.slug} article={article} />
      ))}
    </div>
  )
};
