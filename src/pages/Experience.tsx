
import ExperienceTimeline from "../components/ExperienceTimeline";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold cyber-gradient-text mb-4">
            Experiência Profissional
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Minha trajetória profissional em engenharia de front-end, segurança, 
            qualidade de software e desenvolvimento de soluções com IA.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <ExperienceTimeline experiences={experiences} />
        </div>
        
        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-16 cyber-box rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-4">
            Filosofia de Trabalho
          </h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Minha abordagem profissional combina inovação técnica com pensamento estratégico.
            Busco constantemente aprimorar minhas habilidades e conhecimentos, mantendo-me
            atualizado com as mais recentes tecnologias e metodologias.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Acredito na importância da colaboração, comunicação clara e na criação de
            soluções que não apenas atendam aos requisitos técnicos, mas também proporcionem
            uma experiência excepcional para os usuários finais.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
