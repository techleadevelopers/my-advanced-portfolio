
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  category: 'ransomware' | 'qa' | 'education' | 'ai' | 'other';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "ransomlab-pro",
    title: "RANSOMLAB-PRO v1.5",
    description: "Ransomware com Criptografia Avançada e Persistência",
    longDescription: "Implementação de laboratório de segurança demonstrando técnicas avançadas de criptografia e evasão, incluindo AES-256 CBC, RSA híbrido, anti-VM e persistência avançada.",
    technologies: [
      "Go", 
      "Criptografia AES+RSA", 
      "Anti-VM", 
      "Anti-Debug", 
      "Evasão avançada"
    ],
    category: "ransomware",
    featured: true
  },
  {
    id: "qa-governance",
    title: "QA Governance Platform",
    description: "Plataforma de Governança de Testes Automatizados",
    longDescription: "Sistema completo para automação e governança de testes, incluindo testes de UI Web, API, Mobile e Desktop, com dashboards, integrações CI/CD e relatórios detalhados.",
    technologies: [
      "Python", 
      "Selenium", 
      "Pytest", 
      "Docker", 
      "Jenkins", 
      "Pandas"
    ],
    category: "qa",
    featured: true
  },
  {
    id: "ai-education",
    title: "Plataforma Educacional com IA",
    description: "Plataforma de ensino com correção de fala por IA",
    longDescription: "Aplicativo mobile para educação utilizando IA local para correção de fala e texto, com sistema de gamificação para engajamento de usuários.",
    technologies: [
      "React Native", 
      "Expo", 
      "FastAPI", 
      "Whisper", 
      "Mistral 7B", 
      "PostgreSQL"
    ],
    category: "education",
    featured: true
  },
  {
    id: "ai-agents",
    title: "Agentes IA para WhatsApp",
    description: "Agentes inteligentes para atendimento via WhatsApp",
    longDescription: "Sistema de agentes de IA adaptáveis para atendimento via WhatsApp, com personalização dinâmica para diferentes nichos de mercado.",
    technologies: [
      "NestJS", 
      "LangChain", 
      "Baileys SDK", 
      "PostgreSQL", 
      "Prisma ORM", 
      "NextJS"
    ],
    category: "ai",
    featured: true
  }
];
