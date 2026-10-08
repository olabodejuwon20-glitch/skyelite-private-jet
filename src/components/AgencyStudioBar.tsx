import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Sparkles,
  Plane,
  Leaf,
  Car,
  Smile,
  ChevronDown,
  ChevronUp,
  Briefcase,
  Send,
  X,
  CheckCircle,
  ExternalLink
} from 'lucide-react'

const BRANDS = [
  {
    id: 'aviation',
    name: 'SkyElite',
    sector: 'Private Jet Aviation',
    path: '/',
    icon: Plane,
    color: 'from-sky-400 to-blue-600',
    tag: 'Aviation Luxury',
  },
  {
    id: 'wellness',
    name: 'Soma Sanctuary',
    sector: 'Wellness & Longevity',
    path: '/wellness',
    icon: Leaf,
    color: 'from-emerald-400 to-teal-600',
    tag: 'Longevity Medspa',
  },
  {
    id: 'autos',
    name: 'Vandenberg Automobili',
    sector: 'Bespoke Hypercars',
    path: '/autos',
    icon: Car,
    color: 'from-amber-400 to-orange-600',
    tag: '1,450 HP Hypercar',
  },
  {
    id: 'dental',
    name: 'Elysian Atelier',
    sector: 'Cosmetic Dentistry',
    path: '/dental',
    icon: Smile,
    color: 'from-rose-300 to-champagne-400',
    tag: 'Smile Architecture',
  },
]

export default function AgencyStudioBar() {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isAgencyModalOpen, setIsAgencyModalOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brandType: 'Wellness',
    budget: '$15k - $30k',
    notes: '',
  })

  const currentPath = location.pathname
  const activeBrand = BRANDS.find((b) =>
    b.path === '/' ? currentPath === '/' || currentPath === '/discover' || currentPath === '/book' || currentPath === '/faq' : currentPath.startsWith(b.path)
  ) || BRANDS[0]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySent(true)
    setTimeout(() => {
      setInquirySent(false)
      setIsAgencyModalOpen(false)
    }, 2500)
  }

  return (
    <>
      {/* Studio Bar Header */}
      <header
        aria-label="Agency Studio Switcher"
        className="sticky top-0 z-50 w-full bg-[#070b12]/90 backdrop-blur-xl border-b border-white/10 transition-all duration-300 shadow-2xl shadow-black/40"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Agency Brand Identity */}
            <div className="flex items-center gap-3">
              <Link
                to="/agency"
                className="group flex items-center gap-2 text-white hover:text-cyan-400 transition-colors"
                title="View Agency Portfolio Overview"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-[#070b12] rounded-[7px] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                  </div>
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-bold tracking-widest uppercase text-white/90 font-mono">
                    KINESIS ATELIER
                  </span>
                  <span className="text-[10px] text-gray-400 tracking-wider">
                    Digital Brand Portfolio
                  </span>
                </div>
              </Link>

              <div className="hidden md:block h-6 w-px bg-white/10" />

              {/* Current Active Indicator */}
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Active Concept: <strong className="text-white">{activeBrand.name}</strong>
              </span>
            </div>

            {/* Brand Switcher Nav (Pills) */}
            <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {BRANDS.map((brand) => {
                const Icon = brand.icon
                const isActive =
                  brand.path === '/'
                    ? currentPath === '/' || currentPath === '/discover' || currentPath === '/book' || currentPath === '/faq'
                    : currentPath.startsWith(brand.path)

                return (
                  <Link
                    key={brand.id}
                    to={brand.path}
                    className={`aero-btn relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'bg-white text-gray-900 shadow-md shadow-white/15 scale-100 font-semibold'
                        : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-600' : 'text-gray-400'}`} />
                    <span className="hidden sm:inline">{brand.name}</span>
                    <span className="sm:hidden">{brand.name.split(' ')[0]}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                to="/agency"
                className="aero-btn hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full text-xs text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10"
              >
                <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                Agency Hub
              </Link>

              <button
                type="button"
                onClick={() => setIsAgencyModalOpen(true)}
                className="aero-btn aero-sheen flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span className="hidden sm:inline">Inquire / Book</span>
                <span className="sm:hidden">Hire</span>
              </button>

              <button
                type="button"
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                title={isCollapsed ? 'Expand Details' : 'Minimize Details'}
                aria-label="Toggle Details"
              >
                {isCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Sub-strip with Brand Specs (Collapsible) */}
          {!isCollapsed && (
            <div className="mt-2 pt-2 border-t border-white/5 hidden md:flex items-center justify-between text-[11px] text-gray-400">
              <div className="flex items-center gap-4">
                <span className="text-gray-300 font-medium">Portfolio Showcase:</span>
                <span className="text-gray-400">⚡ Bespoke React 19 + Tailwind Architecture</span>
                <span className="text-gray-400">💎 Zero-Lag Micro-Interactions</span>
                <span className="text-gray-400">✨ Custom Brand Identity & Photorealistic Art Direction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-cyan-400 flex items-center gap-1 font-mono">
                  Switching Active Brand changes design system & aesthetic
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Agency Client Inquiry Drawer / Modal */}
      {isAgencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-[#0d131f] border border-white/15 rounded-2xl shadow-2xl shadow-cyan-500/10 p-6 sm:p-8 overflow-hidden aero-card">
            <button
              type="button"
              onClick={() => setIsAgencyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-sm text-gray-300 max-w-md">
                  Thank you! Our studio director will review your project brief and get back to you within 24 hours with a bespoke proposal.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    Kinesis Agency Consultation
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Commission a High-Converting Brand Design
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Have a vision for a luxury brand, tech platform, or bespoke web experience? Tell us about your project.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Montgomery"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                        Business Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@luxurygroup.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                        Brand Industry / Sector
                      </label>
                      <select
                        value={formData.brandType}
                        onChange={(e) => setFormData({ ...formData, brandType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="Wellness">Wellness & Biohacking</option>
                        <option value="Autos">Automotive & Hypercars</option>
                        <option value="Dental">Cosmetic Dental Clinic</option>
                        <option value="Aviation">Private Aviation & Yachting</option>
                        <option value="RealEstate">Ultra-Luxury Real Estate</option>
                        <option value="Custom">Other Custom Bespoke Brand</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                        Estimated Scope / Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#141b2b] border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="$10k - $20k">$10,000 – $20,000</option>
                        <option value="$20k - $40k">$20,000 – $40,000</option>
                        <option value="$40k+">$40,000+ (Full Brand Ecosystem)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-300 uppercase tracking-wider mb-1">
                      Brief Project Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Tell us what you want to build (e.g., custom booking engine, 3D configurator, rebranding)..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAgencyModalOpen(false)}
                      className="px-4 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="aero-btn aero-sheen px-6 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                    >
                      <Send className="w-4 h-4" />
                      Submit Project Brief
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
