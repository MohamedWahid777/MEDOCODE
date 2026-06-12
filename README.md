# MEDOCODE

Professional developer portfolio built with modern web technologies.

---

## Project Overview

MEDOCODE is a personal portfolio showcasing front-end engineering expertise. Its primary purpose is to display professional projects, services, and technical skills while serving as a live demonstration of high-performance web development. The main user experience goals include providing a highly interactive, fast, and accessible interface with seamless support for theming and bilingual audiences.

---

## Features

- **Responsive Design**: Pixel-perfect layout adaptable across mobile, tablet, and desktop devices.
- **Theme Switching**: Context-driven dynamic toggling between Dark and Warm premium themes with local storage persistence.
- **Multi-language Support**: Fully localized architecture for English (LTR) and Arabic (RTL) reading directions.
- **Animated Hero Section**: Immersive 3D interactive particle field background.
- **Custom Cursor**: Highly responsive custom mouse cursor with theme-aware glow and GSAP-driven motion.
- **Smooth Scrolling**: Implemented using Lenis for premium scroll physics across the entire application.
- **Interactive Timeline**: A scroll-driven Process Timeline that reacts to the user's scroll position.
- **Portfolio Showcase**: Interactive, stacked project cards with live and source code links.
- **Contact Form**: Functional user inquiry form.
- **SEO Optimization**: Dynamic meta tags and helmet configurations for search engine visibility.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM
- React i18next
- React Helmet Async
- Three.js / React Three Fiber
- GSAP
- Framer Motion
- Lenis
- Lucide React

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── about/
│   ├── contact/
│   ├── effects/
│   ├── hero/
│   ├── layout/
│   ├── services/
│   ├── ui/
│   └── work/
├── context/
├── i18n/
└── lib/
```

---

## Core Components

- **Navbar**: Main navigation with theme and language toggles.
- **HeroSection**: Landing view featuring 3D particle animations.
- **AboutSection**: Introductory overview accompanied by a detailed `BioPanelDrawer`.
- **ProcessTimeline**: Animated vertical scroll-timeline outlining the development process.
- **ServicesSection**: Grid highlighting offered professional services.
- **TechStackMarquee**: Infinite scrolling banner of technologies.
- **SelectedWorkSection**: Highlighted projects showcased in interactive stacked cards.
- **ClientFeedback**: Testimonial section displaying client reviews.
- **ContactSection**: Direct messaging form and social links.
- **Footer**: Closing navigation, branding, and contact references.
- **CustomCursor**: GSAP-powered interactive mouse replacement.
- **SmoothScroll**: Wrapper component enabling Lenis smooth scrolling.

---

## Theme System

The application relies on a robust `ThemeProvider` architecture:
- **CSS Variables**: Core styling properties are driven by CSS variables defined in `index.css`, dynamically adjusting when the root class changes.
- **Available Themes**: Supports a modern `Dark` theme and a premium `Warm` theme.
- **Theme Persistence**: User preferences are automatically persisted using `localStorage`.

---

## Internationalization

- **react-i18next Usage**: Used as the primary engine for managing translations.
- **Supported Languages**: English (`en`) and Arabic (`ar`).
- **Translation Architecture**: Translation strings are securely separated into JSON files inside the `src/i18n/` directory. Language selections persist locally and automatically adjust HTML document direction (`dir="ltr"` or `dir="rtl"`).

---

## SEO

- **Helmet Usage**: Integrated `react-helmet-async` for managing the document head.
- **Metadata Management**: Title, description, and OpenGraph tags dynamically update to reflect the active page and language context.

---

## Installation

```bash
npm install
npm run dev
```

---

## Available Commands

```bash
npm run dev
npm run build
npm run preview
```

---

## Deployment

To deploy the portfolio:
1. Run `npm run build` to generate optimized production files in the `dist` directory.
2. Upload the contents of the `dist` folder to your preferred static hosting provider (e.g., Vercel, Netlify, or GitHub Pages).

---

## Customization

- **Adding Translations**: Modify or add new key-value pairs in `src/i18n/en.json` and `src/i18n/ar.json`.
- **Editing Themes**: Adjust hex values and opacities in the `:root`, `.dark`, and `.warm` blocks within `src/index.css`.
- **Updating Portfolio Content**: Update data structures located in `src/lib/constants.ts` (or equivalent data files) to effortlessly populate new projects and technologies.

---

## Future Improvements

- Implementation of a headless CMS for dynamic project management.
- Addition of an integrated blog or technical writing section.
- Implementation of more granular scroll-triggered micro-interactions.
- Automated CI/CD pipeline integration for seamless deployments.
