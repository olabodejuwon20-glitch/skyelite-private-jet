import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  Sparkles,
  Layers,
  Zap,
  Cpu,
  Shield,
  Code2,
  Terminal,
  Database,
  Globe,
  Rocket,
  CheckCircle,
  X,
  Send,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Sliders,
  Check,
  Compass,
  Lightbulb,
  Workflow,
  Search,
  Eye,
  Activity
} from 'lucide-react'
import NexolabStudioHero from './NexolabStudioHero'

const ACCENT_COLOR = '#5E0ED7'

// Featured 4 Primary Projects
const FEATURED_PROJECTS = [
  {
    id: 'co-research',
    number: '01',
    title: 'Co-Research AI',
    tags: 'AI • EDTECH • SAAS',
    description:
      'An AI-assisted research workflow that helps students transform topics, academic requirements, and lecturer instructions into structured academic work.',
    accentColor: '#5E0ED7',
    previewBadge: 'AI Workflow Engine',
    details: {
      challenge:
        'Graduate students and academic researchers struggle to synthesize vast literature bases while strictly conforming to institutional grading rubrics and methodology requirements.',
      solution:
        'Nexolab built a multi-stage LLM pipeline that deconstructs syllabi, matches verified citation sources, and produces citation-validated draft outlines in seconds.',
      features: [
        'Automated syllabus and grading rubric decomposition',
        'Direct integration with citation indices and academic repositories',
        'Interactive outline generator with peer-review tone calibration',
        'Plagiarism prevention and methodology guardrails',
      ],
      stack: ['React', 'Next.js', 'OpenAI', 'TypeScript', 'Supabase', 'Python FastApi'],
      impact: 'Reduced preliminary academic research preparation time by 68% for initial cohort.',
    },
  },
  {
    id: 'legacy-skool',
    number: '02',
    title: 'LegacySkool',
    tags: 'EDTECH • SAAS • SCHOOL MANAGEMENT',
    description:
      'A centralized school management platform connecting administrators, teachers, students, and parents through one integrated system.',
    accentColor: '#2563EB',
    previewBadge: 'Unified SIS Platform',
    details: {
      challenge:
        'K-12 schools routinely suffer from fragmented software silos — separate systems for fee billing, student grading, parent communication, and attendance tracking.',
      solution:
        'Engineered an all-in-one institutional portal with fine-grained role-based access control, real-time push notifications, and automated academic transcript generation.',
      features: [
        'Role-segmented dashboards for Admin, Faculty, Student, and Guardian',
        'Real-time automated tuition invoicing and payment gateway reconciliation',
        'Live digital gradebook with continuous progress alerts',
        'Integrated student wellness and attendance monitoring',
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Vercel', 'REST APIs'],
      impact: 'Adopted across private academies handling 15,000+ active student records with zero latency spikes.',
    },
  },
  {
    id: 'estaty',
    number: '03',
    title: 'Estaty',
    tags: 'REAL ESTATE • MARKETPLACE • DIGITAL PLATFORM',
    description:
      'A luxury real-estate platform designed around curated property discovery, premium listings, and a global real-estate experience.',
    accentColor: '#059669',
    previewBadge: 'Luxury Marketplace',
    details: {
      challenge:
        'High-net-worth real estate buyers demand immersive architectural exploration, frictionless currency conversion, and verified broker credentials without clutter.',
      solution:
        'Crafted a high-framerate media platform featuring 4K architectural walkthroughs, map-based polygon searches, and private escrow inquiry channels.',
      features: [
        'Ultra-high-definition architectural photography and video carousels',
        'Spatial polygon search with neighborhood demographic layers',
        'Private broker chat and confidential verification protocols',
        'Multi-currency automated mortgage and yield calculations',
      ],
      stack: ['Next.js', 'React', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Mapbox GL'],
      impact: 'Facilitated over $42M in luxury residential inquiries across premier European and coastal markets.',
    },
  },
  {
    id: 'lumen',
    number: '04',
    title: 'Lumen',
    tags: 'AI • SAAS • MARKETING',
    description:
      'A content studio that helps brands and marketers create, improve, plan, and organize social media content with AI-assisted workflows.',
    accentColor: '#D97706',
    previewBadge: 'AI Studio Suite',
    details: {
      challenge:
        'Brand marketing teams waste hundreds of hours generating variations of copy, resizing assets, and maintaining tonal consistency across diverse social channels.',
      solution:
        'Developed an intelligent content command center featuring brand-voice memory, visual template generation, and multi-platform scheduling in one unified canvas.',
      features: [
        'Adaptive Brand Voice training engine based on company documentation',
        'Multi-variant caption generation with viral hook scoring',
        'Cross-platform calendar scheduling and drag-and-drop timeline',
        'Integrated analytics feedback loop that learns high-engagement formats',
      ],
      stack: ['React', 'Claude API', 'OpenAI', 'TypeScript', 'Node.js', 'Tailwind CSS'],
      impact: 'Accelerated marketing team content output by 4.2x while preserving strict brand guideline compliance.',
    },
  },
]

// Product Collection (05 - 10)
const PRODUCT_COLLECTION = [
  {
    number: '05',
    title: 'ProfitPulse',
    tags: 'SAAS • E-COMMERCE • ANALYTICS',
    description:
      'Real-time profit tracking, inventory margins, and customer lifetime value analytics engine for high-volume modern merchants.',
    tech: 'React • Node.js • PostgreSQL',
  },
  {
    number: '06',
    title: 'CryptoHub',
    tags: 'FINTECH • CRYPTO • WEB APPLICATION',
    description:
      'Institutional-grade portfolio analytics, decentralized asset monitoring, and cross-chain transaction visualization.',
    tech: 'Next.js • TypeScript • Web3 APIs',
  },
  {
    number: '07',
    title: 'StudyMind AI',
    tags: 'AI • EDTECH',
    description:
      'Adaptive learning companion synthesizing complex lecture curricula into interactive quizzes and active-recall mindmaps.',
    tech: 'OpenAI • Supabase • React',
  },
  {
    number: '08',
    title: 'QuoteWave',
    tags: 'SAAS • BUSINESS AUTOMATION',
    description:
      'Instant quote generator and automated proposal pipeline helping B2B service firms accelerate deal closing by 4x.',
    tech: 'TypeScript • Supabase • REST APIs',
  },
  {
    number: '09',
    title: 'NAYA',
    tags: 'CREATIVE • CREATOR ECONOMY • DIGITAL EXPERIENCE',
    description:
      "A premium digital experience showcasing a UGC creator's work, services, and brand collaborations in the beauty and wellness space.",
    tech: 'React • Framer Motion • Tailwind CSS',
  },
  {
    number: '10',
    title: 'StitchHub',
    tags: 'FASHION • MARKETPLACE • E-COMMERCE',
    description:
      'A marketplace platform that connects fashion designers with buyers through designer discovery, product presentation, and a curated commerce experience.',
    tech: 'Next.js • PostgreSQL • Stripe Connect',
  },
]

// What We Build (Services)
const SERVICES = [
  {
    number: '01',
    title: 'AI Product Development',
    description: 'AI-powered applications, intelligent workflows, AI assistants, and AI integrations.',
    icon: Sparkles,
  },
  {
    number: '02',
    title: 'SaaS & Web Applications',
    description: 'Modern platforms, dashboards, business software, and subscription products.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'MVP Development',
    description: 'Turn concepts into functional products that can be tested and launched.',
    icon: Rocket,
  },
  {
    number: '04',
    title: 'UI/UX Design',
    description: 'Interfaces designed around users, clarity, usability, and business objectives.',
    icon: Sliders,
  },
  {
    number: '05',
    title: 'Business Automation',
    description: 'Replace repetitive processes with intelligent digital workflows.',
    icon: Workflow,
  },
  {
    number: '06',
    title: 'Custom Digital Platforms',
    description: 'Purpose-built systems designed around specific business and organizational needs.',
    icon: Cpu,
  },
]

// Technology Stack
const TECH_STACK = [
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Supabase', category: 'Backend / DB' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Flutter', category: 'Mobile' },
  { name: 'OpenAI', category: 'AI Intelligence' },
  { name: 'Claude', category: 'AI Intelligence' },
  { name: 'Lovable', category: 'Prototyping' },
  { name: 'Vercel', category: 'Deployment' },
  { name: 'REST APIs', category: 'Integration' },
]

// Process Steps
const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand the business, users, problem, and opportunity.',
  },
  {
    number: '02',
    title: 'Strategize',
    description: 'Define the product requirements, roadmap, and technical direction.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create the experience, interface, and visual system.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop, integrate, test, and refine.',
  },
  {
    number: '05',
    title: 'Launch',
    description: 'Deploy and prepare the product for real users.',
  },
  {
    number: '06',
    title: 'Grow',
    description: 'Iterate based on feedback, data, and new opportunities.',
  },
]

// Four Guiding Principles
const PRINCIPLES = [
  {
    number: '01',
    title: 'Product-First',
    description: 'We focus on the problem, the user, and the outcome — not just the technology.',
  },
  {
    number: '02',
    title: 'AI-Native',
    description: 'We use modern AI development workflows to accelerate product creation and iteration.',
  },
  {
    number: '03',
    title: 'Design + Engineering',
    description: 'Great products need both thoughtful user experiences and strong technical foundations.',
  },
  {
    number: '04',
    title: 'Built for Real Use',
    description: 'We create products intended to be launched, tested, used, and continuously improved.',
  },
]

export default function NexolabHomePage() {
  const [activeModalProject, setActiveModalProject] = useState<typeof FEATURED_PROJECTS[0] | null>(null)
  const [isProjectFormOpen, setIsProjectFormOpen] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'AI Product Development',
    budget: '$25,000 - $50,000',
    brief: '',
  })

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => {
      setFormSent(false)
      setIsProjectFormOpen(false)
    }, 2500)
  }

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-white text-black font-sans selection:bg-[#5E0ED7] selection:text-white"
    >
      {/* ---------------- 1. HERO SECTION ---------------- */}
      <NexolabStudioHero onOpenProjectModal={() => setIsProjectFormOpen(true)} />

      {/* ---------------- 2. MISSION / SUB-HERO STATEMENT ---------------- */}
      <section id="mission" className="py-20 sm:py-28 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-b border-black/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase block mb-3"
            >
              FROM FIRST IDEA TO PRODUCTION-READY PRODUCT.
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight uppercase leading-tight text-black">
              Strategy, design, and engineering under one team.
            </h2>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center pt-2">
            <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-black/80 leading-relaxed">
              Strategy, product design, engineering, AI integration, deployment, and continuous improvement — brought together under one product-focused team.
            </p>
            <div className="mt-8 pt-8 border-t border-black/10 flex flex-wrap items-center gap-6 text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-black/60">
              <span className="flex items-center gap-2 text-black">
                <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" /> Zero Vendor Fragmentation
              </span>
              <span className="flex items-center gap-2 text-black">
                <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" /> Rapid Time-to-Market
              </span>
              <span className="flex items-center gap-2 text-black">
                <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" /> High-Performance Stacks
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 3. SELECTED WORK (Primary 4 Showcase) ---------------- */}
      <section id="work" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
                SELECTED WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight uppercase text-black">
              Real products. Real interfaces. Real problems solved.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/60 max-w-sm mt-4 md:mt-0">
            A collection of digital products, AI platforms, SaaS applications, and digital experiences we&apos;ve designed and built.
          </p>
        </div>

        {/* 4 Primary Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group border border-black/10 rounded-3xl p-6 sm:p-8 bg-neutral-50/70 hover:bg-neutral-50 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/10">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl sm:text-3xl font-bold tracking-tighter text-black">
                      {project.number}
                    </span>
                    <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60">
                      {project.tags}
                    </span>
                  </div>
                  <span
                    style={{ backgroundColor: `${ACCENT_COLOR}15`, color: ACCENT_COLOR }}
                    className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase"
                  >
                    {project.previewBadge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight uppercase text-black mb-3">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/75 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#5E0ED7] hover:opacity-80 transition-opacity cursor-pointer group-hover:translate-x-1 duration-200"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="flex gap-1.5">
                  {project.details.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-black/5 text-black/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 4. PRODUCT COLLECTION (05 - 10) ---------------- */}
      <section id="collection" className="py-20 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-xs font-semibold tracking-widest uppercase block mb-2"
            >
              PRODUCT COLLECTION
            </span>
            <h3 className="text-2xl sm:text-4xl font-semibold tracking-tight uppercase text-black">
              Platforms, Tools &amp; Web Applications
            </h3>
          </div>
          <span className="text-xs font-semibold tracking-widest uppercase text-black/60 mt-2 md:mt-0">
            6 Specialized Deployments
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_COLLECTION.map((item) => (
            <div
              key={item.number}
              className="border border-black/10 rounded-2xl p-6 bg-white hover:border-[#5E0ED7] hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-bold tracking-tighter text-black">
                    {item.number}
                  </span>
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50">
                    {item.tags}
                  </span>
                </div>
                <h4 className="text-xl font-semibold tracking-tight uppercase text-black mb-2">
                  {item.title}
                </h4>
                <p className="text-xs font-semibold tracking-wide uppercase text-black/70 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-black/50">
                <span>{item.tech}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E0ED7]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 5. WHAT WE BUILD (Services) ---------------- */}
      <section id="services" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
                WHAT WE BUILD
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase text-black">
              Capabilities that cover the full product lifecycle.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/60 max-w-xs mt-4 md:mt-0">
            From initial strategy to scalable cloud infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((srv) => {
            const Icon = srv.icon
            return (
              <div
                key={srv.number}
                className="group border border-black/10 rounded-2xl p-6 sm:p-8 bg-neutral-50/50 hover:bg-neutral-50 hover:border-black transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold tracking-tighter text-black">
                      {srv.number}
                    </span>
                    <div
                      style={{ backgroundColor: `${ACCENT_COLOR}10`, color: ACCENT_COLOR }}
                      className="p-2.5 rounded-full"
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight uppercase text-black mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/70 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-black/50">
                    Full Execution
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#5E0ED7] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ---------------- 6. TECHNOLOGY ---------------- */}
      <section id="technology" className="py-20 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="max-w-3xl mb-12">
          <span
            style={{ color: ACCENT_COLOR }}
            className="text-xs font-semibold tracking-widest uppercase block mb-2"
          >
            TECHNOLOGY
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase text-black mb-4">
            Built with modern technology.
          </h2>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-black/75 leading-relaxed">
            We work with a modern technology stack chosen for each product&apos;s specific needs — not a one-size-fits-all toolkit. These are capabilities, not a logo wall.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              className="border border-black/10 rounded-2xl p-4 bg-white hover:border-[#5E0ED7] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
                <span className="text-[9px] font-semibold tracking-widest uppercase text-black/40">
                  {tech.category}
                </span>
              </div>
              <span className="text-sm font-semibold tracking-wide uppercase text-black">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 7. PROCESS ---------------- */}
      <section id="process" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
                PROCESS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase text-black">
              From idea to impact.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/60 max-w-xs mt-4 md:mt-0">
            A battle-tested 6-stage engineering and design loop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="border border-black/10 rounded-2xl p-6 sm:p-8 bg-neutral-50/40 hover:bg-neutral-50 hover:border-black transition-all"
            >
              <span className="text-2xl font-bold tracking-tighter text-[#5E0ED7] block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight uppercase text-black mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/70 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- 8. WHY NEXOLAB (Four Principles) ---------------- */}
      <section id="principles" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-black/10 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
                WHY NEXOLAB
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase text-black">
              Four principles that guide every product.
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-black/60 max-w-xs mt-4 md:mt-0">
            The foundation of our architectural craft.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {PRINCIPLES.map((pr) => (
            <div
              key={pr.number}
              className="border border-black/10 rounded-2xl p-6 sm:p-8 bg-white hover:border-black transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-lg font-bold tracking-tighter text-[#5E0ED7] block mb-3">
                  {pr.number}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold tracking-tight uppercase text-black mb-3">
                  {pr.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/70 leading-relaxed">
                  {pr.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Metric Banner */}
        <div className="rounded-3xl border border-black/10 bg-neutral-50 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 w-full">
            <div>
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-black block">
                10
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60 mt-1 block">
                Digital Products
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-black block">
                Multiple
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60 mt-1 block">
                Industries
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-black block">
                AI + SaaS
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60 mt-1 block">
                Web + Marketplaces
              </span>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-bold tracking-tighter text-[#5E0ED7] block">
                100%
              </span>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60 mt-1 block">
                Real Products, Not Concept Shots
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- 9. ABOUT ---------------- */}
      <section id="about" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="max-w-4xl mb-16">
          <span
            style={{ color: ACCENT_COLOR }}
            className="text-xs font-semibold tracking-widest uppercase block mb-2"
          >
            ABOUT
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight uppercase text-black mb-6 leading-tight">
            We turn ambitious ideas into useful technology.
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-wider uppercase text-black/80 leading-relaxed">
            Nexolab is a digital product and AI development agency focused on creating modern software, intelligent products, and digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-black/10 rounded-2xl p-6 sm:p-8 bg-neutral-50/60">
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-[11px] font-semibold tracking-widest uppercase block mb-3"
            >
              POSITIONING
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/75 leading-relaxed">
              A product-focused team that takes ideas from concept to production-ready software. We don&apos;t just design interfaces — we build working products.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 sm:p-8 bg-neutral-50/60">
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-[11px] font-semibold tracking-widest uppercase block mb-3"
            >
              CAPABILITIES
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/75 leading-relaxed">
              Product strategy, UI/UX design, full-stack engineering, AI integration, and deployment. One team covering the entire product lifecycle.
            </p>
          </div>

          <div className="border border-black/10 rounded-2xl p-6 sm:p-8 bg-neutral-50/60">
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-[11px] font-semibold tracking-widest uppercase block mb-3"
            >
              PHILOSOPHY
            </span>
            <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/75 leading-relaxed">
              Technology serves the product, not the other way around. We choose tools based on what each project needs, not what&apos;s trending.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- 10. LET'S BUILD / CONTACT ---------------- */}
      <section id="contact" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto border-t border-black/10">
        <div className="rounded-3xl border border-black/10 bg-white p-8 sm:p-12 md:p-16 shadow-xl">
          <div className="max-w-2xl mb-10">
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-xs font-semibold tracking-widest uppercase block mb-2"
            >
              LET&apos;S BUILD
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight uppercase text-black mb-4">
              Have something worth building?
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase text-black/75 leading-relaxed">
              Tell us what you&apos;re working on. We&apos;ll help turn the idea into a clear, practical digital product.
            </p>
          </div>

          {formSent ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div
                style={{ backgroundColor: `${ACCENT_COLOR}15`, color: ACCENT_COLOR }}
                className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              >
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight uppercase text-black">
                Project Brief Sent
              </h3>
              <p className="text-xs font-semibold tracking-wider text-black/70 mt-2 max-w-md uppercase">
                Thank you. A Nexolab lead architect will review your project parameters and respond with a preliminary execution timeline.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 max-w-3xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ALEX RIVERS"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ALEX@COMPANY.COM"
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                  >
                    <option value="AI Product Development">AI Product Development</option>
                    <option value="SaaS & Web Applications">SaaS & Web Applications</option>
                    <option value="MVP Development">MVP Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Business Automation">Business Automation</option>
                    <option value="Custom Digital Platform">Custom Digital Platform</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                  >
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                    <option value="$100,000+">$100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                  Project Brief
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.brief}
                  onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                  placeholder="WHAT ARE YOU LOOKING TO BUILD? INCLUDE CORE VALUE PROPOSITION AND DESIRED TIMELINE..."
                  className="w-full px-4 py-3 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7] resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="submit"
                  style={{ backgroundColor: ACCENT_COLOR }}
                  className="px-8 py-4 rounded-full text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 transition-all hover:shadow-xl hover:shadow-purple-600/30 active:scale-95 cursor-pointer"
                >
                  Start a Project
                  <Send className="w-4 h-4" />
                </button>

                <a
                  href="mailto:build@nexolab.studio"
                  className="px-8 py-4 rounded-full border border-black/20 text-black text-xs font-semibold tracking-widest uppercase hover:bg-black hover:text-white transition-all cursor-pointer"
                >
                  Contact Us Directly
                </a>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ---------------- 11. FOOTER ---------------- */}
      <footer className="border-t border-black/10 py-16 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div
                style={{ borderColor: ACCENT_COLOR }}
                className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
              >
                <div
                  style={{ backgroundColor: ACCENT_COLOR }}
                  className="w-2.5 h-2.5 rounded-full"
                />
              </div>
              <span className="text-xl font-bold tracking-widest text-black">
                NEXOLAB
              </span>
            </div>
            <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-black/70 max-w-sm mb-4">
              We build digital products that move businesses forward.
            </p>
            <span
              style={{ color: ACCENT_COLOR }}
              className="text-[11px] font-semibold tracking-widest uppercase block"
            >
              DIGITAL PRODUCTS • AI • ENGINEERING
            </span>
          </div>

          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/40 block mb-4">
                NAVIGATION
              </span>
              <ul className="space-y-2.5 text-xs font-semibold tracking-widest uppercase">
                <li>
                  <a href="#work" className="hover:text-[#5E0ED7] transition-colors">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-[#5E0ED7] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#process" className="hover:text-[#5E0ED7] transition-colors">
                    Process
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-[#5E0ED7] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#5E0ED7] transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/40 block mb-4">
                CONNECT
              </span>
              <ul className="space-y-2.5 text-xs font-semibold tracking-widest uppercase">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5E0ED7] transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5E0ED7] transition-colors"
                  >
                    X
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5E0ED7] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#5E0ED7] transition-colors"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-widest uppercase text-black/40 block mb-3">
                LET&apos;S TALK
              </span>
              <p className="text-xs font-semibold tracking-wider uppercase text-black/75 mb-3">
                Ready to engineer your next flagship product?
              </p>
              <button
                type="button"
                onClick={() => setIsProjectFormOpen(true)}
                style={{ backgroundColor: ACCENT_COLOR }}
                className="w-full py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-all cursor-pointer"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-semibold tracking-widest uppercase text-black/50">
          <span>&copy; 2026 Nexolab. All rights reserved.</span>
          <div className="flex gap-6">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </footer>

      {/* ---------------- CASE STUDY MODAL ---------------- */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="absolute top-5 right-5 p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold tracking-tighter text-[#5E0ED7]">
                    {activeModalProject.number}
                  </span>
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-black/60">
                    {activeModalProject.tags}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight uppercase text-black">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/75 mt-2 leading-relaxed">
                  {activeModalProject.description}
                </p>
              </div>

              <div className="space-y-6 border-t border-black/10 pt-6">
                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7] mb-2">
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/80 leading-relaxed">
                    {activeModalProject.details.challenge}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7] mb-2">
                    Our Solution &amp; Architecture
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black/80 leading-relaxed">
                    {activeModalProject.details.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-black/60 mb-2">
                    Key Features Delivered
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.details.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-start gap-2 text-xs font-semibold tracking-wider uppercase text-black/80"
                      >
                        <Check className="w-4 h-4 text-[#5E0ED7] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 border border-black/10">
                  <h4 className="text-[11px] font-semibold tracking-widest uppercase text-black/50 mb-1">
                    Impact Metric
                  </h4>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-black">
                    {activeModalProject.details.impact}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-widest uppercase text-black/60 mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.details.stack.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-black/5 text-black border border-black/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => {
                    setActiveModalProject(null)
                    setIsProjectFormOpen(true)
                  }}
                  style={{ backgroundColor: ACCENT_COLOR }}
                  className="px-6 py-3 rounded-full text-white text-xs font-semibold tracking-widest uppercase flex items-center gap-2 hover:opacity-90 cursor-pointer"
                >
                  Build a Similar Product
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="text-xs font-semibold tracking-widest uppercase text-black/60 hover:text-black cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ---------------- GLOBAL START A PROJECT MODAL ---------------- */}
      <AnimatePresence>
        {isProjectFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-2xl text-black"
            >
              <button
                type="button"
                onClick={() => setIsProjectFormOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {formSent ? (
                <div className="py-12 flex flex-col items-center text-center">
                  <div
                    style={{ backgroundColor: `${ACCENT_COLOR}15`, color: ACCENT_COLOR }}
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  >
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight uppercase">
                    Inquiry Received
                  </h3>
                  <p className="text-xs font-semibold tracking-wider text-black/70 mt-2 max-w-sm uppercase">
                    Our engineering and product team will review your brief and schedule an architectural roadmap session within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="mb-2">
                    <span
                      style={{ color: ACCENT_COLOR }}
                      className="text-[11px] font-semibold tracking-widest uppercase block mb-1"
                    >
                      LET&apos;S BUILD
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase">
                      Start a Project
                    </h3>
                    <p className="text-xs font-semibold tracking-wider text-black/60 uppercase mt-1">
                      Tell us what you&apos;re working on. We&apos;ll help turn the idea into a clear, practical digital product.
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="ALEX RIVERS"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ALEX@COMPANY.COM"
                      className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                        Discipline / Scope
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                      >
                        <option value="AI Product Development">AI Product Development</option>
                        <option value="SaaS & Web Applications">SaaS & Web Applications</option>
                        <option value="MVP Development">MVP Development</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Business Automation">Business Automation</option>
                        <option value="Custom Digital Platform">Custom Digital Platform</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7]"
                      >
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-black/70 mb-1">
                      Project Goals &amp; Overview
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.brief}
                      onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      placeholder="DESCRIBE YOUR PRODUCT CONCEPT, CORE USERS, AND LAUNCH TIMELINE..."
                      className="w-full px-4 py-2.5 rounded-xl border border-black/15 bg-neutral-50 text-xs font-semibold uppercase tracking-wider focus:outline-none focus:border-[#5E0ED7] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    style={{ backgroundColor: ACCENT_COLOR }}
                    className="w-full py-3.5 rounded-full text-white text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 cursor-pointer mt-2"
                  >
                    Submit Project Brief
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
