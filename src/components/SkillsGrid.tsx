
import { Code, Shield, Brain, Database, Layers } from "lucide-react";
import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6 text-neon-blue" />,
      title: "Desenvolvimento Frontend",
      description: "Especialização em frameworks modernos e UI/UX avançado",
      level: 95,
      skills: ["React", "TypeScript", "Next.js", "TailwindCSS", "React Native"]
    },
    {
      icon: <Database className="w-6 h-6 text-neon-purple" />,
      title: "Backend & APIs",
      description: "Arquitetura escalável e microsserviços",
      level: 90,
      skills: ["Node.js", "NestJS", "FastAPI", "PostgreSQL", "Prisma"]
    },
    {
      icon: <Shield className="w-6 h-6 text-neon-blue" />,
      title: "Segurança Cibernética",
      description: "Ofensiva e análise avançada de vulnerabilidades",
      level: 92,
      skills: ["Pentesting", "WAF Bypass", "Criptografia", "Evasão", "Forense"]
    },
    {
      icon: <Brain className="w-6 h-6 text-neon-purple" />,
      title: "IA & Machine Learning",
      description: "Integração de modelos e sistemas inteligentes",
      level: 85,
      skills: ["LangChain", "Whisper", "Mistral", "LLaMA", "Reinforcement Learning"]
    },
    {
      icon: <Layers className="w-6 h-6 text-neon-blue" />,
      title: "DevOps & Cloud",
      description: "Infraestrutura e CI/CD automatizado",
      level: 88,
      skills: ["Docker", "Terraform", "GitHub Actions", "CI/CD", "Monitoramento"]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {skillCategories.map((category, index) => (
        <SkillCard key={index} {...category} />
      ))}
    </div>
  );
};

export default SkillsGrid;
