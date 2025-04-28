
import AboutMe from "../components/AboutMe";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import { projects } from "../data/projects";
import { hardSkills, softSkills } from "../data/skills";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Index = () => {
  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      {/* Hero Section */}
      <AboutMe />
      
      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold cyber-gradient-text mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Uma seleção dos meus projetos mais recentes e relevantes em diversas áreas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects" className="cyber-button group inline-flex items-center">
              <span>Ver todos os projetos</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Skills Overview Section */}
      <section className="py-20 bg-cyber-dark/50 backdrop-blur-sm border-y border-white/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center  mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold  cyber-gradient-text mb-4">
              Habilidades em Destaque
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Um panorama das minhas principais competências técnicas e interpessoais.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="cyber-box rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300">
              <h3 className="text-xl font-display font-semibold cyber-gradient-text mb-4">
                Frontend
              </h3>
              <ul className="space-y-2">
                {hardSkills.filter(skill => skill.category === 'frontend').slice(0, 5).map(skill => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span className="text-neon-blue">›</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Backend */}
            <div className="cyber-box rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300">
              <h3 className="text-xl font-display font-semibold cyber-gradient-text mb-4">
                Backend
              </h3>
              <ul className="space-y-2">
                {hardSkills.filter(skill => skill.category === 'backend').slice(0, 5).map(skill => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span className="text-neon-blue">›</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Security */}
            <div className="cyber-box rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300">
              <h3 className="text-xl font-display font-semibold cyber-gradient-text mb-4">
                Segurança
              </h3>
              <ul className="space-y-2">
                {hardSkills.filter(skill => skill.category === 'security').slice(0, 5).map(skill => (
                  <li key={skill.name} className="flex items-center gap-2">
                    <span className="text-neon-blue">›</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/skills" className="cyber-button group inline-flex items-center">
              <span>Ver todas as habilidades</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
