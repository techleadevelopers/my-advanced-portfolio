
import SkillsSection from "../components/SkillsSection";
import SkillsChart from "../components/SkillsChart";
import SkillsGrid from "../components/SkillsGrid";
import { hardSkills, softSkills } from "../data/skills";

const Skills = () => {
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display cyber-gradient-text mb-4">
            Habilidades & Competências
          </h1>
          <p className="text-lg text-[#D3E4FD]/80 max-w-3xl mx-auto font-mono">
            Uma visão detalhada das minhas habilidades técnicas e interpessoais 
            desenvolvidas ao longo da minha carreira.
          </p>
        </div>
        
        {/* Featured Skills Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-8 text-center">
            Habilidades em Destaque
          </h2>
          <SkillsGrid />
        </div>
        
        {/* Skills Charts */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-8 text-center">
            Visualização de Habilidades
          </h2>
          <SkillsChart />
        </div>
        
        {/* Detailed Skills */}
        <div>
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-8 text-center">
            Detalhamento de Habilidades
          </h2>
          <SkillsSection skills={hardSkills} softSkills={softSkills} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
