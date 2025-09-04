/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type LogoProps = {
  name: string;
  image: string;
  small?: boolean;
};

export function Logo({ name, image, small = false }: LogoProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define o tamanho baseado na prop small
  const size = small ? 6 : 12; // w-6 h-6 quando small, w-12 h-12 quando normal

  const handleClick = () => {
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 2000); // Fecha após 2 segundos
  };

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <motion.div
            className={`flex items-center justify-center rounded-md cursor-pointer ${
              small ? 'w-8 h-8' : 'w-12 h-12'
            }`}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={handleClick}
            onTouchStart={handleClick} // Para dispositivos touch
          >
            <img 
              src={image} 
              alt={name} 
              className="max-w-full max-h-full object-contain"
            />
          </motion.div>
        </TooltipTrigger>

        <TooltipContent
          side="bottom"
          className="bg-gray-800 text-white text-xs rounded-md px-2 py-1"
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}