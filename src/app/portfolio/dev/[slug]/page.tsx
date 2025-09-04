// app/portfolio/dev/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects-dev";
import { Logo } from "@/components/Logo";
import { findSkillByName } from "@/utils/techUtils";
import { Carousel } from "@/components/ui/carousel";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) return notFound();

  const project = projects[projectIndex];
  const prevProject = projects[projectIndex - 1] || null;
  const nextProject = projects[projectIndex + 1] || null;

  // Preparar array de imagens (imagem principal + extras)
  const allImages = [project.image, ...(project.extraImages || [])];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Cabeçalho */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">{project.description}</p>
        </div>

        {/* Carrossel de imagens */}
        <div className="w-full">
          <Carousel images={allImages} title={project.title} />
        </div>

        {/* Tecnologias usadas */}
        <div>
          <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
            Tecnologias usadas
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.stack.map((tech) => {
              const skill = findSkillByName(tech);
              return skill ? (
                <div key={tech} className="flex flex-col items-center gap-1">
                  <Logo name={skill.name} image={skill.image} small />
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium text-center max-w-[80px] line-clamp-1">
                    {skill.name}
                  </span>
                </div>
              ) : (
                <div key={tech} className="flex flex-col items-center gap-1">
                  <span className="flex items-center justify-center w-12 h-12 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-medium">
                    {tech.charAt(0).toUpperCase()}
                  </span>
                  <span className="text-xs text-gray-700 dark:text-gray-300 font-medium text-center max-w-[80px] line-clamp-1">
                    {tech}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botões principais */}
        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex gap-4">
            {project.demo && (
              <Link
                href={project.demo}
                target="_blank"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
              >
                {project.tipourl ? project.tipourl : "Ver Demo"}
              </Link>
            )}
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition"
              >
                Ver Código
              </Link>
            )}
          </div>

          {nextProject && (
            <Link
              href={`/portfolio/dev/${nextProject.slug}`}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Próximo: {nextProject.title}
              <span className="text-xl">→</span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}