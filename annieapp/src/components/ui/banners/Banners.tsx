import Image from "next/image";
import Link from "next/link";
import React from "react";


const bannerSections = [
  {
    id: 1,
    title: "Recien agregado",
    href: "/banner",
    imgLeft: "/bannerImgTwo.png",
    imgRight: "/bannerImg.png",
  },
  {
    id: 2,
    title: "Articulos seleccionados",
    href: "/banner/bannerTwo",
    imgLeft: "/bannerImgFour.png",
    imgRight: "/bannerImgTree.jpeg",
  },
];

export default function Banners() {
  return (
    <div className="mt-3 sm:mt-8">
      <div className="grid sm:grid-cols-2 w-full mx-auto px-4 mb-6 sm:mb-12 gap-2 sm:gap-6">
        {bannerSections.map((section) => (
          <Link
            key={section.id}
            href={section.href}
            className="group relative block w-full h-[150px] md:h-[240px] rounded-[25px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] 
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-300 ease-out"
          >
            <div className="grid grid-cols-2 w-full h-full">
              {/* Mitad Izquierda */}
              <div className="relative w-full h-full overflow-hidden border-r border-white/10">
                <Image
                  src={section.imgLeft}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/[0.08] group-hover:bg-black/[0.15] transition-colors duration-300" />
              </div>

              {/* Mitad Derecha */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={section.imgRight}
                  alt={section.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-black/[0.08] group-hover:bg-black/[0.15] transition-colors duration-300" />
              </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 text-center w-full px-4 pointer-events-none">
              <div className="inline-block bg-backgroundTree text-[#F07C65] px-5 py-1.5 rounded-[15px] font-semibold text-xs md:text-base shadow-md 
              transform transition-transform duration-300 ease-out group-hover:scale-105">
                <span className="uppercase tracking-[0.12em] whitespace-nowrap">
                  {section.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
