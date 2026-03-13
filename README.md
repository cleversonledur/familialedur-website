# 🏡 Família Ledur — Genealogia e História

Site dedicado à história e genealogia da família Ledur, traçando suas raízes desde a Lorena (fronteira França–Alemanha) até o Rio Grande do Sul, Brasil.

🔗 **[familialedur.com.br](https://familialedur.com.br)** _(em breve)_

---

## Sobre o Projeto

A família Ledur tem uma história rica que atravessa séculos e continentes. Este site reúne pesquisa genealógica, documentos históricos e registros familiares para preservar e compartilhar essa memória.

### Fontes Principais

- 📖 **Da Lorena para o Brasil** — Christoph Heller e Tarso B. Ledur Kist (2024) — origens europeias da família
- 📖 **OS LEDUR no Brasil** — João Roque Ledur (2006) — genealogia completa no Brasil

### Período Coberto

De **1659** (Joachim Harter, ancestral mais antigo documentado) até os dias atuais.

---

## Funcionalidades

### 🌳 Árvore Genealógica Interativa
Navegue por mais de **2.000 pessoas** conectadas na árvore familiar. Zoom, pan, busca por nome e detalhes ao clicar em cada pessoa.

### 📅 Linha do Tempo
Eventos históricos organizados por categoria — Europa, Imigração, Brasil e Família — com filtros interativos.

### 📜 Documentos Históricos
Certidões de nascimento e casamento digitalizadas com visualização em zoom. Inclui instruções para obter cópias oficiais junto ao Kreisarchiv Saarlouis.

### 🔤 Sobrenomes
Mais de **150 sobrenomes** conectados à família, com busca e filtro por origem (alemã, francesa, lorena).

### 🇩🇪 Cidadania Alemã
Guia sobre cidadania alemã por descendência (_jus sanguinis_), documentos necessários, arquivos e passos práticos.

### 📍 Locais
Mapa dos locais relevantes na Europa e no Brasil ligados à história da família.

---

## Tech Stack

| Tecnologia | Uso |
|---|---|
| [Next.js 16](https://nextjs.org) | Framework React com App Router |
| [React 19](https://react.dev) | Biblioteca de UI |
| [TypeScript](https://typescriptlang.org) | Tipagem estática |
| [Tailwind CSS 4](https://tailwindcss.com) | Estilização |

O site é gerado como **HTML estático** (`output: "export"`) para hospedagem simples e rápida.

---

## Desenvolvimento

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
git clone git@cleversonledur:cleversonledur/familialedur-website.git
cd familialedur-website
npm install
```

### Servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Build para produção

```bash
npm run build
```

Os arquivos estáticos são gerados na pasta `out/`, prontos para deploy em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, etc).

---

## Estrutura do Projeto

```
src/
├── app/                    # Rotas (App Router)
│   ├── arvore/             # Árvore genealógica interativa
│   ├── cidadania-alema/    # Guia de cidadania
│   ├── documentos/         # Certidões e documentos
│   ├── historia/           # História da família
│   │   ├── origens/        #   Origens na Lorena
│   │   ├── viagem/         #   Viagem no navio Olbers
│   │   ├── colonizacao/    #   Colonização no RS
│   │   └── cultura/        #   Cultura teuto-brasileira
│   ├── livros/             # Livros de referência
│   ├── locais/             # Locais históricos
│   ├── sobre/              # Créditos e contato
│   └── sobrenomes/         # Sobrenomes da família
├── components/             # Componentes React
│   ├── Header, Footer, Navigation, MobileMenu
│   ├── FamilyTree, PersonNode, PersonDetail
│   ├── Timeline
│   └── ZoomableImage, SearchInput, Card
└── data/                   # Dados estruturados (JSON)
    ├── family-tree.json    # Árvore com 2000+ pessoas
    ├── surnames.json       # Sobrenomes e origens
    ├── places.json         # Locais históricos
    └── timeline-events.json # Eventos da timeline
```

---

## Licença

Este projeto é pessoal e de uso familiar. O conteúdo histórico e genealógico é baseado nas obras citadas e em pesquisa familiar.

---

<p align="center">
  Feito com ❤️ para preservar a memória da família Ledur.
</p>
