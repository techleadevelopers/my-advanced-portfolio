
import { GraduationCap, Calendar } from "lucide-react";
import { Education, Certification } from "../data/education";

interface EducationCardProps {
  item: Education | Certification;
  type: 'education' | 'certification';
}

const EducationCard = ({ item, type }: EducationCardProps) => {
  const isEducation = type === 'education';
  const education = item as Education;
  const certification = item as Certification;
  
  const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Presente';
    
    // If only year is provided
    if (dateString.length === 4) return dateString;
    
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
  };
  
  return (
    <div className="cyber-box rounded-lg p-6 hover:border-neon-blue/30 transition-all duration-300 h-full flex flex-col">
      <div className="flex gap-4 items-start mb-4">
        <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
          <GraduationCap className="h-5 w-5 text-neon-purple" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-display font-semibold cyber-gradient-text">
            {isEducation ? education.degree : certification.name}
          </h3>
          
          <p className="text-foreground/70">
            {isEducation ? education.institution : certification.issuer}
          </p>
        </div>
      </div>
      
      <div className="flex items-center gap-1 text-foreground/60 text-sm mb-4">
        <Calendar className="h-4 w-4" />
        <span>
          {isEducation 
            ? `${formatDate(education.startDate)} - ${formatDate(education.endDate)}`
            : certification.date + (certification.expiresAt ? ` (Expira: ${certification.expiresAt})` : '')}
        </span>
      </div>
      
      {isEducation && education.description && (
        <p className="text-foreground/80 mb-4 flex-grow">{education.description}</p>
      )}
      
      {isEducation && education.achievements && education.achievements.length > 0 && (
        <div className="mt-auto">
          <h4 className="text-sm uppercase text-foreground/50 mb-2">Destaque</h4>
          <ul className="space-y-1 text-sm text-foreground/70">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="flex">
                <span className="text-neon-purple mr-2">›</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {!isEducation && certification.url && (
        <div className="mt-auto pt-4">
          <a 
            href={certification.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-neon-purple hover:text-neon-blue transition-colors text-sm font-medium"
          >
            Ver certificado
          </a>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
