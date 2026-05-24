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

export const introText = {
  highlight: 'I build digital experiences',
  body: 'that combine clean design, exceptional user experience, and scalable development practices — turning ideas into polished web products that create real value.',
}

export const aboutText = {
  summary:
    'Front-End Developer specializing in modern, high-performance web experiences. With 3+ years of hands-on development and a Computer Science background, I approach every project with a product mindset — analyzing business goals, understanding user needs, and delivering results that make an impact.',
  bio: [
    'I\'m Mohamed Wahid — a Front-End Developer with 3+ years of experience building websites and interactive web applications. I focus on clean design, exceptional UX, and scalable development practices that serve real business goals.',
    'I approach every project as a product challenge: understanding the business requirements behind it, identifying user needs, and crafting digital experiences that create tangible value — not just pixel-perfect interfaces.',
    'By combining modern front-end development with AI-powered workflows, I accelerate delivery, improve code quality, and maintain clean, maintainable, and scalable codebases across every project I build.',
  ],
  education: [
    { degree: 'Computer Science — In Progress', period: 'Currently Pursuing' },
  ],
}

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

export interface TechItem {
  name: string
  category: string
  experience: string
  description: string
}

export const techStack: TechItem[] = [
  {
    name: 'JavaScript / TypeScript',
    category: 'Languages',
    experience: 'Core Language',
    description: 'ES6+ JavaScript and TypeScript for scalable, maintainable frontend development.',
  },
  {
    name: 'React.js',
    category: 'Frameworks',
    experience: 'Primary Framework',
    description: 'Component-based UI architecture with React ecosystem and state management.',
  },
  {
    name: 'Next.js',
    category: 'Frameworks',
    experience: 'SSR & Full-stack',
    description: 'Server-side rendering, static generation, and full-stack React applications.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    experience: 'Utility-First CSS',
    description: 'Utility-first styling for rapid, consistent, and responsive UI development.',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Core Web',
    experience: 'Foundation',
    description: 'Semantic HTML, modern CSS, responsive design and cross-browser compatibility.',
  },
  {
    name: 'Framer Motion',
    category: 'Animation',
    experience: 'React Animations',
    description: 'Declarative animations, page transitions, and scroll-driven effects.',
  },
  {
    name: 'Figma',
    category: 'Design',
    experience: 'Design-to-Code',
    description: 'Translating Figma designs into pixel-perfect, responsive web interfaces.',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    experience: 'Version Control',
    description: 'Version control, collaborative workflows, and clean commit practices.',
  },
  {
    name: 'REST API',
    category: 'Integration',
    experience: 'API Integration',
    description: 'Integrating third-party APIs, authentication systems, and backend services.',
  },
  {
    name: 'SEO & Performance',
    category: 'Optimization',
    experience: 'Core Web Vitals',
    description: 'Technical SEO, Core Web Vitals optimization, and performance auditing.',
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

export interface Testimonial {
  id: string
  name: string
  role: string
  content: string
}

export const testimonials: Testimonial[] = [
  {
    id: 'nassif-center',
    name: 'Nassif Pediatric PT & Rehab Center',
    role: 'Client — Medical Platform',
    content:
      'ما شاء الله، بالتوفيق يا بشمهندس. حاجة جميلة جداً.',
  },
  {
    id: 'sayed-elmondey',
    name: 'Sayed El Mondey',
    role: 'Client',
    content:
      'متخصص ومحترف، وأسلوب وشخصية محترمة في التعامل.',
  },
  {
    id: 'mohamed-ashraf',
    name: 'Mohamed Ashraf',
    role: 'Client',
    content:
      'ما شاء الله، شغل احترافي — وأنصح بالتعامل معه.',
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
