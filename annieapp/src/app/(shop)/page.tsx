import { AtriclesGrid, Title } from "@/src/components";
import { initialData } from "@/src/seed";

const articles = initialData.articles;


export default function Home() {
  return (
    <>
      <div className="mt-7">
        <div className="flex justify-center uppercase text-lg font-bold text-[#4A4540]">
          <Title title="Todos los articulos" subtitle=""/>
        </div>
        <div className="p-3">
          <AtriclesGrid articles={articles} />
        </div>
      </div>
    </>
  );
}
