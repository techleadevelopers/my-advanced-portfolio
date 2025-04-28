import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";
import perImage from '../../public/per.jpg';

const AboutMe = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute bottom-1/3 -right-32 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl animate-float pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="relative">
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-lg border-2 border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-pulse"></div>

              {/* Profile image */}
              <div className="relative cyber-box rounded-lg overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-cyber-gradient opacity-20"></div>
                <div className="h-full w-full bg-cyber-dark flex items-center justify-center p-4">
                  {/* Profile picture */}
                  <img
  src={perImage}
  alt="Foto de Paulo Silas"
  className="w-full h-full object-cover rounded-lg border border-neon-blue/30"
/>

                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cyber-box rounded-full hover:border-neon-blue/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cyber-box rounded-full hover:border-neon-blue/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                <span className="block text-[#D3E4FD]/80">Olá, sou</span>
                <span
                  className="cyber-gradient-text glitch-effect"
                  data-text="Paulo Silas de Campos Filho"
                >
                  Paulo Silas de Campos Filho
                </span>
              </h1>

              <h2 className="text-xl md:text-2xl text-neon-blue font-medium font-mono tracking-tight">
                Engenheiro de Software + Automação Intelligênte
              </h2>

              <p className="text-lg font-mono leading-relaxed max-w-2xl mx-auto lg:mx-0 text-[#D3E4FD]/80">
                Especializado em Arquitetura de Sistemas modernos e soluções de
                segurança cibernética, com ampla experiência em desenvolvimento
                fullstack, integração de UI futurista e soluções com IA.
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Link to="/projects" className="cyber-button group">
                  <span>Ver Projetos</span>
                  <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                </Link>

                <a href="/resume.pdf" className="cyber-button group">
                  <span>Download CV</span>
                  <Download className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-y-1" />
                </a>
              </div>

              {/* Key stats/skills overview */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { label: "Projetos", value: "15+" },
                  { label: "Anos de Experiência", value: "6+" },
                  { label: "Tecnologias", value: "20+" },
                  { label: "Certificações", value: "5+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="cyber-box p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-display font-bold cyber-gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-[#D3E4FD]/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;