import { ChevronRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="relative bg-[#0b0f17] border-t border-white/5 text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-8 py-20 text-center">
        <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
          READY TO FLY?
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white mb-6 tracking-tight">
          Elevate your journey today
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => navigate('/book')}
            className="aero-btn aero-sheen inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#0b0f17] text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-cyan-400/25"
          >
            Book Your Flight
            <ChevronRight size={16} />
          </button>
          <button
            type="button"
            onClick={() => navigate('/discover')}
            className="aero-btn aero-sheen inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/5 text-white text-sm font-medium transition-all duration-300 hover:bg-white/10 border border-white/10 hover:border-cyan-400/30"
          >
            Discover Fleet
          </button>
        </div>
      </div>

      {/* Navigation & Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div
              onClick={() => navigate('/')}
              className="text-xl font-semibold text-white tracking-tight cursor-pointer"
            >
              SkyElite
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Private Aviation. Reimagined for modern speed &amp; privacy.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-gray-400">
            <button
              type="button"
              onClick={() => navigate('/discover')}
              className="hover:text-white transition-colors"
            >
              Discover
            </button>
            <button
              type="button"
              onClick={() => navigate('/faq')}
              className="hover:text-white transition-colors"
            >
              FAQs
            </button>
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="hover:text-white transition-colors"
            >
              Book Now
            </button>
            <a href="#story" className="hover:text-white transition-colors">
              Our Story
            </a>
            <a href="#rates" className="hover:text-white transition-colors">
              Rates
            </a>
          </div>

          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} SkyElite Aviation Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
