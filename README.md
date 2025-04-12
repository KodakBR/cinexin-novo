# Cinexin Novo - Site do Cinema

Este projeto é a nova versão do site do Cinema Cinexin, um cinema situado em Mato Grosso. O site foi desenvolvido com tecnologias modernas para oferecer uma experiência visual atraente e funcional para os usuários.

## 🎞️ Sobre o Projeto

O site do Cinexin é uma aplicação web moderna que permite aos usuários:

- Visualizar os filmes em cartaz e próximas estreias
- Conferir horários das sessões
- Comprar ingressos online
- Conhecer as promoções e eventos especiais
- Obter informações sobre os diferentes cinemas da rede
- Explorar os serviços oferecidos (aniversários, escolas, empresas, etc)

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática
- **React Router**: Para navegação entre páginas
- **Tailwind CSS**: Framework CSS utilitário para design rápido e responsivo
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno

## 💻 Instalação e Execução

Siga estes passos para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
```bash
git clone https://github.com/KodakBR/cinexin-novo.git
cd cinexin-novo
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 📂 Estrutura do Projeto

```
cinexin-novo/
├── public/            # Arquivos estáticos como imagens e favicon
├── src/               # Código fonte do projeto
│   ├── components/    # Componentes React reutilizáveis
│   │   ├── sections/  # Seções maiores que compõem as páginas
│   ├── data/          # Dados fictícios para desenvolvimento
│   ├── pages/         # Páginas do site
│   ├── types/         # Definições de tipos TypeScript
│   ├── App.tsx        # Componente principal que define as rotas
│   └── main.tsx       # Ponto de entrada da aplicação
├── .gitignore         # Arquivos e pastas ignorados pelo Git
├── index.html         # Arquivo HTML principal
├── package.json       # Dependências e scripts do projeto
├── tsconfig.json      # Configuração do TypeScript
└── vite.config.ts     # Configuração do Vite
```

## 🖥️ Componentes Principais

- **Header**: Cabeçalho com navegação e seleção de cidade
- **Hero**: Banner principal da página
- **MovieCard**: Cartão de filme com detalhes e opções de sessão
- **Footer**: Rodapé com links e informações de contato
- **MoviesSection**: Seção de filmes em cartaz com filtragem
- **PromotionsSection**: Exibe promoções ativas
- **EventsSection**: Mostra eventos especiais e pré-estreias
- **ServicesSection**: Apresenta os serviços oferecidos pelo cinema
- **CinemasSection**: Lista das unidades do Cinexin

## 🎯 Próximos Passos

Algumas funcionalidades que serão implementadas no futuro:

- Sistema de autenticação para compra de ingressos
- Integração com API de pagamentos
- Sistema de seleção de assentos
- Página de detalhes de filme com trailer e mais informações
- Área administrativa para gerenciamento de conteúdo

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

---

Desenvolvido com ❤️ para o Cinema Cinexin