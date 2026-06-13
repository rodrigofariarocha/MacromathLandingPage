<!-- ╭──────────────────────────────────────────────╮
     │  MacroMath — Landing Page · README             │
     ╰──────────────────────────────────────────────╯ -->

<div align="center">

<br />

<!-- Apple mark -->
<img src="public/images/brand/logo-mark.png" alt="MacroMath" width="96" />

<!-- Orange wordmark, below the mark -->
<br />
<img src=".github/assets/title.svg" alt="MacroMath" width="260" />

<br /><br />

<!-- Stack badges -->
<img src="https://img.shields.io/badge/Astro-FF5A1F?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
&nbsp;
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5" />
&nbsp;
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
&nbsp;
<img src="https://img.shields.io/badge/Poppins-111111?style=flat-square&logo=googlefonts&logoColor=white" alt="Poppins" />

<br />

<!-- Repo stats -->
<img src="https://img.shields.io/github/last-commit/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Last commit" />
&nbsp;
<img src="https://img.shields.io/github/languages/top/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Top language" />
&nbsp;
<img src="https://img.shields.io/github/repo-size/rodrigofariarocha/MacromathLandingPage?style=flat-square&color=FF5A1F" alt="Repo size" />
&nbsp;
<img src="https://img.shields.io/badge/i18n-PT_·_EN_·_ES-FF8A3D?style=flat-square" alt="i18n" />
&nbsp;
<img src="https://img.shields.io/badge/Theme-Light_·_Dark-111111?style=flat-square" alt="Theme" />

<br />

</div>

<!-- ░░ Orange wave divider ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=70&section=header" width="100%" />

<div align="center">

> **Gestão nutricional inteligente com IA** — o site oficial da app MacroMath:
> conta calorias e macros, planeia refeições e gere a despensa.

</div>

## 🧭 &nbsp;Índice

- ▸ [**Visão geral**](#-visão-geral) — o que é este projeto
- ▸ [**Funcionalidades**](#-funcionalidades) — o que a landing oferece
- ▸ [**Stack**](#-stack) — tecnologias usadas
- ▸ [**Secções da página**](#-secções-da-página) — cada bloco da landing
- ▸ [**Design system**](#-design-system) — cores, tipografia e tokens
- ▸ [**Estrutura**](#-estrutura) — organização das pastas
- ▸ [**Arranque**](#-arranque) — instalar e correr localmente
- ▸ [**Comandos**](#-comandos) — scripts disponíveis
- ▸ [**Internacionalização**](#-internacionalização) — como funciona o i18n
- ▸ [**Deploy**](#-deploy) — colocar online
- ▸ [**Autor**](#-autor) · [**Licença**](#-licença)

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ✨ &nbsp;Visão geral

**MacroMath Landing** é o site institucional da app **MacroMath** — uma landing page rápida, bonita e acessível, construída para apresentar o produto, explicar as funcionalidades e converter visitantes em downloads.

- ▸ **Objetivo** → apresentar a app e direcionar para o download (iOS & Android).
- ▸ **Princípios** → leve, responsiva e fiel à identidade visual da app.
- ▸ **Natureza** → site **100% estático** (sem _backend_), gerado com Astro.

> Acompanha o projeto de fim de curso (PAP) **MacroMath** — _Técnico de Gestão e Programação de Sistemas Informáticos_, triénio 2023/2026.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🚀 &nbsp;Funcionalidades

| Módulo | Descrição |
| :-- | :-- |
| ▸ **Estático & veloz** | Gerado com [Astro](https://astro.build) — HTML puro, sem JavaScript desnecessário, ideal para CDN. |
| ▸ **Tema claro / escuro** | Alternável e **persistente** em `localStorage`, aplicado antes do _paint_ (sem _flash_). |
| ▸ **Multilíngue** | Português · English · Español, traduzido no cliente via dicionário central. |
| ▸ **Animações ao _scroll_** | Revelações suaves que re-disparam ao subir e descer, com `IntersectionObserver`. |
| ▸ **Responsivo** | Desenhado _mobile-first_, com navegação e CTA dedicados ao telemóvel. |
| ▸ **Design system próprio** | Paleta laranja da marca, tipografia **Poppins** e _tokens_ em CSS. |
| ▸ **SEO & social** | Meta tags Open Graph / Twitter, `theme-color` e descrição por página. |
| ▸ **Acessível** | Marcação semântica e respeito por `prefers-reduced-motion`. |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧱 &nbsp;Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=astro,html,css,js,vercel" alt="Stack" />

</div>

| Camada | Tecnologia |
| :-- | :-- |
| ▸ **Framework** | Astro 6 _(output estático)_ |
| ▸ **Estilos** | CSS puro + _design tokens_ |
| ▸ **Interação** | JavaScript _vanilla_ (tema, i18n, menu, _scroll reveal_) |
| ▸ **i18n** | Dicionário JS aplicado no cliente |
| ▸ **Tipografia** | Poppins _(Google Fonts)_ |
| ▸ **Deploy** | Qualquer _host_ estático (Vercel, Netlify, …) |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧩 &nbsp;Secções da página

> Ordem de cima para baixo, em [`src/pages/index.astro`](src/pages/index.astro):

| # | Secção | Descrição |
| :-: | :-- | :-- |
| 1 | ▸ **Navbar** | Navegação fixa com troca de idioma, troca de tema e CTA de download. |
| 2 | ▸ **Hero** | Título, _mockup_ do telemóvel e chamada à ação principal. |
| 3 | ▸ **TrustBar** | Tira de funcionalidades-chave em destaque. |
| 4 | ▸ **Features** | Grelha de funcionalidades com _modal_ de detalhe. |
| 5 | ▸ **HowItWorks** | Passos de utilização da app. |
| 6 | ▸ **AppShowcase** | Destaque da **MacroAI**, o assistente de IA. |
| 7 | ▸ **Mission** | Missão e método do produto. |
| 8 | ▸ **Testimonials** | Testemunhos de utilizadores. |
| 9 | ▸ **FAQ** | Perguntas frequentes em acordeão. |
| 10 | ▸ **CTA** | Bloco final de conversão. |
| 11 | ▸ **Footer** | Ligações, redes sociais e legal. |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🎨 &nbsp;Design system

> Definido em [`src/styles/global.css`](src/styles/global.css) através de _design tokens_ (CSS custom properties).

**Paleta da marca**

| Token | Cor | Hex |
| :-- | :-- | :-- |
| ▸ `--brand` | ![](https://img.shields.io/badge/_-FF5A1F?style=flat-square&color=FF5A1F) | `#FF5A1F` |
| ▸ `--brand-strong` | ![](https://img.shields.io/badge/_-F03E0E?style=flat-square&color=F03E0E) | `#F03E0E` |
| ▸ `--brand-soft` | ![](https://img.shields.io/badge/_-FF8A4C?style=flat-square&color=FF8A4C) | `#FF8A4C` |

**Cores dos macros**

| Macro | Cor | Hex |
| :-- | :-- | :-- |
| ▸ Proteína | ![](https://img.shields.io/badge/_-EF4444?style=flat-square&color=EF4444) | `#EF4444` |
| ▸ Hidratos | ![](https://img.shields.io/badge/_-F5B70A?style=flat-square&color=F5B70A) | `#F5B70A` |
| ▸ Gordura | ![](https://img.shields.io/badge/_-22C55E?style=flat-square&color=22C55E) | `#22C55E` |
| ▸ Água | ![](https://img.shields.io/badge/_-3B82F6?style=flat-square&color=3B82F6) | `#3B82F6` |

**Outros tokens** → tipografia `Poppins` · raios `--r-sm` a `--r-full` · sombras `--shadow-sm/md/lg/brand` · movimento `--ease` + `--t-fast/base/slow`.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📁 &nbsp;Estrutura

```text
macromath_website/
│
├── public/                  → assets servidos tal-e-qual
│   ├── images/              → logos, mockups e imagens da app
│   └── favicon.svg
│
├── src/
│   ├── components/          → secções da landing (Hero, Features, …)
│   ├── layouts/             → Layout.astro (head, tema, i18n, scripts)
│   ├── pages/               → rotas: index · privacidade · termos
│   ├── i18n/                → dict.js (dicionário PT/EN/ES)
│   └── styles/              → global.css (design tokens & base)
│
├── scripts/                 → utilitários (geração de mockups)
├── .github/assets/          → wordmark do README
├── astro.config.mjs         → configuração do Astro
└── package.json
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ⚡ &nbsp;Arranque

**Requisitos**

- ▸ **Node.js** ≥ `22.12`
- ▸ **npm** (incluído no Node)

**Instalação**

```bash
# 1 › clonar o repositório
git clone https://github.com/rodrigofariarocha/MacromathLandingPage.git
cd MacromathLandingPage

# 2 › instalar dependências
npm install

# 3 › arrancar o servidor de desenvolvimento
npm run dev          # → http://localhost:4321
```

> 💡 Produção: `npm run build` gera o site em `./dist`; `npm run preview` pré-visualiza esse build.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📜 &nbsp;Comandos

| Comando | Ação |
| :-- | :-- |
| ▸ `npm install` | Instala as dependências |
| ▸ `npm run dev` | Servidor local em `localhost:4321` |
| ▸ `npm run build` | Compila o site para `./dist/` |
| ▸ `npm run preview` | Pré-visualiza o build localmente |
| ▸ `npm run astro` | CLI do Astro (`astro add`, `astro check`, …) |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🌐 &nbsp;Internacionalização

> Três idiomas: **Português · English · Español**, aplicados no cliente.

- ▸ As traduções vivem em [`src/i18n/dict.js`](src/i18n/dict.js), organizadas por chave.
- ▸ Cada elemento traduzível usa `data-i18n="chave"` (ou `data-i18n-html` para HTML).
- ▸ O idioma é **detetado automaticamente** do browser e **guardado** em `localStorage`.

```js
// src/i18n/dict.js — adicionar uma entrada
'hero.cta1': { pt: 'Descarregar grátis', en: 'Download free', es: 'Descargar gratis' },
```

```html
<!-- usar no componente -->
<span data-i18n="hero.cta1">Descarregar grátis</span>
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ☁️ &nbsp;Deploy

O `npm run build` gera um site **100% estático** em `./dist` — pronto para qualquer _host_:

- ▸ **Vercel** → _import_ do repositório, _zero config_.
- ▸ **Netlify** → _build_ `npm run build`, _publish_ `dist`.
- ▸ **Cloudflare Pages** → mesma configuração de _build_.
- ▸ **GitHub Pages** → publicar o conteúdo de `dist`.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 👤 &nbsp;Autor

- ▸ **Rodrigo Faria Rocha** — Nº 2223232 · Triénio 2023/2026
- ▸ Projeto de fim de curso (PAP) · _Técnico de Gestão e Programação de Sistemas Informáticos_

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📄 &nbsp;Licença

- ▸ Desenvolvido para **fins académicos**.
- ▸ Todos os direitos reservados, salvo indicação em contrário.

<br />

<div align="center">

<sub>Site oficial da app MacroMath · feito com 🧡</sub>

</div>

<!-- ░░ Orange footer wave ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=120&section=footer" width="100%" />
