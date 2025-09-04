"use client";

import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import NavButton from "./NavButton";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/curriculum.pdf';
    link.download = 'Jurandir_Oliveira_Curriculo.pdf';
    link.click();
  };

  return (
    <nav className="w-full bg-[#1a365d] dark:bg-gray-900 shadow-lg">
      {/* Container principal sem max-width */}
      <div className="flex items-end justify-between px-8 pr-1 py-3 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/logo_portifolio.png"
              alt="Jurandir Oliveira"
              width={374}
              height={159}
              className="h-28 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Links Desktop - distribuídos igual à imagem */}
        <div className="hidden md:flex items-center gap-10">
          <NavButton 
            href="/portfolio/dev"
            active={activeLink === 'frontend'}
          >
            💻 Portfólio FrontEnd
          </NavButton>
          
          <NavButton 
            href="/portfolio/design"
            active={activeLink === 'design'}
          >
           🎨 Portfolio Design
          </NavButton>
          
          {/* <NavButton 
            href="/portfolio/sobre"
            active={activeLink === 'sobre'}
          >
            Sobre mim
          </NavButton> */}

          {/* Botão para baixar currículo */}
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 bg-[#48bb78] dark:bg-green-900 text-white dark:text-gray-300 hover:bg-[#38a169] transition-colors duration-200 font-medium px-5 py-2 rounded-lg shadow-md"
          >
            <Download size={18} />
            Baixar Curriculum
          </button>
          
          <ThemeToggle />
        </div>

        {/* Container mobile - Toggle e Menu button lado a lado */}
        <div className="md:hidden flex items-center gap-3">
          
          <button
            className="text-white p-2 rounded-lg hover:bg-[#3a496f]/60 transition-colors"
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ThemeToggle />
        </div>
      </div>

      {/* Menu mobile - CORRIGIDO */}
      {menuOpen && (
        <div className="md:hidden bg-[#1a365d] border-t border-[#3a496f]">
          <div className="flex flex-col items-center p-6 space-y-4">
            {/* Cada botão em uma div full width */}
            <div className="w-full">
              <NavButton 
                href="/portfolio/dev"
                onClick={toggleMenu}
                className="block w-full text-center py-3 text-lg"
              >
                Portfólio FrontEnd
              </NavButton>
            </div>
            
            <div className="w-full">
              <NavButton 
                href="/portfolio/design"
                onClick={toggleMenu}
                className="block w-full text-center py-3 text-lg"
              >
                Portfolio Design
              </NavButton>
            </div>
            
            <div className="w-full">
              <NavButton 
                href="/portfolio/sobre"
                onClick={toggleMenu}
                className="block w-full text-center py-3 text-lg"
              >
                Sobre mim
              </NavButton>
            </div>

            {/* Botão para baixar currículo */}
            <div className="w-full pt-2">
              <button
                onClick={() => {
                  handleDownloadCV();
                  toggleMenu();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#48bb78] text-white hover:bg-[#38a169] transition-colors font-medium py-3 px-4 rounded-lg shadow-md text-lg"
              >
                <Download size={18} />
                Baixar Curriculum
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}