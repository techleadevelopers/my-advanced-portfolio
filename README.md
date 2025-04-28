# Advanced Portfolio

Este é um **portfólio avançado** desenvolvido com **React**, **Vite**, **TailwindCSS** e **Radix UI**, projetado para exibir projetos, habilidades e experiências de forma moderna e visualmente atrativa. Este portfólio é altamente personalizável e focado em uma interface de usuário responsiva e dinâmica.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criar interfaces de usuário interativas.
- **Vite**: Ferramenta de build de próxima geração para projetos web, oferecendo tempo de desenvolvimento mais rápido e melhor desempenho.
- **TailwindCSS**: Framework CSS utilitário para criar designs customizáveis de forma rápida e responsiva.
- **Radix UI**: Conjunto de componentes acessíveis e sem estilo que permite criar interfaces de usuário personalizadas.

## Funcionalidades

- **Página inicial**: Apresentação interativa com informações pessoais, habilidades e links para redes sociais.
- **Seção de Projetos**: Apresentação de projetos com detalhes como tecnologias utilizadas e links para repositórios.
- **Download de CV**: Opção para baixar o currículo em formato PDF.
- **Design Responsivo**: Totalmente responsivo, funcionando bem em dispositivos móveis, tablets e desktops.
- **Efeitos visuais modernos**: Utilização de animações e transições para uma experiência de usuário mais fluida e moderna.

## Instalação

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/techleadevelopers/my-advanced-portfolio.git
Instale as dependências:

Com o Node.js instalado, navegue até o diretório do projeto e instale as dependências:

bash
Copiar
Editar
npm install
Ou, se estiver usando o Yarn:

bash
Copiar
Editar
yarn install
Inicie o servidor de desenvolvimento:

Para rodar o projeto localmente, use:

bash
Copiar
Editar
npm run dev
Ou, se estiver usando o Yarn:

bash
Copiar
Editar
yarn dev
Isso iniciará o servidor de desenvolvimento e você poderá acessar o portfólio no navegador via http://localhost:3000.

Estrutura do Projeto
Aqui está uma visão geral da estrutura de diretórios e arquivos do projeto:

perl
Copiar
Editar
my-advanced-portfolio/
├── .git/                 # Repositório Git
├── node_modules/         # Dependências do projeto
├── public/               # Arquivos públicos estáticos (imagens, ícones, index.html)
├── src/                  # Código fonte do projeto (componentes, hooks, estilos)
│   ├── components/       # Componentes reutilizáveis do projeto
│   ├── pages/            # Páginas do projeto
│   ├── styles/           # Estilos personalizados (TailwindCSS)
│   └── App.jsx           # Componente principal
├── .gitignore            # Arquivos para ignorar no repositório Git
├── package.json          # Dependências e scripts do projeto
├── tailwind.config.js    # Configuração do TailwindCSS
├── vite.config.js        # Configuração do Vite
├── README.md             # Este arquivo
└── package-lock.json     # Arquivo de lock das dependências
Personalização
Este portfólio pode ser facilmente personalizado para atender às suas necessidades. Você pode:

Alterar as informações pessoais: Modifique o arquivo src/pages/AboutMe.jsx para atualizar seu nome, habilidades e outras informações.

Adicionar projetos: Adicione ou remova projetos na seção de projetos, editando o arquivo src/pages/Projects.jsx.

Ajustar o tema: Modifique o arquivo tailwind.config.js para alterar as cores, fontes e outros estilos de design.

Contribuindo
Contribuições são sempre bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:

Faça um fork deste repositório.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Faça commit das suas alterações (git commit -am 'Adiciona nova feature').

Envie para o repositório remoto (git push origin feature/nova-feature).

Abra um pull request.

Licença
Este projeto está licenciado sob a MIT License.

