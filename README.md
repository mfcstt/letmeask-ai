# Let me Ask AI

👾✨ **Let Me Ask AI** é uma plataforma inovadora de perguntas e respostas pensada para transmissões ao vivo! Imagine um ambiente onde a interação entre público e apresentador é potencializada pela inteligência artificial.

## Como funciona?

Durante uma transmissão (simulada), os participantes podem enviar perguntas. O diferencial? Utilizamos a IA do Google — **Gemini** — para responder automaticamente, analisando o conteúdo falado pelo apresentador! 🤖🔮

> **Obs.:** Nesta versão, a simulação é feita gravando o áudio pelo navegador (não há vídeo em tempo real ainda, mas isso está nos planos para o futuro!). 🎤🕒

## Por que é especial?

- 💜 **Interação em tempo real:** Respostas automáticas baseadas no que está sendo falado.
- 🟣 **Tecnologia de ponta:** Integração com IA Gemini, trazendo respostas inteligentes e contextualizadas.
- 🚀 **Foco no futuro:** O projeto é uma base para evoluir e, em breve, suportar transmissões de vídeo ao vivo e interações ainda mais ricas!

---

Projeto fullstack desenvolvido durante um evento da Rocketseat, unindo tecnologias modernas para criar uma experiência de perguntas e respostas com agentes inteligentes, interface web intuitiva e backend robusto.

## Visão Geral

O Let me Ask AI é composto por dois principais módulos:

- **Backend (server/):** API Node.js com Fastify, PostgreSQL, Drizzle ORM e validação de schemas, responsável pela lógica de negócio, persistência e endpoints REST.
- **Frontend (web/):** Aplicação React moderna, com gerenciamento de estado, roteamento, componentes acessíveis e integração com a API.

---

## Tecnologias Utilizadas

### Backend

- Node.js + TypeScript
- Fastify
- PostgreSQL + pgvector
- Drizzle ORM
- Zod (validação)
- Docker e Docker Compose
- Biome (lint e formatação)

### Frontend

- React 19.1 + TypeScript 5.8
- Vite 7.0
- TailwindCSS 4.1
- React Router Dom 7.6
- TanStack React Query 5.8
- Radix UI, Shadcn/ui, Lucide React

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn
- Docker e Docker Compose (para o backend)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd letmeask-ai
```

### 2. Backend (API)

```bash
cd server
docker-compose up -d # Sobe o banco de dados
cp .env.example .env # Crie o arquivo de variáveis de ambiente, se necessário
npm install # Instale as dependências
npx drizzle-kit migrate # Rode as migrações
npm run db:seed # (Opcional) Popule o banco
npm run dev # Inicie o servidor em modo desenvolvimento
```

A API estará disponível em `http://localhost:3333`

### 3. Frontend (Web)

```bash
cd ../web
npm install # Instale as dependências
npm run dev # Inicie o servidor de desenvolvimento
```

Acesse a aplicação em `http://localhost:5173`

> **Importante:** O frontend consome a API do backend. Certifique-se de que o backend esteja rodando antes de iniciar o frontend.

---

## Estrutura dos diretórios

```
letmeask-ai/
├── server/   # Backend (API)
└── web/      # Frontend (React)
```

Consulte os READMEs específicos em `server/README.md` e `web/README.md` para detalhes avançados de cada módulo.

---

Desenvolvido com 💜 durante o NLW da Rocketseat.
