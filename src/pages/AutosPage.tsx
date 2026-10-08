import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Gauge,
  Zap,
  Shield,
  Sliders,
  ChevronRight,
  Flame,
  CheckCircle,
  X,
  Compass,
  Sparkles,
  Layers,
  Activity
} from 'lucide-react'

const FINISHES = [
  { id: 'carbon', name: 'Raw Liquid Carbon', hex: '#1c1f24', accent: 'border-gray-500' },
  { id: 'rosso', name: 'Monza Rosso Metallic', hex: '#b91c1c', accent: 'border-red-500' },
  { id: 'cyan', name: 'Cyber Neon Cyan', hex: '#06b6d4', accent: 'border-cyan-400' },
  { id: 'emerald', name: 'British Racing Emerald', hex: '#047857', accent: 'border-emerald-500' },
  { id: 'arctic', name: 'Arctic Pearlescent', hex: '#e2e8f0', accent: 'border-slate-300' },
]

const AERO_MODES = [
  {
    mode: 'Street Cruiser',
    drag: 'Cd 0.28 (Minimum Drag)',
    downforce: '350 kg @ 150 mph',
    rideHeight: '120 mm Ground Clearance',
    desc: 'Adaptive suspension raises front axle, active wing tucked into rear deck for effortless urban transit.',
  },
  {
    mode: 'Track Attack',
    drag: 'Cd 0.38 (High Stability)',
    downforce: '1,280 kg @ 180 mph',
    rideHeight: '85 mm Ground Clearance',
    desc: 'Hydraulic carbon wing pitches to 34° high-angle downforce with underbody ground-effect venturi channels open.',
  },
  {
    mode: 'V-Max Velocity',
    drag: 'Cd 0.24 (Slipstream)',
    downforce: '450 kg High-Speed Trim',
    rideHeight: '75 mm Ultra Low',
    desc: 'Full DRS flap deployment, active wheel vanes sealed for maximum 248+ MPH top speed runs.',
  },
]

export default function AutosPage() {
  const navigate = useNavigate()
  const [activeFinish, setActiveFinish] = useState(FINISHES[0])
  const [selectedAero, setSelectedAero] = useState(AERO_MODES[1])
  const [isTestDriveOpen, setIsTestDriveOpen] = useState(false)
  const [inquirySent, setInquirySent] = useState(false)
  const [testDriveData, setTestDriveData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Previous Supercar Owner',
    location: 'Monaco Atelier & Circuit Paul Ricard',
  })

  const handleTestDriveSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setInquirySent(true)
    setTimeout(() => {
      setInquirySent(false)
      setIsTestDriveOpen(false)
    }, 2800)
  }

  return (
    <div className="min-h-screen bg-[#06080d] text-white font-sans selection:bg-cyan-500 selection:text-black">
      {/* Hypercar Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/auto_hypercar.jpg"
            alt="Vandenberg Nemesis GT Hypercar"
            className="w-full h-full object-cover object-center brightness-[0.72] scale-100 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080d] via-[#06080d]/40 to-[#06080d]/70" />
          <div className="absolute inset-0 bg-cyan-950/15 mix-blend-color" />
        </div>

        {/* Ambient Telemetry Accents */}
        <div className="absolute top-1/3 left-10 hidden xl:block text-xs font-mono text-cyan-400/60 space-y-1">
          <p>SYS.TELEMETRY: ONLINE</p>
          <p>AERODYNAMICS: ACTIVE V2.4</p>
          <p>CHASSIS: FORGED MONOCOQUE</p>
        </div>

        <div className="absolute top-1/3 right-10 hidden xl:block text-xs font-mono text-cyan-400/60 text-right space-y-1">
          <p>HYBRID BATTERY: 800V DC</p>
          <p>TORQUE VECTORING: 4-MOTOR AWD</p>
          <p>DRY WEIGHT: 1,390 KG</p>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider bg-white/10 border border-white/20 text-cyan-300 backdrop-blur-md mb-6 aero-card">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>VANDENBERG AUTOMOBILI • ATELIER MODENA</span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white uppercase italic leading-[1.02]">
            NEMESIS GT. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-200 to-amber-300">
              1,450 HORSEPOWER.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
            Quad-motor electric torque meets an atmospheric high-revving 9,500 RPM V12. Built by hand in limited allocations of 33 chassis worldwide.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => setIsTestDriveOpen(true)}
              className="aero-btn aero-sheen px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Flame className="w-4 h-4 text-amber-300" />
              Commission Allocation
            </button>
            <a
              href="#configurator"
              className="aero-btn px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-medium text-xs uppercase tracking-widest border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-cyan-400" />
              Bespoke Configurator
            </a>
          </div>

          {/* Performance Telemetry Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10 text-left">
            <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
              <p className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono">1.98 s</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">0–60 MPH Sprint</p>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
              <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono">248 MPH</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">V-Max Top Speed</p>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono">1,450 HP</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Hybrid Quad-Motor</p>
            </div>
            <div className="p-3 bg-white/[0.02] rounded-xl border border-white/5">
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono">1.45 G</p>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-1">Lateral Cornering Grip</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Aero & Configurator Section */}
      <section id="configurator" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold mb-2">
            TELEMETRY & SPECIFICATION ATELIER
          </p>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
            Configure Your Chassis
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-400">
            Tailor the carbon weave, aerodynamic pitch angle, and telemetry calibration for track or continent crossing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase Card */}
          <div className="lg:col-span-7 bg-[#0b101b] border border-white/10 rounded-3xl p-6 sm:p-8 relative overflow-hidden aero-card shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono uppercase text-gray-300">
                  Finish: <strong className="text-white">{activeFinish.name}</strong>
                </span>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                Aerodynamic Mode: {selectedAero.mode}
              </span>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/auto_hypercar.jpg"
                alt="Chassis Preview"
                className="w-full h-[360px] object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0 mix-blend-color opacity-30 pointer-events-none transition-colors duration-500"
                style={{ backgroundColor: activeFinish.hex }}
              />
            </div>

            {/* Finish Selection Swatches */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-mono">
                  Exterior Carbon Tint
                </p>
                <div className="flex items-center gap-3">
                  {FINISHES.map((finish) => (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setActiveFinish(finish)}
                      className={`w-9 h-9 rounded-full border-2 transition-all p-0.5 cursor-pointer ${
                        activeFinish.id === finish.id ? 'scale-110 ' + finish.accent : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                      style={{ backgroundColor: finish.hex }}
                      title={finish.name}
                    />
                  ))}
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-400 uppercase tracking-wider font-mono">Chassis Monocoque</p>
                <p className="text-sm font-bold text-white">Full T1000 Carbon Fiber</p>
              </div>
            </div>
          </div>

          {/* Active Aerodynamic Control Modes */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
              Select Active Aerodynamic Telemetry
            </h3>

            {AERO_MODES.map((aero, idx) => {
              const isSelected = selectedAero.mode === aero.mode
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedAero(aero)}
                  className={`aero-card w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-950/30 border-cyan-400 shadow-xl shadow-cyan-500/10'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold uppercase tracking-wider text-white">
                      {aero.mode}
                    </span>
                    <span className="text-xs font-mono text-cyan-400">{aero.drag}</span>
                  </div>
                  <p className="text-xs text-gray-300 mt-2 leading-relaxed">{aero.desc}</p>

                  <div className="mt-4 pt-3 border-t border-white/10 flex justify-between text-[11px] font-mono text-gray-400">
                    <span>Downforce: <strong className="text-white">{aero.downforce}</strong></span>
                    <span>Ride Height: <strong className="text-white">{aero.rideHeight}</strong></span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cockpit & Interior Deep Dive */}
      <section className="py-20 bg-gradient-to-b from-[#0b101b] via-[#080d16] to-[#06080d] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold">
                THE ATELIER COCKPIT
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase italic tracking-tight">
                Forged Carbon. <br />
                Bespoke Italian Saddle.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Every switchgear is CNC-milled from aerospace-grade 7075 aluminum billet. The steering wheel features an integrated OLED shift light array, telemetry lap recording, and haptic feedback pedals.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-cyan-400">Audio Acoustics</h4>
                  <p className="text-sm font-semibold text-white mt-1">Sonus Faber 1,200W</p>
                  <p className="text-xs text-gray-400 mt-0.5">Active cabin noise cancellation</p>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                  <h4 className="text-xs font-mono uppercase text-cyan-400">Telemetry Screen</h4>
                  <p className="text-sm font-semibold text-white mt-1">Twin 14.2" Micro-OLED</p>
                  <p className="text-xs text-gray-400 mt-0.5">Real-time G-force & thermal logs</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setIsTestDriveOpen(true)}
                  className="aero-btn aero-sheen px-7 py-3.5 rounded-full bg-white text-gray-950 font-bold text-xs uppercase tracking-widest shadow-lg hover:bg-gray-100 cursor-pointer"
                >
                  Book Private Viewing
                </button>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden border border-cyan-500/20 shadow-2xl aero-card">
              <img
                src="/images/auto_cockpit.jpg"
                alt="Hypercar Cockpit Interior"
                className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                <span className="font-semibold text-cyan-400">Nemesis GT Cockpit</span> — Hand-stitched saddle leather with exposed forged carbon monocoque.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Private Commission Inquiry Modal */}
      {isTestDriveOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-[#0e1422] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 aero-card shadow-2xl">
            <button
              type="button"
              onClick={() => setIsTestDriveOpen(false)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySent ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase italic">Allocation Request Received</h3>
                <p className="text-sm text-gray-300 max-w-sm">
                  Our private client liaison will contact you with build slot availability and circuit viewing details.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-cyan-400 font-mono font-semibold block mb-1">
                    VANDENBERG PRIVATE ATELIER
                  </span>
                  <h3 className="text-2xl font-bold text-white uppercase italic">
                    Request Build Slot & Track Test
                  </h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Allocations are strictly vetted. Private viewing at Paul Ricard, Fiorano, or Yas Marina.
                  </p>
                </div>

                <form onSubmit={handleTestDriveSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                      Full Legal Name
                    </label>
                    <input
                      type="text"
                      required
                      value={testDriveData.name}
                      onChange={(e) => setTestDriveData({ ...testDriveData, name: e.target.value })}
                      placeholder="e.g. Lord Alexander Sinclair"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                        Private Email
                      </label>
                      <input
                        type="email"
                        required
                        value={testDriveData.email}
                        onChange={(e) => setTestDriveData({ ...testDriveData, email: e.target.value })}
                        placeholder="a.sinclair@holding.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                        Direct Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        value={testDriveData.phone}
                        onChange={(e) => setTestDriveData({ ...testDriveData, phone: e.target.value })}
                        placeholder="+377 98 06 20 00"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-black/50 border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-cyan-300 uppercase tracking-wider mb-1">
                      Preferred Circuit / Atelier
                    </label>
                    <select
                      value={testDriveData.location}
                      onChange={(e) => setTestDriveData({ ...testDriveData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#0b101b] border border-cyan-500/30 text-white text-sm focus:outline-none focus:border-cyan-400"
                    >
                      <option value="Monaco Atelier & Circuit Paul Ricard">Monaco Atelier & Circuit Paul Ricard (France)</option>
                      <option value="Modena Factory & Fiorano">Modena Atelier & Fiorano Circuit (Italy)</option>
                      <option value="Thermal Club California">The Thermal Club (California, USA)</option>
                      <option value="Yas Marina Circuit">Yas Marina Circuit (Abu Dhabi)</option>
                    </select>
                  </div>

                  <div className="pt-2 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setIsTestDriveOpen(false)}
                      className="px-4 py-2.5 rounded-xl text-xs text-gray-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="aero-btn aero-sheen px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-gray-950 font-bold text-xs uppercase tracking-widest shadow-lg shadow-cyan-400/25"
                    >
                      Submit Allocation Request
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Autos Brand Footer */}
      <footer className="border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-xs text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <span className="font-mono font-bold text-white text-base tracking-widest">VANDENBERG AUTOMOBILI</span>
          <span className="ml-2 text-cyan-400 font-mono text-[10px]">MODENA • MONACO • DUBAI</span>
        </div>
        <p>© 2026 Vandenberg Automobili S.p.A. Part of the Kinesis Studio Portfolio.</p>
        <div className="flex gap-4">
          <button type="button" onClick={() => navigate('/agency')} className="hover:text-white underline">
            Agency Portfolio Hub
          </button>
          <button type="button" onClick={() => navigate('/')} className="hover:text-white">
            SkyElite Jets
          </button>
          <button type="button" onClick={() => navigate('/wellness')} className="hover:text-white">
            SOMA Wellness
          </button>
        </div>
      </footer>
    </div>
  )
}
