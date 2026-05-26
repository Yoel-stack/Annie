"use client";

import Image from "next/image";
import Link from "next/link";
import { GoHeart, GoPerson } from "react-icons/go";
import React from "react";

export const TopMenu = () => {
  const categories = [
    { label: "Agendas", href: "/category/agendas" },
    { label: "Planners", href: "/category/planners" },
    { label: "Cuadernos", href: "/category/cuadernos" },
    { label: "Varios", href: "/category/varios" },
    { label: "Encuadernaciones", href: "/category/encuadernaciones" },
  ];

  return (
    <>
      <nav className="top-0 left-0 w-full bg-foreground shadow-xl pt-5 px-10">
        {/* Contenedor del Título 'Annie' */}
        <div className="flex items-center justify-between pb-4 md:pb-0 gap-2">
          <div className="hidden md:flex md:items-center gap-2">
            <Link href={"/"} className="text-4xl text-white tracking-light">
              Annie
            </Link>
            {/* en cuanto la pantalla crezca y mida 640 píxeles o más (sm:), cambiás de opinión y lo mostrás (inline) */}
            <span className="mt-2 text-xs md:text-sm uppercase text-white tracking-[0.2em]">
              {" "}
              Papelería creativa
            </span>
          </div>
          <div className="">
            <Image
              src="/annieTransparent.webp"
              width={150}
              height={100}
              alt="Annie Logo"
              className="object-contain w-[130px] md:w-[150px]"
            />
          </div>
          

        
          
          
        </div>
        <nav className="fixed top-9 right-6 z-50 flex  gap-3">

          <Link
            href={"/liked"}
            className="mt-2 md:hidden text-white hover:text-[#F07C65] transition-colors"
          >
            <GoHeart size={18} />
          </Link>
          

          <Link
            href={"/liked"}
            className="md:hidden text-white hover:text-[#F07C65] transition-colors"
          >
            <GoPerson size={28} />
          </Link>
            </nav>

        <div className="hidden md:flex pt-6 items-end justify-start gap-0.5">
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

          <Link href={"/liked"}>
            <div className="group relative">
              <nav
                className="cursor-pointer py-3 px-6 
              bg-backgroundTree 
              text-[#F07C65]
              rounded-t-2xl 
              transition-all duration-300 ease-out
      shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)]
      
      group-hover:translate-y-[-5px]
      group-hover:bg-backgroundTwo
      group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)]
      
      focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 focus:ring-offset-2"
              >
                <GoHeart />
              </nav>
            </div>
          </Link>
          <Link href={"/liked"}>
            <div className="group relative">
              <nav
                className="cursor-pointer py-3 px-6 
              bg-backgroundTree 
              text-[#F07C65]
              rounded-t-2xl 
              transition-all duration-300 ease-out
      shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)]
      
      group-hover:translate-y-[-5px]
      group-hover:bg-backgroundTwo
      group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)]
      
      focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 focus:ring-offset-2"
              >
                <GoPerson />
              </nav>
            </div>
          </Link>
        </div>
      </nav>

      <div className="md:hidden fixed bottom-20 top-25 right-0 z-50 flex flex-col -space-y-4.5 pointer-events-none max-h-[calc(100vh-100px)] overflow-y-auto no-scrollbar">
        {/* El resto de tu código con el .map() se mantiene EXACTAMENTE igual */}
        {categories.map((cat) => (
          <Link
            key={cat.href}
            href={cat.href}
            className="group pointer-events-auto"
          >
            <div className="
            py-4 px-2
            bg-backgroundTree
            rounded-l-xl 
            
            border-black/30
            border-y border-black/5
            
            flex items-center justify-center
            
            shadow-[-3px_0px_4px_0px_rgba(0,0,0,0.12)
            "
            >
              {/* Texto escrito hacia abajo letra a letra */}
              <span
                className="
                text-[#F07C65] 
                font-semibold 
                text-xs
                tracking-[0.15em]
                uppercase
                [writing-mode:vertical-lr]
              "
              >
                {cat.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};
