import { PrismaClient } from '@prisma/client';

async function copyData() {
  console.log('🚀 Iniciando la transferencia de datos...');

  // 1. Instancia conectada a tu PostgreSQL local
  const localPrisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.LOCAL_DATABASE_URL,
      },
    },
  });

  // 2. Instancia conectada a Neon en la nube
  const neonPrisma = new PrismaClient({
    datasources: {
      db: {
        url: process.env.DIRECT_URL || process.env.DATABASE_URL,
      },
    },
  });

  try {
    // 3. Leer los artículos de la base de datos local
    console.log('📦 Leyendo artículos desde la base de datos local...');
    const localArticles = await localPrisma.article.findMany();
    console.log(`se encontraron ${localArticles.length} artículos en local.`);

    if (localArticles.length === 0) {
      console.log('⚠️ No hay artículos en la base local para copiar.');
      return;
    }

    // 4. Insertar los artículos en Neon
    console.log('☁️ Insertando artículos en Neon...');
    const result = await neonPrisma.article.createMany({
      data: localArticles,
      skipDuplicates: true, // Evita errores si algún registro ya existe
    });

    console.log(`✅ ¡Transferencia completada! Se insertaron ${result.count} artículos en Neon.`);
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  } finally {
    // Desconectar ambos clientes
    await localPrisma.$disconnect();
    await neonPrisma.$disconnect();
  }
}

copyData();