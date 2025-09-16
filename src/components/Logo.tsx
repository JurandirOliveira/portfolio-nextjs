/* eslint-disable @next/next/no-img-element */
"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type LogoProps = {
  name: string;
  image: string;
  small?: boolean;
};

export function Logo({ name, image, small = false }: LogoProps) {
  const [isMobile, setIsMobile] = useState(false);

  // Detecta se está em mobile (no lado do cliente)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 1024); // lg breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const size = small ? "w-8 h-8" : "w-12 h-12";

  const trigger = (
    <motion.div
      className={`flex items-center justify-center rounded-md cursor-help ${size}`}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={image}
        alt={name}
        className="max-w-full max-h-full object-contain"
      />
    </motion.div>
  );

  if (isMobile) {
    // 👉 Mobile usa Popover
    return (
      <Popover>
        <PopoverTrigger asChild>{trigger}</PopoverTrigger>
        <PopoverContent
          side="bottom"
          className="bg-gray-800 text-white text-xs rounded-md px-2 py-1 w-auto"
        >
          {name}
        </PopoverContent>
      </Popover>
    );
  }

  // 👉 Desktop usa Tooltip
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
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
