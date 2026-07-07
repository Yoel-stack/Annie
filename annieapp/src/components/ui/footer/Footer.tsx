import React from 'react'


export default function Footer () {
  return (
    <footer className="w-full shadow-[0_-20px_25px_-5px_rgba(0,0,0,0.1),0_-8px_10px_-6px_rgba(0,0,0,0.1)] bg-foreground py-5 mt-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-row items-center justify-between">
        <div className="flex flex-col">
          <h2 className="text-white text-xl font-medium tracking-tight leading-none">
            Annie
          </h2>
          <p className="text-white/80 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mt-1">
            Papelería Creativa
          </p>
        </div>

        <div className="flex flex-col items-end">
          <span className="text-white/90 text-sm font-light">© 2026</span>
          <span className="text-white/60 text-[10px] italic">Uruguay</span>
        </div>
      </div>
    </footer>
  );
};




