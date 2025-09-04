"use client";

import Link from "next/link";
import { designProjects } from "@/data/projects-design";
import PortfolioDesignCard from "./PortfolioDesignCard";

export default function PortfolioDesignPreview() {
  const highlighted = designProjects.filter((p) => p.highlight);

  return (
    <section id="portfolio-design" className="mt-10 py-12 px-4 sm:px-6 lg:px-12  bg-blue-100 dark:bg-gray-900">
        <div className="w-full">
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Portfólio de Design & Ilustração
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Alguns dos meus trabalhos visuais recentes.
          </p>
        </div>

        {/* Grid preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      {highlighted.map((project, index) => (
        <div
          key={project.id}
          className={
            // esconde o último item se não for tela 2xl
            index === 2 ? "hidden lg:block" : index === 3 ? "hidden 2xl:block" : ""
          }
        >
          <PortfolioDesignCard {...project} />
        </div>
      ))}
    </div>

        {/* Botão veja mais */}
        <div className="mt-10 text-center md:text-right">
          <Link
            href="/portfolio/design"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Veja mais projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
