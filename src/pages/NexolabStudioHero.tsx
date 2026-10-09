import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Send, CheckCircle, Menu } from 'lucide-react'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4'

const ACCENT_COLOR = '#5E0ED7'

// Framer Motion Animation Variants
const fadeDown = {
  initial: { opacity: 0, y: -20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const slideUp = {
  initial: { y: '110%' },
  animate: (wordIndex: number) => ({
    y: 0,
    transition: {
      delay: 0.35 + wordIndex * 0.12,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const NAV_LINKS = [
  { name: 'Work', href: '#work' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'About', href: '#about' },
]

const STATS = [
  { number: '10', suffix: '+', label: 'DIGITAL\nPRODUCTS' },
  { number: '100', suffix: '%', label: 'PRODUCTION\nREADY' },
  { number: '04', suffix: '+', label: 'CORE\nDISCIPLINES' },
]

interface NexolabStudioHeroProps {
  onOpenProjectModal?: () => void
}

export default function NexolabStudioHero({ onOpenProjectModal }: NexolabStudioHeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [internalModalOpen, setInternalModalOpen] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'AI Product Development',
    budget: '$25,000 - $50,000',
    brief: '',
  })

  const openModal = () => {
    if (onOpenProjectModal) {
      onOpenProjectModal()
    } else {
      setInternalModalOpen(true)
    }
  }

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
    setTimeout(() => {
      setContactSent(false)
      setInternalModalOpen(false)
    }, 2400)
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-black uppercase font-semibold select-none"
    >
      {/* ---------------- BACKGROUND VIDEO ---------------- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          src={VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle grade overlay to preserve high-contrast crisp black text readability */}
        <div className="absolute inset-0 bg-white/20 backdrop-contrast-[1.04]" />
      </div>

      {/* ---------------- 1. TOP NAVIGATION ---------------- */}
      <header className="relative z-20 w-full flex items-center justify-between px-5 sm:px-8 md:px-12 pt-6 md:pt-8">
        {/* Left: Brand Identity with Circular Logo Dot */}
        <motion.div
          custom={0}
          initial="initial"
          animate="animate"
          variants={fadeDown}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div
            style={{ borderColor: ACCENT_COLOR }}
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-105"
          >
            <div
              style={{ backgroundColor: ACCENT_COLOR }}
              className="w-2.5 h-2.5 rounded-full"
            />
          </div>
          <span className="text-base sm:text-lg font-bold tracking-widest text-black">
            NEXOLAB
          </span>
        </motion.div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {NAV_LINKS.map((link, idx) => (
            <motion.button
              key={link.name}
              custom={idx + 1}
              initial="initial"
              animate="animate"
              variants={fadeDown}
              onClick={() => handleNavClick(link.href)}
              className="text-xs font-semibold tracking-widest text-black hover:opacity-60 transition-opacity uppercase cursor-pointer"
            >
              {link.name}
            </motion.button>
          ))}
        </nav>

        {/* Right: Action CTA & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <motion.button
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeDown}
            onClick={openModal}
            style={{ backgroundColor: ACCENT_COLOR }}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-xs font-semibold tracking-widest hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-500/25 active:scale-95 cursor-pointer uppercase"
          >
            Start a Project
            <ArrowUpRight className="w-3.5 h-3.5" />
          </motion.button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-black/20 text-black hover:bg-black/5 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden relative z-30 mx-4 mt-3 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/10 shadow-2xl flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm font-semibold tracking-widest text-black py-2 border-b border-black/5 hover:text-[#5E0ED7] transition-colors uppercase"
              >
                {link.name}
              </button>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false)
                openModal()
              }}
              style={{ backgroundColor: ACCENT_COLOR }}
              className="w-full py-3 rounded-full text-white text-xs font-semibold tracking-widest flex items-center justify-center gap-2 uppercase mt-2"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- 2. HERO CENTER CONTENT ---------------- */}
      <div className="relative z-10 w-full flex-1 flex flex-col justify-center px-5 sm:px-8 md:px-12 py-12 md:py-16 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          {/* Eyebrow Category Tag */}
          <motion.div
            custom={0}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="inline-flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span
              style={{ backgroundColor: ACCENT_COLOR }}
              className="w-2 h-2 rounded-full inline-block"
            />
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-black/80">
              AI • PRODUCT • ENGINEERING • DESIGN
            </span>
          </motion.div>

          {/* Large Hero Headline */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              custom={0}
              initial="initial"
              animate="animate"
              variants={slideUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[0.95] sm:leading-[0.95]"
            >
              WE BUILD DIGITAL
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-2">
            <motion.h1
              custom={1}
              initial="initial"
              animate="animate"
              variants={slideUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[0.95] sm:leading-[0.95]"
            >
              PRODUCTS THAT MOVE
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6 sm:mb-8">
            <motion.h1
              custom={2}
              initial="initial"
              animate="animate"
              variants={slideUp}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-black leading-[0.95] sm:leading-[0.95]"
            >
              BUSINESSES FORWARD.
            </motion.h1>
          </div>

          {/* Subtitle / Paragraph */}
          <motion.p
            custom={2}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="text-xs sm:text-sm md:text-base font-semibold tracking-wider text-black/90 max-w-2xl leading-relaxed mb-8 sm:mb-10"
          >
            Nexolab designs, develops, and launches AI-powered products, SaaS platforms, web applications, and digital experiences for ambitious businesses and organizations.
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={3}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 sm:gap-6"
          >
            <button
              type="button"
              onClick={openModal}
              style={{ backgroundColor: ACCENT_COLOR }}
              className="px-7 py-3.5 rounded-full text-white text-xs font-semibold tracking-widest flex items-center gap-2 hover:opacity-90 transition-all hover:shadow-xl hover:shadow-purple-600/30 active:scale-95 cursor-pointer uppercase"
            >
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('work')
                el?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-7 py-3.5 rounded-full border border-black/30 bg-white/70 backdrop-blur-md text-black text-xs font-semibold tracking-widest flex items-center gap-2 hover:bg-black hover:text-white transition-all active:scale-95 cursor-pointer uppercase"
            >
              Explore Our Work
              <span className="text-base leading-none">&darr;</span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* ---------------- 3. BOTTOM STATS & SCROLL SECTION ---------------- */}
      <footer className="relative z-10 w-full px-5 sm:px-8 md:px-12 pb-8 sm:pb-10 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6 border-t border-black/10">
        {/* Left: Three Stats */}
        <div className="flex items-center gap-8 sm:gap-14 md:gap-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx}
              initial="initial"
              animate="animate"
              variants={fadeUp}
              className="flex items-baseline gap-2.5 sm:gap-3"
            >
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tighter text-black">
                  {stat.number}
                </span>
                <span
                  style={{ color: ACCENT_COLOR }}
                  className="text-2xl sm:text-3xl font-bold ml-0.5"
                >
                  {stat.suffix}
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-black/75 whitespace-pre-line leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right: Scroll to Explore */}
        <motion.button
          custom={3}
          initial="initial"
          animate="animate"
          variants={fadeUp}
          type="button"
          onClick={() => {
            const el = document.getElementById('mission')
            el?.scrollIntoView({ behavior: 'smooth' })
          }}
          className="self-start md:self-end flex items-center gap-2 text-xs font-semibold tracking-widest text-black/70 hover:text-black transition-colors uppercase cursor-pointer"
        >
          <span>Scroll to explore</span>
          <span className="inline-block animate-bounce">&darr;</span>
        </motion.button>
      </footer>

      {/* ---------------- PROJECT INQUIRY MODAL ---------------- */}
      <AnimatePresence>
        {internalModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-2xl text-black"
            >
              <button
                type="button"
                onClick={() => setInternalModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-black/10 hover:bg-black/5 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {contactSent ? (
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
                <form onSubmit={handleContactSubmit} className="space-y-4">
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
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
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
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
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
                        value={contactForm.projectType}
                        onChange={(e) => setContactForm({ ...contactForm, projectType: e.target.value })}
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
                        value={contactForm.budget}
                        onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
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
                      value={contactForm.brief}
                      onChange={(e) => setContactForm({ ...contactForm, brief: e.target.value })}
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
