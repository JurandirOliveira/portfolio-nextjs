"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Evita erros de hidratação no Next.js
  useEffect(() => setMounted(true), []);

  if (!mounted) return (
    <button className="p-2 border rounded-md w-10 h-10 flex items-center justify-center">
      <div className="w-6 h-6" />
    </button>
  );

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-0 w-20 h-11"
      aria-label="Alternar tema"
    >
      {theme === "light" ? (
        <Image
          src="/assets/toggle-sol.png"
          alt="Modo claro"
          width={50}
          height={50}
          className="w-15 h-8 md:w-20 md:h-12  object-contain"
        />
      ) : (
        <Image
          src="/assets/toggle-lua.png"
          alt="Modo escuro"
          width={50}
          height={50}
          className="w-15 h-8 md:w-20 md:h-12  object-contain"
        />
      )}
    </button>
  );
}