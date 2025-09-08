// components/Portfolio/ProjectCard.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Logo } from "../Logo";
import { findSkillByName } from "@/utils/techUtils";

type ProjectCardProps = {
  slug: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
};

export default function ProjectCard({ slug, title, description, image, stack }: ProjectCardProps) {
  return (
    <div className="rounded-xl shadow-md overflow-hidden bg-white dark:bg-gray-800 transition hover:shadow-lg h-full flex flex-col">
      <Link href={`/portfolio/dev/${slug}`} className="flex flex-col h-full">
        {/* Container da imagem com proporção 1200x800 */}
        <div className="relative w-full aspect-[1200/800]">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Conteúdo abaixo da imagem */}
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 flex-grow">
            {description}
          </p>
          <div className="flex flex-wrap">
            {stack.map((tech) => {
              const skill = findSkillByName(tech);
              return skill ? (
                <span
                  key={tech}
                  className="text-xs px-2 py-1 rounded text-gray-700 dark:text-gray-200 flex-col flex items-center gap-1 mt-7"
                >
                  <Logo name={skill.name} image={skill.image} small />
                  {tech}
                </span>
              ) : (
                <span></span>
              );
            })}
          </div>
        </div>
      </Link>
    </div>
  );
}