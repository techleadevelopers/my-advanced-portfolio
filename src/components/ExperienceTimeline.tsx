
import { Experience } from "../data/experience";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Presente';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
  };
  
  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue via-neon-purple to-transparent ml-6 md:ml-8"></div>
      
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div 
            key={experience.id} 
            className="relative pl-14 md:pl-20"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Timeline node */}
            <div className="absolute left-0 top-1 h-12 w-12 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center z-10">
              <Briefcase className="h-6 w-6 text-neon-blue" />
            </div>
            
            <div className="cyber-box rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300 group">
              <div className="md:flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-display font-semibold cyber-gradient-text">{experience.title}</h3>
                  <p className="text-foreground/70">
                    {experience.company}
                    {experience.location && ` · ${experience.location}`}
                  </p>
                </div>
                
                <div className="flex items-center gap-1 text-foreground/60 text-sm mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>
                    {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                  </span>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-4">{experience.description}</p>
              
              {experience.achievements && experience.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm uppercase text-foreground/50 mb-2">Conquistas</h4>
                  <ul className="space-y-1 text-sm text-foreground/70">
                    {experience.achievements.map((achievement, i) => (
                      <li key={i} className="flex">
                        <span className="text-neon-blue mr-2">›</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {experience.technologies && experience.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 text-xs rounded-md border border-white/10 bg-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
