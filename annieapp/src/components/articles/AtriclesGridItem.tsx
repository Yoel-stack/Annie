'use client';

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/src/interfaces";

interface Props {
  article: Article;
};


export const AtriclesGridItem = ({ article }:Props ) => {
  const artImage = article.images;


  return(
    <div className="flex flex-col items-center mb-3 p-2 w-full max-w-[340px] md:max-w-none mx-auto">
  
  {/* 2. El contenedor de la imagen ahora maneja anchos responsivos */}
  <Link className="flex justify-center w-full" href={`/article/${article.slug}`}>
    <Image
      src={`/articles/${artImage[0]}`}
      alt={article.title}
      className="rounded-lg object-cover w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[180px]"
      width={180}
      height={180}
    />
  </Link>

  {/* Contenedor de textos y precio */}
  <div className="mt-2 w-full px-2 sm:px-4 md:px-6">
    <Link
      className="flex flex-col no-underline text-center mb-2 text-[#4A4540] hover:text-[#57524C]"
      href={`/article/${article.slug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {/* 3. Ajustamos el tamaño del texto: más pequeño en móvil para que no se rompa en mil líneas */}
      <span className="text-xs sm:text-sm font-medium line-clamp-2 min-h-[32px] sm:min-h-[40px]">
        {article.title}
      </span>
    </Link>
    
    <Link
      href={`/article/${article.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-row items-center justify-between w-full border-t border-gray-100 pt-2 no-underline gap-1"
    >
      {/* 4. Precio responsivo: un poco más pequeño en móviles chicos */}
      <span className="pl-1 text-lg sm:text-xl font-medium text-gray-700 whitespace-nowrap">
        {`$${article.price}`}
      </span>

      {/* 5. Botón responsivo: texto más compacto en móvil para asegurar que quepa al lado del precio */}
      <button className="px-2.5 py-1.5 sm:px-4 bg-[#FCC6BB] text-[#7A4A43] text-[10px] sm:text-xs font-bold uppercase tracking-wider cursor-pointer rounded-xl hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md whitespace-nowrap">
        Ver detalles
      </button>
    </Link>
  </div>
</div>

  )}
//   return (
//     <div className="place-items-center mb-3 p-2">
//       <Link className="flex" href={`/article/${article.slug}`}>
//         <Image
//           src={`/articles/${artImage[0]}`}
//           alt={article.title}
//           className="rounded-sm"
//           width={180}
//           height={180}
//         />
//       </Link>

//       <div className="mt-2 w-full px-6">
//         <Link
//           className="flex flex-col no-underline text-center mb-1 text-[#4A4540] hover:text-[#57524C]"
//           href={`/article/${article.slug}`}
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className="text-sm font-medium">{article.title}</span>
//         </Link>
//         <Link
//           href={`/article/${article.slug}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="group flex flex-row items-center justify-between w-full border-t border-gray-100 pt-2 no-underline"
//         >
//           <span className="pl-1 text-xl font-medium text-gray-700 ">
//             {`$${article.price}`}
//           </span>

//           <button className="px-4 py-1.5 bg-[#FCC6BB] text-[#7A4A43] text-xs font-bold uppercase tracking-wider cursor-pointer rounded-xl hover:bg-[#FAA08E] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
//             Ver detalles
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }
