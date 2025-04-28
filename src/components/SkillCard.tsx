
import { ReactNode } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
import { Card } from "./ui/card";

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  level?: number;
  skills?: string[];
}

const SkillCard = ({ icon, title, description, level, skills }: SkillCardProps) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Card className="cyber-box relative overflow-hidden group cursor-pointer 
                        backdrop-blur-lg bg-white/5 border-white/10 hover:border-neon-blue/30
                        transition-all duration-300 p-6">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 to-neon-purple/5 opacity-0 
                          group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <div className="p-3 rounded-full bg-white/5 border border-white/10">
              {icon}
            </div>
            <h3 className="text-xl font-display cyber-gradient-text text-center">{title}</h3>
            {level && (
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-neon-blue to-neon-purple"
                  style={{ width: `${level}%` }}
                />
              </div>
            )}
          </div>
        </Card>
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 cyber-box backdrop-blur-xl border-white/10">
        <div className="space-y-3">
          <p className="text-[#D3E4FD]/90 text-sm">
            {description}
          </p>
          {skills && (
            <div className="flex flex-wrap gap-2 mt-2">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10
                            text-[#D3E4FD]/80 hover:text-neon-blue transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default SkillCard;
