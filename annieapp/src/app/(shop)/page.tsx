import Banners from "@/src/components/ui/banners/Banners";
import { ArticlesGrid, Title, transformArticle } from "@/src/components";
import { Article } from "@/src/interfaces/articlesinterface";
import { prisma } from "@/src/lib/prisma";



export default async function Home() {
  
    const rawArticles = await prisma.article.findMany();
    //transformamos los datos crudos a nuestro tipo Article
    const articles: Article[] = rawArticles.map((raw) => transformArticle(raw));
    
  return (
    <>
      <div>
        <div className="flex mt-4 text-sm sm:text-base justify-center uppercase font-bold text-[#7A4A43]">
          {/* <Title title="Cosas lindas para mentes creativas" subtitle="" /> */}
        </div>
        <div className="px-2 sm:px-5 pb-1 sm:mb-5 shadow-xl">
          <Banners />
        </div>

        <div className="mt-4 sm:mt-8">
          <nav className="flex justify-center uppercase text-sm sm:text-base font-bold text-[#7A4A43]">
            <Title title="" subtitle="Todos los articulos" />
          </nav>

          <nav className="mt-2 sm:mt-4 px-4">
            <ArticlesGrid articles={articles} />
          </nav>
        </div>
      </div>
    </>
  );
};
