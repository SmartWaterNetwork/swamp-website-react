
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
    icon: "mode_fan"
  },
  {
    id: "hydrotransis",
    name: "HYDROTRANSIS",
    description: "La presente herramienta informática tiene como finalidad simular la evolución del transitorio a través del tiempo, en un sistema de conducción simple y un sistema de bombeo, en base a las propiedades hidráulicas de los elementos y componentes de los sistemas hidráulicos.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEnyJOetAvQV995YBlqDvL8KcOu195t4bgYuXMBpp2jq9FlPS80zEIJR1wPE8f45DiqYi7a5e793o4w6HJx3gVpMlvUgfhJXDE20t6GV8zbN7QTFkIkjMCqoP0oirSopg5Fij0XvBz8RK__MhLvkYx5i0RHdz4tAYrOkNiAqGpqTAPkRjVLsRzoiUV3YZS_0PHpi3KBny5ja1dngHAUqFuAM_PdXjNxQJRQswNAmkevaCar8NRx3o1ilO6ecZyyNHzO4CsAzyU5g",
    icon: "waves"
  },
  {
    id: "dhycob",
    name: "DHYCOB",
    description: "Herramienta que permite el análisis y diseño de elementos hidráulicos en sistemas de abastecimiento (para consumo humano, riego y abrevaderos), captaciones, canales abiertos, volúmenes en almacenamientos, estabilidad de cauces y sistemas de drenaje.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADWks7wjHOLQBMsFhKf_bKkMmx717MaBh7KRVxTllXRIFOHIihvQr3ZvzKlyuqgIRwtIictbvpxUd8smbnwX3Vs9y36Wlm6ouMr5bgY8QmI73yTU1gkEnjcP-wlB3YkLDxC6lkD_RvaSHkP4_4pgSCIKjaFrIfKHNILTxJWTR_HbB_xyiMpmSQmmINKgRLTFqC0BgoiAkJgr9bfPqOM9J-KIUbWN1UHlpg_jc_tTNlS17_AnX5sSTD9e_ca19wCIzfwXl2xgD19A",
    icon: "water_drop"
  },
  {
    id: "derap",
    name: "DERAP Simplex",
    description: "Aplicación web para el diseño óptimo - económico de redes de agua a presión, por el método Simplex. Incluye selección de opciones de cálculo y comparación entre diseño convencional y óptimo.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAExrIf_4LOcda4S_J7IR4PDzrUy4L4cqACvd2_f3E1R3ydCQQCmlv37lgZohgIZhMC09Hlyd8N5wmvar6g5IcjGSd-39Inqw-Uou3MPXCgPykrtiKbpu721O9hI96ZvyL2DTsn9PHx5N3nTLeAO00nK5zKxC9S6BxWuF3KkFgvXiN8QJZxi2RmdBeh029rRXEE5uC5Mvr4Ice1DzSXGOIhlQoZxBP1ZkxAJXsZxiM1w6qA3W6N_8UtPQPN12JfGl3xNVOgYf97Zw",
    icon: "valve"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Proyecto evaluación del Drenaje Víal Loja - Zamora",
    category: "PROYECTO",
    description: "Identificación de zonas de afectación por fallas en sistemas de drenaje. Evaluación técnica de drenajes longitudinales y transversales para proponer mejoras estructurales.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWb1w5768WN-DheBLU68h1q_l3FntGD4CwgAQvHhhRq0a77PwY_nfe0O85rT1aSRmu4I966T4FE1zE38nkHw9XPVwBY7GARpSWYoVQDwBgxWkVhcoPuHzZj4FCOR6HAcB_TjfGOeFAiA1NWgR8qVpXHiktfMytkdWGJfw4xzFrsaCarwpHjdvmLhfuGC4ISwPCB92vpL3EQyTl93aAj5v4NsUgpk36sLM_NFeHXeYkYgUnouwQ7jTEiiMRNzEBHbqmP3Ytx2Pumw"
  },
  {
    title: "Contexto actual del sector Hidroeléctrico Ecuatoriano: Análisis de proyectos emblemáticos",
    category: "ANÁLISIS",
    description: "Análisis de los proyectos hidroeléctricos emblemáticos del Ecuador y su incidencia en el desarrollo nacional, matriz energética y sostenibilidad hídrica.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Nhw2JgFS0ZaaeG8MMVyucY52EaGhKlreKbcAoCbkuyC7N9Ki8T0oOVppxiw_jCEjVxwVUgqDGvbPlKOxV5-veRaC0Dx-F66qZnXD_7Xy9a77p1xU9ra8tMBwan7x4lm52DmQrdDsXmxIJCeUG1wjDtnjLS9NuBjlI3U9Cy1d1KymQhO0YKsfnl8fJbghRlSDvZJcfDSslwdCIha-5YIVZ1_JGkCAQ90w8jpszAxN5N7LnmlBx9mkKm1EpgKNB1gsqZjdHb5IIQ"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Proyecto evaluación del Drenaje Vial Loja - Zamora",
    description: "Identificación de fallas en sistemas de drenaje para tramo piloto.",
    status: "FINALIZADO",
    authors: "Holger Benavides Muñoz, Sonia Gonzaga Valllejo, Alonso Zúñiga Suárez, Víctor Hugo González, Santiago Quiñones Cuenca.",
    file: "informe.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAWb1w5768WN-DheBLU68h1q_l3FntGD4CwgAQvHhhRq0a77PwY_nfe0O85rT1aSRmu4I966T4FE1zE38nkHw9XPVwBY7GARpSWYoVQDwBgxWkVhcoPuHzZj4FCOR6HAcB_TjfGOeFAiA1NWgR8qVpXHiktfMytkdWGJfw4xzFrsaCarwpHjdvmLhfuGC4ISwPCB92vpL3EQyTl93aAj5v4NsUgpk36sLM_NFeHXeYkYgUnouwQ7jTEiiMRNzEBHbqmP3Ytx2Pumw"
  },
  {
    title: "Diseño de Red de Monitoreo Hidrológico",
    description: "Implementación de sensores IoT para medición en tiempo real de caudales.",
    status: "EN EJECUCIÓN",
    authors: "Equipo de Hidrología Aplicada, Tesistas de Ingeniería Civil.",
    file: "plan_trabajo.pdf",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800"
  }
];

export const ACADEMIC_RESOURCES: AcademicResource[] = [
  {
    title: "Manual de Laboratorio Mecánica de Fluidos (Descarga libre)",
    description: "Guía práctica para experimentos de ingeniería en mecánica de fluidos.",
    category: "Manuales",
    type: "DOUMENTOS",
    authors: "José Sánchez Paladines & Holger Benavides Muñoz",
    isbn13: "978-9942-00-710-0",
    year: "2018",
    fileName: "Manual_Lab Mecánica de Fluidos.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBedQ2YcpyAkdVYKoRMNsaHu2AKybBrtStZBTlyWphV9r2gOg5WXIIg-_IMrNcdS-eqUeYTy1qAAwZgq3EBEQt2I1qiBJTI_0MTF1g0WvIA-r6GAiOqBzwaCuDGECAU0uo31EkNowO0sizubomBOc0YBWaPBRnMKrxKBu1Mezst2M0sjdkrpBR_w49gNFFBI-REKoG_-1joqg3nexezsLixNQ13mMmproqJYy1_cv03d6ZtEDXtt84a5Up1Vt97rjSTAg5RNTNsCg"
  },
  {
    title: "Naturaleza (Descarga libre)",
    description: "Revista de la Sección Académica de Ciencias Naturales de la Casa de la Cultura Ecuatoriana Benjamín Carrión, Núcleo de Loja.",
    category: "Revistas",
    type: "DOUMENTOS",
    authors: "Holger Benavides Muñoz & Rafael Morales Astudillo",
    year: "2020",
    fileName: "Revista_Naturaleza_2020.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbXaexT_ZQ8fUyL2RzTzztKIPM9JxhMGzneOMBRZBwXU-t2ghNdSBXBuDb9Q_m43VhDmLMeEvT2R4av8O9madsBaznu9GQO87Q6IjX8-hC1e-BbVoGkhNfY-Ab6KQm5RnPOhWB6J4A2FDcjfXa5btAimwAkmy9b-xgdq--b3ySc_RxCJlhS0YVdgV_hPGXYw_pHIbEIc36n2ABU4Wh4QuQQL-n0FyDZO5yMnaTUAV5aUjAFeihWjW0fDtC7_TafABA0FeeFL_6tw"
  },
  {
    title: "Prospección y análisis hidrogeológico del potencial acuífero. Aplicación didáctica con fines de riego",
    description: "Prospección y análisis hidrogeológico del potencial acuífero. Aplicación didáctica con fines de riego.",
    category: "Libros",
    type: "PAPER",
    authors: "Benavides-Muocia Holger & Vaca-Carrión Richard",
    isbn13: "978-613-9-26208-3",
    year: "2018",
    publishedAt: "Dec 14, 2018",
    fileName: "Libro Prospeccion.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCz8NldXpulUal-Ao5RB4oscfh23CqsLJMjP4zZkvGI0nwWTaeukViekiHNtvXJyZ_wysSt7UbeIi2TLaSdXGbsBH4mGr6ZsRAvYZUFiulwkrP6HTNPtQ7eC_IaMjvL11znKLdDAgBRSQIpIXxvewp9O-QSSg_fE4i6PV1UzWa6g_mS1oVAhghCIG-Ng6Q_DQIr2ol5MLZZdrlJaB321c-Gix3a6cBSQoTUirqjYcfnSlSRJka64mCX6VPTCjrJQFi6ugEaTYmnaw"
  },
  {
    title: "Evaluación y diagnóstico de sistemas de abastecimiento de agua. Sostenibilidad: social, económica y ambiental",
    description: "Evaluación y diagnóstico de sistemas de abastecimiento de agua. Sostenibilidad: social, económica y ambiental",
    category: "Libros",
    type: "PAPER",
    authors: "Benavides-Muñoz Holger",
    isbn13: "978-620-2-14728-6",
    year: "2018",
    publishedAt: "Nov 23, 2018",
    fileName: "Libro Diagnostico.pdf",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1Nhw2JgFS0ZaaeG8MMVyucY52EaGhKlreKbcAoCbkuyC7N9Ki8T0oOVppxiw_jCEjVxwVUgqDGvbPlKOxV5-veRaC0Dx-F66qZnXD_7Xy9a77p1xU9ra8tMBwan7x4lm52DmQrdDsXmxIJCeUG1wjDtnjLS9NuBjlI3U9Cy1d1KymQhO0YKsfnl8fJbghRlSDvZJcfDSslwdCIha-5YIVZ1_JGkCAQ90w8jpszAxN5N7LnmlBx9mkKm1EpgKNB1gsqZjdHb5IIQ"
  },
  {
    title: "Management of Hydrological Systems",
    description: "Analysis and perspective of the contingent valuation of water for mountain basins",
    category: "Manuales",
    type: "PAPER",
    authors: "Equipo SWAM",
    year: "2021",
    fileName: "Libro Management of Hydrological Systems.pdf",
    image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=400"
  },
  {
    title: "EFECTOS DEL CAMBIO CLIMÁTICO EN EL HÁBITAT DE LAS ESPECIES Y LOS O.D.S. (Descarga libre)",
    description: "Memorias del congreso internacional de cambio climático - 2020",
    category: "Libros",
    type: "PAPER",
    authors: "Varios Autores",
    year: "2020",
    fileName: "Efectos del cambio climático en el hábitat de las especies y los O.D.S.pdf",
    image: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&q=80&w=400"
  }
];

export const ACADEMIC_VIDEOS: AcademicVideo[] = [
  {
    title: "Tutorial VENT-RED v1.0: Diseño de sistemas de ventilación",
    thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80&w=800",
    duration: "12:45",
    category: "Software"
  },
  {
    title: "Modelación de Transitorios en HYDROTRANSIS",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    duration: "18:20",
    category: "Tutoriales"
  },
  {
    title: "Gestión Inteligente de Redes de Agua (SWAM)",
    thumbnail: "https://images.unsplash.com/photo-1562613531-729977833503?auto=format&fit=crop&q=80&w=800",
    duration: "25:30",
    category: "Conferencias"
  },
  {
    title: "Proyecto de Vinculación: Sistemas de Riego Comunitarios",
    thumbnail: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    duration: "14:50",
    category: "Proyecto de vinculación"
  },
  {
    title: "Uso de Sensores IoT en Redes de Abastecimiento",
    thumbnail: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=800",
    duration: "15:10",
    category: "Tutoriales"
  },
  {
    title: "Software DHYCOB: Diseño de Elementos Hidráulicos",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    duration: "21:05",
    category: "Software"
  },
  {
    title: "Proyecto de Vinculación: Calidad del Agua en Zonas Rurales",
    thumbnail: "https://images.unsplash.com/photo-1468413927635-132dd0d724d2?auto=format&fit=crop&q=80&w=800",
    duration: "10:30",
    category: "Proyecto de vinculación"
  },
  {
    title: "Agua y Ciudad: Cumplimiento de los ODS",
    thumbnail: "https://images.unsplash.com/photo-1449156003053-c30c3b9c5931?auto=format&fit=crop&q=80&w=800",
    duration: "45:00",
    category: "Conferencias"
  },
  {
    title: "Configuración de Nodos en DERAP Simplex",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    duration: "09:30",
    category: "Tutoriales"
  }
];
