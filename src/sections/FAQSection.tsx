import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const faqs = [
  {
    q: 'How far in advance do I need to book?',
    a: 'We can arrange flights with as little as 4 hours notice, subject to aircraft availability. For peak travel periods and specific aircraft requests, we recommend booking 48–72 hours in advance.',
  },
  {
    q: 'What is included in the flight price?',
    a: 'Our pricing covers the aircraft, crew, fuel, landing fees, and standard catering. Ground transport, premium catering upgrades, and international handling fees are quoted separately based on your itinerary.',
  },
  {
    q: 'Can I bring pets on board?',
    a: 'Absolutely. One of the greatest advantages of private aviation is traveling with your pets in the cabin with you — no cargo hold, no size restrictions. We just ask that you let us know in advance so we can prepare accordingly.',
  },
  {
    q: 'What airports do you operate from?',
    a: 'We operate from over 5,000 airports globally, including private FBOs (Fixed-Base Operators) and major international hubs. This includes many smaller airfields that commercial airlines simply cannot access.',
  },
  {
    q: 'How does pricing work?',
    a: 'Pricing is based on the hourly rate of the selected aircraft category, multiplied by the estimated flight time. There are no membership fees or annual commitments. You receive a transparent all-in quote before confirming each flight.',
  },
  {
    q: 'What safety certifications do your aircraft have?',
    a: 'All aircraft in our network hold Wyvern Wingman or ARG/US Gold ratings — the two most respected safety audit programs in private aviation. We conduct additional internal reviews on top of these certifications.',
  },
  {
    q: 'Can I modify or cancel a booking?',
    a: 'Yes. Modifications can be made up to 24 hours before departure at no additional cost. Cancellations within 24 hours may incur a positioning fee depending on the circumstances. Your advisor will walk you through the details.',
  },
  {
    q: 'Do you offer empty leg flights?',
    a: 'Yes, we regularly publish empty leg opportunities at significantly reduced rates — often 40–60% off standard pricing. Contact your advisor or check our platform for current availability.',
  },
]

export default function FAQSection() {
  const navigate = useNavigate()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="relative bg-[#080c14] py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base text-gray-400">
            Everything you need to know about flying with SkyElite.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={i}
                className={`aero-card rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'border-cyan-400/40 bg-white/[0.04] shadow-lg shadow-cyan-950/20'
                    : 'border-white/5 bg-white/[0.015] hover:border-cyan-400/30 hover:bg-white/[0.03]'
                }`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-6 py-5 text-left focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={`text-sm sm:text-base font-medium pr-4 transition-colors ${isOpen ? 'text-cyan-300' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-500'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-white/5">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Explore all FAQs */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => navigate('/faq')}
            className="aero-btn aero-sheen inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/10 transition-all hover:border-cyan-400/40 shadow-sm"
          >
            Explore Complete FAQ Knowledge Base
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}
