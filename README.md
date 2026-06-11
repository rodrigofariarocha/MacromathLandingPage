<!-- ╭──────────────────────────────────────────────╮
     │  MacroMath — Landing Page · README             │
     ╰──────────────────────────────────────────────╯ -->

<div align="center">

<!-- Animated wave header (SVG, renders on GitHub) -->
<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=190&text=MacroMath&fontColor=ffffff&fontSize=58&fontAlignY=40&animation=fadeIn&desc=Gest%C3%A3o%20nutricional%20inteligente%20com%20IA&descSize=16&descAlignY=62" alt="MacroMath" width="100%" />

<!-- Animated typing text, rendered in Poppins -->
<a href="https://github.com/rodrigofariarocha/MacromathLandingPage">
  <img src="https://readme-typing-svg.demolab.com?font=Poppins&weight=600&size=22&pause=700&duration=3200&color=FF5A1F&center=true&vCenter=true&width=640&height=55&lines=Conta+calorias+e+macros+em+segundos;Planeia+refei%C3%A7%C3%B5es+com+intelig%C3%AAncia+artificial;Gere+a+despensa+sem+esfor%C3%A7o;Simples%2C+r%C3%A1pida+e+bonita+%F0%9F%8D%8A" alt="Typing tagline" />
</a>

<br />

<!-- Badges -->
<p>
  <img src="https://img.shields.io/badge/Astro-6.x-FF5A1F?style=for-the-badge&logo=astro&logoColor=white" alt="Astro" />
  <img src="https://img.shields.io/badge/Node-%E2%89%A522.12-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node" />
  <img src="https://img.shields.io/badge/i18n-PT%20·%20EN%20·%20ES-111?style=for-the-badge" alt="i18n" />
  <img src="https://img.shields.io/badge/Theme-Light%20%2F%20Dark-FF8A3D?style=for-the-badge" alt="Theme" />
</p>

</div>

<!-- gradient divider -->
<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=3" width="100%" />

## ✨ Sobre

Site institucional da app **MacroMath** — a app de nutrição que conta calorias e macros, planeia refeições, gere a despensa e deixa a inteligência artificial tratar do resto. Esta landing page foi construída para ser **rápida, bonita e acessível**, com um _design system_ próprio inspirado na própria app.

## 🚀 Destaques

| | |
| :-- | :-- |
| ⚡ **Estático & veloz** | Gerado com [Astro](https://astro.build) — HTML puro, sem JavaScript desnecessário. |
| 🌗 **Tema claro / escuro** | Alternável e persistente, sem _flash_ ao carregar a página. |
| 🌍 **Multilíngue** | Português · English · Español, via i18n aplicado no cliente. |
| 📱 **Responsivo** | Desenhado _mobile-first_, com navegação e CTA dedicados ao telemóvel. |
| 🎨 **Design system** | Paleta laranja da marca, tipografia **Poppins** e tokens em CSS. |

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=3" width="100%" />

## 🧱 Stack

<p>
  <img src="https://skillicons.dev/icons?i=astro,html,css,js,vercel" alt="Stack" />
</p>

| Camada      | Tecnologia                          |
| :---------- | :---------------------------------- |
| Framework   | Astro 6 _(output estático)_         |
| Estilos     | CSS puro + _design tokens_          |
| i18n        | Dicionário JS aplicado no cliente   |
| Tipografia  | Poppins _(Google Fonts)_            |

## 🛠️ Começar

> Requer **Node.js ≥ 22.12**

```bash
# Instalar dependências
npm install

# Servidor de desenvolvimento → http://localhost:4321
npm run dev

# Build de produção → ./dist
npm run build

# Pré-visualizar o build
npm run preview
```

## 📜 Comandos

| Comando           | Ação                                     |
| :---------------- | :--------------------------------------- |
| `npm install`     | Instala as dependências                  |
| `npm run dev`     | Servidor local em `localhost:4321`       |
| `npm run build`   | Compila o site para `./dist/`            |
| `npm run preview` | Pré-visualiza o build localmente         |
| `npm run astro`   | CLI do Astro (`astro add`, `astro check`)|

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=3" width="100%" />

## 📂 Estrutura

```text
macromath_website/
├── public/
│   ├── images/            # Imagens da app, logos e mockups
│   └── favicon.svg
├── src/
│   ├── components/        # Secções (Hero, Features, FAQ, ...)
│   ├── layouts/           # Layout base (head, tema, i18n, scripts)
│   ├── pages/             # Rotas: index · privacidade · termos
│   ├── i18n/              # Dicionário de traduções (PT/EN/ES)
│   └── styles/            # global.css — design tokens & base
├── scripts/               # Utilitários (geração de mockups)
├── astro.config.mjs
└── package.json
```

**Secções da página:**
`Hero` › `TrustBar` › `Features` › `HowItWorks` › `AppShowcase` › `Mission` › `Testimonials` › `FAQ` › `CTA` › `Footer`

## 🌐 Internacionalização

As traduções vivem em [`src/i18n/dict.js`](src/i18n/dict.js). Cada elemento traduzível usa o atributo `data-i18n="chave"`; o idioma é aplicado no cliente, com **persistência em `localStorage`** e **deteção automática** do idioma do browser.

## ☁️ Deploy

O projeto gera um site **100% estático** em `./dist`, pronto para qualquer _host_ estático — **Vercel**, **Netlify**, **Cloudflare Pages** ou **GitHub Pages**.

<img src="https://capsule-render.vercel.app/api?type=rect&color=0:FF8A3D,100:FF4D17&height=3" width="100%" />

<div align="center">

### 📄 Licença

Projeto proprietário © **MacroMath** · Todos os direitos reservados.

<sub>Feito com 🧡 e <strong>Astro</strong></sub>

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:FF8A3D,100:FF4D17&height=110&section=footer" width="100%" />
