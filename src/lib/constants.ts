/* ══════════════════════════════════════════════════════════════
   MEDOCODE — Content Data
   Extracted from design/code.html as baseline.
   This is the single source of truth for all website content.
   ══════════════════════════════════════════════════════════════ */

export const siteConfig = {
  name: 'MEDOCODE',
  fullName: 'Mohamed Wahid',
  title: 'Creative Developer & Architect',
  email: 'hello@medocode.com',
  phone: '+1 (555) 123-4567',
  socials: {
    github: 'https://github.com/medocode',
    linkedin: 'https://linkedin.com/in/medocode',
    facebook: 'https://facebook.com/medocode',
    whatsapp: 'https://wa.me/15551234567',
  },
}

export const introText = {
  highlight: 'I engineer digital experiences',
  body: 'that bridge the gap between technical complexity and intuitive design. Focused on performance, precision, and high-end aesthetic execution.',
}

export const aboutText = {
  summary:
    'With over a decade of experience in software architecture and creative development, I\'ve dedicated my career to building systems that are not only structurally sound but visually compelling. My approach combines rigorous engineering principles with a deep appreciation for design aesthetics, resulting in digital products that perform flawlessly and leave a lasting impression. I specialize in bridging the gap between design and engineering teams, ensuring conceptual vision translates perfectly into production code.',
  bio: [
    'I started my journey as a self-taught developer fascinated by the intersection of logic and creativity. Early on, I realized that writing code wasn\'t just about making things work; it was about making them feel right.',
    'Over the years, I\'ve led technical teams at top-tier agencies and product companies, architecting solutions that scale to millions of users while maintaining a premium user experience.',
    'My core philosophy centers around "Design Engineering" — the idea that design and development are not sequential phases but parallel disciplines that must inform each other constantly.',
  ],
  education: [
    { degree: 'MSc Computer Science', period: '2016–2018' },
    { degree: 'BSc Software Engineering', period: '2012–2016' },
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
    title: 'Frontend Architecture',
    description:
      'Scalable component systems, state management, and performance optimization for complex web applications.',
  },
  {
    icon: 'Sparkles',
    title: 'Creative Development',
    description:
      'High-fidelity interactions, WebGL experiences, and scroll-driven animations that elevate brand perception.',
  },
  {
    icon: 'Cable',
    title: 'System Integration',
    description:
      'Seamless connection of third-party services, headless CMS setups, and API development.',
  },
  {
    icon: 'Brain',
    title: 'AI Workflows',
    description:
      'Implementing LLMs and automated AI processes into existing products to enhance user capabilities.',
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
    experience: 'Expert • 8+ Years',
    description: 'Core language for all frontend and Node.js backend development.',
  },
  {
    name: 'React & Next.js',
    category: 'Frameworks',
    experience: 'Expert • 6+ Years',
    description: 'Primary frameworks for building scalable user interfaces and SSR apps.',
  },
  {
    name: 'Three.js / WebGL',
    category: '3D & Graphics',
    experience: 'Advanced • 4+ Years',
    description: 'Creating immersive 3D experiences directly in the browser.',
  },
  {
    name: 'GSAP',
    category: 'Animation',
    experience: 'Expert • 5+ Years',
    description: 'Industry standard for complex timeline-based web animations.',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    experience: 'Expert • 4+ Years',
    description: 'Utility-first styling for rapid, consistent UI development.',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    experience: 'Advanced • 6+ Years',
    description: 'Server-side JavaScript for building APIs and backend services.',
  },
  {
    name: 'Framer Motion',
    category: 'Animation',
    experience: 'Advanced • 3+ Years',
    description: 'Declarative animations for React components and page transitions.',
  },
  {
    name: 'PostgreSQL',
    category: 'Database',
    experience: 'Advanced • 5+ Years',
    description: 'Relational database design and optimization for scalable applications.',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    experience: 'Intermediate • 3+ Years',
    description: 'Containerized deployments and consistent development environments.',
  },
  {
    name: 'Figma',
    category: 'Design',
    experience: 'Advanced • 4+ Years',
    description: 'Design-to-code workflow and component specification extraction.',
  },
]

export const expertiseMarquee = [
  'Product-Oriented Thinking',
  'AI-Enhanced Workflow',
  'Modern Development Standards',
  'Attention to Detail',
  'Performance First',
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
    id: 'aura-tech',
    category: 'Fintech Application',
    title: 'Aura Tech',
    description:
      'A high-performance trading platform built with real-time data synchronization and a brutalist dark-mode aesthetic.',
    technologies: ['React', 'WebSockets', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'nexus-protocol',
    category: 'Web3 Protocol',
    title: 'Nexus Protocol',
    description:
      'Decentralized finance dashboard focusing on data visualization and complex state management.',
    technologies: ['Next.js', 'Ethers.js', 'Framer Motion'],
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
    id: 'client-1',
    name: 'Ahmed Hassan',
    role: 'CEO, TechVentures',
    content:
      'Mohamed delivered an exceptional product that exceeded our expectations. His attention to detail and technical expertise transformed our vision into reality.',
  },
  {
    id: 'client-2',
    name: 'Sarah Mitchell',
    role: 'Product Director, DesignLab',
    content:
      'Working with MEDOCODE was a premium experience from start to finish. The quality of the code and the smoothness of every interaction set a new standard for our team.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description:
      'Deep dive into technical requirements, business goals, and architecture constraints.',
    icon: 'Search',
  },
  {
    number: '02',
    title: 'Planning',
    description: 'System design, tech stack selection, and mapping out the data flow.',
    icon: 'ListChecks',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Prototyping component structures and defining the design token system.',
    icon: 'Palette',
  },
  {
    number: '04',
    title: 'Development',
    description:
      'Writing clean, modular code with focus on performance and accessibility.',
    icon: 'Code2',
  },
  {
    number: '05',
    title: 'Optimization',
    description: 'Performance tuning, bundle size reduction, and asset optimization.',
    icon: 'Gauge',
  },
  {
    number: '06',
    title: 'Testing',
    description:
      'Rigorous testing across devices and browsers before seamless deployment.',
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
