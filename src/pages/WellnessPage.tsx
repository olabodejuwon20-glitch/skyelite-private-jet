import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Sparkles,
  Droplets,
  Wind,
  Sun,
  ShieldCheck,
  Clock,
  Calendar,
  CheckCircle,
  X,
  ArrowRight,
  Flame,
  Activity,
  HeartPulse,
  Award
} from 'lucide-react'

const PROTOCOLS = [
  {
    id: 'contrast',
    name: 'Thermal Contrast & Hydrotherapy',
    category: 'Vascular Optimization',
    temp: '38°C Mineral / 4°C Plunge',
    duration: '60 - 90 min',
    desc: 'Deep sunken black volcanic stone pools infused with Icelandic magnesium, coupled with sub-zero cryo-immersion to supercharge circulation, decrease systemic inflammation, and reset the autonomic nervous system.',
    benefits: ['+320% Dopamine Surge', 'Rapid Lactic Acid Flush', 'Deep Vagal Nerve Toning'],
    highlight: 'Signature Suite',
  },
  {
    id: 'hyperbaric',
    name: 'Hard-Chamber Hyperbaric O2',
    category: 'Cellular Regeneration',
    temp: '2.0 ATA Pressure',
    duration: '60 min',
    desc: 'Medical-grade 100% pure oxygen delivered under controlled 2.0 ATA atmospheric pressure, supersaturating blood plasma to accelerate microvascular repair, neurogenesis, and telomere protection.',
    benefits: ['Stem Cell Mobilization', 'Cognitive Clarity & Focus', 'Collagen Matrix Synthesis'],
    highlight: 'Clinical Grade',
  },
  {
    id: 'photobio',
    name: 'Full-Spectrum Photobiomodulation',
    category: 'Mitochondrial Energy',
    temp: '660nm & 850nm Near-Infrared',
    duration: '30 min',
    desc: 'Targeted medical-grade red and near-infrared wavelengths stimulate cytochrome c oxidase within mitochondrial membranes, surging intracellular ATP production and skin elasticity.',
    benefits: ['+48% Cellular ATP', 'Fibroblast Activation', 'Circadian Phase Reset'],
    highlight: 'NASA-Derived',
  },
  {
    id: 'nad',
    name: 'NAD+ Cellular Longevity Infusion',
    category: 'Epigenetic Renewal',
    temp: 'Pharmaceutical Compounding',
    duration: '120 min',
    desc: 'Pure Nicotinamide Adenine Dinucleotide directly replenished via slow IV infusion, activating sirtuin longevity pathways, repairing DNA breaks, and eliminating metabolic fatigue.',
    benefits: ['Sirtuin-1 Activation', 'Direct DNA PARP Repair', 'Cellular Rejuvenation'],
    highlight: 'Physician Supervised',
  },
]

const TIERS = [
  {
    name: 'Immersion Day Pass',
    price: '$450',
    frequency: 'Per Session',
    desc: 'Single-day access to contrast hydrotherapy baths, cedar infrared sauna, and post-treatment herbal elixir bar.',
    features: [
      'Contrast Thermal Suite (90 min)',
      'Aromatherapeutic Steam & Cedar Sauna',
      'Electrolyte & adaptogenic elixir bar',
      'Locker suite with Bamford amenities',
    ],
    popular: false,
  },
  {
    name: 'The Longevity Circle',
    price: '$2,800',
    frequency: 'Monthly Membership',
    desc: 'Comprehensive monthly biohacking and regenerative protocol designed with personalized biomarker tracking.',
    features: [
      'Unlimited Contrast Thermal access',
      '4x 2.0 ATA Hyperbaric O2 sessions',
      '4x Full-Spectrum Red Light sessions',
      'Monthly InBody 970 & HRV Biomarker review',
      '2x NAD+ 500mg IV Infusions',
      'Dedicated longevity concierge',
    ],
    popular: true,
  },
  {
    name: 'Sanctuary Private Buyout',
    price: '$7,500',
    frequency: 'Half-Day Exclusive',
    desc: 'Exclusive private reservation of the entire architectural sanctuary for executive retreats or private wellness gatherings.',
    features: [
      'Full private buyout (up to 12 guests)',
      'All suites, plunge pools & chambers open',
      'Private physician & sound alchemist',
      'Michelin-curated longevity dining menu',
      'Private valet & secure underground arrival',
    ],
    popular: false,
  },
]

export default function WellnessPage() {
  const navigate = useNavigate()
  const [selectedProtocol, setSelectedProtocol] = useState(PROTOCOLS[0])
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const [bookingData, setBookingData] = useState({
    protocol: PROTOCOLS[0].name,
    date: '2026-10-15',
    time: '14:00',
    guests: '1 Guest',
    notes: '',
  })

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setBookingConfirmed(true)
    setTimeout(() => {
      setBookingConfirmed(false)
      setIsBookingOpen(false)
    }, 2800)
  }

  return (
    <div className="min-h-screen bg-[#070b09] text-[#e8f1ec] font-sans selection:bg-emerald-600 selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Cinematic Gradient Gradients */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/wellness_spa.jpg"
            alt="Soma Luxury Wellness Sanctuary"
            className="w-full h-full object-cover object-center brightness-[0.68] scale-105 animate-pulse duration-[8000ms]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b09] via-[#070b09]/50 to-[#070b09]/70" />
          <div className="absolute inset-0 bg-emerald-950/20 mix-blend-overlay" />
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 backdrop-blur-md mb-6 aero-card">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>SOMA LONGEVITY & SANCTUARY • ZÜRICH & KYOTO</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-white leading-[1.08]">
            Cellular Renewal. <br />
            <span className="font-serif italic text-emerald-200">Effortless Vitality.</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-emerald-100/80 max-w-2xl mx-auto leading-relaxed">
            Where ancient thermal ritual converges with precision biohacking. Calibrate your biology with clinical-grade contrast hydrotherapy, hyperbaric oxygenation, and epigenetic therapies.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsBookingOpen(true)}
              className="aero-btn aero-sheen px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium text-sm tracking-wide shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve Sanctuary Immersion
            </button>
            <a
              href="#protocols"
              className="aero-btn px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-sm border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              Explore Protocols
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">+320%</p>
              <p className="text-xs text-emerald-300/70 uppercase tracking-wider mt-1">Dopamine & Norepinephrine</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">2.0 ATA</p>
              <p className="text-xs text-emerald-300/70 uppercase tracking-wider mt-1">Clinical Chamber Pressure</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">100%</p>
              <p className="text-xs text-emerald-300/70 uppercase tracking-wider mt-1">Organic Volcanic Mineral Stone</p>
            </div>
            <div className="p-3">
              <p className="text-2xl sm:text-3xl font-light text-white font-serif">Private</p>
              <p className="text-xs text-emerald-300/70 uppercase tracking-wider mt-1">Dedicated Soundproof Suites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Protocols & Modalities Section */}
      <section id="protocols" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            EVIDENCE-BASED BIOHACKING
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-serif">
            The Longevity Protocols
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Each protocol is calibrated to trigger systemic cellular hormesis, mitochondrial energy multiplication, and autonomic equilibrium.
          </p>
        </div>

        {/* Interactive Protocol Selector & Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Protocol List */}
          <div className="lg:col-span-5 space-y-3">
            {PROTOCOLS.map((proto) => {
              const isSelected = selectedProtocol.id === proto.id
              return (
                <button
                  key={proto.id}
                  type="button"
                  onClick={() => setSelectedProtocol(proto)}
                  className={`aero-card w-full text-left p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-950/40 border-emerald-500/60 shadow-lg shadow-emerald-500/10'
                      : 'bg-white/[0.03] border-white/5 hover:border-white/15 hover:bg-white/[0.05]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-emerald-400">
                      {proto.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-emerald-400" />
                      {proto.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-white mt-1.5">{proto.name}</h3>
                  <p className="text-xs text-gray-400 mt-2 line-clamp-2">{proto.desc}</p>
                </button>
              )
            })}
          </div>

          {/* Protocol Deep Dive Card */}
          <div className="lg:col-span-7 bg-gradient-to-br from-emerald-950/30 to-[#0e1612] border border-emerald-500/20 rounded-3xl p-8 sm:p-10 relative overflow-hidden aero-card shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {selectedProtocol.highlight}
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white font-serif mt-3">
                  {selectedProtocol.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-gray-400 uppercase tracking-wider block">Calibration</span>
                <span className="text-sm font-mono text-emerald-300 font-semibold">{selectedProtocol.temp}</span>
              </div>
            </div>

            <p className="text-base text-gray-300 mt-6 leading-relaxed">
              {selectedProtocol.desc}
            </p>

            <div className="mt-8">
              <h4 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Validated Biomarker Outcomes
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProtocol.benefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-start gap-2.5"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-gray-200 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-gray-400">
                Supervised by European Board-Certified Longevity Specialists
              </div>
              <button
                type="button"
                onClick={() => {
                  setBookingData((prev) => ({ ...prev, protocol: selectedProtocol.name }))
                  setIsBookingOpen(true)
                }}
                className="aero-btn aero-sheen px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-emerald-500/25 cursor-pointer"
              >
                Book This Protocol
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sanctuary Architecture Spotlight */}
      <section className="py-20 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold">
                ARCHITECTURAL SANCTUARY
              </span>
              <h2 className="text-3xl sm:text-5xl font-light text-white font-serif leading-tight">
                Designed for Zero Sensory Friction.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Constructed from acoustic basalt stone, Japanese cedar woodwork, and circadian-synced OLED skylights that match the exact natural color temperature of the sun.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <Droplets className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Hyper-Filtered Water</h4>
                    <p className="text-xs text-gray-400 mt-1">Zero chlorine; revitalized through 9-stage vortex filtration.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Wind className="w-5 h-5 text-emerald-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Negative Ion Air</h4>
                    <p className="text-xs text-gray-400 mt-1">Medical HEPA-14 scrubbers continuously saturating fresh forest air.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl aero-card">
              <img
                src="/images/wellness_spa.jpg"
                alt="Sanctuary Hydrotherapy"
                className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070b09]/80 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                <span className="font-semibold text-emerald-300">Suite 01: The Volcanic Pool</span> — 38°C Magnesium & 4°C Cryo-Plunge
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership & Sanctuary Tiers */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-emerald-400 font-semibold mb-2">
            MEMBERSHIP & RESERVATIONS
          </p>
          <h2 className="text-3xl sm:text-5xl font-light text-white font-serif">
            Select Your Access Tier
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Strictly limited to 150 active members per city to guarantee immediate suite availability and complete privacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TIERS.map((tier, idx) => (
            <div
              key={idx}
              className={`aero-card rounded-3xl p-8 flex flex-col justify-between border relative ${
                tier.popular
                  ? 'bg-gradient-to-b from-emerald-950/50 to-[#0b130f] border-emerald-500/50 shadow-2xl shadow-emerald-500/15'
                  : 'bg-white/[0.03] border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[11px] font-bold bg-emerald-400 text-gray-950 uppercase tracking-wider shadow-lg">
                  Most Requested
                </div>
              )}

              <div>
                <h3 className="text-xl font-medium text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-light text-white font-serif">{tier.price}</span>
                  <span className="text-xs text-gray-400">/ {tier.frequency}</span>
                </div>
                <p className="text-xs text-gray-300 mt-4 leading-relaxed">{tier.desc}</p>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-200">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6">
                <button
                  type="button"
                  onClick={() => setIsBookingOpen(true)}
                  className={`aero-btn aero-sheen w-full py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 shadow-lg shadow-emerald-400/25'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-white/15'
                  }`}
                >
                  Reserve Experience
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0c1410] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 aero-card shadow-2xl">
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {bookingConfirmed ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-serif">Sanctuary Reservation Confirmed</h3>
                <p className="text-sm text-gray-300 max-w-sm">
                  Your private suite has been reserved. A confirmation itinerary and pre-treatment preparation guide have been dispatched.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-emerald-400 font-semibold block mb-1">
                    SOMA PRIVATE SANCTUARY
                  </span>
                  <h3 className="text-2xl font-light text-white font-serif">
                    Schedule Your Protocol
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Personalized consultation with clinical biomarker monitoring.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-emerald-300 uppercase tracking-wider mb-1">
                      Selected Protocol
                    </label>
                    <select
                      value={bookingData.protocol}
                      onChange={(e) => setBookingData({ ...bookingData, protocol: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                    >
                      {PROTOCOLS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-emerald-300 uppercase tracking-wider mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        required
                        value={bookingData.date}
                        onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-emerald-300 uppercase tracking-wider mb-1">
                        Arrival Time
                      </label>
                      <input
                        type="time"
                        required
                        value={bookingData.time}
                        onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-300 uppercase tracking-wider mb-1">
                      Guest Capacity
                    </label>
                    <select
                      value={bookingData.guests}
                      onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-500/30 text-white text-sm focus:outline-none focus:border-emerald-400"
                    >
                      <option value="1 Guest">1 Guest (Private Solo Suite)</option>
                      <option value="2 Guests">2 Guests (Couples Contrast Suite)</option>
                      <option value="Executive Group">Executive Group (Private Wing)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-emerald-300 uppercase tracking-wider mb-1">
                      Biomarker Goals or Notes
                    </label>
                    <textarea
                      rows={2}
                      value={bookingData.notes}
                      onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                      placeholder="e.g., HRV enhancement, jetlag recovery, post-marathon contrast..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-emerald-500/30 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-emerald-400 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsBookingOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="aero-btn aero-sheen px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-gray-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-400/20"
                    >
                      Confirm Reservation
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Wellness Brand Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-serif italic text-white text-base">SOMA Sanctuary</span>
          <span className="ml-2 text-emerald-400 font-mono text-[10px]">KYOTO • ZÜRICH • BEVERLY HILLS</span>
        </div>
        <p>© 2026 SOMA Longevity Institute. Part of the Kinesis Studio Portfolio.</p>
        <div className="flex gap-4">
          <button type="button" onClick={() => navigate('/agency')} className="hover:text-white underline">
            Agency Portfolio Hub
          </button>
          <button type="button" onClick={() => navigate('/')} className="hover:text-white">
            SkyElite Jets
          </button>
          <button type="button" onClick={() => navigate('/autos')} className="hover:text-white">
            Vandenberg Autos
          </button>
        </div>
      </footer>
    </div>
  )
}
