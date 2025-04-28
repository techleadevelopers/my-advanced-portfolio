
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cyber-dark dark:bg-cyber-dark pt-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-cyber-radial z-[-1] pointer-events-none"></div>
      <div className="absolute inset-0 grid-bg z-[-1] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-display font-bold cyber-gradient-text mb-4">
            Contato
          </h1>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            Interessado em trabalhar juntos? Entre em contato para discutir projetos, 
            oportunidades de colaboração ou apenas para trocar ideias.
          </p>
        </div>
        
        {/* Contact Form and Info */}
        <div className="max-w-5xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
