"use client";

import { useState } from "react";
import { designProjects } from "@/data/projects-design";
import PortfolioDesignGrid from "@/components/PortfolioDesign/PortfolioDesignGrid";

export default function PortfolioDesignPage() {
  const sections = [
    { id: "all", label: "Todas as categorias" },
    { id: "desenhos", label: "🎨 Desenhos" },
    { id: "edicao-imagens", label: "🖼️ Edição de Imagens" },
    { id: "edicao-videos", label: "🎬 Edição de Vídeos" },
    { id: "fotografias", label: "📷 Fotografias" },
    { id: "embalagens", label: "📦 Design de Embalagens" },
  ];

  const [selectedSection, setSelectedSection] = useState("all");

  const filteredProjects =
    selectedSection === "all"
      ? designProjects
      : designProjects.filter((p) => p.section === selectedSection);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-blue-100 dark:bg-gray-900">
      <div className="w-full">
        {/* Cabeçalho alinhado à esquerda */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Portfólio de Design & Ilustração
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Explore meus trabalhos criativos em diferentes áreas do design.
          </p>
        </div>

        {/* Dropdown de filtro */}
        <div className="flex justify-end mb-8 relative">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="bg-white dark:bg-gray-800 border rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 pr-10 appearance-none"          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.label}
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

        {/* Renderizar os projetos filtrados */}

        <PortfolioDesignGrid projects={filteredProjects}/>

      </div>
    </section>
  );
}
