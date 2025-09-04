"use client";

import { motion } from "framer-motion";

type ProjectContentProps = {
  content: string;
};

export default function ProjectContent({ content }: ProjectContentProps) {
  return (
    <motion.div
      className="mb-8 text-gray-800 dark:text-gray-200 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}
