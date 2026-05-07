"use client";

import React, { use } from "react";
import { initialData } from "@/src/seed";
import { notFound } from "next/navigation";
import ArticleDetails from "@/src/components/article/article-details/ArticleDetails";

interface Props {
  params: Promise<{ slug: string }>; // Definimos params como una Promesa
}

export default function ArticlePage({ params }: Props) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const article = initialData.articles.find((p) => p.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="mx-4 mb-10 mt-10">
      <ArticleDetails article={article} />
    </div>
  );
}