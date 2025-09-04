// src/data/projects-design.ts
export type DesignProject = {
  id?: string;
  image: string; 
  description?: string; 
  section: "desenhos" | "edicao-imagens" | "edicao-videos" | "fotografias" | "embalagens";
  highlight?: boolean; // se true, aparece no preview da Home
};

export const designProjects: DesignProject[] = [
  {
    id: "desenho-1",
    image: "/assets/portfolio/design/desenho-1.png",
    description: "Estudo em grafite inspirado em arquitetura futurista.",
    section: "desenhos",
    highlight: true,
  },
  {
    id: "desenho-2",
    image: "/assets/portfolio/design/desenho-2.png",
    description: "Retrato em aquarela explorando contrastes de luz.",
    section: "desenhos",
  },
  {
    id:  "desenho-3",
    image: "/assets/portfolio/design/desenho-3.png",
    description: "Montagem digital criando um ambiente surreal.",
    section: "desenhos",
    highlight: true,
  },
  {
    id:  "desenho-4",
    image: "/assets/portfolio/design/desenho-4.png",
    description: "Restauração de fotografia antiga em preto e branco.",
    section: "desenhos",
  },
  {
    id: "edicao-1",
    image: "/assets/portfolio/design/edicao-1.png",
    description: "Thumbnail de um curta animado editado no After Effects.",
    section: "edicao-imagens",
  },
  {
    id: "edicao-2",
    image: "/assets/portfolio/design/edicao-2.png",
    description: "Edição de vídeo para campanha publicitária.",
    section: "edicao-imagens",
  },
    {
    id: "edicao-3",
    image: "/assets/portfolio/design/edicao-3.png",
    description: "Edição de vídeo para campanha publicitária.",
    section: "edicao-imagens",
  },
  {
    id: "foto-1",
    image: "/assets/portfolio/design/foto-1.png",
    description: "Fotografia urbana em longa exposição.",
    section: "fotografias",
    highlight: true,
  },
  {
    id: "foto-2",
    image: "/assets/portfolio/design/foto-2.png",
    description: "Macro fotografia de uma flor após a chuva.",
    section: "fotografias",
  },
    {
    id: "foto-3",
    image: "/assets/portfolio/design/foto-3.png",
    description: "Macro fotografia de uma flor após a chuva.",
    section: "fotografias",
  },
    {
    id: "foto-4",
    image: "/assets/portfolio/design/foto-4.png",
    description: "Macro fotografia de uma flor após a chuva.",
    section: "fotografias",
  },
  {
    id: "embalagem-1",
    image: "/assets/portfolio/design/embalagem-1.png",
    description: "Design de embalagem minimalista para café artesanal.",
    section: "embalagens",
    highlight: true,
  },
  {
    id: "embalagem-2",
    image: "/assets/portfolio/design/embalagem-2.png",
    description: "Rótulo criativo para garrafa de vinho premium.",
    section: "embalagens",
  },
];
