import Link from "next/link";
import { GoHeart, GoPerson } from "react-icons/go";


export const TopMenuMobile = () => {

    const categories = [
        { label: "Agendas", href: "/category/agendas" },
        { label: "Planners", href: "/category/planners" },
        { label: "Cuadernos", href: "/category/cuadernos" },
        { label: "Varios", href: "/category/varios" },
        { label: "Encuadernaciones", href: "/category/encuadernaciones" },
        { label: "Otros", href: "/category/otros" },
        { label: "Regalitos", href: "/category/regalitos" },
        { label: "Lapiceras", href: "/category/lapiceras" },
        { label: "Blocks", href: "/category/blocks" },
        { label: "Utiles", href: "/category/utiles" },
    ];

  return (
    <div className="md:hidden">
  <nav className="absolute top-18 right-6 z-40 flex gap-3">
    <Link
      href={"/liked"}
      className="mt-2 text-white transition-colors"
    >
      <GoHeart size={18} />
    </Link>
    <Link
      href={"/login"}
      className="text-white transition-colors"
    >
      <GoPerson size={28} />
    </Link>
  </nav>

  <div className="absolute left-0 right-0 z-30 flex flex-row px-1 gap-0.5 pointer-events-none overflow-x-auto whitespace-nowrap scrollbar-none">
    {categories.map((cat) => (
      <Link
        key={cat.href}
        href={cat.href}
        className="pointer-events-auto inline-block"
      >
        <div className="p-1.5 pestaña-redonda-abajo bg-backgroundTree border-black/30 border-x border-b flex items-center justify-center shadow-[0px_3px_4px_0px_rgba(0,0,0,0.12)]">
          <span className="text-[#F07C65] font-semibold text-[9px] tracking-[0.1em] uppercase">
            {cat.label}
          </span>
        </div>
      </Link>
    ))}
  </div>
</div>
  );
};