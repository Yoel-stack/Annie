'use client';

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/src/interfaces";

interface Props {
  article: Article;
};


export const AtriclesGridItem = ({ article }: Props) => {
  const artImage = article.images;

  return (
    <div className="flex flex-col items-center mb-3 p-2 w-full max-w-[340px] md:max-w-none mx-auto">
      <Link
        className="flex justify-center w-full"
        href={`/article/${article.slug}`}
      >
        <Image
          src={`/articles/${artImage[0]}`}
          alt={article.title}
          className="rounded-lg object-cover w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]"
          width={180}
          height={180}
        />
      </Link>

      <div className="mt-2 w-full">
        <Link
          className="flex flex-col no-underline text-center mb-1 text-[#4A4540] hover:text-[#57524C]"
          href={`/article/${article.slug}`}
          // target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xs sm:text-sm text-[#3A3632] font-bold line-clamp-2 min-h-[32px] sm:min-h-[40px]">
            {article.title}
          </span>
        </Link>

        <Link
          href={`/article/${article.slug}`}
          // target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-row items-center justify-between w-full shadow-[0_-6px_10px_-4px_rgba(122,74,67,0.4)] rounded-xl px-1 pt-1.5 no-underline"
        >
          <span className="text-sm sm:text-xl font-medium text-gray-800 whitespace-nowrap ml-1 sm:ml-4">
            {`$${article.price}`}
          </span>

          <button className="p-1 sm:p-1 mx-1 sm:mr-4 px-1 sm:px-2.5 bg-[#FCC6BB] text-[#7A4A43] text-[9px] sm:text-xs 
          font-bold uppercase tracking-wider cursor-pointer rounded-[8px] hover:bg-[#FAA08E] hover:text-white transition-all 
          duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
            Ver detalles
          </button>
        </Link>
      </div>
    </div>
  );
};
