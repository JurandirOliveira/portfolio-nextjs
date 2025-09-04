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
    slug: "app-ecoheros",
    title: "App EcoHeros - Os Herois da ecologia",
    description:
      "Jogo infantil desenvolvido em React Native com a plataforma Expo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/appEcoheros.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.EcoHeros",
    tipourl:'Link na loja',
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
    highlight: true,
  },
    {
    slug: "jogo-7-erros",
    title: "Jogo dos 7 erros",
    description:
      "Plataforma completa de e-commerce com carrinho de compras, checkout e painel administrativo.",
    stack: ["React Native", "Expo", "Photoshop", "Figma", "Git"],
    image: "/assets/portfolio/dev/app/app7erros.png",
    demo: "https://play.google.com/store/apps/details?id=com.jurandir52.Diferencas",
    tipourl:'Link na loja',
    highlight: true,
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
    highlight: true,
  },
  {
    slug: "website-lica",
    title: "Site Salgados da Lica",
    description:
      "Website desenvolvido em HTML CSS e Javascript para uma pequena empreendedora",
    stack: ["HTML5", "CSS3", "JavaScript", "Photoshop"],
    image: "/assets/portfolio/dev/web/website-Lica.png",
    highlight: true,
  },
  {
    slug: "blog-dev",
    title: "Blog para Desenvolvedores",
    description:
      "Blog moderno com suporte a Markdown, busca e comentários integrados.",
    stack: ["Next.js", "MDX", "Tailwind"],
    image: "/assets/portfolio/dev/projetoDev1.png",
    demo: "https://blog-dev-demo.com",
    repo: "https://github.com/usuario/blog-dev",
  },
  {
    slug: "task-manager",
    title: "Gerenciador de Tarefas",
    description:
      "Aplicativo web para organizar tarefas com arrastar e soltar e notificações.",
    stack: ["React", "Redux", "Firebase"],
    image: "/assets/portfolio/task-manager.png",
    demo: "https://task-manager-demo.com",
    repo: "https://github.com/usuario/task-manager",
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description:
      "Aplicativo responsivo para previsão do tempo com integração à OpenWeather API.",
    stack: ["Vue.js", "Tailwind"],
    image: "/assets/portfolio/weather.png",
    demo: "https://weather-demo.com",
    repo: "https://github.com/usuario/weather-app",
  },
  {
    slug: "portfolio-3d",
    title: "Portfólio 3D",
    description:
      "Portfólio interativo com elementos 3D utilizando Three.js e animações.",
    stack: ["React", "Three.js", "Framer Motion"],
    image: "/assets/portfolio/portfolio-3d.png",
    demo: "https://portfolio3d-demo.com",
    repo: "https://github.com/usuario/portfolio-3d",
  },
  {
    slug: "chat-app",
    title: "Chat em Tempo Real",
    description:
      "Aplicativo de chat com autenticação e integração ao Firebase para mensagens em tempo real.",
    stack: ["React", "Firebase", "Tailwind"],
    image: "/assets/portfolio/chat.png",
    demo: "https://chat-demo.com",
    repo: "https://github.com/usuario/chat-app",
  },
  {
    slug: "analytics-dashboard",
    title: "Analytics Dashboard",
    description:
      "Dashboard avançado com gráficos interativos e relatórios dinâmicos.",
    stack: ["Next.js", "Tailwind", "D3.js"],
    image: "/assets/portfolio/analytics.png",
    demo: "https://analytics-demo.com",
    repo: "https://github.com/usuario/analytics-dashboard",
  },
];

