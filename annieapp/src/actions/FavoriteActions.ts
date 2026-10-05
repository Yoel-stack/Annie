'use server'

import { auth, currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/src/lib/prisma";


export async function ensureUserExists() {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("No hay un usuario autenticado en Clerk.");
  }

  // 1. Buscamos si ya existe el usuario en tu tabla User de Prisma
  let dbUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  // 2. Si no existe, lo creamos automáticamente trayendo los datos de Clerk
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
    console.log("¡Nuevo usuario creado en Neon con éxito!", dbUser);
  } else {
    console.log("El usuario ya existía en la base de datos:", dbUser.clerkId);
  }

  return dbUser;
}

// 2. Obtenemos los favoritos del usuario desde la base de datos
export async function getFavoritesFromDB() {
    
    await ensureUserExists();
    const { userId } = await auth();

  if (!userId) {
    throw new Error("No autorizado");
  }

  const favorites = await prisma.favorite.findMany({
    where: { userId: userId },
    include: {
      article: true, // Trae toda la info completa del artículo
    },
  });

  return favorites;
};

// 3. Eliminamos un favorito del usuario en la base de datos
export async function removeFavoriteFromDB(slug: string)   {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("No autorizado");
    }

    // Buscamos el articulo por su slug para obtener ID
    const article = await prisma.article.findUnique({
        where: { slug },
    });

    if (!article) {
        throw new Error("Artículo no encontrado");
    }

      // Buscamos el registro favorito específico de este usuario y este artículo
    const favoriteRecord = await prisma.favorite.findFirst({
        where: {
            userId: userId,
            articleId: article.id,
        },
    });

    if (!favoriteRecord) {
        throw new Error("El favorito no existe");
    }

   // Borramos directamente usando el ID único del registro de favoritos
    await prisma.favorite.delete({
        where: {
            id: favoriteRecord.id,
        },
    });

    return { success: true };
};