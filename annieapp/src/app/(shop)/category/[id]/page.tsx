import { ArticlesGrid, Title} from "@/src/components";
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
        agendas: "agendas", 
        cuadernos: "cuadernos",
        planners: "planners",
        encuadernaciones: "encuadernaciones",
        varios: "variedad de articulos",
        otros: "otros",
        programasEBI: "programas de EBI",
        libretitas: "libretitas",
    } 
    return (
      <>
        <div className="mt-4 sm:mt-8">
          <div className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
            <Title title={`${idS[id]}`} subtitle="" className="" />
          </div>
          <div className="p-2 sm:p-4">
            <ArticlesGrid articles={articles} />
          </div>
        </div>
      </>
    );
};
