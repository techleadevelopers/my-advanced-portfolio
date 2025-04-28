import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Link } from "react-router-dom";
import perImage from "../../public/per.jpg";

const AboutMe = () => {
  const nameRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const nameText = "Engenheiro de Software + Automação Intelligênte";

  // Typing and particles effect
  useEffect(() => {
    const typingContainer = nameRef.current;
    const textElement = textRef.current;

    if (!typingContainer || !textElement) return;

    // Clear any existing content and classes
    while (textElement.firstChild) {
      textElement.removeChild(textElement.firstChild);
    }

    let currentCharIndex = 0;
    const typingDelay = 100; // milliseconds between characters

    const createParticle = (x: number, y: number) => {
      const particle = document.createElement("span");
      particle.className = "particle";
      particle.style.width = `${Math.random() * 4 + 2}px`;
      particle.style.height = `${Math.random() * 4 + 2}px`;
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 30 + 10;
      particle.style.transform = `translate(${Math.cos(angle) * speed}px, ${Math.sin(angle) * speed}px)`;

      typingContainer.appendChild(particle);

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 800);
    };

    const typingInterval = setInterval(() => {
      if (currentCharIndex < nameText.length) {
        const charSpan = document.createElement("span");
        charSpan.className = "typing-reveal";
        charSpan.textContent = nameText[currentCharIndex];
        textElement.appendChild(charSpan);

        const rect = charSpan.getBoundingClientRect();
        const containerRect = typingContainer.getBoundingClientRect();
        const x = rect.left - containerRect.left + rect.width / 2;
        const y = rect.top - containerRect.top + rect.height / 2;

        for (let i = 0; i < 3; i++) {
          createParticle(x, y);
        }

        setTimeout(() => {
          charSpan.classList.add("typing-reveal-active");
        }, 10);

        currentCharIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingDelay);

    return () => {
      clearInterval(typingInterval);
    };
  }, [nameText]);

  // Scroll appear effect
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-appear");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-neon-blue/20 rounded-full filter blur-3xl animate-float pointer-events-none"></div>
      <div className="absolute w-[130%] bottom-1/3 -right-32 w-64 h-64 bg-neon-purple/20 rounded-full filter blur-3xl animate-float pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
          {/* Profile Image */}
          <div className="w-full lg:w-2/5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 rounded-lg border-2 border-neon-blue shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-pulse"></div>

              <div className="relative cyber-box rounded-lg overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-cyber-gradient opacity-20"></div>
                <div className="h-full w-full bg-cyber-dark flex items-center justify-center p-4">
                  <img
                    src={perImage}
                    alt="Foto de Paulo Silas"
                    className="w-full h-full object-cover rounded-lg border border-neon-blue/30"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cyber-box rounded-full hover:border-neon-blue/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 cyber-box rounded-full hover:border-neon-blue/50 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-3/5 order-1 lg:order-2">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight">
                <span className="block text-[#D3E4FD]/80">Olá, sou</span>
                <span
                  className="cyber-gradient-text glitch-effect"
                  data-text="Paulo Silas de Campos Filho"
                >
                  Paulo Silas de Campos Filho
                </span>
              </h1>

              {/* Typing effect with color preserved */}
              <div className="typing-container relative" ref={nameRef}>
                <h2
                  className="typing-text text-xl md:text-2xl text-neon-blue font-medium font-mono tracking-tight"
                >
                  <span ref={textRef}></span>
                </h2>
              </div>

              <p className="text-lg font-mono leading-relaxed max-w-2xl mx-auto lg:mx-0 text-[#D3E4FD]/80">
                Especializado em Arquitetura de Sistemas modernos e soluções de
                segurança cibernética, com ampla experiência em desenvolvimento
                fullstack, integração de UI futurista e soluções com IA.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">
                <Link to="/projects" className="cyber-button group">
                  <span>Ver Projetos</span>
                  <ArrowRight className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-x-1" />
                </Link>

                <a href="/resume.pdf" className="cyber-button group">
                  <span>Download CV</span>
                  <Download className="ml-2 h-4 w-4 inline-block transition-transform group-hover:translate-y-1" />
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                {[
                  { label: "Projetos", value: "15+" },
                  { label: "Anos de Experiência", value: "6+" },
                  { label: "Tecnologias", value: "20+" },
                  { label: "Certificações", value: "5+" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="cyber-box p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-display font-bold cyber-gradient-text">
                      {stat.value}
                    </div>
                    <div className="text-[#D3E4FD]/70 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
