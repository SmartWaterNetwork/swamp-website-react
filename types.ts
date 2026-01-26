
export enum Page {
  HOME = 'HOME',
  QUIENES_SOMOS = 'QUIÉNES SOMOS',
  EQUIPO = 'EQUIPO',
  SOFTWARE = 'SOFTWARE',
  BLOG_TECNICO = 'BLOG TÉCNICO',
  INVESTIGACION = 'INVESTIGACIÓN',
  R_ACADEMICOS = 'R. ACADÉMICOS'
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  email?: string;
  googleScholar?: string;
  linkedin?: string;
}

export interface Software {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
}

export interface BlogPost {
  title: string;
  category: string;
  description: string;
  image: string;
  date?: string;
}

export interface Project {
  title: string;
  description: string;
  status: 'FINALIZADO' | 'EN EJECUCIÓN';
  authors: string;
  file: string;
  image?: string;
}

export interface AcademicResource {
  title: string;
  description: string;
  image: string;
  category: string;
  isbn13?: string;
  isbn10?: string;
  authors?: string;
  year?: string;
  language?: string;
  publishedAt?: string;
  fileName?: string;
  type?: string; // e.g., "DOUMENTOS", "PAPER"
}

export interface AcademicVideo {
  title: string;
  thumbnail: string;
  duration: string;
  category: string;
}
