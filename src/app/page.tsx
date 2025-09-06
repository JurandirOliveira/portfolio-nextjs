import Hero from "@/components/Hero";
import PortfolioDevPreview from "@/components/Portfolio/PortfolioDevPreview";
import PortfolioDesignPreview from "@/components/PortfolioDesign/PortfolioDesignPreview";
import Skills from "@/components/Skills";


export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Seção Hero + Skills */}
      <div className="flex flex-col md:flex-row items-start  px-0 md:px-0 py-5">
        {/* Hero à esquerda */}
        <div className="flex-1">
          <Hero />
        </div>

        {/* Skills à direita no desktop */}
        <div className="flex-1 md:max-w-sm md:ml-10">
          <Skills />
        </div>
      </div>

      {/* Seção Portfólio Preview */}
      <PortfolioDevPreview />
      <PortfolioDesignPreview />
    </div>
  );
}
