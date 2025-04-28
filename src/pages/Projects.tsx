
import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects as allProjects } from "../data/projects";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [projects, setProjects] = useState(allProjects);
  
  const categories = [
    { id: "all", label: "Todos" },
    { id: "ransomware", label: "Ransomware" },
    { id: "qa", label: "QA" },
    { id: "education", label: "Educação" },
    { id: "ai", label: "IA" },
    { id: "other", label: "Outros" },
  ];
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setProjects(allProjects);
    } else {
      setProjects(allProjects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold cyber-gradient-text mb-4">
            Projetos
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Conheça os projetos que desenvolvi em áreas como segurança, 
            automação de testes, educação, inteligência artificial e mais.
          </p>
        </div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-neon-blue text-black"
                  : "border border-white/20 bg-white/5 hover:bg-white/10"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 cyber-box rounded-lg">
              <p className="text-lg text-foreground/70">
                Nenhum projeto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
