import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
        <div className="text-center cyber-box rounded-lg p-8 max-w-md">
          <h2 className="text-2xl font-display font-semibold mb-4">Projeto não encontrado</h2>
          <p className="text-foreground/70 mb-6">
            O projeto que você está procurando não existe ou foi removido.
          </p>
          <Link to="/projects" className="cyber-button inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Voltar para projetos</span>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/projects" className="inline-flex items-center text-foreground/70 hover:text-neon-blue transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span>Voltar para projetos</span>
          </Link>
        </div>
        
        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold cyber-gradient-text mb-4">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 rounded-full text-sm font-medium border border-white/10 bg-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Project content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project image/preview */}
          <div className="lg:col-span-2">
            <div className="cyber-box rounded-lg overflow-hidden aspect-video">
              <div className="h-full w-full bg-cyber-dark flex items-center justify-center p-8">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-lg border border-neon-blue/30 bg-cyber-dark">
                    <span className="text-2xl font-display font-bold cyber-gradient-text">
                      {project.title.substring(0, 2)}
                    </span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Project description */}
            <div className="cyber-box rounded-lg p-6 mt-8">
              <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-4">
                Descrição do Projeto
              </h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.longDescription || project.description}
              </p>
              
              {/* Placeholder for more content - in a real app, you'd have more details here */}
              <div className="mt-8 space-y-4">
                <h3 className="text-xl font-display font-medium text-neon-blue">
                  Desafios Superados
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Este projeto apresentou desafios únicos que exigiram soluções inovadoras e uma
                  abordagem técnica avançada. A implementação de funcionalidades complexas foi
                  realizada com foco em performance, segurança e experiência do usuário.
                </p>
                
                <h3 className="text-xl font-display font-medium text-neon-blue">
                  Tecnologias Utilizadas
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  A arquitetura do projeto foi cuidadosamente planejada para garantir escalabilidade
                  e manutenibilidade. As tecnologias foram selecionadas com base em suas capacidades
                  e adequação aos requisitos específicos do projeto.
                </p>
                
                <h3 className="text-xl font-display font-medium text-neon-blue">
                  Resultados Obtidos
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  O projeto alcançou seus objetivos principais, demonstrando a viabilidade e
                  eficácia das soluções implementadas. Os usuários relataram alta satisfação
                  com a funcionalidade e usabilidade das ferramentas desenvolvidas.
                </p>
              </div>
            </div>
          </div>
          
          {/* Project sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project links */}
            <div className="cyber-box rounded-lg p-6">
              <h3 className="text-xl font-display font-medium cyber-gradient-text mb-4">
                Links do Projeto
              </h3>
              
              <div className="space-y-4">
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-foreground/70 hover:text-neon-blue transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span>Demonstração ao vivo</span>
                  </a>
                )}
                
                {project.githubLink && (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-3 text-foreground/70 hover:text-neon-blue transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span>Repositório do código</span>
                  </a>
                )}
                
                {!project.link && !project.githubLink && (
                  <p className="text-foreground/60 text-sm italic">
                    Este projeto não possui links externos disponíveis.
                  </p>
                )}
              </div>
            </div>
            
            {/* Project category */}
            <div className="cyber-box rounded-lg p-6">
              <h3 className="text-xl font-display font-medium cyber-gradient-text mb-4">
                Categoria
              </h3>
              
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-neon-blue to-neon-purple text-white">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </div>
            </div>
            
            {/* Other projects */}
            <div className="cyber-box rounded-lg p-6">
              <h3 className="text-xl font-display font-medium cyber-gradient-text mb-4">
                Outros Projetos
              </h3>
              
              <div className="space-y-3">
                {projects
                  .filter(p => p.id !== project.id)
                  .slice(0, 3)
                  .map(p => (
                    <Link
                      key={p.id}
                      to={`/projects/${p.id}`}
                      className="block cyber-box rounded-lg p-3 hover:border-neon-blue/30 transition-all duration-300"
                    >
                      <h4 className="font-medium">{p.title}</h4>
                      <p className="text-foreground/60 text-sm truncate">{p.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
