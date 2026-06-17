import { AtriclesGrid, Title } from "@/src/components";
import Banners from "@/src/components/ui/banners/Banners";
import { initialData } from "@/src/seed";

const articles = initialData.articles


export default function Home() {
  return (
    <>
      <div>
        <div className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
          {/* <Title title="Cosas lindas para mentes creativas" subtitle="" /> */}
        </div>
        <div className="px-2 sm:px-5 pb-1 sm:mb-5 shadow-xl">
          <Banners />
        </div>

        <div className="mt-3">
          <nav className="flex justify-center uppercase text-sm sm:text-base font-bold text-[#7A4A43]">
            <Title title="" subtitle="Todos los articulos" />
          </nav>

          <nav className="mt-4 px-4">
            <AtriclesGrid articles={articles} />
          </nav>
        </div>
      </div>
    </>
  );
};
