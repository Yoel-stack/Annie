import { AtriclesGrid, Title} from "@/src/components";
import { ValidCatergories } from "@/src/interfaces/articlesinterface";
import { initialData } from "@/src/seed";

interface Props {
  params: {
    id: ValidCatergories;
  };
};

const categoryArticles = initialData.articles;

export default async function catergoryPage({params}: Props){

    const { id } = await params;
    const articles = categoryArticles.filter((article) => article.gender === id);

    const idS = {
        varios: "variedad de articulos",
        agendas: "agendas", 
        planners: "planners",
        cuadernos: "cuadernos",
        encuadernaciones: "encuadernaciones",
        otros: "otros",
        regalitos: "regalitos",
        lapiceras: "lapiceras",
        utiles: "utiles",
        blocks: "blocks",
    } 
    return (
      <>
        <div className="mt-8">
          <div className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
            <Title title={`${idS[id]}`} subtitle="" className="" />
          </div>
          <div className="p-3">
            <AtriclesGrid articles={articles} />
          </div>
        </div>
      </>
    );
};
