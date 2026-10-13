import Link from 'next/dist/client/link';
import React from 'react'
import { FaInstagram } from 'react-icons/fa';


export default function Footer () {
  return (
    <footer className="w-full shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1),0_-8px_10px_-6px_rgba(0,0,0,0.1)] bg-foreground sm:py-5 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-7 flex flex-row items-center justify-between">
        <div className="flex flex-col mt-3">
          <h2 className="text-white mx-1 sm:mx-2 text-xl font-medium tracking-tight leading-none">
            Annie
          </h2>
          <p className="text-white/80 mx-1 sm:mx-2 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mt-1">
            Papelería Creativa
          </p>
        <div className="gap-2 mb-3 mt-0.5 sm:mt-1">
          <Link
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/80 shadow p-1 sm:px-2 rounded-[8px] hover:text-white transition-colors text-xs flex items-center gap-1.5"
            aria-label="Instagram de Annie"
          >
            <FaInstagram className="w-3.5 h-3.5" />
            <span className='text-[10px]'>Siguenos en Instagram</span>
          </Link>
        </div>
        </div>


        <div className="flex flex-col mt-8 sm:mt-12 items-end">
          {/* <span className="text-white/90 text-sm font-light">© 2026</span> */}
          {/* <span className="text-white/60 text-[10px] sm:text-[13px] italic">Uruguay</span> */}
        </div>
      </div>
    </footer>
  );
};
