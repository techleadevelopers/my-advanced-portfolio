
import { SoftSkill, Skill, getSkillsByCategory } from "../data/skills";
import { BarChart2, Code, Database, Shield, Brain, Server } from "lucide-react";

interface SkillsSectionProps {
  skills: Skill[];
  softSkills: SoftSkill[];
}

const SkillsSection = ({ skills, softSkills }: SkillsSectionProps) => {
  const skillCategories = [
    { id: 'frontend', label: 'Frontend', icon: <Code className="h-5 w-5" /> },
    { id: 'backend', label: 'Backend', icon: <Database className="h-5 w-5" /> },
    { id: 'security', label: 'Segurança', icon: <Shield className="h-5 w-5" /> },
    { id: 'ai', label: 'IA/ML', icon: <Brain className="h-5 w-5" /> },
    { id: 'devops', label: 'DevOps', icon: <Server className="h-5 w-5" /> },
  ];

  return (
    <div className="space-y-16">
      {/* Hard Skills by Category */}
      <div className="space-y-12">
        {skillCategories.map((category) => {
          const categorySkills = getSkillsByCategory(category.id as Skill['category']);
          
          if (categorySkills.length === 0) return null;
          
          return (
            <div key={category.id} className="cyber-box rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-semibold cyber-gradient-text">
                  {category.label}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-foreground/60">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-neon-blue to-neon-purple animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Soft Skills */}
      <div className="cyber-box rounded-lg p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center">
            <BarChart2 className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-display font-semibold cyber-gradient-text">
            Soft Skills
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {softSkills.map((skill) => (
            <div key={skill.name} className="cyber-box rounded-lg p-4 hover:border-neon-purple/30 transition-all duration-300">
              <h4 className="text-lg font-display font-medium purple-neon-text mb-2">
                {skill.name}
              </h4>
              <p className="text-foreground/70 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
