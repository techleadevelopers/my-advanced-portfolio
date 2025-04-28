
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // This is just a simulation, in a real app you would send data to an API
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form data
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset submitted status after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Info */}
      <div className="space-y-8">
        <div>
          <h3 className="text-2xl font-display font-semibold cyber-gradient-text mb-4">
            Entre em contato
          </h3>
          <p className="text-foreground/70">
            Estou sempre aberto a novas oportunidades, colaborações e projetos interessantes. 
            Se quiser entrar em contato, preencha o formulário ou use uma das opções de contato abaixo.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="cyber-box rounded-lg p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-neon-blue" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Email</h4>
              <a 
                href="mailto:contato@example.com" 
                className="text-foreground/70 hover:text-neon-blue transition-colors"
              >
                pauloti.engenharia@gmail.com
              </a>
            </div>
          </div>
          
          <div className="cyber-box rounded-lg p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-neon-purple" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Telefone</h4>
              <a 
                href="tel:+5511999999999" 
                className="text-foreground/70 hover:text-neon-purple transition-colors"
              >
                +55 (19) 9464-7291
              </a>
            </div>
          </div>
          
          <div className="cyber-box rounded-lg p-4 flex items-start gap-4">
            <div className="h-10 w-10 rounded-full neon-border bg-white/5 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <MapPin className="h-5 w-5 text-neon-blue" />
            </div>
            <div>
              <h4 className="font-medium mb-1">Localização</h4>
              <p className="text-foreground/70">Campinas - São Paulo, Brasil</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="cyber-box rounded-lg p-6 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-foreground/70 mb-1">
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-foreground placeholder:text-foreground/40 transition-colors"
              placeholder="Seu nome"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm text-foreground/70 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-foreground placeholder:text-foreground/40 transition-colors"
              placeholder="seu.email@example.com"
            />
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm text-foreground/70 mb-1">
              Assunto
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full py-3 px-4 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-foreground placeholder:text-foreground/40 transition-colors"
              placeholder="Assunto da mensagem"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm text-foreground/70 mb-1">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full py-3 px-4 rounded-md bg-white/5 border border-white/10 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue text-foreground placeholder:text-foreground/40 transition-colors resize-none"
              placeholder="Escreva sua mensagem aqui..."
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting || submitted}
            className={`cyber-button w-full flex items-center justify-center gap-2 py-3 ${
              submitted ? 'bg-green-600 border-green-500 text-white hover:bg-green-600 hover:text-white hover:shadow-none' : ''
            }`}
          >
            {isSubmitting ? (
              <span>Enviando...</span>
            ) : submitted ? (
              <span>Mensagem enviada!</span>
            ) : (
              <>
                <span>Enviar mensagem</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
