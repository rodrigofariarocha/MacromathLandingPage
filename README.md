<div align="center">

<img src="public/images/logo-mark.png" alt="MacroMath" width="76" />

# MacroMath — Landing Page

**Gestão nutricional inteligente com IA.**
Site institucional da app MacroMath — conta calorias e macros, planeia refeições, gere a despensa e deixa a IA tratar do resto.

[![Astro](https://img.shields.io/badge/Astro-6.x-FF5A1F?logo=astro&logoColor=white)](https://astro.build)
[![Node](https://img.shields.io/badge/Node-%E2%89%A522.12-339933?logo=nodedotjs&logoColor=white)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-Proprietary-555)](#licença)

</div>

---

## ✨ Destaques

- ⚡ **Estático e ultrarrápido** — gerado com [Astro](https://astro.build), zero JavaScript desnecessário.
- 🌗 **Tema claro / escuro** — alternável e persistente, sem _flash_ ao carregar.
- 🌍 **Multilíngue (PT · EN · ES)** — i18n no cliente via dicionário central.
- 📱 **Totalmente responsivo** — desenhado _mobile-first_, com menu e CTA dedicados.
- 🎨 **Design system próprio** — paleta laranja da marca, tipografia Poppins e tokens em CSS.

## 🧱 Stack

| Camada      | Tecnologia                       |
| :---------- | :------------------------------- |
| Framework   | Astro 6 (output estático)        |
| Estilos     | CSS puro + _design tokens_       |
| i18n        | Dicionário JS aplicado no cliente |
| Tipografia  | Poppins (Google Fonts)           |

## 🚀 Começar

> Requer **Node.js ≥ 22.12**.

```bash
# 1. Instalar dependências
npm install

# 2. Servidor de desenvolvimento → http://localhost:4321
npm run dev

# 3. Build de produção → ./dist
npm run build

# 4. Pré-visualizar o build
npm run preview
```

## 📜 Comandos

| Comando            | Ação                                       |
| :----------------- | :----------------------------------------- |
| `npm install`      | Instala as dependências                    |
| `npm run dev`      | Servidor local em `localhost:4321`         |
| `npm run build`    | Compila o site para `./dist/`              |
| `npm run preview`  | Pré-visualiza o build localmente           |
| `npm run astro`    | Acede à CLI do Astro (`astro add`, etc.)   |

## 📂 Estrutura

```text
macromath_website/
├── public/
│   ├── images/            # Imagens da app, logos e mockups
│   └── favicon.svg
├── src/
│   ├── components/        # Secções da página (Hero, Features, FAQ, ...)
│   ├── layouts/           # Layout base (head, tema, i18n, scripts)
│   ├── pages/             # Rotas: index, privacidade, termos
│   ├── i18n/              # Dicionário de traduções (PT/EN/ES)
│   └── styles/            # global.css — design tokens e base
├── scripts/               # Utilitários (geração de mockups)
├── astro.config.mjs
└── package.json
```

### Secções da landing page

`Hero` · `TrustBar` · `Features` · `HowItWorks` · `AppShowcase` · `Mission` · `Testimonials` · `FAQ` · `CTA` · `Footer`

## 🌐 Internacionalização

As traduções vivem em [`src/i18n/dict.js`](src/i18n/dict.js). Cada elemento traduzível usa o atributo `data-i18n="chave"` e o idioma é aplicado no cliente (com persistência em `localStorage` e deteção automática do idioma do browser).

## 🧩 Deploy

O projeto gera um site **100% estático** em `./dist`, pronto para qualquer _host_ estático (Vercel, Netlify, Cloudflare Pages, GitHub Pages, ...).

```bash
npm run build   # produz ./dist
```

## 📄 Licença

Projeto proprietário © MacroMath. Todos os direitos reservados.
