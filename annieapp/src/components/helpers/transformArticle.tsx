import { Article, ValidCatergories, ValidTypes } from '@/src/interfaces';

// Validadores para los tipos específicos
function isValidTypes(value: unknown): value is ValidTypes {
    return typeof value === 'string' && ['utiles escolares','sin personalizar','agendas personalizadas','cuadernos personalizados','planners personalizados','encuadernaciones personalizadas'].includes(value);
};

function isValidCategories(value: unknown): value is ValidCatergories {
    return typeof value === 'string' && ['agendas','cuadernos','planners','encuadernaciones','varios','otros','programasEBI','libretitas'].includes(value);
};

export function transformArticle(raw: unknown): Article {
    if (typeof raw !== 'object' || raw === null) {
        throw new Error('Invalid article data');
    }
    const obj = raw as Record<string, unknown>;

    return {
        title: String(obj.title),
        description: String(obj.description),
        images: Array.isArray(obj.images) ? obj.images.map(String) : [],
        slug: String(obj.slug),
        type: isValidTypes(obj.type) ? obj.type : 'encuadernaciones personalizadas',
        gender: isValidCategories(obj.gender) ? obj.gender : 'libretitas',
        price: Number(obj.price),
        varios: Boolean(obj.varios),
    };
};