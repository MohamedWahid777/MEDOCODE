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
  logoUrl?: string       // Devicons أو Simple Icons CDN
  iconFallback?: string  // Lucide icon name لو مفيش logo
}

const DEVICON = (name: string, variant = 'original'): string =>
  `/icons/${name}.svg`

const SI = (slug: string, color: string): string =>
  `/icons/${slug}.svg`

export const row1Skills: SkillItem[] = [
  {
    name: 'HTML5',
    category: 'frontend',
    logoUrl: DEVICON('html5'),
  },
  {
    name: 'CSS3',
    category: 'frontend',
    logoUrl: DEVICON('css3'),
  },
  {
    name: 'JavaScript ',
    category: 'frontend',
    logoUrl: DEVICON('javascript'),
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    logoUrl: DEVICON('typescript'),
  },
  {
    name: 'React.js',
    category: 'frontend',
    logoUrl: DEVICON('react'),
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    logoUrl: DEVICON('tailwindcss'),
  },
  {
    name: 'Bootstrap',
    category: 'frontend',
    logoUrl: DEVICON('bootstrap'),
  },
  {
    name: 'Python',
    category: 'frontend',
    logoUrl: DEVICON('python'),
  },
  {
    name: 'C++',
    category: 'frontend',
    logoUrl: DEVICON('cplusplus'),
  },
  {
    name: 'Git & GitHub',
    category: 'frontend',
    logoUrl: DEVICON('github'),
  },
]

export const row2Skills: SkillItem[] = [
  {
    name: 'Responsive Web Design',
    category: 'uiux',
    iconFallback: 'MonitorSmartphone',
  },
  {
    name: 'Clean Code',
    category: 'uiux',
    iconFallback: 'Code2',
  },
  {
    name: 'Technical SEO',
    category: 'uiux',
    iconFallback: 'Search',
  },
  {
    name: 'Prompt Engineering',
    category: 'uiux',
    iconFallback: 'Terminal',
  },
  {
    name: 'Performance Optimization',
    category: 'uiux',
    iconFallback: 'Zap',
  },
  {
    name: 'Problem Solving',
    category: 'uiux',
    iconFallback: 'Brain',
  },
  {
    name: 'Basic Algorithms',
    category: 'uiux',
    iconFallback: 'GitMerge',
  },
  {
    name: 'Basic Machine Learning',
    category: 'uiux',
    iconFallback: 'Cpu',
  },
  {
    name: 'Web Scraping',
    category: 'uiux',
    iconFallback: 'Globe',
  },
  {
    name: 'UI/UX & Design',
    category: 'uiux',
    iconFallback: 'Palette',
  },
]

/* Legacy tech stack kept for backwards compat */
export interface TechItem {
  name: string
  category: string
  experience: string
  description: string
  logoUrl?: string
}

export const techStack: TechItem[] = [
  {
    name: 'JavaScript / TypeScript',
    category: 'Languages', experience: 'Core Language',
    description: 'ES6+ JavaScript and TypeScript for scalable, maintainable frontend development.',
    logoUrl: DEVICON('typescript'),
  },
  {
    name: 'React.js',
    category: 'Frameworks', experience: 'Primary Framework',
    description: 'Component-based UI architecture with React ecosystem and state management.',
    logoUrl: DEVICON('react'),
  },
  {
    name: 'Next.js',
    category: 'Frameworks', experience: 'SSR & Full-stack',
    description: 'Server-side rendering, static generation, and full-stack React applications.',
    logoUrl: DEVICON('nextjs'),
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling', experience: 'Utility-First CSS',
    description: 'Utility-first styling for rapid, consistent, and responsive UI development.',
    logoUrl: DEVICON('tailwindcss'),
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Core Web', experience: 'Foundation',
    description: 'Semantic HTML, modern CSS, responsive design and cross-browser compatibility.',
    logoUrl: DEVICON('html5'),
  },
  {
    name: 'Framer Motion',
    category: 'Animation', experience: 'React Animations',
    description: 'Declarative animations, page transitions, and scroll-driven effects.',
    logoUrl: DEVICON('framermotion'),
  },
  {
    name: 'Figma',
    category: 'Design', experience: 'Design-to-Code',
    description: 'Translating Figma designs into pixel-perfect, responsive web interfaces.',
    logoUrl: DEVICON('figma'),
  },
  {
    name: 'Git & GitHub',
    category: 'Tools', experience: 'Version Control',
    description: 'Version control, collaborative workflows, and clean commit practices.',
    logoUrl: DEVICON('github'),
  },
  {
    name: 'REST API',
    category: 'Integration', experience: 'API Integration',
    description: 'Integrating third-party APIs, authentication systems, and backend services.',
    logoUrl: DEVICON('postman'),
  },
  {
    name: 'SEO & Performance',
    category: 'Optimization', experience: 'Core Web Vitals',
    description: 'Technical SEO, Core Web Vitals optimization, and performance auditing.',
    logoUrl: SI('googlesearchconsole', '458CF5'),
  },
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
  descriptionAr?: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  imageUrl?: string
}

export const projects: Project[] = [
  {
    id: 'nassif-rehab',
    category: 'Medical Digital Platform',
    title: 'Nassif Rehab Platform',
    description:
      'A comprehensive medical digital platform for Nassif Pediatric Physical Therapy & Rehabilitation Center. Features a Medical-Tech Luxury visual identity, bilingual Arabic/English support, dynamic Dark/Light Mode, and professional animations.',
    descriptionAr:
      'منصة رقمية طبية متكاملة لمركز نصيف للعلاج الطبيعي وتأهيل الأطفال، تتميز بهوية بصرية احترافية تجمع بين الطابع الطبي والتقني، مع دعم كامل للغتين العربية والإنجليزية، ووضعَي الإضاءة الداكن والفاتح، بالإضافة إلى حركات تفاعلية احترافية.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'i18next', 'HTML5 Canvas'],
    liveUrl: 'https://nasif-center.netlify.app/',
    githubUrl: 'https://github.com/MohamedWahid777/nasif-physical-therapy-center.git',
    imageUrl: '/photoP1.webp',
  },
  {
    id: 'portfolio-website',
    category: 'Portfolio Website',
    title: 'Portfolio Website',
    description:
      'A modern and professional portfolio website with a sleek UI, Dark/Light Mode, smooth animations, responsive design, and a backend-free contact form — built to make a strong first impression.',
    descriptionAr:
      'موقع بورتفوليو احترافي وعصري يتميز بواجهة أنيقة، ودعم للوضع الداكن والفاتح، وحركات سلسة، وتصميم متجاوب بالكامل، ونموذج تواصل يعمل بدون حاجة إلى Backend، بهدف ترك انطباع احترافي قوي.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://medocode-portfolio.netlify.app/',
    githubUrl: 'https://github.com/MohamedWahid777/MEDOCODE-Portfolio.git',
    imageUrl: '/photoP2.webp',
  },
  {
    id: 'cafe-website',
    category: 'Business Website',
    title: 'Cafe Website',
    description:
      'A responsive café website with bilingual Arabic/English support, interactive menu, cart system, and reservation forms. Built with a focus on clean design and smooth user experience.',
    descriptionAr:
      'موقع مقهى متجاوب بالكامل يدعم اللغتين العربية والإنجليزية، ويحتوي على قائمة تفاعلية، ونظام سلة مشتريات، ونماذج للحجوزات، مع التركيز على تجربة مستخدم سلسة وتصميم نظيف وعصري.',
    technologies: ['HTML', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://wbsite-cafe.netlify.app/',
    githubUrl: 'https://github.com/MohamedWahid777/Cafe-Website.git',
    imageUrl: '/photoP3.webp',
  },
  {
    id: 'restaurant-website',
    category: 'Business Website',
    title: 'Restaurant Website',
    description:
      'An appetizing and responsive landing page for a fast-food restaurant featuring an interactive menu, structured layouts, and vibrant visual aesthetics.',
    descriptionAr:
      'صفحة هبوط احترافية لمطعم وجبات سريعة، تتميز بقائمة طعام تفاعلية، وتنظيم بصري واضح للمحتوى، وتصميم حيوي وجذاب يعكس هوية المطعم.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://rurger-rush.netlify.app/',
    githubUrl: 'https://github.com/MohamedWahid777/Fast-food-restaurant.git',
    imageUrl: '/photoP4.webp',
  },
  {
    id: 'gym-website',
    category: 'Business Website',
    title: 'Gym Website',
    description:
      'A responsive gym landing page supporting Arabic & English with pricing plans, services overview, and smooth UI interactions.',
    descriptionAr:
      'صفحة هبوط متجاوبة لصالة رياضية تدعم اللغتين العربية والإنجليزية، وتتضمن خطط الأسعار، وعرض الخدمات، وحركات تفاعلية سلسة لتحسين تجربة المستخدم.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://gym-ironcore.netlify.app/',
    githubUrl: 'https://github.com/MohamedWahid777/gym-website.git',
    imageUrl: '/photoP5.webp',

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
    content: "Masha'Allah, professional work, I highly recommend working with him.",
    contentAr: 'ما شاء الله، شغل احترافي وأنصح بالتعامل معه.',
  },
]

export const processSteps = [
  { number: '01', title: 'Discover', icon: 'Search' },
  { number: '02', title: 'Plan',     icon: 'ListChecks' },
  { number: '03', title: 'Design',   icon: 'Palette' },
  { number: '04', title: 'Develop',  icon: 'Code2' },
  { number: '05', title: 'Launch',   icon: 'Rocket' },
]

export const navLinks = [
  { href: '#about',    label: 'About' },
  { href: '#process',  label: 'Process' },
  { href: '#services', label: 'Services' },
  { href: '#work',     label: 'Work' },
  { href: '#contact',  label: 'Contact' },
]