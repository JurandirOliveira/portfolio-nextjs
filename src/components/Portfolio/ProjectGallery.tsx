"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type ProjectGalleryProps = {
  mainImage: string;
  extraImages?: string[];
};

export default function ProjectGallery({ mainImage, extraImages }: ProjectGalleryProps) {
  return (
    <>
      {/* Imagem principal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Image
          src={mainImage}
          alt="Imagem principal"
          width={1200}
          height={600}
          className="w-full rounded-lg shadow-md"
        />
      </motion.div>

      {/* Imagens extras */}
      {extraImages && extraImages.length > 0 && (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {extraImages.map((img, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={img}
                alt={`Imagem extra ${idx + 1}`}
                width={800}
                height={400}
                className="w-full rounded-md shadow"
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
}
