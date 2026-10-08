import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Plane,
  Leaf,
  Car,
  Smile,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers,
  Zap,
  ShieldCheck,
  CheckCircle,
  Send,
  ExternalLink,
  Laptop,
  Flame,
  Award
} from 'lucide-react'

const PROJECTS = [
  {
    id: 'aviation',
    title: 'SkyElite Aviation',
    subtitle: 'Private Jet Fleet & Global Charter Experience',
    sector: 'Luxury Aviation',
    path: '/',
    image: '/images/luxury_cabin_suite.jpg',
    tag: 'Live Flagship',
    metrics: '+420% Charter Inquiries • 100vh CloudFront Video Hero',
    tech: ['React 19', 'Fleet Spec Matrix', 'Interactive Charter Booking'],
    color: 'from-sky-500 to-indigo-600',
  },
  {
    id: 'wellness',
    title: 'SOMA Sanctuary',
    subtitle: 'Longevity, Thermal Contrast & Biohacking Sanctuary',
    sector: 'Wellness & Medspa',
    path: '/wellness',
    image: '/images/wellness_spa.jpg',
    tag: 'Live Concept',
    metrics: 'Evidence-Based Hormesis Protocols • Sanctuary Reservation Suite',
    tech: ['Volcanic Spa Aesthetics', 'Biohacking Protocol Engine', 'Tiered Memberships'],
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'autos',
    title: 'Vandenberg Automobili',
    subtitle: '1,450 HP Hybrid Hypercar Telemetry & Atelier',
    sector: 'Bespoke Automotive',
    path: '/autos',
    image: '/images/auto_hypercar.jpg',
    tag: 'Live Concept',
    metrics: 'Active Aerodynamic Modes • Real-Time Chassis Tint Configurator',
    tech: ['Telemetry Cockpit Tour', 'Dynamic Paint Engine', 'Bespoke Allocation Flow'],
    color: 'from-amber-500 to-cyan-500',
  },
  {
    id: 'dental',
    title: 'Elysian Dental Atelier',
    subtitle: 'Cosmetic Dentistry & 3D Smile Architecture',
    sector: 'Luxury Healthcare',
    path: '/dental',
    image: '/images/dental_atelier.jpg',
    tag: 'Live Concept',
    metrics: 'Interactive Smile Transformation Slider • Micro-Thin Ceramic Focus',
    tech: ['Before/After Comparison', 'Virtual Smile Assessment', 'Quiet Luxury Aesthetics'],
    color: 'from-rose-400 to-amber-300',
  },
]

const CAPABILITIES = [
  {
    icon: Zap,
    title: 'Sub-Second Performance',
    desc: 'Engineered with React 19, zero unnecessary dependencies, and lightning asset delivery for instant response on all screens.',
  },
  {
    icon: Layers,
    title: 'Bespoke Micro-Interactions',
    desc: 'Proprietary touch and hover physics (.aero-card, .aero-btn, shimmer sheens) that give brands an unmistakable tactile luxury feel.',
  },
  {
    icon: Cpu,
    title: 'Interactive Product Configurators',
    desc: 'From aircraft class comparators to hypercar aerodynamics and cosmetic smile sliders that convert casual browsers into clients.',
  },
  {
    icon: ShieldCheck,
    title: 'High-Converting Booking Engines',
    desc: 'Custom multi-step reservation flows built to qualify high-net-worth clients and route inquiries straight into CRM pipelines.',
  },
]

export default function AgencyHubPage() {
  const navigate = useNavigate()
  const [formSent, setFormSent] = useState(false)
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    industry: 'Wellness',
    budget: '$20k - $40k',
    timeline: 'Within 30 Days',
    brief: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
    setTimeout(() => setFormSent(false), 4000)
  }

  return (
    <div className="min-h-screen bg-[#070a10] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Agency Hero */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        {/* Ambient Neon Blobs */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase bg-white/5 border border-white/10 text-cyan-300 backdrop-blur-md mb-6 aero-card">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>KINESIS DIGITAL ATELIER • CREATIVE AGENCY PORTFOLIO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05]">
            We Engineer <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-purple-400">
              Flagship Brand Worlds.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            An experiential design studio building ultra-luxury digital platforms for private aviation, longevity wellness, hypercars, and cosmetic medical practices.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#showcase"
              className="aero-btn aero-sheen px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/25 cursor-pointer"
            >
              Explore Brand Portfolio
            </a>
            <a
              href="#contact"
              className="aero-btn px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-widest border border-white/15 backdrop-blur-md cursor-pointer"
            >
              Commission a Project
            </a>
          </div>

          {/* Agency Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-left">
            <div>
              <p className="text-3xl font-extrabold text-cyan-400 font-mono">4</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Flagship Brand Builds</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white font-mono">100%</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Custom Built Codebases</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-emerald-400 font-mono">99/100</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Lighthouse Speed Score</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-purple-400 font-mono">&lt; 0.3s</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Touch & Motion Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Brand Showcase Grid */}
      <section id="showcase" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              FLAGSHIP CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Select an Active Brand Experience
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-md mt-2 md:mt-0">
            Each experience contains complete custom typography, tailored micro-animations, interactive configurators, and dedicated booking funnels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="aero-card group rounded-3xl bg-[#0e1422] border border-white/10 hover:border-cyan-400/50 overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300"
            >
              {/* Project Image Preview */}
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1422] via-transparent to-black/30" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 border border-white/15 backdrop-blur-md text-white">
                  {project.sector}
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 backdrop-blur-md">
                  {project.tag}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">{project.subtitle}</p>

                  <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-gray-300">
                    <span className="font-semibold text-cyan-400">Key Deliverables: </span>
                    {project.metrics}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-mono">
                    Direct Live Experience
                  </span>
                  <Link
                    to={project.path}
                    className="aero-btn aero-sheen inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-gray-950 font-bold text-xs uppercase tracking-wider hover:bg-cyan-400 transition-colors shadow-md"
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

      {/* Agency Technical Capabilities */}
      <section className="py-20 bg-gradient-to-b from-[#0e1422] via-[#070a10] to-[#0e1422] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
              Engineered For Radical Conversion
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              We eliminate template bloat in favor of tailor-crafted code, fluid 60 FPS motion, and high-converting storytelling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAPABILITIES.map((cap, i) => {
              const Icon = cap.icon
              return (
                <div
                  key={i}
                  className="aero-card p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-400/40 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cap.title}</h3>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact / Inquire Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
            COMMISSION YOUR PROJECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
            Let's Build Your Flagship Platform
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Taking on select design & engineering partnerships for Q4 2026 and 2027.
          </p>
        </div>

        <div className="bg-[#0e1422] border border-white/10 rounded-3xl p-8 sm:p-10 aero-card shadow-2xl">
          {formSent ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Project Brief Received</h3>
              <p className="text-sm text-gray-300 max-w-md">
                Our creative technologist will review your brand specifications and return a prototype roadmap within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiry.name}
                    onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                    placeholder="Marcus Sterling"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    placeholder="marcus@holdings.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                    Brand Sector
                  </label>
                  <select
                    value={inquiry.industry}
                    onChange={(e) => setInquiry({ ...inquiry, industry: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Aviation">Private Aviation</option>
                    <option value="Wellness">Wellness & Longevity</option>
                    <option value="Autos">Hypercars & Automotive</option>
                    <option value="Dental">Cosmetic Dental Clinic</option>
                    <option value="RealEstate">Ultra-Luxury Real Estate</option>
                    <option value="Other">Other Bespoke Brand</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                    Estimated Budget
                  </label>
                  <select
                    value={inquiry.budget}
                    onChange={(e) => setInquiry({ ...inquiry, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="$10k - $20k">$10,000 – $20,000</option>
                    <option value="$20k - $40k">$20,000 – $40,000</option>
                    <option value="$40k+">$40,000+ (Full Digital Ecosystem)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                    Timeline
                  </label>
                  <select
                    value={inquiry.timeline}
                    onChange={(e) => setInquiry({ ...inquiry, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400"
                  >
                    <option value="Immediate">Immediate (&lt; 2 Weeks)</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="Next Quarter">Next Quarter</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1">
                  Project Goals & Scope
                </label>
                <textarea
                  rows={3}
                  value={inquiry.brief}
                  onChange={(e) => setInquiry({ ...inquiry, brief: e.target.value })}
                  placeholder="Describe your vision, target audience, and must-have features..."
                  className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="aero-btn aero-sheen px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-cyan-500/25 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Transmit Project Brief
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Agency Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono font-bold text-white text-base tracking-widest">KINESIS ATELIER</span>
          <span className="ml-2 text-cyan-400 font-mono text-[10px]">LONDON • NEW YORK • DUBAI</span>
        </div>
        <p>© 2026 Kinesis Digital Atelier. Engineered for High-Net-Worth Brands.</p>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-white">SkyElite</Link>
          <Link to="/wellness" className="hover:text-white">SOMA</Link>
          <Link to="/autos" className="hover:text-white">Vandenberg</Link>
          <Link to="/dental" className="hover:text-white">Elysian</Link>
        </div>
      </footer>
    </div>
  )
}
