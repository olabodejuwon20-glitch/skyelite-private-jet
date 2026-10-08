import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

interface NavbarProps {
  variant?: 'transparent' | 'solid'
}

export default function Navbar({ variant = 'transparent' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navLinks = [
    { name: 'Start', href: '#start' },
    { name: 'Story', href: '#story' },
    { name: 'Rates', href: '#rates' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'FAQ', href: '#faq' },
  ]

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    if (isHome) {
      if (href === '#start') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        const el = document.querySelector(href)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }
    } else {
      navigate('/' + href)
    }
  }

  const bgClass =
    variant === 'solid'
      ? 'bg-[#0b0f17]/95 backdrop-blur-lg border-b border-white/5'
      : ''

  const textClass = variant === 'solid' ? 'text-white' : 'text-gray-900'
  const hoverClass = variant === 'solid' ? 'hover:text-gray-300' : 'hover:text-gray-700'

  return (
    <header className={`relative z-30 w-full ${bgClass}`}>
      <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault()
            navigate('/')
          }}
          className={`text-2xl font-semibold ${textClass} tracking-tight transition-opacity hover:opacity-85`}
        >
          SkyElite
        </a>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center space-x-8 ${textClass} text-sm font-medium`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={isHome ? link.href : '/' + link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`${hoverClass} transition-colors duration-200 cursor-pointer`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button for Navbar */}
        <div className="hidden md:flex items-center gap-3">
          <button
            type="button"
            onClick={() => navigate('/discover')}
            className={`aero-btn text-xs font-semibold px-4 py-2 rounded-full transition-all ${
              variant === 'solid'
                ? 'text-gray-300 hover:text-white bg-white/5 hover:bg-white/10 hover:border-cyan-400/30'
                : 'text-gray-800 hover:text-black bg-black/5 hover:bg-black/10'
            }`}
          >
            Discover Fleet
          </button>
          <button
            type="button"
            onClick={() => navigate('/book')}
            className={`aero-btn aero-sheen inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full transition-all shadow-sm ${
              variant === 'solid'
                ? 'bg-white text-[#0b0f17] hover:bg-gray-100 hover:shadow-cyan-400/30'
                : 'bg-[#202A36] text-white hover:bg-[#151c24] hover:shadow-cyan-400/20'
            }`}
          >
            Book Now
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg ${textClass} hover:bg-black/5 transition-colors focus:outline-none`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mx-6 mt-1 p-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 animate-in fade-in duration-200">
          <ul className="flex flex-col space-y-4 text-gray-900 text-base font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={isHome ? link.href : '/' + link.href}
                  className="block px-2 py-1 hover:text-gray-700 transition-colors"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200/80 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate('/discover')
                }}
                className="w-full text-left px-2 py-2 text-sm font-semibold text-gray-700 hover:text-black"
              >
                Discover Fleet & Aircraft
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  navigate('/book')
                }}
                className="w-full text-center py-3 rounded-xl bg-[#202A36] text-white text-sm font-semibold hover:bg-[#151c24]"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
