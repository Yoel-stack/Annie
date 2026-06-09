'use client';

import React from 'react'
import { useUIStore } from '@/src/store'
import { GoReply } from 'react-icons/go';
import clsx from "clsx";


export default function Sidebar() {

    const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
    const closeSideMenu = useUIStore((state) => state.closeSideMenu);
    // const opencategories = ...

    // const categories = [
    //     { label: "Agendas", href: "/category/agendas" },
    //     { label: "Planners", href: "/category/planners" },
    //     { label: "Cuadernos", href: "/category/cuadernos" },
    //     { label: "Varios", href: "/category/varios" },
    //     { label: "Encuadernaciones", href: "/category/encuadernaciones" },
    //     { label: "Otros", href: "/category/otros" },
    //     { label: "Regalitos", href: "/category/regalitos" },
    //     { label: "Lapiceras", href: "/category/lapiceras" },
    //     { label: "Blocks", href: "/category/blocks" },
    //     { label: "Utiles", href: "/category/utiles" },
    // ];


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
          "fixed p-5 rounded-sm right-0 top-0 w-[250px] sm:w-[300px] h-screen bg-[#F5CBC1] z-40 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
            "translate-x-0": isSideMenuOpen,
          },
        )}
      >
        <div className=" ">
          <GoReply
            size={25}
            className="text absolute top-6 right-6 cursor-pointer"
            onClick={() => closeSideMenu()}
          />
        </div>

        <div className="mt-16 flex flex-col gap-4">
          <p className="font-bold text-gray-500 uppercase text-xs tracking-wider">
            Categorías
          </p>
          {/* links */}
        </div>
      </nav>
    </div>
  );
};
