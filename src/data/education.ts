
export interface Education {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  startDate: string;
  endDate: string | null;
  description?: string;
  achievements?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
  expiresAt?: string | null;
}

export const education: Education[] = [
  {
    id: "bsc-cs",
    degree: "Bacharelado em Ciência da Computação",
    institution: "Universidade Federal de Santa Catarina",
    location: "Florianópolis, Brasil",
    startDate: "2015",
    endDate: "2019",
    description: "Formação em ciência da computação com foco em algoritmos, estruturas de dados e segurança da informação.",
    achievements: [
      "Pesquisa em criptografia aplicada",
      "Desenvolvimento de sistemas de alta performance",
      "Trabalho de conclusão em análise de algoritmos de IA"
    ]
  },
  {
    id: "msc-cs",
    degree: "Mestrado em Segurança Cibernética",
    institution: "Instituto de Tecnologia Avançada",
    location: "São Paulo, Brasil",
    startDate: "2020",
    endDate: "2022",
    description: "Pesquisa em técnicas avançadas de segurança cibernética e criptografia aplicada.",
    achievements: [
      "Dissertação sobre técnicas de evasão em ambientes de sandbox",
      "Publicação de artigo em conferência internacional",
      "Desenvolvimento de algoritmos de criptografia híbrida"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: "oscp",
    name: "Offensive Security Certified Professional (OSCP)",
    issuer: "Offensive Security",
    date: "2022",
    expiresAt: null
  },
  {
    id: "aws-security",
    name: "AWS Certified Security - Specialty",
    issuer: "Amazon Web Services",
    date: "2023",
    expiresAt: "2026"
  },
  {
    id: "tensorflow",
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    date: "2023",
    expiresAt: null
  },
  {
    id: "react-native",
    name: "React Native Specialist",
    issuer: "Meta",
    date: "2022",
    expiresAt: null
  },
  {
    id: "cicd-expert",
    name: "CI/CD Professional",
    issuer: "Linux Foundation",
    date: "2022",
    expiresAt: "2025"
  }
];
