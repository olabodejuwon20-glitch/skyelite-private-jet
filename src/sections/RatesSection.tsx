import { Check } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const plans = [
  {
    name: 'Elevate',
    subtitle: 'Light Jet',
    price: '4,800',
    unit: 'per flight hour',
    description: 'Perfect for short regional trips up to 3 hours.',
    features: [
      'Up to 7 passengers',
      'Range up to 2,000 nm',
      'Complimentary Wi-Fi',
      'Light refreshments',
      'Ground transport coordination',
      '24/7 support line',
    ],
    cta: 'Select Elevate',
    highlight: false,
  },
  {
    name: 'Prestige',
    subtitle: 'Super-Midsize Jet',
    price: '7,200',
    unit: 'per flight hour',
    description: 'The ideal balance of comfort and range for cross-continental travel.',
    features: [
      'Up to 10 passengers',
      'Range up to 3,600 nm',
      'Full-size cabin with stand-up headroom',
      'Premium catering included',
      'Luxury ground transport',
      'Dedicated flight concierge',
      'Complimentary lounge access',
    ],
    cta: 'Select Prestige',
    highlight: true,
  },
  {
    name: 'Sovereign',
    subtitle: 'Ultra-Long-Range',
    price: '12,500',
    unit: 'per flight hour',
    description: 'Uncompromising luxury for intercontinental journeys.',
    features: [
      'Up to 16 passengers',
      'Range up to 7,500 nm',
      'Master suite with lay-flat bed',
      'Michelin-star chef catering',
      'Armored luxury ground transport',
      'Personal aviation advisor',
      'Custom interior configurations',
      'Satellite phone & high-speed internet',
    ],
    cta: 'Select Sovereign',
    highlight: false,
  },
]

export default function RatesSection() {
  const navigate = useNavigate()

  return (
    <section id="rates" className="relative bg-[#080c14] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
            RATES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Transparent pricing, <br className="hidden sm:block" />
            exceptional value
          </h2>
          <p className="text-base text-gray-400">
            No membership fees. No hidden charges. Pay only for the hours you fly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`aero-card relative flex flex-col rounded-3xl p-8 cursor-pointer ${
                plan.highlight
                  ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.03] border-2 border-white/20 shadow-xl shadow-cyan-950/20 scale-[1.02]'
                  : 'bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[#0b0f17] text-xs font-semibold tracking-wider uppercase shadow-md shadow-cyan-400/20">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-medium text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-light text-white tracking-tight">${plan.price}</span>
                <span className="text-sm text-gray-500 ml-2">/{plan.unit}</span>
              </div>

              <p className="text-sm text-gray-400 mb-8 leading-relaxed">{plan.description}</p>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={() => navigate('/book')}
                className={`aero-btn aero-sheen w-full py-3.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-white text-[#0b0f17] hover:bg-gray-100 hover:shadow-cyan-400/30'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Ultra-Long-Range Stateroom Suite Banner */}
        <div className="aero-card mt-16 rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-r from-white/[0.04] to-white/[0.01] grid lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 h-[260px] sm:h-[340px] overflow-hidden relative group">
            <img
              src="/images/luxury_cabin_suite.jpg"
              alt="Bombardier Global 7500 Executive Master Stateroom Suite"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#080c14]/90 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080c14]/90 via-transparent to-transparent lg:hidden" />
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10">
            <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-widest block mb-2">
              Sovereign Class Exclusive
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight mb-4">
              Private Master Stateroom Suites
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Cross oceans and continents non-stop. Arrive revitalized with permanent lie-flat double beds,
              en-suite master lavatories, and circadian lighting tuned to your arrival destination.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/book')}
                className="aero-btn aero-sheen px-6 py-3 rounded-full bg-white text-[#0b0f17] text-xs font-semibold hover:bg-gray-100 hover:shadow-cyan-400/25"
              >
                Inquire Sovereign Fleet
              </button>
              <button
                type="button"
                onClick={() => navigate('/discover')}
                className="aero-btn px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-white hover:border-cyan-400/40"
              >
                View Cabin Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
