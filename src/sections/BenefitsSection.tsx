import { Zap, HeartHandshake, Lock, Headphones, Sparkles, MapPin } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Instant Booking',
    desc: 'Request a quote and confirm your flight in minutes, not days. Our platform streamlines the entire process.',
  },
  {
    icon: HeartHandshake,
    title: 'No Long-Term Contracts',
    desc: 'Fly on your terms. No annual commitments, no membership fees — book when you need, pay as you go.',
  },
  {
    icon: Lock,
    title: 'Complete Privacy',
    desc: 'Your travel details stay yours. Discrete check-in, private terminals, and confidential manifests.',
  },
  {
    icon: Headphones,
    title: '24/7 Concierge',
    desc: 'A dedicated aviation advisor handles everything — from last-minute changes to ground arrangements.',
  },
  {
    icon: Sparkles,
    title: 'Curated Experience',
    desc: 'Every detail personalized to your preferences. From in-flight dining to seat configuration.',
  },
  {
    icon: MapPin,
    title: 'Door-to-Door',
    desc: 'Seamless luxury transport from your home to the aircraft and from the tarmac to your destination.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative bg-[#0b0f17] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              BENEFITS
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight">
              Why our clients <br className="hidden sm:block" />
              choose SkyElite
            </h2>
          </div>
          <p className="text-base text-gray-400 max-w-md lg:text-right">
            Every touchpoint designed to save you time and elevate your experience.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="aero-card group bg-white/[0.02] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.05] cursor-pointer"
            >
              <b.icon className="w-7 h-7 text-gray-500 mb-6 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.7)] transition-all duration-300" />
              <h3 className="text-lg font-medium text-white mb-3">{b.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Dual Luxury Experience Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarmac Chauffeur Showcase */}
          <div className="aero-card group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer">
            <div className="h-[280px] sm:h-[320px] overflow-hidden">
              <img
                src="/images/tarmac_chauffeur.jpg"
                alt="Direct Tarmac Chauffeured Limousine Transfer"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                Frictionless Ground Transfer
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                Chauffeured Tarmac Escort
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Step directly from your private luxury sedan to the aircraft airstairs without entering the main terminal.
              </p>
            </div>
          </div>

          {/* In-Flight Dining Showcase */}
          <div className="aero-card group relative rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] cursor-pointer">
            <div className="h-[280px] sm:h-[320px] overflow-hidden">
              <img
                src="/images/inflight_fine_dining.jpg"
                alt="Michelin In-Flight Haute Cuisine and Champagne"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/40 to-transparent pointer-events-none" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                Haute Gastronomy
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                Artisanal In-Flight Dining
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Multi-course gourmet menus curated by private culinary chefs paired with vintage wines and sommelier service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
