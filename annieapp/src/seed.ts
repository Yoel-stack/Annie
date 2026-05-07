interface SeedArticles {
    description: string;
    images: string[];
    title: string;
    slug: string;
    type: ValidTypes;
    gender: ValidCatergories;
    price: number; 
};


type ValidCatergories = 'agendas'|'cuadernos'|'planners'|'encuadernaciones'|'varios';
type ValidTypes = 'utiles escolares'|'sin personalizar'|'agendas personalizadas'|'cuadernos personalizados'|'planners personalizados'|'encuadernaciones personalizadas'; 

interface SeedData {
    articles: SeedArticles[],
}

export const initialData: SeedData = {
    articles: [ 
        {
            title: "Agenda con moños",
            description: "Agenda personal para anotar cositas con fondo de moñitos rosa",
            images: [
                'agendaprueba22.jpeg',
                'agendaprueba2.jpeg',
            ],
            slug: "agenda1",
            type: 'sin personalizar',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Agenda Today",
            description: "Agenda personal para anotar cositas Today is a good day",
            images: [
                'agendaprueba1.jpeg',
                'agendaprueba11.jpeg',
                'agendaprueba111.jpeg',
                'agendaprueba1111.jpeg',
            ],
            slug: "agenda2",
            type: 'sin personalizar',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Cuaderno recetario",
            description: "Cuaderno para anotar tus recetas preferidas",
            images: [
                'receta1.jpeg',
                'receta11.jpeg',
            ],
            slug: "recetario1",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Planner floreado",
            description: "Planner horizontal con detalles floreados en rosa Annie",
            images: [
                'planner1.jpeg',
                'planner11.jpeg',
                'planner111.jpeg',
            ],
            slug: "planner1",
            type: 'planners personalizados',
            gender: "planners",
            price: 300,
        },
        {
            title: "Planner con fondito",
            description: "Planner chico vertical con un fondo colorido",
            images: [
                'varios1.jpeg',
            ],
            slug: "planner2",
            type: 'planners personalizados',
            gender: "planners",
            price: 300,
        },
        {
            title: "Planner con moños",
            description: "Planner chico vertical con fondo de moñitas rosadas",
            images: [
                'varios2.jpeg',
            ],
            slug: "planner5",
            type: 'planners personalizados',
            gender: "planners",
            price: 300,
        },
        {
            title: "Planner floreado",
            description: "Planner chico vertical con fondo floreado",
            images: [
                'varios4.jpeg',
            ],
            slug: "planner3",
            type: 'planners personalizados',
            gender: "planners",
            price: 300,
        },
        {
            title: "Planner animal print",
            description: "Planner chico vertical con fondo Animal Print",
            images: [
                'varios3.jpeg',
                'varios33.jpeg',
            ],
            slug: "planner4",
            type: 'planners personalizados',
            gender: "planners",
            price: 300,
        },
            {
            title: "Encuadernacion",
            description: "Encuadernacion",
            images: [
                'agenda1.webp',
                'agenda11.webp',
            ],
            slug: "agenda21",
            type: 'sin personalizar',
            gender: "encuadernaciones",
            price: 300,
        },
        {
            title: "Lapiceras",
            description: "Lapiceras",
            images: [
                'agenda1.webp',
                'agenda11.webp',
                'agenda11.webp',
                'agenda11.webp',
            ],
            slug: "lapiceras1",
            type: 'utiles escolares',
            gender: "varios",
            price: 300,
        },
    ]
};