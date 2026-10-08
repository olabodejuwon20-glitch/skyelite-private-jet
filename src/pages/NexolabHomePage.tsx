import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Plane,
  Leaf,
  Car,
  Smile,
  Shield,
  Layers,
  Zap,
  Cpu,
  Star
} from 'lucide-react'
import NexolabStudioHero from './NexolabStudioHero'

const STUDIOS = [
  {
    id: 'wellness',
    name: 'SOMA SANCTUARY',
    sector: 'Longevity & Biohacking',
    desc: 'Volcanic thermal contrast suites, clinical hyperbaric chambers, and mitochondrial optimization.',
    image: '/images/wellness_spa.jpg',
    path: '/wellness',
    tag: 'Live Experience',
  },
  {
    id: 'autos',
    name: 'VANDENBERG AUTOMOBILI',
    sector: '1,450 HP Hybrid Hypercar',
    desc: 'Interactive carbon finish configurator, 3-tier active aerodynamics telemetry, and cockpit tour.',
    image: '/images/auto_hypercar.jpg',
    path: '/autos',
    tag: 'Live Experience',
  },
  {
    id: 'dental',
    name: 'ELYSIAN ATELIER',
    sector: 'Cosmetic Dentistry & Veneers',
    desc: 'Interactive Before & After smile transformation slider, Swiss ceramic laboratory, and twilight sleep spa.',
    image: '/images/dental_atelier.jpg',
    path: '/dental',
    tag: 'Live Experience',
  },
  {
    id: 'aviation',
    name: 'SKYELITE AVIATION',
    sector: 'Private Jet Fleet & Charter',
    desc: '100vh CloudFront video hero, 6-aircraft fleet explorer, and real-time charter booking engine.',
    image: '/images/luxury_cabin_suite.jpg',
    path: '/aviation',
    tag: 'Live Experience',
  },
]

const EXPERTISE_AREAS = [
  {
    icon: Zap,
    title: 'High-Velocity Architecture',
    desc: 'Engineered with React 19, zero unnecessary scripts, and instant 60 FPS motion fidelity.',
  },
  {
    icon: Layers,
    title: 'Interactive 3D & Micro-Motion',
    desc: 'Bespoke product configurators, comparison sliders, and tactile hover physics that drive customer engagement.',
  },
  {
    icon: Cpu,
    title: 'Conversion-Engineered Funnels',
    desc: 'Custom multi-step booking, qualification, and reservation funnels tailored for luxury and high-ticket brands.',
  },
  {
    icon: Shield,
    title: 'Brand World Building',
    desc: 'From cinematic video heroes to bespoke typography systems and photorealistic art direction.',
  },
]

const REVIEWS = [
  {
    quote: "Nexolab transformed our digital presence into a living, breathing luxury flagship. Inquiries tripled within weeks of launch.",
    author: "Elena Rostova",
    role: "Founder, SOMA Sanctuary Zürich",
    brand: "Wellness & Longevity",
  },
  {
    quote: "The interactive hypercar configurator feels like a video game engine running in the browser. Pure perfection.",
    author: "Gianluca Moretti",
    role: "Managing Director, Vandenberg Automobili",
    brand: "Automotive Atelier",
  },
  {
    quote: "Patients are stunned by the Before/After interactive slider. It removed all anxiety and set a new standard in cosmetic dentistry.",
    author: "Dr. Marcus Vance",
    role: "Chief Clinical Director, Elysian Atelier",
    brand: "Cosmetic Healthcare",
  },
]

export default function NexolabHomePage() {
  return (
    <div className="bg-white text-black font-sans selection:bg-[#5E0ED7] selection:text-white">
      {/* 1. HERO SECTION (EXACT SPECIFICATIONS) */}
      <NexolabStudioHero />

      {/* 2. STUDIOS SECTION (#studios) */}
      <section id="studios-section" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-neutral-200 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
              <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
                NEXOLAB STUDIOS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight uppercase">
              Crafted Brand Worlds
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-500 max-w-sm mt-4 md:mt-0">
            Explore active digital platforms designed and engineered by Nexolab Studio across luxury sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {STUDIOS.map((studio) => (
            <div
              key={studio.id}
              className="group border border-neutral-200 rounded-3xl overflow-hidden bg-neutral-50 hover:border-black transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
            >
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img
                  src={studio.image}
                  alt={studio.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-white/90 backdrop-blur-md text-black">
                  {studio.sector}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-[#5E0ED7] text-white">
                  {studio.tag}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase text-black">
                    {studio.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-neutral-600 mt-2 leading-relaxed">
                    {studio.desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-200 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400">
                    Full Platform
                  </span>
                  <Link
                    to={studio.path}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-black hover:bg-[#5E0ED7] text-white text-xs font-semibold tracking-widest uppercase transition-colors"
                  >
                    Launch Experience
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STORY SECTION (#story) */}
      <section id="story" className="py-24 bg-neutral-900 text-white px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#a76aff]">
              THE NEXOLAB STORY
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold tracking-tight uppercase mt-3 leading-tight">
              Fearless Vision. <br />
              Radical Execution.
            </h2>
            <p className="text-sm sm:text-base font-semibold tracking-wider uppercase text-neutral-300 mt-6 leading-relaxed">
              We founded Nexolab Studio on a singular conviction: luxury and high-growth brands deserve digital experiences that command attention. We reject generic templates, slow frameworks, and cookie-cutter layouts. Every platform we release is a custom-coded masterwork built to inspire devotion.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-neutral-800">
            <div>
              <p className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">01</p>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-[#a76aff] mt-2">
                Bold Creative Direction
              </h4>
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mt-2 leading-relaxed">
                Cinema-grade video backdrops, meticulous spatial typography, and high-impact art direction.
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">02</p>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-[#a76aff] mt-2">
                Tactile Physics & Motion
              </h4>
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mt-2 leading-relaxed">
                Zero-lag Framer Motion animations and custom hover dynamics that delight every touch.
              </p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">03</p>
              <h4 className="text-sm font-semibold tracking-widest uppercase text-[#a76aff] mt-2">
                Conversion Mastery
              </h4>
              <p className="text-xs font-semibold tracking-wide uppercase text-neutral-400 mt-2 leading-relaxed">
                Engineered booking funnels, tiered memberships, and interactive tools that drive revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EXPERTISE SECTION (#expertise) */}
      <section id="expertise" className="py-24 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
            OUR CORE EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase mt-2">
            Engineered For Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {EXPERTISE_AREAS.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl border border-neutral-200 bg-neutral-50 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-[#5E0ED7] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold tracking-wider uppercase text-black">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold tracking-wide uppercase text-neutral-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 5. FEEDBACK SECTION (#feedback) */}
      <section id="feedback" className="py-24 bg-neutral-100 px-5 sm:px-8 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#5E0ED7]">
              CLIENT FEEDBACK
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight uppercase mt-2">
              What Founders Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-neutral-200 shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#5E0ED7]">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star key={starIdx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-semibold tracking-wide uppercase text-black leading-relaxed">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <p className="text-xs font-semibold tracking-widest uppercase text-black">
                    {review.author}
                  </p>
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-neutral-500 mt-0.5">
                    {review.role}
                  </p>
                  <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-purple-50 text-[#5E0ED7]">
                    {review.brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="border-t border-neutral-200 py-12 px-5 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-semibold tracking-widest uppercase text-neutral-500">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#5E0ED7]" />
          </div>
          <span className="text-black font-semibold">NEXOLAB STUDIO</span>
        </div>
        <p>© 2026 NEXOLAB STUDIO. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-4">
          <Link to="/wellness" className="hover:text-black">WELLNESS</Link>
          <Link to="/autos" className="hover:text-black">AUTOS</Link>
          <Link to="/dental" className="hover:text-black">DENTAL</Link>
          <Link to="/aviation" className="hover:text-black">AVIATION</Link>
        </div>
      </footer>
    </div>
  )
}
