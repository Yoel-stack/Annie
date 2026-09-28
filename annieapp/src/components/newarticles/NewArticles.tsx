import { Article } from '@/src/interfaces';
import React from 'react'
import { NewArticlesGridItem } from './NewArticlesGridItem';

interface Props {
  articles: Article[];
}   

export const NewArticles = ({ articles }: Props) => {

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
         {articles.map((article) => (
           <NewArticlesGridItem key={article.slug} article={article} />
         ))}
       </div>
  )
};
