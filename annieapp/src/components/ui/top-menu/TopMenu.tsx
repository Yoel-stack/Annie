'use client';


import Link from "next/link";
import Image from "next/image";
import { GoChevronLeft, GoChevronRight, GoHeart, GoPerson } from "react-icons/go";
import { TopMenuMobile } from "./TopMenuMobile";
import { useRef } from "react";


export const TopMenu = () => {
  const categories = [
    { label: "Agendas", href: "/category/agendas" },
    { label: "Planners", href: "/category/planners" },
    { label: "Cuadernos", href: "/category/cuadernos" },
    { label: "Varios", href: "/category/varios" },
    { label: "Libretitas", href: "/category/libretitas" },
    { label: "Encuadernaciones", href: "/category/encuadernaciones" },
    { label: "Programas de EBI", href: "/category/programasEBI" },
    { label: "Otros", href: "/category/otros" },
  ];

   {/* SCROLL LEFT */}
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;

      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth", // Movimiento fluido
      });
    }
  };

  return (
    <>
      <nav className="sticky z-20 top-0 left-0 w-full bg-foreground shadow-xl pt-11 px-10">
        <div className="flex items-center justify-between pb-4 md:pb-0 gap-2">
          <div className="hidden md:flex md:items-center gap-2">
            <Link href={"/"} className="text-4xl text-white tracking-light">
              Annie
            </Link>
            <span className="mt-2.5 mx-1 text-xs uppercase text-white tracking-[0.2em]">
              Papelería creativa
            </span>
          </div>

          <div>
            <Link href={'/'}>
            <Image
              src="/annieTransparent.webp"
              width={150}
              height={100}
              alt="Annie Logo"
              className="object-contain w-[110px] md:w-[150px]"
              />
            </Link>
          </div>
        </div>
        {/* SCROLL LEFT */}
        <div className="relative group/container w-full">
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:flex lg:hidden absolute -left-8 top-12.5 -translate-y-1/2 z-20 bg-white/40 hover:bg-white text-[#F07C65] p-1 rounded-lg 
            shadow-md transition-all border border-gray-100"
            aria-label="Scroll left"
          >
            <GoChevronLeft size={13} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex lg:ml-1 md:ml-7 hidden md:flex pt-6 relative justify-start items-end overflow-x-auto whitespace-nowrap justify-start w-full gap-0.5"
          >
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative flex-shrink-0"
              >
                <div className="py-2.5 mb-0.5 px-7.5 bg-backgroundTree text-sm leading-none rounded-t-xl transition-all duration-300 ease-out 
                shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)] group-hover:translate-y-[-5px] group-hover:bg-backgroundTwo 
                group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)] focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 
                focus:ring-offset-2">
                  <span className="text-[#F07C65]">{cat.label}</span>
                </div>
              </Link>
            ))}

            <div className="sticky right-0 z-10 flex items-end flex-shrink-0 gap-0.5 pl-1 bg-foreground">
              <Link href={"/liked"}>
                <div className="group relative">
                  <div className="cursor-pointer px-4 p-3 bg-backgroundTree text-[#F07C65] rounded-t-xl transition-all duration-300 
                  ease-out shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)] group-hover:translate-y-[-5px] group-hover:bg-backgroundTwo 
                  group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)] focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 
                  focus:ring-offset-2">
                    <GoHeart size={20} />
                  </div>
                </div>
              </Link>

              <Link href={"/login"}>
                <div className="group relative">
                  <div className="cursor-pointer px-4 p-3 bg-backgroundTree text-[#F07C65] rounded-t-xl transition-all duration-300 ease-out 
                  shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.2),0_2px_4px_rgba(0,0,0,0.05)] group-hover:translate-y-[-5px] group-hover:bg-backgroundTwo 
                  group-hover:shadow-[inset_0_-4px_0_0_rgba(250,160,142,0.4),0_8px_15px_-3px_rgba(74,69,64,0.15)] focus:outline-none focus:ring-2 focus:ring-[#4A4540]/30 
                  focus:ring-offset-2">
                    <GoPerson size={20} />
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* SCROLL RIGHT */}
          <button
            onClick={() => handleScroll("right")}
            className="hidden md:flex lg:hidden absolute -left-1 top-12.5 -translate-y-1/2 z-20 bg-white/40 hover:bg-white text-[#F07C65] p-1 rounded-lg shadow-md transition-all border border-gray-100"
            aria-label="Scroll right"
          >
            <GoChevronRight size={13} />
          </button>
        </div>
      </nav>

      <TopMenuMobile />
    </>
  );
};