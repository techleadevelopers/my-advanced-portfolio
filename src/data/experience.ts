
export interface Experience {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description: string;
  achievements?: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: "fullstack-ai",
    title: "Engenheiro Fullstack & IA",
    company: "Agentes Inteligentes Inc.",
    location: "Remoto",
    startDate: "2023-07",
    endDate: null,
    description: "Desenvolvimento de soluções de IA para comunicação e atendimento via WhatsApp, utilizando LangChain e NextJS.",
    achievements: [
      "Desenvolvimento de sistema de agentes IA adaptáveis",
      "Implementação de interface administrativa para configuração dos agentes",
      "Integração com vários modelos de IA incluindo OpenAI e modelos locais",
      "Otimização de desempenho e custos de API"
    ],
    technologies: [
      "NestJS", 
      "LangChain", 
      "Baileys SDK", 
      "PostgreSQL", 
      "NextJS", 
      "TypeScript"
    ]
  },
  {
    id: "qa-lead",
    title: "QA Lead Engineer",
    company: "Tech Quality Solutions",
    location: "São Paulo, Brasil",
    startDate: "2022-03",
    endDate: "2023-06",
    description: "Liderança de equipe de QA para implementação de plataformas de automação e governança de testes.",
    achievements: [
      "Desenvolvimento da plataforma QA Governance",
      "Implementação de dashboards de análise para métricas de qualidade",
      "Integração contínua para testes em múltiplas plataformas",
      "Redução de 40% no tempo de ciclo de testes"
    ],
    technologies: [
      "Python", 
      "Selenium", 
      "Pytest", 
      "Docker", 
      "Jenkins", 
      "Streamlit"
    ]
  },
  {
    id: "security-researcher",
    title: "Pesquisador de Segurança",
    company: "CyberLabs Research",
    location: "Remoto",
    startDate: "2021-01",
    endDate: "2022-02",
    description: "Pesquisa e desenvolvimento de técnicas de segurança ofensiva e defensiva, com foco em criptografia e evasão.",
    achievements: [
      "Desenvolvimento do projeto RANSOMLAB-PRO",
      "Pesquisa de técnicas de evasão Anti-VM e Anti-Debug",
      "Implementação de criptografia híbrida AES+RSA",
      "Publicação de artigos sobre segurança cibernética"
    ],
    technologies: [
      "Go", 
      "Criptografia", 
      "Análise Forense", 
      "Assembly",
      "Windows API"
    ]
  },
  {
    id: "frontend-developer",
    title: "Desenvolvedor Frontend Sênior",
    company: "UI Future Tech",
    location: "Florianópolis, Brasil",
    startDate: "2019-08",
    endDate: "2020-12",
    description: "Desenvolvimento de interfaces futuristas e acessíveis para aplicações web e mobile.",
    achievements: [
      "Criação de sistemas de design responsivos",
      "Implementação de animações e interações avançadas",
      "Otimização de performance para aplicações de alta demanda",
      "Mentoria de desenvolvedores júnior"
    ],
    technologies: [
      "React", 
      "TypeScript", 
      "Styled Components", 
      "Framer Motion", 
      "WebGL", 
      "ThreeJS"
    ]
  }
];
