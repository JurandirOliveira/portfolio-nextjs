"use client";

import Image from "next/image";
import { useState } from "react";
import PortfolioDesignModal from "./PortfolioDesignModal";

export type DesignCardProps = {
  id?: string;
  image: string;
  description?: string;
  section: "desenhos" | "edicao-imagens" | "edicao-videos" | "fotografias" | "embalagens";
  highlight?: boolean;
};

export default function PortfolioDesignCard({
  image,
  description,
  section,
}: DesignCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="relative w-80  h-65 sm:w-full sm:h-120 md:h-80 cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-lg transition "
        onClick={() => setOpen(true)}
      >
        <Image
          src={image}
          alt={description ?? section}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      {open && (
        <PortfolioDesignModal
          image={image}
          description={description}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}
