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
        <div className="">
          <div className="flex justify-center uppercase text-lg font-semibold text-[#4A4540]">
            <Title title={`${idS[id]}`} subtitle="" className="" />
          </div>
          <div className="p-3">
            <AtriclesGrid articles={articles} />
          </div>
        </div>
      </>
    );
};
