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
  ArrowUpRight
} from 'lucide-react'

const BRANDS = [
  {
    id: 'nexolab',
    name: 'Nexolab Agency',
    sector: 'Creative Studio',
    path: '/',
    icon: Sparkles,
    tag: 'Flagship Agency',
  },
  {
    id: 'wellness',
    name: 'Soma Sanctuary',
    sector: 'Wellness & Longevity',
    path: '/wellness',
    icon: Leaf,
    tag: 'Longevity Medspa',
  },
  {
    id: 'autos',
    name: 'Vandenberg Automobili',
    sector: 'Bespoke Hypercars',
    path: '/autos',
    icon: Car,
    tag: '1,450 HP Hypercar',
  },
  {
    id: 'dental',
    name: 'Elysian Atelier',
    sector: 'Cosmetic Dentistry',
    path: '/dental',
    icon: Smile,
    tag: 'Smile Architecture',
  },
  {
    id: 'aviation',
    name: 'SkyElite Jets',
    sector: 'Private Jet Aviation',
    path: '/aviation',
    icon: Plane,
    tag: 'Aviation Luxury',
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
    budget: '$25,000+',
    notes: '',
  })

  const currentPath = location.pathname
  const activeBrand =
    BRANDS.find((b) =>
      b.path === '/'
        ? currentPath === '/'
        : currentPath.startsWith(b.path)
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
        aria-label="Nexolab Studio Bar"
        className="sticky top-0 z-40 w-full bg-[#0a0614]/95 backdrop-blur-xl border-b border-purple-900/30 transition-all duration-300 shadow-xl shadow-black/40"
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Agency Brand Identity */}
            <div className="flex items-center gap-3">
              <Link
                to="/"
                className="group flex items-center gap-2.5 text-white hover:text-purple-300 transition-colors"
                title="Nexolab Studio Home"
              >
                {/* 32px round logo with 2px border in #5E0ED7 and 10px solid dot */}
                <div className="w-7 h-7 rounded-full border-2 border-[#5E0ED7] flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5E0ED7]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold tracking-widest uppercase text-white font-mono">
                    NEXOLAB STUDIO
                  </span>
                  <span className="text-[9px] text-purple-300/80 tracking-wider hidden sm:inline">
                    Brand & Product Atelier
                  </span>
                </div>
              </Link>

              <div className="hidden md:block h-6 w-px bg-white/10" />

              {/* Current Active Concept Pill */}
              <span className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 border border-white/10 text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5E0ED7] animate-pulse" />
                Active View: <strong className="text-white">{activeBrand.name}</strong>
              </span>
            </div>

            {/* Brand Switcher Nav Pills */}
            <nav className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {BRANDS.map((brand) => {
                const Icon = brand.icon
                const isActive =
                  brand.path === '/'
                    ? currentPath === '/'
                    : currentPath.startsWith(brand.path)

                return (
                  <Link
                    key={brand.id}
                    to={brand.path}
                    className={`aero-btn relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 shrink-0 ${
                      isActive
                        ? 'bg-white text-black shadow-md shadow-purple-500/10 font-semibold'
                        : 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#5E0ED7]' : 'text-gray-400'}`} />
                    <span className="hidden sm:inline">{brand.name}</span>
                    <span className="sm:hidden">{brand.name.split(' ')[0]}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#5E0ED7]" />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAgencyModalOpen(true)}
                className="aero-btn aero-sheen flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-semibold bg-[#5E0ED7] hover:bg-[#6c14f0] text-white shadow-lg shadow-purple-900/30 cursor-pointer"
              >
                <Send className="w-3 h-3" />
                <span className="hidden sm:inline">Work With Us</span>
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

          {/* Sub-strip with Studio Stats (Collapsible) */}
          {!isCollapsed && (
            <div className="mt-2 pt-2 border-t border-purple-900/20 hidden md:flex items-center justify-between text-[11px] text-gray-400">
              <div className="flex items-center gap-4">
                <span className="text-purple-300 font-medium">Nexolab Studios:</span>
                <span>+300 Crafted Brands</span>
                <span>+200 Digital Products</span>
                <span>+100 Ventures Funded</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#a464ff] flex items-center gap-1 font-mono">
                  Bespoke Interactive Brand Portals
                </span>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Client Inquiry Modal */}
      {isAgencyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl text-black">
            <button
              type="button"
              onClick={() => setIsAgencyModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-black rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-purple-100 border border-[#5E0ED7] flex items-center justify-center text-[#5E0ED7]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold uppercase text-black">Brief Received</h3>
                <p className="text-sm text-neutral-600 max-w-md">
                  Thank you! Nexolab Studio's creative team will review your project brief and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-[#5E0ED7] border border-purple-200 mb-2 uppercase tracking-widest">
                    <span>NEXOLAB STUDIO CONSULTATION</span>
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight text-black">
                    Work With Nexolab Studio
                  </h3>
                  <p className="text-sm text-neutral-600 mt-1">
                    Ready to build a fearless, high-converting digital experience for your brand?
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-black">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Julian Montgomery"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-black text-sm focus:outline-none focus:border-[#5E0ED7]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-black">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="julian@venture.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-black text-sm focus:outline-none focus:border-[#5E0ED7]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-black">
                        Industry / Sector
                      </label>
                      <select
                        value={formData.brandType}
                        onChange={(e) => setFormData({ ...formData, brandType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-black text-sm focus:outline-none focus:border-[#5E0ED7]"
                      >
                        <option value="Wellness">Wellness & Longevity</option>
                        <option value="Autos">Automotive & Hypercars</option>
                        <option value="Dental">Cosmetic Dental Clinic</option>
                        <option value="Aviation">Private Aviation</option>
                        <option value="Custom">Custom Venture</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-black">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-black text-sm focus:outline-none focus:border-[#5E0ED7]"
                      >
                        <option value="$15k - $30k">$15,000 – $30,000</option>
                        <option value="$30k - $60k">$30,000 – $60,000</option>
                        <option value="$60k+">$60,000+ (Full Platform Ecosystem)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider mb-1 text-black">
                      Brief Project Overview
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share your vision, brand goals, and timeline..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 text-black text-sm focus:outline-none focus:border-[#5E0ED7] resize-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAgencyModalOpen(false)}
                      className="px-4 py-2.5 rounded-lg text-sm text-neutral-500 hover:text-black uppercase font-semibold tracking-wider"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-lg bg-[#5E0ED7] hover:bg-[#6e15f3] text-white font-semibold text-xs uppercase tracking-widest flex items-center gap-2 shadow-lg shadow-purple-900/20 cursor-pointer"
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
