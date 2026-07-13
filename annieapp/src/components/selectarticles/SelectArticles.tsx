import { SelectArticlesgridItem } from './SelectArticlesGridItem';
import { Article } from '@/src/interfaces';
import React from 'react'


interface Props { 
  articles: Article[];
};


export const SelectArticles = ({ articles }:Props) => {
  const filtrados = articles.filter((article) => article.varios === true);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
      {filtrados.map((article) => (
        <SelectArticlesgridItem key={article.slug} article={article} />
      ))}
    </div>
  );
}
