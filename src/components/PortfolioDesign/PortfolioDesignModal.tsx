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
      >
        {/* Desktop modal (sem alteração) */}
        <div className="hidden md:flex relative flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-w-5xl w-full pt-1">
          <button
            className="absolute top-4 right-4 z-50 text-white bg-black/50 rounded-full p-2"
            onClick={onClose}
          >
            <X size={30} />
          </button>

          <div className="relative w-full h-[90vh]">
            <Image src={image} alt="Design" fill className="object-cover" />
          </div>

          {description && (
            <div className="p-6 text-gray-700 dark:text-gray-200 text-center">
              {description}
            </div>
          )}
        </div>

        {/* Mobile fullscreen (ajustado) */}
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
