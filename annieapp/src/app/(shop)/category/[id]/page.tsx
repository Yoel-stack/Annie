import { ArticlesGrid, Title, transformArticle} from "@/src/components";
import { ValidCatergories } from "@/src/interfaces/articlesinterface";
import { prisma } from "@/src/lib/prisma";


interface Props {
  params: {
    id: ValidCatergories;
  };
};

  
export default async function catergoryPage({params}: Props){
  
  const { id } = await params;
  
  const categoryArticles = await prisma.article.findMany({
    where: { gender: id },
  }); // Consulta a la base de datos para obtener los artículos de su respectiva categoria

    const articles = categoryArticles.map(transformArticle); 

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
