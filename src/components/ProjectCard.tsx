
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const categoryColors = {
    ransomware: 'from-red-500 to-orange-500',
    qa: 'from-blue-500 to-green-500',
    education: 'from-yellow-500 to-orange-500',
    ai: 'from-indigo-500 to-purple-500',
    other: 'from-gray-500 to-blue-500',
  };
  
  return (
    <div 
      className={`group relative h-full cyber-box rounded-lg overflow-hidden transition-all duration-300 hover:border-neon-blue/50 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Category badge */}
      <div className={`absolute top-3 right-3 z-10 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${categoryColors[project.category]} text-white`}>
        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
      </div>
      
      <div className="p-6 h-full flex flex-col">
        <h3 className="text-xl font-display font-bold cyber-gradient-text mb-2">{project.title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p>
        
        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span 
                key={index} 
                className="px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-4 mt-auto pt-4">
          <Link 
            to={`/projects/${project.id}`} 
            className="text-neon-blue hover:text-neon-purple transition-colors text-sm font-medium"
          >
            Ver detalhes
          </Link>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1"
            >
              <ExternalLink size={14} />
              <span>Demo</span>
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium flex items-center gap-1"
            >
              <Github size={14} />
              <span>Código</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
