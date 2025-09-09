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
    id: "desenho",
    image: "/assets/portfolio/design/desenho-0.png",
    description: "Série de estudos em lápis grafite explorando expressões faciais e detalhes realistas.",
    section: "desenhos",
    highlight: true,
  },
  {
    id: "desenho-1",
    image: "/assets/portfolio/design/desenho-1.png",
    description: "Desenho realista feito a partir de uma capa de revista, explorando o contraste e a delicadeza dos traços do rosto feminino.",
    section: "desenhos",
    highlight: true,
  },
  {
    id: "desenho-2",
    image: "/assets/portfolio/design/desenho-2.png",
    description: "Estudo de retrato em grafite focado na valorização do jogo de luz e sombra, buscando transmitir volume e profundidade.",
    section: "desenhos",
  },
  {
    id:  "desenho-3",
    image: "/assets/portfolio/design/desenho-3.png",
    description: "Desenho feito a partir de uma fotografia clássica, destacando a vivacidade e o estilo característico da época.",
    section: "desenhos",
    highlight: true,
  },
  {
    id:  "desenho-4",
    image: "/assets/portfolio/design/desenho-4.png",
    description: "Trabalho experimental utilizando têmpera caseira à base de café e chá, explorando tonalidades quentes e textura orgânica em um retrato realista.",
    section: "desenhos",
  },
  {
    id: "edicao-1",
    image: "/assets/portfolio/design/edicao-1.png",
    description: "Fotografia antiga restaurada digitalmente, removendo marcas do tempo e recuperando contraste e nitidez, preservando a memória original.",
    section: "edicao-imagens",
  },
  {
    id: "edicao-2",
    image: "/assets/portfolio/design/edicao-2.png",
    description: "Retrato clássico em preto e branco transformado com coloração digital, trazendo uma nova vida e impacto visual à imagem.",
    section: "edicao-imagens",
  },
    {
    id: "edicao-3",
    image: "/assets/portfolio/design/edicao-3.png",
    description: "Foto icônica restaurada e reinterpretada com técnicas digitais de recolorização, destacando luz, pele e expressão com maior impacto visual.",
    section: "edicao-imagens",
  },
  {
    id: "foto-1",
    image: "/assets/portfolio/design/foto-1.png",
    description: "Fotografia de um filhote de coruja registrado durante um passeio de observação na natureza.",
    section: "fotografias",
    highlight: true,
  },
  {
    id: "foto-2",
    image: "/assets/portfolio/design/foto-2.png",
    description: "Fotografia de um chimpanzé realizado durante visita a um zoológico.",
    section: "fotografias",
  },
    {
    id: "foto-3",
    image: "/assets/portfolio/design/foto-3.png",
    description: "Registro dos ultimos preparativos para um desfile no carnaval de rua",
    section: "fotografias",
  },
    {
    id: "foto-4",
    image: "/assets/portfolio/design/foto-4.png",
    description: "MRegistro de um grupo de mulheres dançando com trajes típicos durante o carnaval de rua.",
    section: "fotografias",
  },
];
