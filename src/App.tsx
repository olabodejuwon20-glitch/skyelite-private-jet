import { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import AgencyStudioBar from './components/AgencyStudioBar'
import Navbar from './components/Navbar'
import StorySection from './sections/StorySection'
import RatesSection from './sections/RatesSection'
import BenefitsSection from './sections/BenefitsSection'
import FAQSection from './sections/FAQSection'
import Footer from './components/Footer'
import BookPage from './pages/BookPage'
import DiscoverPage from './pages/DiscoverPage'
import FAQPage from './pages/FAQPage'
import WellnessPage from './pages/WellnessPage'
import AutosPage from './pages/AutosPage'
import DentalPage from './pages/DentalPage'
import AgencyHubPage from './pages/AgencyHubPage'

const videoUrl =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function SkyEliteHomePage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-[#0b0f17] text-white flex flex-col font-sans select-none">
      {/* Hero Section */}
      <section
        id="start"
        className="relative min-h-screen w-full overflow-hidden bg-gray-50 flex flex-col justify-between"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <video
            className="w-full h-full object-cover"
            src={videoUrl}
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Subtle overlay for optimal contrast and readability */}
          <div className="absolute inset-0 bg-white/10 backdrop-contrast-[1.05]" />
        </div>

        {/* Navigation Bar */}
        <Navbar variant="transparent" />

        {/* Hero Content Section */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl text-center flex flex-col items-center justify-center -mt-20 md:-mt-32">
            {/* Small Uppercase Label */}
            <p className="text-xs sm:text-sm font-semibold text-gray-600 tracking-widest uppercase mb-3 sm:mb-4">
              PRIVATE JETS
            </p>

            {/* Overlapping / Stacked Hero Headings */}
            <div className="flex flex-col items-center">
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-gray-500/90 leading-none tracking-tighter">
                Premium.
              </h1>
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#202A36] leading-none tracking-tight -mt-3 sm:-mt-5">
                Accessible.
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Your dedication deserves recognition.
            </p>

            {/* CTA Buttons with Subtle Futuristic Touch Animations */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => navigate('/discover')}
                className="aero-btn aero-sheen px-7 py-3.5 rounded-full bg-gray-200/90 text-gray-800 text-sm font-medium transition-all duration-300 hover:bg-gray-300 hover:shadow-lg hover:shadow-cyan-400/20 active:scale-95 cursor-pointer"
              >
                Discover
              </button>
              <button
                type="button"
                onClick={() => navigate('/book')}
                className="aero-btn aero-sheen px-7 py-3.5 rounded-full bg-[#202A36] text-white text-sm font-medium transition-all duration-300 hover:bg-[#151c24] hover:shadow-xl hover:shadow-cyan-500/25 active:scale-95 cursor-pointer border border-white/10"
              >
                Book Now
              </button>
            </div>
          </div>
        </main>

        {/* Bottom subtle scroll indicator */}
        <div className="relative z-10 pb-6 flex justify-center">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('story')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="text-xs uppercase tracking-widest text-gray-500/80 hover:text-gray-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            Scroll to explore
            <span className="inline-block animate-bounce">&darr;</span>
          </button>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Rates Section */}
      <RatesSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#070a10]">
      <ScrollToTop />
      {/* Global Agency Studio Switcher Bar */}
      <AgencyStudioBar />

      <div className="flex-1">
        <Routes>
          {/* Brand 1: SkyElite Private Jet Aviation */}
          <Route path="/" element={<SkyEliteHomePage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/faq" element={<FAQPage />} />

          {/* Brand 2: SOMA Longevity & Biohacking Wellness Sanctuary */}
          <Route path="/wellness" element={<WellnessPage />} />

          {/* Brand 3: Vandenberg Automobili 1,450 HP Hypercar Atelier */}
          <Route path="/autos" element={<AutosPage />} />

          {/* Brand 4: Elysian Dental Atelier & Smile Architecture */}
          <Route path="/dental" element={<DentalPage />} />

          {/* Agency Portfolio Showcase & Client Inquiries */}
          <Route path="/agency" element={<AgencyHubPage />} />

          {/* Fallback */}
          <Route path="*" element={<SkyEliteHomePage />} />
        </Routes>
      </div>
    </div>
  )
}
