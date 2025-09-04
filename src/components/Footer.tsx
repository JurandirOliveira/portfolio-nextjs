"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Mail, Play } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1a365d] dark:bg-gray-900 py-10 px-6">
      <div className="full mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
        {/* Logo + descrição */}
        <div className="flex items-center gap-4">
          <Image
            src="/assets/logo.png"
            alt="Jurandir Oliveira"
            width={200}
            height={200}
            className="h-20 w-auto object-contain"
            priority
          />
          <div>
            <h2 className="text-xl font-bold text-gray-100">
              Jurandir Oliveira
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Desenvolvedor Front-End & Designer. <br />
              Criando soluções digitais com código e criatividade.
            </p>
          </div>
        </div>

        {/* Links de navegação */}
        <div className="flex justify-center space-x-8">
          <Link
            href="/portfolio/dev"
            className="text-gray-200 hover:text-blue-400 font-medium"
          >
            💻 Portfólio Front-End
          </Link>
          <Link
            href="/portfolio/design"
            className="text-gray-200 hover:text-blue-400 font-medium"
          >
            🎨 Portfólio Design
          </Link>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center md:justify-end space-x-5">
          <a
            href="mailto:jurandir52@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400"
          >
            <Mail className="w-7 h-7" />
          </a>
          <a
            href="https://github.com/JurandirOliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400"
          >
            <Github className="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/jurandir-oliveira-53a19722/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-blue-400"
          >
            <Linkedin className="w-7 h-7" />
          </a>
          {/* <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-pink-500"
          >
            <Instagram className="w-7 h-7" />
          </a> */}
                 <a
            href="https://play.google.com/store/apps/developer?id=Jurandir+Oliveira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-green-500"
          >
            <Play className="w-7 h-7" />
          </a>
        </div>
      </div>

      {/* Direitos autorais */}
      <div className="mt-8 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Jurandir Oliveira. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
