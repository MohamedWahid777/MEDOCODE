/* ══════════════════════════════════════════════════════════════
   MEDOCODE — Content Data
   Single source of truth for all website content.
   ══════════════════════════════════════════════════════════════ */

export const siteConfig = {
  name: 'MEDOCODE',
  fullName: 'Mohamed Wahid',
  title: 'Front-End Developer',
  email: 'wahadmomo@gmail.com',
  phone: '+201063841779',
  socials: {
    github: 'https://github.com/MohamedWahid777',
    linkedin: 'https://www.linkedin.com/in/mohamed-wahid-11469a3b8',
    facebook: 'https://www.facebook.com/profile.php?id=61589148441332',
    whatsapp: 'https://wa.me/201063841779',
  },
}

export const aboutText = {
  summary:
    'Front-End Developer with 3+ years of experience crafting modern, high-performance web experiences. I approach every project with a product mindset — understanding business goals, identifying user needs, and delivering digital solutions that create measurable impact.',
  bio: [
    'I\'m Mohamed Wahid — a Front-End Developer specializing in building modern, high-performance web experiences that combine clean design, exceptional UX, and scalable development practices.',
    'By combining modern development with AI-powered workflows, I accelerate delivery, improve code quality, and maintain clean, maintainable, scalable codebases across every project I build.',
  ],
  education: [
    { degree: 'Computer Science — In Progress', period: 'Currently Pursuing' },
  ],
}

/* ── 16 Services ─────────────────────────────────────────────── */
export const servicesList = [
  'Business Websites',
  'Company & Corporate Websites',
  'Startup Landing Pages',
  'Personal Portfolio Websites',
  'Service-Based Business Websites',
  'Medical & Healthcare Websites',
  'Product Showcase Websites',
  'Interactive Dashboards',
  'Modern Web Applications',
  'Figma to Responsive Website Development',
  'Custom Front-End Solutions',
  'SEO-Friendly Website Development',
  'Performance Optimization',
  'Responsive Design for All Devices',
  'Modern UI Animations & Interactions',
  'AI-Assisted Development Workflows',
]

/* Keep old services for any legacy references */
export interface Service {
  icon: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    icon: 'Globe',
    title: 'Web Development',
    description:
      'Business websites, startup landing pages, corporate sites, portfolios, and service-based web solutions built for performance and results.',
  },
  {
    icon: 'Sparkles',
    title: 'UI/UX & Interactions',
    description:
      'Modern UI animations, micro-interactions, responsive layouts, and conversion-oriented design that elevates user experience.',
  },
  {
    icon: 'Cable',
    title: 'Frontend Engineering',
    description:
      'Figma to responsive website development, custom front-end solutions, REST API integration, and component-based architecture.',
  },
  {
    icon: 'Brain',
    title: 'AI-Assisted Development',
    description:
      'Leveraging advanced AI workflows to accelerate development, optimize code quality, and deliver polished results efficiently.',
  },
]

/* ── Tech Skills ─────────────────────────────────────────────── */
export interface SkillItem {
  name: string
  color?: string
  textColor?: string
  abbr?: string
  category: 'frontend' | 'uiux'
}

export const frontendSkills: SkillItem[] = [
  { name: 'HTML5',                       color: '#E44D26', textColor: '#fff', abbr: '5',  category: 'frontend' },
  { name: 'CSS3',                        color: '#1572B6', textColor: '#fff', abbr: '3',  category: 'frontend' },
  { name: 'JavaScript (ES6+)',           color: '#F7DF1E', textColor: '#000', abbr: 'JS', category: 'frontend' },
  { name: 'TypeScript',                  color: '#3178C6', textColor: '#fff', abbr: 'TS', category: 'frontend' },
  { name: 'React.js',                    color: '#20232A', textColor: '#61DAFB', abbr: '⚛', category: 'frontend' },
  { name: 'Next.js',                     color: '#000',    textColor: '#fff', abbr: 'N',  category: 'frontend' },
  { name: 'Tailwind CSS',                color: '#06B6D4', textColor: '#fff', abbr: 'TW', category: 'frontend' },
  { name: 'Bootstrap',                   color: '#7952B3', textColor: '#fff', abbr: 'B',  category: 'frontend' },
  { name: 'Responsive Web Design',       category: 'frontend' },
  { name: 'Component-Based Architecture',category: 'frontend' },
  { name: 'State Management',            category: 'frontend' },
  { name: 'REST API Integration',        category: 'frontend' },
  { name: 'Authentication Systems',      category: 'frontend' },
  { name: 'Form Handling',               category: 'frontend' },
  { name: 'Performance Optimization',    category: 'frontend' },
  { name: 'Cross-Browser Compatibility', category: 'frontend' },
]

export const uiuxSkills: SkillItem[] = [
  { name: 'User Interface Design',       category: 'uiux' },
  { name: 'User Experience Optimization',category: 'uiux' },
  { name: 'Design Systems',              category: 'uiux' },
  { name: 'Wireframing',                 category: 'uiux' },
  { name: 'Prototyping',                 category: 'uiux' },
  { name: 'Responsive Layout Design',    category: 'uiux' },
  { name: 'Accessibility Best Practices',category: 'uiux' },
  { name: 'Conversion-Oriented Design',  category: 'uiux' },
  { name: 'Mobile-First Development',    category: 'uiux' },
]

/* Legacy tech stack kept for backwards compat */
export interface TechItem {
  name: string
  category: string
  experience: string
  description: string
}

export const techStack: TechItem[] = [
  { name: 'JavaScript / TypeScript', category: 'Languages',    experience: 'Core Language',    description: 'ES6+ JavaScript and TypeScript for scalable, maintainable frontend development.' },
  { name: 'React.js',               category: 'Frameworks',   experience: 'Primary Framework', description: 'Component-based UI architecture with React ecosystem and state management.' },
  { name: 'Next.js',                category: 'Frameworks',   experience: 'SSR & Full-stack',  description: 'Server-side rendering, static generation, and full-stack React applications.' },
  { name: 'Tailwind CSS',           category: 'Styling',      experience: 'Utility-First CSS', description: 'Utility-first styling for rapid, consistent, and responsive UI development.' },
  { name: 'HTML5 & CSS3',           category: 'Core Web',     experience: 'Foundation',        description: 'Semantic HTML, modern CSS, responsive design and cross-browser compatibility.' },
  { name: 'Framer Motion',          category: 'Animation',    experience: 'React Animations',  description: 'Declarative animations, page transitions, and scroll-driven effects.' },
  { name: 'Figma',                  category: 'Design',       experience: 'Design-to-Code',    description: 'Translating Figma designs into pixel-perfect, responsive web interfaces.' },
  { name: 'Git & GitHub',           category: 'Tools',        experience: 'Version Control',   description: 'Version control, collaborative workflows, and clean commit practices.' },
  { name: 'REST API',               category: 'Integration',  experience: 'API Integration',   description: 'Integrating third-party APIs, authentication systems, and backend services.' },
  { name: 'SEO & Performance',      category: 'Optimization', experience: 'Core Web Vitals',   description: 'Technical SEO, Core Web Vitals optimization, and performance auditing.' },
]

export const expertiseMarquee = [
  'Product-Oriented Thinking',
  'AI-Enhanced Workflow',
  'Modern Development Standards',
  'Attention to Detail',
  'Performance First',
  'Responsive Design',
  'Clean Scalable Code',
  'Continuous Learning',
]

export interface Project {
  id: string
  category: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

export const projects: Project[] = [
  {
    id: 'nassif-rehab',
    category: 'Medical Digital Platform',
    title: 'Nassif Rehab Platform',
    description:
      'A comprehensive medical digital platform for Nassif Pediatric Physical Therapy & Rehabilitation Center. Features a Medical-Tech Luxury visual identity, bilingual Arabic/English support, dynamic Dark/Light Mode, and professional animations.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next', 'HTML5 Canvas'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'portfolio-website',
    category: 'Portfolio Website',
    title: 'Portfolio Website',
    description:
      'A modern and professional portfolio website with a sleek UI, Dark/Light Mode, smooth animations, responsive design, and a backend-free contact form — built to make a strong first impression.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'cafe-website',
    category: 'Business Website',
    title: 'Cafe Website',
    description:
      'A responsive café website with bilingual Arabic/English support, interactive menu, cart system, and reservation forms. Built with a focus on clean design and smooth user experience.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'restaurant-website',
    category: 'Business Website',
    title: 'Restaurant Website',
    description:
      'An appetizing and responsive landing page for a fast-food restaurant featuring an interactive menu, structured layouts, and vibrant visual aesthetics.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'gym-website',
    category: 'Business Website',
    title: 'Gym Website',
    description:
      'A responsive gym landing page supporting Arabic & English with pricing plans, services overview, and smooth UI interactions.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
  },
]

/* ── Bilingual Testimonials ──────────────────────────────────── */
export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
  contentAr: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'nassif-center',
    name: 'Nassif Pediatric PT & Rehab Center',
    role: 'Client — Medical Platform',
    content: "Masha'Allah, well done Engineer. It's something truly beautiful.",
    contentAr: 'ما شاء الله، بالتوفيق يا بشمهندس. حاجة جميلة جداً.',
  },
  {
    id: 'sayed-elmondey',
    name: 'Sayed El Mondey',
    role: 'Client',
    content: 'Specialized and professional, with a respectful and commendable personality.',
    contentAr: 'متخصص ومحترف، وأسلوب وشخصية محترمة في التعامل.',
  },
  {
    id: 'mohamed-ashraf',
    name: 'Mohamed Ashraf',
    role: 'Client',
    content: "Masha'Allah, professional work — I highly recommend working with him.",
    contentAr: 'ما شاء الله، شغل احترافي — وأنصح بالتعامل معه.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Understanding the project\'s goals, target audience, business requirements, and user expectations.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Creating a clear content structure, user flow, and scalable development approach before implementation.',
    icon: 'ListChecks',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Building clean and intuitive interfaces focused on usability, accessibility, and conversion.',
    icon: 'Palette',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Developing responsive, modern, and high-performance front-end solutions using industry best practices.',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Improving loading speed, responsiveness, SEO performance, and overall user experience.',
    icon: 'Gauge',
  },
  {
    number: '06',
    title: 'Testing & Delivery',
    description:
      'Ensuring quality, consistency, responsiveness, and smooth performance across devices and browsers.',
    icon: 'Rocket',
  },
]

export const navLinks = [
  { href: '#work', label: 'Work' },
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]
