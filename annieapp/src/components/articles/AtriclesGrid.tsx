import React from 'react'
import { AtriclesGridItem } from './AtriclesGridItem';
import { Article } from '@/src/interfaces';


interface Props {
  articles: Article[];
};


export const AtriclesGrid = ({ articles }:Props) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-5 gap-1">
      {articles.map((article) => (
        <AtriclesGridItem key={article.slug} article={article} />
      ))}
    </div>
  );
}
