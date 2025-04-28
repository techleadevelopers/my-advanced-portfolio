
import EducationCard from "../components/EducationCard";
import { education, certifications } from "../data/education";

const Education = () => {
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold cyber-gradient-text mb-4">
            Educação & Certificações
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Minha formação acadêmica e certificações profissionais que fundamentam minha expertise.
          </p>
        </div>
        
        {/* Formal Education */}
        <div className="mb-16">
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-8 text-center">
            Formação Acadêmica
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {education.map(item => (
              <EducationCard key={item.id} item={item} type="education" />
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-8 text-center">
            Certificações
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map(item => (
              <EducationCard key={item.id} item={item} type="certification" />
            ))}
          </div>
        </div>
        
        {/* Continuous Learning */}
        <div className="max-w-4xl mx-auto mt-16 cyber-box rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-display font-semibold cyber-gradient-text mb-4">
            Aprendizado Contínuo
          </h2>
          <p className="text-foreground/80 mb-4 leading-relaxed">
            Além da educação formal e certificações, mantenho-me constantemente atualizado 
            através de cursos online, workshops, conferências e projetos pessoais.
          </p>
          <p className="text-foreground/80 leading-relaxed">
            Acredito que o aprendizado contínuo é essencial em um campo tão dinâmico como 
            tecnologia, e estou sempre em busca de novas habilidades e conhecimentos para 
            enfrentar os desafios do futuro.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
