
import { TeamMember, Software, BlogPost, Project, AcademicResource, AcademicVideo } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Silvio Aguilar",
    role: "INVESTIGADOR UTPL",
    image: "/assets/team/SilvioAguilar.jpg",
    description: "Doctorando en Ciencia y Tecnología Ambiental Universidad de la Coruña-España...",
    mdFile: "equipo/silvio-aguilar.md",
    email: "saguilar@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Eduardo Carrión Coronel",
    role: "INVESTIGADOR UTPL",
    image: "/assets/team/EduardoCarrion.jpg",
    description: "Doctor en Ingeniería Civil por la Universidad de Granada, España...",
    mdFile: "equipo/eduardo-carrion.md",
    email: "eecarrion@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Holger Benavides Muñoz",
    role: "INVESTIGADOR UTPL / COORDINADOR",
    image: "/assets/team/HolgerBenavides.jpg",
    description: "Doctor en Ingeniería hidráulica y medio ambiente por la Universidad Politécnica de Valencia...",
    mdFile: "equipo/holger-benavides.md",
    email: "hmbenavides@utpl.edu.ec",
    googleScholar: "https://orcid.org/0000-0001-7075-0905"
  },
  {
    name: "Santiago Quiñones C.",
    role: "DOCENTE INVESTIGADOR",
    image: "/assets/team/SantiagoQuinones.png",
    description: "Máster en Ingeniería de Software y Sistemas Informáticos por la UNIR...",
    mdFile: "equipo/santiago-quinones.md",
    email: "saquinones@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Fausto Vinicio López Rodríguez",
    role: "INVESTIGADOR UTPL",
    image: "/assets/team/FaustoLopez.jpg",
    description: "Doctor en Gestión y Conservación del Mar...",
    mdFile: "equipo/fausto-lopez.md",
    email: "fvlopez@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Mireya Lapo",
    role: "INVESTIGADORA UTPL",
    image: "/assets/team/MireyaLapo.jpg",
    description: "Doctora en Ingeniería del Agua y Medioambiental...",
    mdFile: "equipo/mireya-lapo.md",
    email: "mclapo@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Manuel Quiñones C.",
    role: "INVESTIGADOR UTPL",
    image: "/assets/team/ManuelQuinones.jpg",
    description: "Magíster en sistemas digitales...",
    mdFile: "equipo/manuel-quinones.md",
    email: "maquinones@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  },
  {
    name: "Alexandra Moncayo",
    role: "INVESTIGADORA UTPL",
    image: "/assets/team/AlexandraMoncayo.jpg",
    description: "Maestra en Arquitectura y especialista en Diseño de Paisaje...",
    mdFile: "equipo/alexandra-moncayo.md",
    email: "amoncayo@utpl.edu.ec",
    linkedin: "https://investigacion.utpl.edu.ec/"
  }
];

export const SOFTWARE_LIST: Software[] = [
  {
    id: "vent-red",
    name: "VENT-RED v1.0",
    description: "El software permite diseñar sistemas de ventilación por impulsión, mismo que atiende los principios de La Sociedad Americana de Calefacción, Refrigeración y Aire Achar (ASHRAE) lo que brinda al diseñador una gran facilidad en cuanto al tiempo de cálculo, precisión de resultados, dimensionamiento de la red y cálculo de pérdidas de carga.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCG22SOl64oy7MPWOdNdNzL9PM_qj3PrKiomuFD3YcktQ2t896kD3atDZhiRWj2ImF3AfqR9gVK9eq4JEZd7ZtET2WE9jyptzEKwTh6xRTCnEwODeLfiiRtgHHoLa4dM_PjzbJfMaV5pSct7Q4oXVJl1HVLWfjTwQMdS5BaEHpQtgnjH2udd6iCqcF-mUv6WcG_m0zxQlQ_lNGNqIv3AVr7gI_CKW0Zk3yucApw5fImLVlL9WGmsvBKKXKacHgsigto8wQQsn4_BA",
    icon: "mode_fan",
    url: "http://201.159.222.179:8080/RedesVentilacion/"
  },
  {
    id: "hydrotransis",
    name: "HYDROTRANSIS",
    description: "La presente herramienta informática tiene como finalidad simular la evolución del transitorio a través del tiempo, en un sistema de conducción simple y un sistema de bombeo, en base a las propiedades hidráulicas de los elementos y componentes de los sistemas hidráulicos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEnyJOetAvQV995YBlqDvL8KcOu195t4bgYuXMBpp2jq9FlPS80zEIJR1wPE8f45DiqYi7a5e793o4w6HJx3gVpMlvUgfhJXDE20t6GV8zbN7QTFkIkjMCqoP0oirSopg5Fij0XvBz8RK__MhLvkYx5i0RHdz4tAYrOkNiAqGpqTAPkRjVLsRzoiUV3YZS_0PHpi3KBny5ja1dngHAUqFuAM_PdXjNxQJRQswNAmkevaCar8NRx3o1ilO6ecZyyNHzO4CsAzyU5g",
    icon: "waves",
    url: "http://200.0.29.31:8080/"
  },
  {
    id: "dhycob",
    name: "DHYCOB",
    description: "Herramienta que permite el análisis y diseño de elementos hidráulicos en sistemas de abastecimiento (para consumo humano, riego y abrevaderos), captaciones, canales abiertos, volúmenes en almacenamientos, estabilidad de cauces y sistemas de drenaje.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADWks7wjHOLQBMsFhKf_bKkMmx717MaBh7KRVxTllXRIFOHIihvQr3ZvzKlyuqgIRwtIictbvpxUd8smbnwX3Vs9y36Wlm6ouMr5bgY8QmI73yTU1gkEnjcP-wlB3YkLDxC6lkD_RvaSHkP4_4pgSCIKjaFrIfKHNILTxJWTR_HbB_xyiMpmSQmmINKgRLTFqC0BgoiAkJgr9bfPqOM9J-KIUbWN1UHlpg_jc_tTNlS17_AnX5sSTD9e_ca19wCIzfwXl2xgD19A",
    icon: "water_drop",
    url: "http://201.159.222.179:8080/captacion/Default.aspx"
  },
  {
    id: "derap",
    name: "DERAP Simplex",
    description: "Aplicación web para el diseño óptimo - económico de redes de agua a presión, por el método Simplex. Incluye selección de opciones de cálculo y comparación entre diseño convencional y óptimo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAExrIf_4LOcda4S_J7IR4PDzrUy4L4cqACvd2_f3E1R3ydCQQCmlv37lgZohgIZhMC09Hlyd8N5wmvar6g5IcjGSd-39Inqw-Uou3MPXCgPykrtiKbpu721O9hI96ZvyL2DTsn9PHx5N3nTLeAO00nK5zKxC9S6BxWuF3KkFgvXiN8QJZxi2RmdBeh029rRXEE5uC5Mvr4Ice1DzSXGOIhlQoZxBP1ZkxAJXsZxiM1w6qA3W6N_8UtPQPN12JfGl3xNVOgYf97Zw",
    icon: "valve",
    url: "http://201.159.222.179:8080/DerapServidor/Principal.aspx"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "proyecto-evaluacion-drenaje",
    title: "Proyecto evaluación del Drenaje Víal Loja - Zamora",
    category: "HIDRÁULICA, BUENAS PRÁCTICAS, GP",
    description: "Este proyecto busca identificar una zona de afectación por fallas en los sistemas de drenaje en la vía Loja - Zamora. Por lo que se proyecta desarrollar un inventario de un tramo piloto de la vía para efectuar una evaluación técnica de los drenajes...",
    image: "/assets/blog/drenaje-loja-zamora.png",
    date: "26 de agosto de 2020",
    contentFile: "blog/drenaje-loja-zamora.md"
  },
  {
    id: "contexto-hidroelectrico-ecuatoriano",
    title: "Contexto actual del sector Hidroeléctrico Ecuatoriano: Análisis de proyectos emblemáticos",
    category: "GENERAL",
    description: "Este artículo hace un análisis de los proyectos hidroeléctricos emblemáticos del Ecuador y su incidencia en el desarrollo nacional. El acceso a la energía en uno de los pilares fundamentales en cualquier aspiración de crecimiento...",
    image: "/assets/blog/sector-hidroelectrico.jpg",
    date: "23 de octubre de 2019",
    contentFile: "blog/sector-hidroelectrico.md"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Proyecto evaluación del Drenaje Vial Loja - Zamora",
    description: "Este proyecto busca identificar una zona de afectación por fallas en los sistemas de drenaje en la vía Loja - Zamora. Se proyecta desarrollar un inventario de un tramo piloto de la vía para efectuar una evaluación técnica de los drenajes...",
    category: "BUENAS PRÁCTICAS",
    status: "FINALIZADO",
    authors: "Holger Benavides Muñoz, Sonia Gonzaga Valllejo, Alonso Zúñiga Suárez, Víctor Hugo González, Santiago Quiñones Cuenca.",
    file: "/docs/investigacion/informe_drenaje_vial.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWb1w5768WN-DheBLU68h1q_l3FntGD4CwgAQvHhhRq0a77PwY_nfe0O85rT1aSRmu4I966T4FE1zE38nkHw9XPVwBY7GARpSWYoVQDwBgxWkVhcoPuHzZj4FCOR6HAcB_TjfGOeFAiA1NWgR8qVpXHiktfMytkdWGJfw4xzFrsaCarwpHjdvmLhfuGC4ISwPCB92vpL3EQyTl93aAj5v4NsUgpk36sLM_NFeHXeYkYgUnouwQ7jTEiiMRNzEBHbqmP3Ytx2Pumw",
    mdFile: "investigacion/drenaje-vial-loja-zamora.md"
  },
  {
    title: "Conferencia: \"Agua y ciudad. Cumplimiento de los ODS\"",
    description: "Análisis detallado de los desafíos urbanos en la gestión del agua y estrategias para el cumplimiento de los Objetivos de Desarrollo Sostenible (ODS) de la ONU en entornos municipales.",
    category: "CONFERENCIAS",
    tag: "Martes de Naturaleza",
    authors: "SWAM Research Group",
    file: "/docs/investigacion/conferencia_agua_ciudad_ods.pdf",
    image: "/assets/investigacion/conferencia_agua_ciudad.jpg",
    mdFile: "investigacion/conferencia-agua-ciudad-ods.md",
    date: "20 de Septiembre, 2022"
  },
  {
    title: "Ponencia: Tecnologías emergentes en Hidrología",
    description: "Exploración de innovaciones tecnológicas como sensores IoT de bajo costo, gemelos digitales y modelos predictivos para la optimización de redes de distribución de agua potable.",
    category: "CONFERENCIAS",
    tag: "Congreso Internacional",
    authors: "SWAM Research Group",
    file: "#",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    date: "15 de Noviembre, 2023"
  }
];

export const ACADEMIC_RESOURCES: AcademicResource[] = [
  {
    title: "Manual de Laboratorio Mecánica de Fluidos (Descarga libre)",
    description: "Guía práctica para experimentos de ingeniería en mecánica de fluidos.",
    category: "Manuales",
    type: "DOUMENTOS",
    authors: "Holger Benavides Muñoz",
    isbn13: "978-9942-00-710-0",
    year: "2010",
    pdfFile: "/docs/publicaciones/Manual_Lab_Mecanica_Fluidos.pdf",
    image: "/assets/recursos/publicaciones/Manual_Fluidos.jpg",
    mdFile: "recursos-academicos/publicaciones/manual-laboratorio-fluidos.md"
  },
  {
    title: "Naturaleza (Descarga libre)",
    description: "Revista de la Sección Académica de Ciencias Naturales de la Casa de la Cultura Ecuatoriana Benjamín Carrión, Núcleo de Loja.",
    category: "Revistas",
    type: "DOUMENTOS",
    authors: "Holger Benavides Muñoz & Rafael Morales Astudillo",
    year: "2020",
    pdfFile: "/docs/publicaciones/Revista_Naturaleza_2020.pdf",
    image: "/assets/recursos/publicaciones/Libro_2020.jpg",
    mdFile: "recursos-academicos/publicaciones/revista-naturaleza-2020.md"
  },
  {
    title: "Prospección y análisis hidrogeológico del potencial acuífero. Aplicación didáctica con fines de riego",
    description: "Estudio sobre el potencial acuífero y su aplicación didáctica.",
    category: "Libros",
    type: "PAPER",
    authors: "Benavides-Muocia Holger & Vaca-Carrión Richard",
    isbn13: "978-613-9-26208-3",
    year: "2018",
    pdfFile: "/docs/publicaciones/Libro_Prospeccion.pdf",
    image: "/assets/recursos/publicaciones/Prospeccion.jpg",
    mdFile: "recursos-academicos/publicaciones/prospeccion-hidrogeologica.md"
  },
  {
    title: "Evaluación y diagnóstico de sistemas de abastecimiento de agua. Sostenibilidad: social, económica y ambiental",
    description: "Evaluación integral de sistemas de agua potable.",
    category: "Libros",
    type: "PAPER",
    authors: "Benavides-Muñoz Holger",
    isbn13: "978-620-2-14728-6",
    year: "2018",
    pdfFile: "/docs/publicaciones/Libro_Diagnostico.pdf",
    image: "/assets/recursos/publicaciones/Diagnostico.jpg",
    mdFile: "recursos-academicos/publicaciones/evaluacion-diagnostico-agua.md"
  },
  {
    title: "Management of Hydrological Systems",
    description: "Analysis and perspective of the contingent valuation of water for mountain basins",
    category: "Manuales",
    type: "PAPER",
    authors: "Benavides-Muñoz Holger",
    year: "2018",
    pdfFile: "/docs/publicaciones/Libro_Management_Hydrological_Systems.pdf",
    image: "/assets/recursos/publicaciones/Hydrological.jpg",
    mdFile: "recursos-academicos/publicaciones/management-hydrological-systems.md"
  },
  {
    title: "EFECTOS DEL CAMBIO CLIMÁTICO EN EL HÁBITAT DE LAS ESPECIES Y LOS O.D.S. (Descarga libre)",
    description: "Memorias del congreso internacional de cambio climático - 2020",
    category: "Libros",
    type: "PAPER",
    authors: "Varios Autores",
    year: "2020",
    pdfFile: "/docs/publicaciones/Efectos_cambio_climatico.pdf",
    image: "/assets/recursos/publicaciones/Cambio_Climatico_ODS.png",
    mdFile: "recursos-academicos/publicaciones/efectos-cambio-climatico.md"
  }
];

export const ACADEMIC_VIDEOS: AcademicVideo[] = [
  {
    title: "Muestreador automático de agua (M.A.d.A.)",
    thumbnail: "/assets/recursos/videos/MADA_1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=PJjtC3hYDJM",
    duration: "02:15",
    category: "SOFTWARE",
    mdFile: "recursos-academicos/videos/muestreador-mada-1.md"
  },
  {
    title: "Muestreador automático de agua (MADA)",
    thumbnail: "/assets/recursos/videos/MADA_2.jpg",
    videoUrl: "https://www.youtube.com/watch?v=niLXom_ImCQ",
    duration: "03:40",
    category: "SOFTWARE",
    mdFile: "recursos-academicos/videos/muestreador-mada-2.md"
  },
  {
    title: "Guardianes de la Sostenibilidad",
    thumbnail: "/assets/recursos/videos/Guardianes.jpg",
    videoUrl: "https://www.youtube.com/watch?v=c9kJGy5yNOQ",
    duration: "15:20",
    category: "CONFERENCIAS",
    mdFile: "recursos-academicos/videos/guardianes-sostenibilidad.md"
  },
  {
    title: "PÁRAMOS: CONSERVACIÓN Y AMENAZAS",
    thumbnail: "/assets/recursos/videos/Paramos.jpg",
    videoUrl: "https://www.youtube.com/watch?v=s7f2stx3qyc",
    duration: "45:10",
    category: "WEBINAR",
    mdFile: "recursos-academicos/videos/paramos-conservacion.md"
  },
  {
    title: "Aumento del consumo de agua domiciliaria como efecto de los fenómenos mundiales",
    thumbnail: "/assets/recursos/videos/Consumo_Agua.jpg",
    videoUrl: "https://www.youtube.com/watch?v=jcCgtEqXzkQ",
    duration: "32:45",
    category: "WEBINAR",
    mdFile: "recursos-academicos/videos/consumo-agua-domiciliaria.md"
  },
  {
    title: "Ingeniería Civil e Hidráulica, entrevista para 'Indoamérica Investiga'",
    thumbnail: "/assets/recursos/videos/Entrevista_Indoamerica.jpg",
    videoUrl: "https://www.youtube.com/watch?v=cfNKug_FV_Y",
    duration: "18:20",
    category: "ENTREVISTA",
    mdFile: "recursos-academicos/videos/entrevista-indoamerica.md"
  },
  {
    title: "¿Por qué localizar fugas de agua?",
    thumbnail: "/assets/recursos/videos/Fugas_Agua.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Bm72wGro3RA",
    duration: "05:30",
    category: "TUTORIALES",
    mdFile: "recursos-academicos/videos/localizar-fugas-agua.md"
  },
  {
    title: "Ejemplo de introducción a Epanet",
    thumbnail: "/assets/recursos/videos/Epanet_Intro.jpg",
    videoUrl: "https://www.youtube.com/watch?v=j2umP5SYbOM",
    duration: "12:15",
    category: "TUTORIALES",
    mdFile: "recursos-academicos/videos/introduccion-epanet.md"
  },
  {
    title: "Instalaciones hidrosanitarias en edificios con CYPE. Parte 1",
    thumbnail: "/assets/recursos/videos/CYPE_Parte1.jpg",
    videoUrl: "https://www.youtube.com/watch?v=N90YaGzBJck",
    duration: "21:05",
    category: "TUTORIALES",
    mdFile: "recursos-academicos/videos/instalaciones-cype-1.md"
  }
];
