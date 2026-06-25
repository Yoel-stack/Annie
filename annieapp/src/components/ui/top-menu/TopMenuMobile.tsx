'use client';

  
import { useUIStore } from "@/src/store";
import { GoListUnordered } from "react-icons/go";


export const TopMenuMobile = () => {
  const abrirMenu = useUIStore((state) => state.openSideMenu);
  
  return (
    <div className="md:hidden">
      <nav className="fixed top-14 right-6 z-30 flex gap-1">
        <button className="cursor-pointer" onClick={abrirMenu}>
          <GoListUnordered size={33} className="mx-1 text-white" />
        </button>
      </nav>
    </div>
  )
};