interface SeedArticles {
    description: string;
    images: string[];
    title: string;
    slug: string;
    type: ValidTypes;
    gender: ValidCatergories;
    price: number; 
};


type ValidCatergories = 'agendas'|'cuadernos'|'planners'|'encuadernaciones'|'varios'|'otros'|'programasEBI'|'libretitas';
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
            slug: "agenda_mas_cuaderno",
            type: 'utiles escolares',
            gender: "varios",
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
            slug: "cuaderno_mooving",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Cuaderno de entrenamiento 📓​",
            description: "Cuaderno de Entrenamiento de Independiente, ideal para directores técnicos y apasionados de la táctica. Cuenta con un diseño premium en tapa texturizada gris oscuro con espiral metálico, cierre elástico y una portada 100% personalizable con tu nombre y cargo",
            images: [
                'agendaCai2.png',
                'agendacai7.png',
                'agendacai6.png',
                'agendacai1.png',
                'agendacai8.png',
                'agendacai5.png',
                'agendacai4.png',
            ],
            slug: "cuaderno_cai",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Libro de Memorias",
            description: "Abuelos, historias que merecen ser contadas es un libro pensado para conservar los recuerdos más valiosos de una vida. A través de preguntas sobre su infancia, juventud, familia, sueños, logros y aprendizajes, cada página invita a compartir historias que merecen ser contadas y preservadas ✨",
            images: [
                'libroMemoria1.png',
                'libroMemoria2.png',
                'libroMemoria3.png',
                'libroMemoria5.png',
                'libroMemoria4.png',
                'libroMemoria6.png',
                'libroMemoria7.png',
            ],
            slug: "cuaderno_abuelos",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Cuaderno Magnolia 🌸",
            description: "¡Tus apuntes merecen un espacio especial! Este cuaderno personalizado es ideal para organizar tu dia a dia, estudiar o plasmar tus mejores ideas. Con una tapa en un delicado tono lila y un diseño floreal 🌸",
            images: [
                'plannerV.png',
                'plannerV1.png',
                'plannerV2.png',
                'plannerV3.png',
                'plannerV4.png',
                'plannerV5.png',
                'plannerV6.png',
            ],
            slug: "cuaderno_magnolia",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Recetario 📖",
            description: "Este Cuaderno Recetario es el compañero ideal para organizar tus platos favoritos de forma práctica y con mucho estilo. Diseñado con un formato apaisado y espiral doble metálico, cuenta con un interior súper completo y estético en tonos pastel que incluye diferentes secciones 🍰",
            images: [
                'recetarioImg7.png',
                'recetarioImg2.png',
                'recetarioImg.png',
                'recetarioImg4.png',
                'recetarioImg5.png',
                'recetarioImg1.png',
                'recetarioImg3.png',
            ],
            slug: "cuaderno_recetario",
            type: 'cuadernos personalizados',
            gender: "cuadernos",
            price: 300,
        },
        {
            title: "Cartuchera Campus",
            description: "Cartuchera Campus combina funcionalidad y diseño moderno con doble compartimento y un asa resistente, ideal para tus utiles escolares o como neceser para tu maquillaje 💗",
            images: [
                'cartuchera4.png',
                'cartuchera1.png',
                'cartuchera3.png',
                'cartuchera2.png',
            ],
            slug: "cartuchera_campus",
            type: 'utiles escolares',
            gender: "varios",
            price: 300,
        },
        {
            title: "Programa Educación Básica Integrada",
            description: "🐝​ Programa EBI 1.er Ciclo - Tramo 1 diseñado para acompañar la planificacion diaria de las maestras, este programa en formato A5 es ideal para llevar facilmente a todas partes y tener la infrmacion siempre al alcance" ,
            images: [
                'programaEbi6.png',
                'programaEbi5.png',
                'programaEbi.png',
                'programaEbi1.png',
                'programaEbi2.png',
                'programaEbi3.png',
                'programaEbi4.png',
            ],
            slug: "programa_ebi",
            type: 'encuadernaciones personalizadas',
            gender: "programasEBI",
            price: 650,
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