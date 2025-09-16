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
    title: "2025 - Assistente de IA",
    description:
      "Projeto de um Assistente de IA desenvolvido na Pós-Graduação IT-Valey inteligência Artificial. O FrontEnd foi desenvolvido em NextJS e o BackEnd com Python + FastAPI integrando os serviços da OpenAI.",
    stack: ["Next.JS", "Tailwind", "Git", "TypeScript", "Python", "Fast API", "OpenAI", "Azure"],
    image: "/assets/portfolio/dev/web/web_asistenteAi.png",
    extraImages:["/assets/portfolio/dev/web/web_asistenteAi-2.png"],
    demo: "https://asistente-ia-iota.vercel.app/",
    repo:"https://github.com/JurandirOliveira/Asistente_IA_NextJS",
    tipourl:'Link do site',
    highlight: true,
  },
  {
    slug: "web-portfolio",
    title: "2024 - Website - Portfólio pessoal",
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
    title: "2025 - App EcoHeros, Os Herois da ecologia",
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
    title: "2025 - App Contar Dinheiro",
    description:
      "Jogo infantil desenvolvido em React Native com a plataforma Expo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/appDinheiro.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.contarDinheiro",
    tipourl:'Link na loja',
  },
 {
    slug: "app-jogo-diferencas",
    title: "2024 - App Jogo dos 7 erros",
    description:
      "Jogo infantil desenvolvido em React Native com a plataforma Expo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/app7erros.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.diferencas",
    tipourl:'Link na loja',
  },
    {
    slug: "website-programa-diversidade",
    title: "2020 - Website - Programa de Diversidade Localiza",
    description:
      "Site para promover um programa interno de diversidade. Foi desenvolvido em HTML, CSS - BootStrap e JavaScript a partir de Mockups no Figma. O site foi hospedado no Portal Localiza - Sharepoint.",
    stack: ["HTML5", "CSS3", "Bootstrap","JavaScript", "Photoshop", "Figma", "Sharepoint"],
    image: "/assets/portfolio/dev/web/web-diversidade.png",
    demo:"/assets/portfolio/dev/web/divhtml/demo.html",
    tipourl:'Demo',
    highlight:true
  },
  {
    slug: "2018 - website-cromossomos",
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
    slug: "2017 - website-lica",
    title: "Site Sabores da Lica",
    description:
      "Website desenvolvido em HTML CSS e Javascript para uma pequena empreendedora",
    stack: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
    image: "/assets/portfolio/dev/web/website-Lica.png",
  }
];

