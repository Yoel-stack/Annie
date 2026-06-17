export interface Article {
    description: string;
    images: string[]; 
    title: string;
    slug: string;
    type: ValidTypes;
    gender: ValidCatergories;
    price: number;
};


export type ValidCatergories = 'agendas'|'cuadernos'|'planners'|'encuadernaciones'|'varios'|'otros'|'programasEBI'|'libretitas';
export type ValidTypes = 'utiles escolares'|'sin personalizar'|'agendas personalizadas'|'cuadernos personalizados'|'planners personalizados'|'encuadernaciones personalizadas'; 