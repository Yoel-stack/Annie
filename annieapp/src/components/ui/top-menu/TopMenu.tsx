'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GoHeart } from "react-icons/go";
import React from 'react'

export const TopMenu = () => {

  const categories = [
    { label: "Agendas", href: "/category/agendas" },
    { label: "Planners", href: "/category/planners" },
    { label: "Cuadernos", href: "/category/cuadernos" },
    { label: "Varios", href: "/category/varios" },
  { label: "Encuadernaciones", href: "/category/encuadernaciones" },
];

  return (
    <nav className="top-0 left-0 w-full bg-foreground shadow-xl pt-7 px-10">
      {/* Contenedor del Título 'Annie' */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Link href={"/"} className="text-4xl text-white tracking-light">
            Annie
          </Link>
          <span className="mt-2 text-sm uppercase text-white tracking-[0.2em]">
            {" "}
            • Papelería creativa
          </span>
        </div>
        <div className="">
          <Image
            src="/annieLogo.png"
            width={150}
            height={100}
            alt="Annie Logo"
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex pt-6 items-end justify-start gap-0.5">
        {categories.map((cat) => (
          <Link key={cat.href} href={cat.href} className="group relative">
            <div
              className="
                py-3 px-8
                bg-backgroundTree
                font-medium text-base
                leading-none
                rounded-t-2xl
                transition-all duration-300 ease-out              
                shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)]
                
                /* HOVER: ELEVACIÓN FÍSICA */
                group-hover:translate-y-[-5px] 
                group-hover:bg-backgroundTwo
                group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)]
                
                /* FOCUS (ACCESIBILIDAD) */
                focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 focus:ring-offset-2
              "
            >
              <span className="text-[#F07C65]">{cat.label}</span>
            </div>
          </Link>
        ))}
<Link href={'/liked'}>
        <div className="group relative">
    <nav className='cursor-pointer py-3 px-6 
      bg-backgroundTree 
      text-[#F07C65]
      rounded-t-2xl 
      transition-all duration-300 ease-out
      shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)]
      
      group-hover:translate-y-[-5px]
      group-hover:bg-backgroundTwo
      group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)]
      
      focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 focus:ring-offset-2'>
      <GoHeart />
    </nav>
  </div>
      </Link>
      </div>
    </nav>
  );
};
