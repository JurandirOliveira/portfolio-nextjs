"use client";

import { useState } from "react";
import Image from "next/image";
import { designProjects } from "@/data/projects-design";
import PortfolioDesignGrid from "@/components/PortfolioDesign/PortfolioDesignGrid";

export default function PortfolioDesignPage() {
  const sections = [
    { id: "desenhos", label: "🎨 Desenhos", image: "/assets/icons/desenhos.png" },
    { id: "edicao-imagens", label: "🖼️ Edição de Imagens", image: "/assets/icons/edicao-imagens.png" },
    { id: "edicao-videos", label: "🎬 Edição de Vídeos", image: "/assets/icons/edicao-videos.png" },
    { id: "fotografias", label: "📷 Fotografias", image: "/assets/icons/fotografias.png" },
    { id: "embalagens", label: "📦 Design de Embalagens", image: "/assets/icons/embalagens.png" },
  ];

  const [selectedSection, setSelectedSection] = useState("all");

  const visibleSections =
    selectedSection === "all"
      ? sections
      : sections.filter((s) => s.id === selectedSection);

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-12 bg-blue-100 dark:bg-gray-900 mt-1 mb-1 ">
      <div className="w-full">
        {/* Cabeçalho */}
        <div className="text-left mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            Portfólio de Design & Ilustração
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            Explore meus trabalhos criativos em diferentes áreas do design (Em construção).
          </p>
        </div>

        {/* Dropdown de filtro */}
        <div className="flex justify-end mb-12 relative">
          <select
            value={selectedSection}
            onChange={(e) => setSelectedSection(e.target.value)}
            className="bg-white dark:bg-gray-800 border rounded-lg px-3 py-2 text-gray-900 dark:text-gray-100 pr-10 appearance-none"
          >
            <option value="all">Todas as categorias</option>
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

        {/* Renderização por seções */}
        <div className="space-y-16">
          {visibleSections.map((section) => {
            const sectionProjects = designProjects.filter(
              (p) => p.section === section.id
            );

            if (sectionProjects.length === 0) return null;

            return (
              <div key={section.id} className="w-full">
                {/* Título da seção */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                    <Image
                      src={section.image}
                      alt={section.label}
                      fill
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 dark:text-gray-200">
                    {section.label.replace(/^[^\s]+\s/, "")}
                  </h2>
                </div>

                {/* Grid de projetos */}
                <PortfolioDesignGrid projects={sectionProjects} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
