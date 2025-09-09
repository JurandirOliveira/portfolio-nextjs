export type ProjectType = {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  extraImages?: string[];
  content?: string;
  demo?: string;
  repo?: string;
  tipourl?:string;
  highlight?: boolean;
};

export const projects: ProjectType[] = [
    {
    slug: "ia-assistant",
    title: "Assistente de IA",
    description:
      "Projeto de um Assistente de IA desenvolvido na Pós-Graduação IT-Valey inteligência Artificial. O FrontEnd foi desenvolvido em NextJS e o BackEnd com Python + FastAPI integrando os serviços da OpenAI.",
    stack: ["Next.JS", "Tailwind", "Git", "TypeScript", "Python", "Fast API", "OpenAI", "Azure"],
    image: "/assets/portfolio/dev/web/web_asistenteAi.png",
    demo: "https://asistente-ia-iota.vercel.app/",
    repo:"https://github.com/JurandirOliveira/Asistente_IA_NextJS",
    tipourl:'Link do site',
    highlight: true,
  },
  {
    slug: "web-portfolio",
    title: "Website - Portfólio pessoal",
    description:
      "Site do meu portfólio, desenvolvido em NextJS e TainWind Css.",
    stack: ["Next.JS", "Tailwind", "Photoshop", "Figma", "Git", "TypeScript"],
    image: "/assets/portfolio/dev/web/web_portifolio_1.png",
    extraImages:["/assets/portfolio/dev/web/web_portifolio_2.png","/assets/portfolio/dev/web/web_portifolio_3.png"],
    demo: "https://portfolio-nextjs-one-hazel.vercel.app/",
    repo:"https://github.com/JurandirOliveira/portfolio-nextjs",
    tipourl:'Link do site',
    highlight: true,
  },
  {
    slug: "app-ecoheros",
    title: "App EcoHeros - Os Herois da ecologia",
    description:
      "Jogo infantil desenvolvido em React Native com a plataforma Expo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/appEcoheros.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.EcoHeros",
    tipourl:'Link na loja',
    highlight: true,
  },
      {
    slug: "app-contar-dinheiro",
    title: "App Contar Dinheiro",
    description:
      "Jogo infantil desenvolvido em React Native com a plataforma Expo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/appDinheiro.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.contarDinheiro",
    tipourl:'Link na loja',
  },
  {
    slug: "website-cromossomos",
    title: "Site da Equipe de Gincana Cromossomos Bons",
    description:
      "Site desenvolvido para equipe de gincana Cromossomos Bons de Nova Lima - MG.",
    stack: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
    image: "/assets/portfolio/dev/web/websiteCromos-1.png",
    demo:"http://www.jurandiroliveira.com.br/cb18",
    tipourl:'Link do site',
    extraImages: ["/assets/portfolio/dev/web/websiteCromos-2.png","/assets/portfolio/dev/web/websiteCromos-3.png","/assets/portfolio/dev/web/websiteCromos-4.png",],
  },
  {
    slug: "website-lica",
    title: "Site Salgados da Lica",
    description:
      "Website desenvolvido em HTML CSS e Javascript para uma pequena empreendedora",
    stack: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
    image: "/assets/portfolio/dev/web/website-Lica.png",
    highlight: true,
  }
];

