"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

export type PortfolioDesignModalProps = {
  image: string;
  description?: string;
  onClose: () => void;
};

export default function PortfolioDesignModal({
  image,
  description,
  onClose,
}: PortfolioDesignModalProps) {
  // Fechar com ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Fechar com botão "back" do device
  useEffect(() => {
    const handlePopState = () => {
      onClose();
    };

    // Adiciona um estado no histórico
    window.history.pushState(null, "", window.location.href);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // fecha ao clicar no overlay
      >
        {/* Desktop modal */}
        <div
          className="hidden md:flex relative flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()} // impede fechar clicando no conteúdo
        >
          <button
            className="absolute top-4 right-4 z-50 text-white bg-black/50 rounded-full p-2"
            onClick={onClose}
          >
            <X size={30} />
          </button>

          {/* Wrapper com aspect ratio fixo + descrição sobreposta */}
          <div className="relative w-full aspect-[3/2] max-h-[95vh] mx-auto">
            <Image src={image} alt="Design" fill className="object-cover" />

            {description && (
              <div className="absolute bottom-0 w-full bg-black/60 text-white p-4 text-center">
                {description}
              </div>
            )}
          </div>
        </div>

        {/* Mobile fullscreen (sem alteração) */}
        <div className="md:hidden relative w-full h-full bg-black flex flex-col">
          {/* Botão fechar no topo direito */}
          <button
            className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full z-50"
            onClick={onClose}
          >
            <X size={24} />
          </button>

          {/* Imagem */}
          <div className="relative flex-1">
            <Image src={image} alt="Design" fill className="object-contain" />
          </div>

          {/* Descrição sempre visível */}
          {description && (
            <div className="bg-black/80 text-white p-4 text-center">
              {description}
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
