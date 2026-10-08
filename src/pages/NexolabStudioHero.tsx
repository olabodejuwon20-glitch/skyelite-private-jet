import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, X, Send, CheckCircle } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

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
      delay: index * 0.1,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const fadeUp = {
  initial: { opacity: 0, y: 32 },
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
      delay: 0.4 + wordIndex * 0.14,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

const NAV_LINKS = [
  { name: 'Story', href: '#story' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Studios', href: '#studios' },
  { name: 'Feedback', href: '#feedback' },
]

const STATS = [
  { number: '300', label: 'CRAFTED\nBRANDS' },
  { number: '200', label: 'DIGITAL\nPRODUCTS' },
  { number: '100', label: 'VENTURES\nFUNDED' },
]

const HEADING_WORDS = ['Fearless', 'Vision', 'Delivered']

export default function NexolabStudioHero() {
  const navigate = useNavigate()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [contactSent, setContactSent] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    brand: 'Wellness Brand',
    budget: '$25,000+',
    brief: '',
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactSent(true)
    setTimeout(() => {
      setContactSent(false)
      setContactModalOpen(false)
    }, 2400)
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    if (href === '#studios') {
      const el = document.getElementById('studios-section')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
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
        {/* Subtle high-key transparent grade to maintain pristine black typography contrast */}
        <div className="absolute inset-0 bg-white/15 backdrop-contrast-[1.05]" />
      </div>

      {/* ---------------- 1. NAVIGATION BAR ---------------- */}
      <header className="relative z-20 w-full flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6">
        {/* Left: Circular Logo (32px round div, 2px border #5E0ED7, 10px solid circle #5E0ED7) */}
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
          <span className="hidden sm:inline text-xs font-semibold tracking-widest text-black">
            NEXOLAB STUDIO
          </span>
        </motion.div>

        {/* Center: 4 Nav links (hidden on mobile, visible md+) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {NAV_LINKS.map((link, idx) => (
            <motion.a
              key={link.name}
              href={link.href}
              custom={idx + 1}
              initial="initial"
              animate="animate"
              variants={fadeDown}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(link.href)
              }}
              className="text-[14px] font-semibold tracking-widest text-black hover:text-[#5E0ED7] transition-colors cursor-pointer"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Right: Hamburger Button (36px round black button with 3 white spans) */}
        <motion.button
          custom={5}
          initial="initial"
          animate="animate"
          variants={fadeDown}
          type="button"
          aria-label="Open mobile navigation menu"
          onClick={() => setMobileMenuOpen(true)}
          className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1 cursor-pointer hover:bg-neutral-800 transition-colors shadow-md"
        >
          <span className="w-4 h-0.5 bg-white rounded-full" />
          <span className="w-4 h-0.5 bg-white rounded-full" />
          <span className="w-4 h-0.5 bg-white rounded-full" />
        </motion.button>
      </header>

      {/* ---------------- MOBILE MENU OVERLAY ---------------- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white flex flex-col justify-between px-5 sm:px-8 md:px-12 py-5 sm:py-6"
          >
            {/* Top Row: Same logo + 36px round black close button */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  style={{ borderColor: ACCENT_COLOR }}
                  className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                >
                  <div
                    style={{ backgroundColor: ACCENT_COLOR }}
                    className="w-2.5 h-2.5 rounded-full"
                  />
                </div>
                <span className="text-xs font-semibold tracking-widest text-black">
                  NEXOLAB STUDIO
                </span>
              </div>

              <button
                type="button"
                aria-label="Close mobile navigation menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-neutral-800 cursor-pointer shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Vertical List of Nav Links */}
            <div className="flex flex-col gap-8 mt-16">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-3xl font-semibold tracking-widest text-black hover:text-[#5E0ED7] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom CTA (mt-auto) */}
            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  setContactModalOpen(true)
                }}
                style={{ color: ACCENT_COLOR }}
                className="flex items-center gap-2 text-xl font-semibold tracking-wide hover:opacity-85 transition-opacity"
              >
                <span>Work With Us</span>
                <ArrowUpRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------- 2. STATS ROW (MIDDLE SECTION) ---------------- */}
      <section className="relative z-10 flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-8 md:py-0">
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              custom={idx + 2}
              initial="initial"
              animate="animate"
              variants={fadeUp}
              className="text-right flex flex-col items-end"
            >
              {/* Number with Accent "+" */}
              <div
                style={{ fontSize: 'clamp(1.5rem, 5vw, 3.5rem)' }}
                className="font-semibold leading-none tracking-tight text-black flex items-start justify-end"
              >
                <span
                  style={{ color: ACCENT_COLOR, fontSize: '0.5em', marginTop: '0.12em', marginRight: '0.08em' }}
                  className="font-semibold"
                >
                  +
                </span>
                <span>{stat.number}</span>
              </div>

              {/* Label */}
              <p className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-black whitespace-pre-line leading-tight mt-1.5 sm:mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ---------------- 3. BOTTOM SECTION ---------------- */}
      <footer className="relative z-10 px-5 sm:px-8 md:px-12 pb-8 md:pb-12 flex flex-col gap-6 md:gap-12">
        {/* Row A: Tagline + CTA */}
        <div className="flex items-center justify-between gap-4">
          {/* Left: Tagline */}
          <motion.p
            custom={5}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest text-black max-w-[130px] sm:max-w-[160px] md:max-w-xs leading-snug"
          >
            Shaping Bold <br />
            Visions Into Power <br />
            For Your Tribe
          </motion.p>

          {/* Right: CTA link "Work With Us" */}
          <motion.button
            custom={6}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            type="button"
            onClick={() => setContactModalOpen(true)}
            style={{ color: ACCENT_COLOR }}
            className="flex items-center gap-1.5 sm:gap-2 text-base sm:text-xl md:text-2xl font-semibold whitespace-nowrap tracking-wide hover:opacity-85 transition-opacity cursor-pointer"
          >
            <span>Work With Us</span>
            <ArrowUpRight className="w-[18px] sm:w-[22px] h-[18px] sm:h-[22px]" />
          </motion.button>
        </div>

        {/* Row B: Description + Main Heading */}
        <div className="flex items-end justify-between gap-3 sm:gap-4">
          {/* Left: Fixed-width description */}
          <motion.div
            custom={7}
            initial="initial"
            animate="animate"
            variants={fadeUp}
            className="w-[120px] sm:w-[180px] md:w-[280px] shrink-0 pb-1 sm:pb-2"
          >
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase text-black text-left md:text-right leading-relaxed">
              Creative Studios Built Around Elevating Your Vision Into Striking Reality
            </p>
          </motion.div>

          {/* Right: Main Heading (Fearless / Vision / Delivered) */}
          <div className="flex flex-col items-end">
            {HEADING_WORDS.map((word, wordIndex) => (
              <div key={word} className="overflow-hidden">
                <motion.h1
                  custom={wordIndex}
                  initial="initial"
                  animate="animate"
                  variants={slideUp}
                  style={{
                    fontSize: 'clamp(2rem, 9vw, 9rem)',
                    lineHeight: 0.88,
                  }}
                  className="font-semibold uppercase text-black text-right tracking-tight"
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>
        </div>
      </footer>

      {/* ---------------- WORK WITH US / CLIENT MODAL ---------------- */}
      {contactModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-white border border-neutral-200 rounded-3xl p-6 sm:p-8 shadow-2xl text-black">
            <button
              type="button"
              onClick={() => setContactModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {contactSent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div
                  style={{ backgroundColor: `${ACCENT_COLOR}15`, borderColor: ACCENT_COLOR }}
                  className="w-16 h-16 rounded-full border flex items-center justify-center"
                >
                  <CheckCircle style={{ color: ACCENT_COLOR }} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold tracking-wider uppercase text-black">
                  Project Brief Received
                </h3>
                <p className="text-xs text-neutral-600 max-w-sm normal-case font-normal">
                  Thank you for reaching out to Nexolab Studio. Our creative director will review your vision and connect within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div
                    style={{ borderColor: ACCENT_COLOR, color: ACCENT_COLOR }}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold border mb-2 uppercase tracking-widest"
                  >
                    <span>NEXOLAB STUDIO INQUIRY</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase text-black">
                    Work With Nexolab
                  </h3>
                  <p className="text-xs text-neutral-500 normal-case font-normal mt-1">
                    Tell us about your brand vision, target timeline, and goals.
                  </p>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-black mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Julian Montgomery"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-black text-xs font-normal normal-case focus:outline-none focus:border-[#5E0ED7]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-black mb-1">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="julian@group.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-black text-xs font-normal normal-case focus:outline-none focus:border-[#5E0ED7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-widest uppercase text-black mb-1">
                        Project Sector
                      </label>
                      <select
                        value={contactForm.brand}
                        onChange={(e) => setContactForm({ ...contactForm, brand: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-black text-xs font-normal focus:outline-none focus:border-[#5E0ED7]"
                      >
                        <option value="Wellness Brand">Wellness Sanctuary</option>
                        <option value="Autos Brand">Automotive & Hypercars</option>
                        <option value="Dental Brand">Cosmetic Dental Clinic</option>
                        <option value="Aviation Brand">Private Aviation</option>
                        <option value="Bespoke Studio">Bespoke Venture</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-widest uppercase text-black mb-1">
                      Project Goals & Vision
                    </label>
                    <textarea
                      rows={3}
                      value={contactForm.brief}
                      onChange={(e) => setContactForm({ ...contactForm, brief: e.target.value })}
                      placeholder="Share your goals, timeline, and requirements..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-300 text-black text-xs font-normal normal-case focus:outline-none focus:border-[#5E0ED7] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setContactModalOpen(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-neutral-500 hover:text-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      style={{ backgroundColor: ACCENT_COLOR }}
                      className="px-6 py-2.5 rounded-xl text-white font-semibold text-xs tracking-widest uppercase hover:opacity-90 shadow-md cursor-pointer"
                    >
                      Submit Brief
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
