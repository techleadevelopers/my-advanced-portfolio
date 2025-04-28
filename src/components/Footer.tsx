
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 py-12 mt-20 bg-cyber-dark/30 dark:bg-black/30 backdrop-blur-md">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold cyber-gradient-text">
              Tech Lead Networkings
            </Link>
            <p className="text-foreground/70 max-w-md">
            Engenheiro de Software e Automação Intelligênte, especializado também em Arquitetura de Sistemas modernos e integração de UI futurista.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Links Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-foreground/70 hover:text-neon-blue transition-colors">Home</Link>
              <Link to="/projects" className="text-foreground/70 hover:text-neon-blue transition-colors">Projetos</Link>
              <Link to="/experience" className="text-foreground/70 hover:text-neon-blue transition-colors">Experiência</Link>
              <Link to="/skills" className="text-foreground/70 hover:text-neon-blue transition-colors">Skills</Link>
              <Link to="/contact" className="text-foreground/70 hover:text-neon-blue transition-colors">Contato</Link>
            </nav>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-display font-semibold mb-4">Contato</h3>
            <div className="space-y-4">
              <a href="mailto:contato@example.com" className="flex items-center gap-2 text-foreground/70 hover:text-neon-blue transition-colors">
                <Mail size={18} />
                <span>pauloti.engenharia@gmail.com</span>
              </a>
              <a href="https://github.com/techleadevelopers" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-neon-blue transition-colors">
                <Github size={18} />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/itmanagerpaulocampos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground/70 hover:text-neon-blue transition-colors">
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            &copy; {currentYear} Paulo Silas de Campos filho. Todos os direitos reservados.
          </p>
          <p className="text-foreground/60 text-sm mt-2 md:mt-0">
            Desenvolvido com <span className="text-neon-purple">❤</span> e muita tecnologia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
