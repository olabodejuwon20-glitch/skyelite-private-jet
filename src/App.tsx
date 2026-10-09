import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import NexolabHomePage from './pages/NexolabHomePage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-black font-sans selection:bg-[#5E0ED7] selection:text-white">
      <ScrollToTop />

      <main className="flex-1 w-full">
        <Routes>
          {/* Nexolab Studio - Unified Agency Flagship */}
          <Route path="/" element={<NexolabHomePage />} />
          <Route path="/work" element={<NexolabHomePage />} />
          <Route path="/services" element={<NexolabHomePage />} />
          <Route path="/process" element={<NexolabHomePage />} />
          <Route path="/about" element={<NexolabHomePage />} />
          <Route path="/contact" element={<NexolabHomePage />} />

          {/* Catch-all to Nexolab Studio */}
          <Route path="*" element={<NexolabHomePage />} />
        </Routes>
      </main>
    </div>
  )
}
