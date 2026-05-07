'use client';

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/src/interfaces";

interface Props {
  article: Article;
};


export const AtriclesGridItem = ({ article }:Props ) => {
  const artImage = article.images;

  return (
    <div className="place-items-center mb-3 p-2">
      <Link className="flex" href={`/article/${article.slug}`}>
        <Image
          src={`/articles/${artImage[0]}`}
          alt={article.title}
          className="rounded-sm"
          width={180}
          height={180}
        />
      </Link>

      <div className="mt-2 w-full px-6">
        <Link
          className="flex flex-col no-underline text-center mb-1 text-[#4A4540] hover:text-[#57524C]"
          href={`/article/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm font-medium">{article.title}</span>
        </Link>
        <Link
          href={`/article/${article.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row items-center justify-between w-full border-t border-gray-100 pt-2 no-underline"
        >
          <span className="pl-1 text-xl font-medium text-gray-700 ">
            {`$${article.price}`}
          </span>

          <button className="px-4 py-1.5 bg-[#FCC6BB] text-[#7A4A43] text-xs font-bold uppercase tracking-wider cursor-pointer rounded-full hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
}
