import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Smile,
  ShieldCheck,
  Star,
  Clock,
  Calendar,
  CheckCircle,
  X,
  ArrowRight,
  Eye,
  Sliders,
  Layers,
  Heart
} from 'lucide-react'

const TREATMENTS = [
  {
    id: 'veneers',
    name: 'Bespoke Micro-Thin Porcelain Veneers',
    category: 'Smile Architecture',
    depth: '0.2 mm Conservative Prep',
    timeframe: '2 Bespoke Appointments',
    desc: 'Individually layered by master Swiss ceramists using ultra-translucent feldspathic porcelain. Designed to match your facial symmetry, optical light refraction, and natural enamel texture.',
    benefits: ['Zero Unnatural Bulking', 'Hand-Characterized Translucency', 'Permanent Stain Resistance'],
    highlight: 'Signature Artistry',
  },
  {
    id: '3d-design',
    name: '3D Digital Smile Simulation',
    category: 'Facial Aesthetics',
    depth: 'Sub-Millimeter Facial Scanning',
    timeframe: 'Trial Smile Mockup (Day 1)',
    desc: 'Try your custom smile before any permanent work begins. We scan your facial dynamics, speech phonetics, and smile curvature to create a physical temporary preview you wear home.',
    benefits: ['Preview Before Committing', 'Phonetic Harmony Check', '100% Patient Co-Design'],
    highlight: 'Predictable Results',
  },
  {
    id: 'laser-contour',
    name: 'Laser Periodontal Sculpting',
    category: 'Gum Harmonization',
    depth: 'Waterlase Er,Cr:YSGG Laser',
    timeframe: 'Single 45-min Session',
    desc: 'Gently rebalances an uneven gumline or "gummy" smile using painless water-assisted laser photons. Rapid healing with zero scalpels or sutures.',
    benefits: ['Painless & Bloodless', 'Immediate Gum Symmetry', 'Rapid 24h Cellular Healing'],
    highlight: 'Minimally Invasive',
  },
  {
    id: 'sleep-spa',
    name: 'Twilight Sedation Dental Spa',
    category: 'Comfort & Wellness',
    depth: 'Board-Certified Anesthesiology',
    timeframe: 'Complete Transformation Asleep',
    desc: 'For guests with dental anxiety or lengthy procedures. Fall asleep in an acoustic suite with heated cashmere blankets, and wake up with your smile transformation fully finished.',
    benefits: ['Zero Memory of Procedure', 'Deep Relaxation & Peace', 'Multiple Treatments in 1 Visit'],
    highlight: 'Zero Anxiety',
  },
]

export default function DentalPage() {
  const navigate = useNavigate()
  const [activeTreatment, setActiveTreatment] = useState(TREATMENTS[0])
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false)
  const [assessmentSent, setAssessmentSent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goals: 'Porcelain Veneers & Smile Makeover',
    preferredDate: '2026-10-20',
    notes: '',
  })

  const handleAssessmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setAssessmentSent(true)
    setTimeout(() => {
      setAssessmentSent(false)
      setIsAssessmentOpen(false)
    }, 2800)
  }

  return (
    <div className="min-h-screen bg-[#0c1017] text-[#f1f4f8] font-sans selection:bg-rose-200 selection:text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/dental_atelier.jpg"
            alt="Elysian Dental Atelier Luxury Suite"
            className="w-full h-full object-cover object-center brightness-[0.70] scale-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c1017] via-[#0c1017]/40 to-[#0c1017]/70" />
        </div>

        {/* Ambient Warm Champagne Glows */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-200/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase bg-white/10 border border-white/20 text-rose-200 backdrop-blur-md mb-6 aero-card">
            <Sparkles className="w-3.5 h-3.5 text-rose-300" />
            <span>ELYSIAN ATELIER • BEVERLY HILLS & LONDON</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[1.08]">
            Architects of <br />
            <span className="font-serif italic text-rose-200">The Modern Smile.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed font-light">
            Where biological precision meets haute-couture aesthetics. Handcrafted porcelain veneers, sub-millimeter digital smile architecture, and serene spa sedation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsAssessmentOpen(true)}
              className="aero-btn aero-sheen px-8 py-4 rounded-full bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 text-gray-900 font-semibold text-xs tracking-wider uppercase shadow-xl shadow-rose-300/20 hover:shadow-rose-300/35 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Smile className="w-4 h-4 text-gray-900" />
              Book Smile Consultation
            </button>
            <a
              href="#transformation"
              className="aero-btn px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs tracking-wider uppercase border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Eye className="w-4 h-4 text-rose-300" />
              Before & After Gallery
            </a>
          </div>

          {/* Quick Stats Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">0.2 mm</p>
              <p className="text-xs text-rose-200/70 uppercase tracking-wider mt-1">Micro-Thin Enamel Prep</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">100%</p>
              <p className="text-xs text-rose-200/70 uppercase tracking-wider mt-1">Handcrafted Swiss Porcelain</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">15+ Yrs</p>
              <p className="text-xs text-rose-200/70 uppercase tracking-wider mt-1">Clinical Veneer Durability</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">Twilight</p>
              <p className="text-xs text-rose-200/70 uppercase tracking-wider mt-1">Full Sleep Spa Sedation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Transformation Reveal Slider */}
      <section id="transformation" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-rose-300 font-semibold mb-2">
            CLINICAL EXCELLENCE
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-serif">
            Interactive Smile Transformation
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-300">
            Slide horizontally to observe how handcrafted feldspathic porcelain veneers harmoniously correct shade discoloration, edge wear, and spacing.
          </p>
        </div>

        {/* Before / After Interactive Slider Card */}
        <div className="max-w-4xl mx-auto bg-[#131923] border border-white/10 rounded-3xl p-6 sm:p-8 aero-card shadow-2xl">
          <div className="relative h-[340px] sm:h-[420px] rounded-2xl overflow-hidden select-none border border-white/10">
            {/* "After" Image (Full background) */}
            <img
              src="/images/dental_atelier.jpg"
              alt="After Smile Architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-400/40 text-emerald-300 text-xs font-semibold backdrop-blur-md">
              AFTER: Bespoke Porcelain Architecture
            </div>

            {/* "Before" Layer with Clip Path */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="/images/dental_smile.jpg"
                alt="Ceramist Studio Focus"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '700px' }}
              />
              <div className="absolute inset-0 bg-stone-900/40" />
              <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-black/80 border border-white/20 text-gray-300 text-xs font-semibold backdrop-blur-md">
                LAB: Master Hand-Layering Process
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg border border-gray-300 text-xs font-bold">
                ↔
              </div>
            </div>

            {/* Hidden Range Input for smooth dragging */}
            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after transformation slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-400">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-rose-300" />
              Drag slider left or right to inspect the transformation
            </span>
            <span className="text-rose-200">
              Case Study: 10 Upper Feldspathic Veneers • Shade BL2 Natural Translucency
            </span>
          </div>
        </div>
      </section>

      {/* Services & Treatment Suites */}
      <section className="py-20 bg-gradient-to-b from-[#131923] via-[#0c1017] to-[#131923] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-widest text-rose-300 font-semibold mb-2">
              BESPOKE CLINICAL OFFERINGS
            </p>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-serif">
              Haute-Couture Smile Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TREATMENTS.map((item) => (
              <div
                key={item.id}
                className="aero-card rounded-2xl bg-white/[0.03] border border-white/10 hover:border-rose-300/40 p-6 flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-rose-200/10 text-rose-200 border border-rose-200/20">
                    {item.highlight}
                  </span>
                  <h3 className="text-lg font-medium text-white mt-3">{item.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                  <div className="text-[11px] text-gray-400">
                    Precision: <strong className="text-white">{item.depth}</strong>
                  </div>
                  <div className="text-[11px] text-gray-400">
                    Timeline: <strong className="text-white">{item.timeframe}</strong>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, goals: item.name }))
                      setIsAssessmentOpen(true)
                    }}
                    className="w-full mt-3 py-2 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                  >
                    Select Treatment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ceramist Spotlight Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aero-card">
            <img
              src="/images/dental_smile.jpg"
              alt="Master Ceramist Atelier"
              className="w-full h-[460px] object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-gray-300">
              <span className="font-semibold text-rose-200">The Ceramic Laboratory</span> — Every individual tooth is brush-sculpted with micro-characterizations.
            </div>
          </div>

          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold">
              ARTISAN LABORATORY
            </span>
            <h2 className="text-3xl sm:text-5xl font-light text-white font-serif leading-tight">
              Crafted by Master Artists, Not Robots.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Factory milling machines create flat, monochromatic teeth. At Elysian, each veneer is built up layer-by-layer with varying opacities to mimic natural mammalian dentin and incisal halo translucency.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>Custom shade-matching chairside with polarized light photography.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>Micro-surface texture that mimics real tooth enamel light reflection.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                <span>Lifetime warranty against delamination or spontaneous breakage.</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                type="button"
                onClick={() => setIsAssessmentOpen(true)}
                className="aero-btn aero-sheen px-8 py-3.5 rounded-full bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 text-gray-900 font-bold text-xs uppercase tracking-wider shadow-lg"
              >
                Schedule Private Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment / Consultation Modal */}
      {isAssessmentOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#141b25] border border-white/20 rounded-3xl p-6 sm:p-8 aero-card shadow-2xl">
            <button
              type="button"
              onClick={() => setIsAssessmentOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {assessmentSent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-200/20 border border-rose-300/40 flex items-center justify-center text-rose-300">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Consultation Requested</h3>
                <p className="text-sm text-gray-300 max-w-sm">
                  Our Beverly Hills concierge will connect with you to review your smile goals and confirm your private suite appointment.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-rose-300 font-semibold block mb-1">
                    ELYSIAN PRIVATE CONCIERGE
                  </span>
                  <h3 className="text-2xl font-light text-white font-serif">
                    Virtual Smile Assessment
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Bespoke smile planning with 3D aesthetic simulation.
                  </p>
                </div>

                <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-rose-200 uppercase tracking-wider mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Katherine Vance"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-300"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-rose-200 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="k.vance@beverlyhills.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-rose-200 uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (310) 555-0199"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-rose-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-rose-200 uppercase tracking-wider mb-1">
                      Primary Smile Goal
                    </label>
                    <select
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0c1017] border border-white/10 text-white text-sm focus:outline-none focus:border-rose-300"
                    >
                      <option value="Porcelain Veneers & Smile Makeover">Full Upper Porcelain Veneers (8-10 units)</option>
                      <option value="Minor Cosmetic Corrections">Minor Cosmetic Bonding & Contouring</option>
                      <option value="Laser Gum Symmetry">Laser Gum Lift & Symmetry</option>
                      <option value="Sleep Dentistry & Complete Restoration">Sleep Sedation Full Mouth Restoration</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-rose-200 uppercase tracking-wider mb-1">
                      Additional Notes
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. closing gap between front teeth, whitening shade match..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-rose-300 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAssessmentOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="aero-btn aero-sheen px-6 py-2.5 rounded-xl bg-gradient-to-r from-rose-200 via-amber-100 to-rose-300 text-gray-900 font-bold text-xs uppercase tracking-wider shadow-lg"
                    >
                      Request Suite Booking
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Dental Brand Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif italic text-white text-base">Elysian Dental Atelier</span>
          <span className="ml-2 text-rose-300 font-mono text-[10px]">BEVERLY HILLS • MAYFAIR • ZÜRICH</span>
        </div>
        <p>© 2026 Elysian Dental Atelier LLC. Part of the Kinesis Studio Portfolio.</p>
        <div className="flex gap-4">
          <button type="button" onClick={() => navigate('/agency')} className="hover:text-white underline">
            Agency Portfolio Hub
          </button>
          <button type="button" onClick={() => navigate('/')} className="hover:text-white">
            SkyElite Jets
          </button>
          <button type="button" onClick={() => navigate('/wellness')} className="hover:text-white">
            SOMA Wellness
          </button>
        </div>
      </footer>
    </div>
  )
}
