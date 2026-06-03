import { AtriclesGrid, Title } from "@/src/components";
import Banners from "@/src/components/ui/banners/Banners";
import { initialData } from "@/src/seed";

const articles = initialData.articles


export default function Home() {
  return (
    <>
      <div className="p-8">
        <nav className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
          <Title title="Cosas lindas para mentes creativas" subtitle="" />
        </nav>
        <Banners />

        <div className="">
          <nav className="flex justify-center uppercase text-base font-bold text-[#7A4A43]">
            <Title title="" subtitle="Todos los articulos" />
          </nav>

          <nav className="mt-4">
            <AtriclesGrid articles={articles} />
          </nav>
        </div>
      </div>
    </>
  );
};
