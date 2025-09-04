"use client";

import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string; // Adicione esta prop
}

export default function NavButton({ 
  href, 
  children, 
  active = false, 
  onClick,
  className = "" // Valor padrão vazio
}: NavButtonProps) {

  const buttonClasses = `
    text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium
    ${active 
      ? 'bg-[#3a496f]' 
      : 'bg-transparent hover:bg-[#3a496f]/60'
    }
    ${className} // Adicione a className passada por prop
  `;

  return (
    <Link 
      href={href}
      className={buttonClasses}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}