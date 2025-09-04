"use client";

import PortfolioDesignCard, { DesignCardProps } from "./PortfolioDesignCard";

type PortfolioDesignGridProps = {
  projects: DesignCardProps[];
};

export default function PortfolioDesignGrid({ projects }: PortfolioDesignGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
      {projects.map((p, i) => (
        <PortfolioDesignCard key={p.id ?? i} {...p} />
      ))}
    </div>
  );
}
