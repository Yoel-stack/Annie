'use client';

import React, { useState } from 'react'
import { useUIStore } from '@/src/store'
import { GoHeart, GoInfo, GoMegaphone, GoPerson, GoReply, GoTag } from 'react-icons/go';
import clsx from "clsx";
import Link from 'next/link';
import { Show, SignInButton, UserButton } from '@clerk/nextjs';


export default function Sidebar() {

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);

    const [openCategories, setOpenCategories] = useState (false);

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


  return (
    <div>
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-30 bg-black opacity-40" />
      )}

      {isSideMenuOpen && (
        <div
          onClick={() => closeSideMenu()}
          className="fixed top-0 left-0 w-screen h-screen z-30 backdrop-filter backdrop-blur-sm"
        />
      )}
      <nav
        className={clsx(
          "fixed p-5 rounded-sm right-0 top-0 w-[190px] sm:w-[200px] h-screen bg-[#7A4A43] z-40 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          },
        )}
      >
        <div className=" ">
          <GoReply
            size={27}
            className="text-white absolute shadow p-1 top-5 right-5 cursor-pointer"
            onClick={() => closeSideMenu()}
          />
        </div>

        <div className="mt-14 flex flex-col gap-5">

            <Show when="signed-out">
              <SignInButton mode="modal">
                <button type="button" className="flex items-center ml-2 text-white">
                  <GoPerson size={22} />
                  <span className="ml-2 text-[15px]">Ingresar</span>
                </button>
              </SignInButton>
            </Show>
            <Show when="signed-in">
              <div className="flex items-center ml-2 text-white">
                <UserButton />
                <span className="ml-2 text-[15px]">Perfil</span>
              </div>
            </Show>

          <div>
            <nav
              onClick={() => setOpenCategories((prev) => !prev)}
              className="flex text-white transition-colors items-center ml-2 transition-colors duration-200 active:scale-98 "
            >
              <GoTag className="" size={22} />
              <span className="shadow-xl px-1 pb-1 ml-1 text-[15px]">Categorias</span>
            </nav>
            <nav className="">
              {openCategories && (
                <div className="mt-3">
                  {categories.map((cat) => (
                    <Link
                      key={cat.href}
                      href={cat.href}
                      className="flex items-center p-1 text-decoration-none hover rounded transition-all"
                      onClick={closeSideMenu}
                    >
                      <span className="px-1 ml-8 text-[13px] shadow-sm rounded-sm text-gray-300">
                        {cat.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </nav>
          </div>

          <Link
            href={"/liked"}
            className="flex text-white transition-colors items-center ml-2"
          >
            <GoHeart size={22} />
            <span className="ml-2 text-[15px]">Favoritos</span>
          </Link>
          <Link
            href={"/"}
            className="flex text-white transition-colors items-center ml-2"
          >
            <GoMegaphone className="" size={22} />
            <span className="ml-2 text-[15px]">Novedades</span>
          </Link>
          <Link
            href={"/"}
            className="flex text-white transition-colors items-center ml-2"
          >
            <GoInfo className="" size={22} />
            <span className="ml-2 text-[15px]">Sobre nosotros</span>
          </Link>

          {/* links */}
        </div>
      </nav>
    </div>
  );
};
