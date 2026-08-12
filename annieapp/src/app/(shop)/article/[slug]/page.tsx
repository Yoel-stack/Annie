import { notFound } from "next/navigation";
import { prisma } from "@/src/lib/prisma";
import ArticleDetails from "@/src/components/article/article-details/ArticleDetails";
import { Article } from "@/src/interfaces/articlesinterface";
import { transformArticle } from "@/src/components/helpers/transformArticle";


interface Props {
  params: Promise<{ slug: string }>; // Definimos params como una Promesa
}


export default async function ArticlePage({ params }: Props) {
const { slug } = await params; // Esperamos a que la Promesa se resuelva para obtener el slug

  // const article = initialData.articles.find((p) => p.slug === slug);

  const rawarticle = await prisma.article.findUnique({
    where: { slug },
  });

  if (!rawarticle) {
    notFound();
  }

  let article: Article;
  try {
    article = transformArticle(rawarticle); 
  } catch {
    return <div className="text-center text-red-600 py-10"> Error al cargar el articulo </div>;
  }
  return <ArticleDetails article={article} />
};