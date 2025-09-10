"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects-dev";
import ProjectCard from "@/components/Portfolio/ProjectCard";
import { useState } from "react";
import { getAllUniqueSkills } from "@/utils/extractSkills";

export default function PortfolioDevPage() {
  const [filter, setFilter] = useState("all");

  // Busca dinâmica de todas as skills únicas
  const allSkills = getAllUniqueSkills();

  // Filtra os projetos de acordo com o filtro selecionado
  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.stack.includes(filter));

  return (
    <section
      id="portfolio-dev"
      className="w-full py-5 bg-blue-100 dark:bg-gray-900 mt-1 mb-1"
    >
      <div className="px-6">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Portfólio Desenvolvimento Front-End e Mobile
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Conheça meus projetos de desenvolvimento web e mobile (Em construção).
            </p>
          </div>

          {/* Dropdown dinâmico */}
          <div className="relative">
            <select
              className="bg-white dark:bg-gray-800 border rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 pr-10 appearance-none"
              onChange={(e) => setFilter(e.target.value)}
              value={filter}
            >
              <option value="all">Todas as categorias</option>
              {allSkills.map((skill) => (
                <option key={skill} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-700 dark:text-gray-300">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Grid com animações */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
