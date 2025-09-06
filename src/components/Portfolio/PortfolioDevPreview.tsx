"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects-dev";
import ProjectCard from "./ProjectCard";

export default function PortfolioDevPreview() {
  const highlightedProjects = projects?.filter((p) => p.highlight);

  // Configuração para animação dos cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="portfolio-dev" className="py-10 px-4 sm:px-6 lg:px-12 bg-blue-100 dark:bg-gray-900">
      <div className="w-full">
        {/* Cabeçalho da seção */}
        <div className="text-center md:text-left mb-10">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Portfólio Front-End
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Alguns dos meus projetos mais recentes em desenvolvimento Front-End.
          </p>
        </div>

        {/* Grid de projetos com animação */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.15 }}
        >
          {highlightedProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={cardVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={
                index === 2
                  ? "hidden xl:block" // só aparece a partir de xl (3 colunas)
                  : index === 3
                  ? "hidden 2xl:block" // só aparece a partir de 2xl (4 colunas)
                  : ""
              }
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>

        {/* Botão de "veja mais" */}
        <div className="mt-10 text-center md:text-right">
          <Link
            href="/portfolio/dev"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Veja mais projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
