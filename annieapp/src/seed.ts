interface SeedArticles {
    description: string;
    images: string[];
    title: string;
    slug: string;
    type: ValidTypes;
    gender: ValidCatergories;
    price: number; 
};


type ValidCatergories = 'agendas'|'cuadernos'|'planners'|'encuadernaciones'|'varios'|'otros'|'blocks'|'utiles'|'regalitos'|'lapiceras';
type ValidTypes = 'utiles escolares'|'sin personalizar'|'agendas personalizadas'|'cuadernos personalizados'|'planners personalizados'|'encuadernaciones personalizadas'; 

interface SeedData {
    articles: SeedArticles[],
}
    
export const initialData: SeedData = {
    articles: [ 
        {
            title: "Agenda mas Cuadernito",
            description: "Agenda personal para anotar cositas, personalizada al estilo que ustedes decidan",
            images: [
                'agendaMasCuadernito.png',
                'marmolArticles.png',
                'marmolArticles.png',
                'marmolArticles.png',
                'marmolArticles.png',
                'marmolArticles.png',
                'marmolArticles.png',
            ],
            slug: "agenda_marmol1",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Mooving Notes",
            description: "Mooving notes de color verde y elastico rosa, trae letras, emogis y frases para que puedas personalizar con tu estilo cada apunte",
            images: [
                'mooving.jpeg',
                'mooving5.jpeg',
                'mooving2.jpeg',
                'mooving3.jpeg',
                'mooving4.jpeg',
                'mooving1.jpeg',
                'marmolArticles.png',
            ],
            slug: "agenda_marmol2",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        // {
        //     title: "Agenda de Independiente",
        //     description: "Agenda personal para anotar cosas, personalizada al estilo que ustedes decidan en este caso de Independiente",
        //     images: [
        //         'agendaCai.png',
        //         'agendaprueba2.jpeg',
        //     ],
        //     slug: "agenda_cai_1",
        //     type: 'agendas personalizadas',
        //     gender: "agendas",
        //     price: 300,
        // },
        {
            title: "Agenda de Independiente",
            description: "Agenda personal para anotar cosas, personalizada al estilo que ustedes decidan en este caso de Independiente",
            images: [
                'agendaCai2.png',
                'agendaprueba2.jpeg',
            ],
            slug: "agenda_cai_2",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Lapicera mas mini cuaderno",
            description: "Combo de lapicera mas cuaderno con renglones",
            images: [
                'lapiceraMasMiniCuaderno.png',
                'agendaprueba2.jpeg',
            ],
            slug: "lapicera_mas_cuaderno",
            type: 'utiles escolares',
            gender: "varios",
            price: 320,
        },
        {
            title: "Cartuchera Campus",
            description: "Cartuchera Campus color rosa",
            images: [
                'varios7.png',
            ],
            slug: "cartuchera_campus",
            type: 'utiles escolares',
            gender: "varios",
            price: 300,
        },
        {
            title: "Agenda con paisaje",
            description: "Agenda personal para anotar cositas, personalizada al estilo que ustedes decidan",
            images: [
                'agendaPaisaje1.png',
                'agendaprueba2.jpeg',
            ],
            slug: "agenda_paisaje",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Agenda con flor amarilla",
            description: "Agenda personal para anotar cositas, personalizada al estilo que ustedes decidan en este caso con un fondito floreado",
            images: [
                'agendaFlor.png',
                'agendaprueba2.jpeg',
            ],
            slug: "agenda_flor_amarilla",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Agenda con atardecer",
            description: "Agenda personal para anotar cositas, personalizada al estilo que ustedes decidan",
            images: [
                'agendaAtardecer1.png',
                'agendaprueba2.jpeg',
            ],
            slug: "agenda_atardecer",
            type: 'agendas personalizadas',
            gender: "agendas",
            price: 300,
        },
        {
            title: "Blocks de apuntes",
            description: "Blocks de apuntes de varios colores ",
            images: [
                'apuntes.png',
                'agendaprueba2.jpeg',
            ],
            slug: "block_apuntes",
            type: 'utiles escolares',
            gender: "varios",
            price: 200,
        },
        {
            title: "Perfumes",
            description: "Perfumes para souvenir",
            images: [
                'varios5.png',
                'agendaprueba2.jpeg',
            ],
            slug: "perfumito",
            type: 'sin personalizar',
            gender: "varios",
            price: 200,
        },
        // {
        //     title: "Agenda con moños",
        //     description: "Agenda personal para anotar cositas con fondo de moñitos rosa",
        //     images: [
        //         'agendaprueba22.jpeg',
        //         'agendaprueba2.jpeg',
        //     ],
        //     slug: "agenda1",
        //     type: 'sin personalizar',
        //     gender: "agendas",
        //     price: 300,
        // },
        // {
        //     title: "Agenda Today",
        //     description: "Agenda personal para anotar cositas Today is a good day",
        //     images: [
        //         'agendaprueba1.jpeg',
        //         'agendaprueba11.jpeg',
        //         'agendaprueba111.jpeg',
        //         'agendaprueba1111.jpeg',
        //     ],
        //     slug: "agenda2",
        //     type: 'sin personalizar',
        //     gender: "agendas",
        //     price: 300,
        // },
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
                'agendaedit.jpeg',
                'agendaArcSN.png',
                'agendaArcoiris.png',
                'agendaArcoiris2.png',

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