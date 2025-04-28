
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'security' | 'ai' | 'devops' | 'other';
  level: number; // 0-100
  color?: string;
}

export interface SoftSkill {
  name: string;
  description: string;
}

export const hardSkills: Skill[] = [
  // Frontend
  { name: "React", category: "frontend", level: 95, color: "#61DAFB" },
  { name: "TypeScript", category: "frontend", level: 90, color: "#3178C6" },
  { name: "Next.js", category: "frontend", level: 85, color: "#000000" },
  { name: "TailwindCSS", category: "frontend", level: 92, color: "#06B6D4" },
  { name: "Framer Motion", category: "frontend", level: 80, color: "#0055FF" },
  { name: "React Native", category: "frontend", level: 85, color: "#61DAFB" },
  { name: "ThreeJS/WebGL", category: "frontend", level: 75, color: "#049EF4" },
  
  // Backend
  { name: "Node.js", category: "backend", level: 88, color: "#339933" },
  { name: "NestJS", category: "backend", level: 85, color: "#E0234E" },
  { name: "Go", category: "backend", level: 78, color: "#00ADD8" },
  { name: "Python", category: "backend", level: 90, color: "#3776AB" },
  { name: "FastAPI", category: "backend", level: 82, color: "#009688" },
  { name: "PostgreSQL", category: "backend", level: 85, color: "#4169E1" },
  { name: "Prisma", category: "backend", level: 80, color: "#2D3748" },
  
  // Security
  { name: "Criptografia", category: "security", level: 92, color: "#FF0000" },
  { name: "Análise Forense", category: "security", level: 85, color: "#FF4500" },
  { name: "Bypass WAF", category: "security", level: 88, color: "#8B0000" },
  { name: "Anti-VM/Anti-Debug", category: "security", level: 85, color: "#B22222" },
  { name: "Fuzzing", category: "security", level: 90, color: "#DC143C" },
  
  // AI/ML
  { name: "LangChain", category: "ai", level: 85, color: "#2980B9" },
  { name: "Whisper AI", category: "ai", level: 80, color: "#9B59B6" },
  { name: "Mistral/LLaMA", category: "ai", level: 75, color: "#8E44AD" },
  { name: "Algoritmos Genéticos", category: "ai", level: 82, color: "#2980B9" },
  { name: "Reinforcement Learning", category: "ai", level: 70, color: "#27AE60" },
  
  // DevOps
  { name: "Docker", category: "devops", level: 88, color: "#2496ED" },
  { name: "CI/CD", category: "devops", level: 85, color: "#4CAF50" },
  { name: "Terraform", category: "devops", level: 75, color: "#7B42BC" },
  { name: "Git/GitHub", category: "devops", level: 95, color: "#F05032" },
  { name: "Monitoramento", category: "devops", level: 80, color: "#00ACC1" },
];

export const softSkills: SoftSkill[] = [
  {
    name: "Pensamento Estratégico",
    description: "Capacidade de antecipar soluções e desenvolver estratégias para problemas complexos."
  },
  {
    name: "Resolução de Problemas",
    description: "Habilidade de identificar, analisar e resolver problemas técnicos e não-técnicos de forma eficiente."
  },
  {
    name: "Liderança Técnica",
    description: "Experiência em liderar equipes técnicas e definir arquiteturas de projetos."
  },
  {
    name: "Comunicação Técnica",
    description: "Capacidade de comunicar ideias técnicas complexas de forma clara e acessível."
  },
  {
    name: "Gestão de Projeto Ágil",
    description: "Expertise em metodologias ágeis como Scrum e Kanban para entrega contínua."
  },
  {
    name: "Aprendizado Contínuo",
    description: "Dedicação constante ao aprendizado de novas tecnologias e aprimoramento de habilidades."
  },
  {
    name: "Visão de Produto",
    description: "Foco na criação de produtos que resolvem problemas reais com experiência intuitiva."
  },
  {
    name: "Colaboração Multidisciplinar",
    description: "Habilidade de trabalhar com equipes diversificadas e integrar diferentes perspectivas."
  }
];

// Função para filtrar skills por categoria
export const getSkillsByCategory = (category: Skill['category']) => {
  return hardSkills.filter(skill => skill.category === category);
};
