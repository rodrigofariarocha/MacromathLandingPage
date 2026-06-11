<!-- ╭──────────────────────────────────────────────╮
     │  MacroMath — Landing Page · README             │
     ╰──────────────────────────────────────────────╯ -->

<div align="center">

<br />

<!-- Animated logo + wordmark (self-contained SVG, gentle pulse) -->
<img src=".github/assets/macromath-logo.svg" alt="MacroMath" width="420" />

<br /><br />

<!-- Animated rotating taglines, in Poppins -->
<br />
<img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=500&size=17&duration=2800&pause=900&color=9AA0A6&center=true&vCenter=true&width=560&height=36&lines=Conta+calorias+e+macros+%F0%9F%8D%8E;Planeia+refei%C3%A7%C3%B5es+com+IA+%F0%9F%A4%96;Gere+a+despensa+sem+esfor%C3%A7o+%F0%9F%9B%92;Dispon%C3%ADvel+para+iOS+%26+Android+%F0%9F%93%B1" alt="Taglines" />

<br /><br />

<!-- Minimal badges -->
<a href="https://astro.build"><img src="https://img.shields.io/badge/Astro-FF5A1F?style=flat-square&logo=astro&logoColor=white" alt="Astro" /></a>
&nbsp;
<img src="https://img.shields.io/badge/Poppins-111111?style=flat-square&logo=googlefonts&logoColor=white" alt="Poppins" />
&nbsp;
<img src="https://img.shields.io/badge/PT_·_EN_·_ES-FF8A3D?style=flat-square" alt="i18n" />
&nbsp;
<img src="https://img.shields.io/badge/Light_·_Dark-111111?style=flat-square" alt="Theme" />

<br />

</div>

<!-- Animated wave divider -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=70&section=header" width="100%" />

<div align="center">

### Gestão nutricional inteligente com IA

Site institucional da app **MacroMath** — conta calorias e macros, planeia refeições,
gere a despensa e deixa a inteligência artificial tratar do resto.
Rápida, bonita e acessível.

</div>

<br />

## 🚀 &nbsp;Destaques

> ⚡ &nbsp;**Estático & veloz** — gerado com [Astro](https://astro.build), HTML puro, sem JS desnecessário
> 🌗 &nbsp;**Tema claro / escuro** — alternável e persistente, sem _flash_ ao carregar
> 🌍 &nbsp;**Multilíngue** — Português · English · Español, i18n no cliente
> 📱 &nbsp;**Responsivo** — desenhado _mobile-first_, com navegação e CTA dedicados
> 🎨 &nbsp;**Design system** — paleta laranja da marca, tipografia **Poppins** e tokens em CSS

<br />

## 🧱 &nbsp;Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=astro,html,css,js,vercel" alt="Stack" />

</div>

<br />

## 🛠️ &nbsp;Começar

> Requer **Node.js ≥ 22.12**

```bash
npm install      # instalar dependências
npm run dev      # dev server → http://localhost:4321
npm run build    # build de produção → ./dist
npm run preview  # pré-visualizar o build
```

<br />

## 📂 &nbsp;Estrutura

```text
macromath_website/
├── public/images/      # logos, mockups e imagens da app
├── src/
│   ├── components/      # Hero · Features · FAQ · CTA · ...
│   ├── layouts/         # layout base (head, tema, i18n)
│   ├── pages/           # index · privacidade · termos
│   ├── i18n/            # dicionário de traduções (PT/EN/ES)
│   └── styles/          # global.css — design tokens & base
├── scripts/             # utilitários (geração de mockups)
└── astro.config.mjs
```

<div align="center">

`Hero` › `TrustBar` › `Features` › `HowItWorks` › `AppShowcase` › `Mission` › `Testimonials` › `FAQ` › `CTA` › `Footer`

</div>

<br />

## 🌐 &nbsp;Internacionalização

As traduções vivem em [`src/i18n/dict.js`](src/i18n/dict.js). Cada elemento usa `data-i18n="chave"`;
o idioma é aplicado no cliente, com **persistência** em `localStorage` e **deteção automática** do browser.

<br />

## ☁️ &nbsp;Deploy

Gera um site **100% estático** em `./dist`, pronto para **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages**.

<br />

<div align="center">

<sub>📄 &nbsp;Projeto proprietário © **MacroMath** · Todos os direitos reservados</sub>

<br />

</div>

<!-- Animated footer wave -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=120&section=footer" width="100%" />
