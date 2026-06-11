<!-- ╭──────────────────────────────────────────────╮
     │  MacroMath — Landing Page · README             │
     ╰──────────────────────────────────────────────╯ -->

<div align="center">

<br />

<!-- Animated logo + wordmark below it (self-contained SVG, gentle pulse) -->
<img src=".github/assets/macromath-logo.svg" alt="MacroMath" width="210" />

<br /><br />

<!-- Animated rotating taglines, in Poppins -->
<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=17&duration=2800&pause=900&color=9AA0A6&center=true&vCenter=true&width=560&height=36&lines=Conta+calorias+e+macros+%F0%9F%8D%8E;Planeia+refei%C3%A7%C3%B5es+com+IA+%F0%9F%A4%96;Gere+a+despensa+sem+esfor%C3%A7o+%F0%9F%9B%92;Dispon%C3%ADvel+para+iOS+%26+Android+%F0%9F%93%B1" alt="Taglines" />

<br /><br />

<!-- Minimal badges -->
<img src="https://img.shields.io/badge/Astro-FF5A1F?style=flat-square&logo=astro&logoColor=white" alt="Astro" />
&nbsp;
<img src="https://img.shields.io/badge/Poppins-111111?style=flat-square&logo=googlefonts&logoColor=white" alt="Poppins" />
&nbsp;
<img src="https://img.shields.io/badge/PT_·_EN_·_ES-FF8A3D?style=flat-square" alt="i18n" />
&nbsp;
<img src="https://img.shields.io/badge/Light_·_Dark-111111?style=flat-square" alt="Theme" />
&nbsp;
<img src="https://img.shields.io/badge/Status-Online-22C55E?style=flat-square" alt="Status" />

<br />

</div>

<!-- ░░ Orange wave divider ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=70&section=header" width="100%" />

<div align="center">

> **Gestão nutricional inteligente com IA** — conta calorias e macros, planeia refeições,
> gere a despensa e deixa a inteligência artificial tratar do resto.

</div>

## 🧭 &nbsp;Índice

```
›  Sobre              ›  Estrutura          ›  Comandos
›  Funcionalidades    ›  Secções da página  ›  Internacionalização
›  Stack              ›  Arranque           ›  Deploy
›  Design system                            ›  Licença
```

- ▸ [**Sobre**](#-sobre) — o que é este projeto
- ▸ [**Funcionalidades**](#-funcionalidades) — o que a landing oferece
- ▸ [**Stack**](#-stack) — tecnologias usadas
- ▸ [**Design system**](#-design-system) — cores, tipografia e tokens
- ▸ [**Estrutura**](#-estrutura) — organização das pastas
- ▸ [**Secções da página**](#-secções-da-página) — cada bloco da landing
- ▸ [**Arranque**](#-arranque) — instalar e correr localmente
- ▸ [**Comandos**](#-comandos) — scripts disponíveis
- ▸ [**Internacionalização**](#-internacionalização) — como funciona o i18n
- ▸ [**Deploy**](#-deploy) — colocar online
- ▸ [**Licença**](#-licença)

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## ✨ &nbsp;Sobre

Site institucional da app **MacroMath** — a app de nutrição que torna a contagem de macros simples e bonita.

- ▸ **Objetivo** → apresentar a app, converter visitantes em downloads e explicar as funcionalidades.
- ▸ **Princípios** → rápido, acessível, responsivo e fiel à identidade visual da app.
- ▸ **Natureza** → site **100% estático**, sem _backend_ — apenas a landing page.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🚀 &nbsp;Funcionalidades

- ⚡ **Estático & veloz** → gerado com [Astro](https://astro.build); HTML puro, sem JavaScript desnecessário.
- 🌗 **Tema claro / escuro** → alternável e persistente em `localStorage`, sem _flash_ ao carregar.
- 🌍 **Multilíngue** → Português · English · Español, aplicado no cliente.
- 📱 **Responsivo** → desenhado _mobile-first_, com menu e CTA dedicados ao telemóvel.
- 🎞️ **Animações ao _scroll_** → revelações suaves que re-disparam ao subir e descer.
- ♿ **Acessível** → respeita `prefers-reduced-motion` e usa marcação semântica.
- 🎨 **Design system próprio** → paleta da marca, tipografia **Poppins** e _tokens_ em CSS.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧱 &nbsp;Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=astro,html,css,js,vercel" alt="Stack" />

</div>

| Camada       | Tecnologia                          |
| :----------- | :---------------------------------- |
| ▸ Framework  | **Astro 6** _(output estático)_     |
| ▸ Estilos    | **CSS puro** + _design tokens_      |
| ▸ Interação  | **JavaScript** _vanilla_ (inline)   |
| ▸ i18n       | Dicionário **JS** no cliente        |
| ▸ Tipografia | **Poppins** _(Google Fonts)_        |
| ▸ Deploy     | Qualquer _host_ estático            |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🎨 &nbsp;Design system

> Definido em [`src/styles/global.css`](src/styles/global.css) através de _design tokens_ (CSS custom properties).

**Paleta da marca**

| Token             | Cor                                                                                  | Hex       |
| :---------------- | :----------------------------------------------------------------------------------- | :-------- |
| ▸ `--brand`        | ![](https://img.shields.io/badge/_-FF5A1F?style=flat-square&color=FF5A1F)            | `#FF5A1F` |
| ▸ `--brand-strong` | ![](https://img.shields.io/badge/_-F03E0E?style=flat-square&color=F03E0E)            | `#F03E0E` |
| ▸ `--brand-soft`   | ![](https://img.shields.io/badge/_-FF8A4C?style=flat-square&color=FF8A4C)            | `#FF8A4C` |

**Cores dos macros**

| Macro       | Cor                                                                          | Hex       |
| :---------- | :--------------------------------------------------------------------------- | :-------- |
| ▸ Proteína  | ![](https://img.shields.io/badge/_-EF4444?style=flat-square&color=EF4444)   | `#EF4444` |
| ▸ Hidratos  | ![](https://img.shields.io/badge/_-F5B70A?style=flat-square&color=F5B70A)   | `#F5B70A` |
| ▸ Gordura   | ![](https://img.shields.io/badge/_-22C55E?style=flat-square&color=22C55E)   | `#22C55E` |
| ▸ Água      | ![](https://img.shields.io/badge/_-3B82F6?style=flat-square&color=3B82F6)   | `#3B82F6` |

**Outros tokens**

- ▸ **Tipografia** → `--font: 'Poppins'` para títulos e corpo.
- ▸ **Raios** → de `--r-sm` (10px) a `--r-full` (pílula).
- ▸ **Sombras** → `--shadow-sm` · `--shadow-md` · `--shadow-lg` · `--shadow-brand`.
- ▸ **Movimento** → curvas `--ease` e durações `--t-fast` / `--t-base` / `--t-slow`.

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
│   ├── components/          → secções da landing (Hero, Features, ...)
│   ├── layouts/             → Layout.astro (head, tema, i18n, scripts)
│   ├── pages/               → rotas: index · privacidade · termos
│   ├── i18n/                → dict.js (dicionário PT/EN/ES)
│   └── styles/              → global.css (design tokens & base)
│
├── scripts/                 → utilitários (geração de mockups)
├── .github/assets/          → logo animada do README
├── astro.config.mjs         → configuração do Astro
└── package.json
```

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🧩 &nbsp;Secções da página

> Ordem de cima para baixo, em [`src/pages/index.astro`](src/pages/index.astro):

- 1️⃣ **Navbar** → navegação fixa, troca de idioma, troca de tema e CTA.
- 2️⃣ **Hero** → título, _mockup_ do telemóvel e chamada à ação principal.
- 3️⃣ **TrustBar** → tira de funcionalidades-chave em destaque.
- 4️⃣ **Features** → grelha de funcionalidades com _modal_ de detalhe.
- 5️⃣ **HowItWorks** → passos de utilização da app.
- 6️⃣ **AppShowcase** → destaque da **MacroAI** (assistente de IA).
- 7️⃣ **Mission** → missão e método do produto.
- 8️⃣ **Testimonials** → testemunhos de utilizadores.
- 9️⃣ **FAQ** → perguntas frequentes em acordeão.
- 🔟 **CTA** → bloco final de conversão.
- ⤵️ **Footer** → ligações, redes sociais e legal.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🛠️ &nbsp;Arranque

**Requisitos**

- ▸ **Node.js** ≥ `22.12`
- ▸ **npm** (incluído no Node)

**Passos**

```bash
# 1 › clonar o repositório
git clone https://github.com/rodrigofariarocha/MacromathLandingPage.git
cd MacromathLandingPage

# 2 › instalar dependências
npm install

# 3 › arrancar o servidor de desenvolvimento
npm run dev          # → http://localhost:4321
```

> 💡 Para produção: `npm run build` gera o site em `./dist`, e `npm run preview` pré-visualiza esse build.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 📜 &nbsp;Comandos

| Comando             | Ação                                          |
| :------------------ | :-------------------------------------------- |
| ▸ `npm install`     | Instala as dependências                       |
| ▸ `npm run dev`     | Servidor local em `localhost:4321`            |
| ▸ `npm run build`   | Compila o site para `./dist/`                 |
| ▸ `npm run preview` | Pré-visualiza o build localmente              |
| ▸ `npm run astro`   | CLI do Astro (`astro add`, `astro check`, …)  |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=2" width="100%" />

## 🌐 &nbsp;Internacionalização

> Três idiomas: **Português · English · Español**, aplicados no cliente.

**Como funciona**

- ▸ As traduções vivem em [`src/i18n/dict.js`](src/i18n/dict.js), por chave.
- ▸ Cada elemento traduzível usa `data-i18n="chave"` (ou `data-i18n-html` para HTML).
- ▸ O idioma é **detetado automaticamente** do browser e **guardado** em `localStorage`.

**Adicionar uma tradução**

```js
// src/i18n/dict.js
'hero.cta1': { pt: 'Descarregar grátis', en: 'Download free', es: 'Descargar gratis' },
```

```html
<!-- no componente -->
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

## 📄 &nbsp;Licença

- ▸ Projeto **proprietário** © **MacroMath**.
- ▸ Todos os direitos reservados.

<br />

<div align="center">

<sub>Desenvolvido por <strong>Rodrigo Faria Rocha</strong> · MacroMath 🧡</sub>

</div>

<!-- ░░ Orange footer wave ░░ -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=120&section=footer" width="100%" />
