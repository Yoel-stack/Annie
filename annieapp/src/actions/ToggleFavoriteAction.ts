'use server';

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/src/lib/prisma";

// 1. Asegurar que el usuario existe en Prisma
async function ensureUserExists() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("No hay un usuario autenticado en Clerk.");
  }

  let dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (!dbUser) {
    const userClerk = await currentUser();
    const emailUser = userClerk?.emailAddresses[0]?.emailAddress || "sin-email@correo.com";
    const nameUser = userClerk?.firstName || "Usuario";

    dbUser = await prisma.user.create({
      data: {
        clerkId: userId,
        email: emailUser,
        name: nameUser,
      },
    });
  }

  return dbUser;
}

// 2. Verificar si un artículo es favorito
export async function checkIsFavorite(slug: string) {
  const { userId } = await auth();
  if (!userId) return false;

  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article) return false;

  const favorite = await prisma.favorite.findFirst({
    where: {
      userId: userId,
      articleId: article.id,
    },
  });

  return !!favorite;
}

// 3. Alternar favorito (añadir o quitar)
export async function toggleFavoriteAction(slug: string) {
  const user = await ensureUserExists();

  const article = await prisma.article.findUnique({
    where: { slug },
  });

  if (!article) {
    throw new Error("Artículo no encontrado");
  }

  const existingFavorite = await prisma.favorite.findFirst({
    where: {
      userId: user.clerkId,
      articleId: article.id,
    },
  });

  if (existingFavorite) {
    await prisma.favorite.delete({
      where: {
        id: existingFavorite.id,
      },
    });
    return { status: "removed" };
  } else {
    await prisma.favorite.create({
      data: {
        userId: user.clerkId,
        articleId: article.id,
      },
    });
    return { status: "added" };
  }
}