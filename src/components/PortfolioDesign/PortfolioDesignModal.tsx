"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Info } from "lucide-react";

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
  const [showInfo, setShowInfo] = useState(false);

  // Fechar com ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Desktop modal */}
        <div className="hidden md:flex relative poiter flex-col bg-white dark:bg-gray-900 rounded-lg overflow-hidden max-w-5xl w-full pt-1">
          <button
            className="absolute cursor-pointer top-1 right-1 text-gray-200 hover:text-white z-50 bg-gray-500"
            onClick={onClose}
          >
            <X size={35} />
          </button>

          <div className="relative w-full h-[70vh]">
            <Image src={image} alt="Design" fill className="object-contain" />
          </div>

          {description && (
            <div className="p-6 text-gray-700 dark:text-gray-200 text-center">
              {description}
            </div>
          )}
        </div>

        {/* Mobile fullscreen */}
        <div className="md:hidden relative w-full h-full bg-black flex flex-col">
          <div className="relative flex-1">
            <Image src={image} alt="Design" fill className="object-contain" />
          </div>

          {description && (
            <>
              <button
                className="absolute bottom-4 right-4 bg-black/60 text-white p-2 rounded-full"
                onClick={() => setShowInfo(!showInfo)}
              >
                <Info size={22} />
              </button>

              {showInfo && (
                <div className="bg-black/80 text-white p-4 text-center">
                  {description}
                </div>
              )}
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
