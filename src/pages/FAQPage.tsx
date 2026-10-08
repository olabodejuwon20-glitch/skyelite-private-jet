import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  ChevronDown,
  Search,
  MessageSquare,
  PhoneCall,
  Mail,
  ShieldCheck,
  Plane,
  Sparkles,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface FAQItem {
  id: string
  category: string
  q: string
  a: string
}

const faqList: FAQItem[] = [
  {
    id: 'f1',
    category: 'Booking & Pricing',
    q: 'How far in advance do I need to book my flight?',
    a: 'We can arrange flights with as little as 4 hours notice, subject to aircraft availability and airport operating slots. For peak holiday periods or specific tailor-made aircraft configurations, we recommend booking 48–72 hours in advance to guarantee your preferred jet.',
  },
  {
    id: 'f2',
    category: 'Booking & Pricing',
    q: 'What is included in the quoted flight price?',
    a: 'Every SkyElite quote is transparent and all-inclusive: aircraft positioning, pilot and cabin crew fees, aviation fuel, landing and FBO handling fees, as well as complimentary executive catering and premium bar service. Ground limousine coordination is available on request.',
  },
  {
    id: 'f3',
    category: 'Booking & Pricing',
    q: 'Are there any hidden membership fees or annual contracts?',
    a: 'No. SkyElite operates on a purely on-demand model. You only pay for the flights you book with zero upfront capital requirements, no monthly membership dues, and no depreciating aircraft asset risk.',
  },
  {
    id: 'f4',
    category: 'Booking & Pricing',
    q: 'What is your modification and cancellation policy?',
    a: 'Itinerary changes can be made up to 24 hours prior to departure without change fees. Cancellations made outside of 48 hours are eligible for a full flight credit or refund, minus any unrecoverable non-refundable airport slot permits.',
  },
  {
    id: 'f5',
    category: 'Booking & Pricing',
    q: 'Do you offer empty leg flight discounts?',
    a: 'Yes. When an aircraft is repositioning without passengers, we make "Empty Legs" available at discounts of 40% to 65% off regular charter rates. You can request notifications from our dispatch team for your favored routes.',
  },
  {
    id: 'f6',
    category: 'Fleet & Safety',
    q: 'What safety standards and audits do SkyElite aircraft satisfy?',
    a: 'We exclusively dispatch aircraft with ARG/US Platinum or Wyvern Wingman certifications—the highest recognized global independent safety standards. Captains possess a minimum of 3,500 total flight hours with recurring Type-Rating simulator certifications every 6 months.',
  },
  {
    id: 'f7',
    category: 'Fleet & Safety',
    q: 'Which airports and FBOs can you operate from?',
    a: 'SkyElite provides access to over 5,000 global civilian and private aerodromes, including dedicated FBOs (Fixed Base Operators). You can fly closer to your final destination than commercial airlines allow—avoiding metropolitan airport congestion.',
  },
  {
    id: 'f8',
    category: 'Fleet & Safety',
    q: 'How does customs and passport control work on international flights?',
    a: 'Customs and immigration are expedited directly through private VIP FBO lounges or on board the aircraft upon landing. In most jurisdictions, international clearance is completed within 5 to 10 minutes without public terminal queues.',
  },
  {
    id: 'f9',
    category: 'Onboard & Pets',
    q: 'Can I travel with my pets in the cabin?',
    a: 'Yes, pets travel in the cabin directly beside you. We provide bespoke pet amenities, water bowls, and secure harnesses. You only need to furnish up-to-date veterinary pet passports and vaccination certificates.',
  },
  {
    id: 'f10',
    category: 'Onboard & Pets',
    q: 'What are the baggage allowances on private flights?',
    a: 'Baggage limits vary by aircraft category. Light jets accommodate 6–8 standard bags, while Super-Midsize and Ultra-Long-Range jets comfortably hold 14–22 large suitcases, golf sets, and ski equipment. Unlike commercial flights, there are no baggage check-in delays or lost-luggage risks.',
  },
  {
    id: 'f11',
    category: 'Onboard & Pets',
    q: 'What catering and dietary options are available?',
    a: 'Complimentary gourmet catering is tailored to your exact taste. Whether you require plant-based, kosher, halal, gluten-free, or specific vintage champagnes and caviar, your flight coordinator arranges it with top regional private dining kitchens.',
  },
  {
    id: 'f12',
    category: 'Onboard & Pets',
    q: 'Is high-speed Wi-Fi accessible inflight?',
    a: 'Yes, our Super-Midsize and Ultra-Long-Range fleets are equipped with Ka-Band or high-bandwidth Starlink satellite connectivity, ensuring uninterrupted high-definition video conferencing, messaging, and movie streaming throughout the journey.',
  },
]

const categories = ['All', 'Booking & Pricing', 'Fleet & Safety', 'Onboard & Pets']

export default function FAQPage() {
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ f1: true, f2: true })

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filteredFaqs = useMemo(() => {
    return faqList.filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory
      const matchesSearch =
        searchQuery.trim() === '' ||
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white flex flex-col font-sans selection:bg-white/20">
      <Navbar variant="solid" />

      {/* Header Banner */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-8 relative z-10">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to SkyElite
          </button>

          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/10 text-white/90 border border-white/15">
              Support & Knowledge Base
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white tracking-tight mt-6 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-normal leading-relaxed">
              Find transparent answers regarding private jet charters, safety standards, transparent
              pricing, and personalized onboard amenities.
            </p>

            {/* Search Bar */}
            <div className="relative mt-8 max-w-xl mx-auto">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g., pets, pricing, luggage, booking notice)..."
                className="w-full bg-white/[0.05] border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 sm:py-24 flex-1">
        <div className="max-w-4xl mx-auto px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`aero-btn px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-[#0b0f17] shadow-lg shadow-cyan-400/20'
                    : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/5 hover:border-cyan-400/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between text-xs text-gray-500 mb-6 px-1">
            <span>
              Showing {filteredFaqs.length} {filteredFaqs.length === 1 ? 'answer' : 'answers'}
            </span>
            {searchQuery && <span>Search filter: &ldquo;{searchQuery}&rdquo;</span>}
          </div>

          {/* FAQ Accordion List */}
          {filteredFaqs.length > 0 ? (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id]
                return (
                  <div
                    key={faq.id}
                    className={`aero-card rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                      isOpen
                        ? 'border-cyan-400/40 bg-white/[0.04] shadow-lg shadow-cyan-950/20'
                        : 'border-white/5 bg-white/[0.015] hover:border-cyan-400/30 hover:bg-white/[0.03]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full flex items-center justify-between px-6 sm:px-8 py-6 text-left focus:outline-none"
                    >
                      <div className="pr-4">
                        <span className="text-[11px] font-semibold text-cyan-400/80 uppercase tracking-wider block mb-1">
                          {faq.category}
                        </span>
                        <h3 className={`text-base sm:text-lg font-normal transition-colors ${isOpen ? 'text-cyan-300' : 'text-white'}`}>
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 text-cyan-400' : 'text-gray-400'
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-gray-300 leading-relaxed border-t border-white/5">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-center py-16 px-4 bg-white/[0.02] border border-white/5 rounded-2xl">
              <MessageSquare className="w-8 h-8 text-gray-600 mx-auto mb-3" />
              <h4 className="text-lg font-light text-white mb-2">No matching questions found</h4>
              <p className="text-sm text-gray-500 mb-6">
                Try revising your query or reach out directly to our 24/7 flight concierge.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="aero-btn px-5 py-2.5 rounded-full bg-white/10 text-xs font-semibold text-white hover:bg-white/20 transition-all"
              >
                Reset Search
              </button>
            </div>
          )}

          {/* Concierge Assistance Card */}
          <div className="aero-card mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 text-center relative overflow-hidden">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <Sparkles className="w-6 h-6 text-cyan-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-light text-white mb-3">
              Need immediate flight coordination?
            </h3>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
              Our flight operations desk operates 24 hours a day, 365 days a year. Receive instant custom
              route manifests, aircraft tail options, and price locks.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/book')}
                className="aero-btn aero-sheen px-8 py-3.5 rounded-full bg-white text-[#0b0f17] text-sm font-semibold hover:bg-gray-100 hover:shadow-xl hover:shadow-cyan-400/30 transition-all shadow-md shadow-white/10"
              >
                Request a Flight Quote
              </button>
              <a
                href="mailto:advisor@skyelite-aviation.com"
                className="aero-btn inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white text-sm font-medium border border-white/10 hover:border-cyan-400/40 transition-colors"
              >
                <Mail size={16} /> advisor@skyelite-aviation.com
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-8 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-gray-400" /> Guaranteed Discrete Manifest
              </span>
              <span className="flex items-center gap-2">
                <Plane size={14} className="text-gray-400" /> 4-Hour Rapid Departure Ready
              </span>
              <span className="flex items-center gap-2">
                <PhoneCall size={14} className="text-gray-400" /> Direct Senior Flight Coordinator
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
