import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  ArrowLeft,
  Plane,
  Gauge,
  Compass,
  Users,
  ShieldCheck,
  Wifi,
  Coffee,
  Sparkles,
  ChevronRight,
  Clock,
  MapPin,
  Luggage,
  SlidersHorizontal,
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export interface JetVariant {
  id: string
  name: string
  manufacturer: string
  model: string
  tagline: string
  badge: string
  passengers: string
  range: string
  speed: string
  baggage: string
  hourlyRate: string
  description: string
  highlights: string[]
  specs: {
    cabinHeight: string
    cabinWidth: string
    cabinLength: string
    endurance: string
    runwayReq: string
    serviceCeiling: string
  }
}

export interface AircraftClass {
  id: string
  categoryName: string
  overview: string
  variants: [JetVariant, JetVariant]
}

export const fleetClasses: AircraftClass[] = [
  {
    id: 'light',
    categoryName: 'Light Jet',
    overview:
      'Engineered for swift regional hops and executive day trips. Combines supreme climb rates with the ability to touch down on short mountain runways and island airfields.',
    variants: [
      {
        id: 'citation-cj4',
        name: 'Cessna Citation CJ4 Gen2',
        manufacturer: 'Textron Aviation',
        model: 'Citation CJ4 Gen2',
        tagline: 'Executive Agility & Short-Field Access',
        badge: 'Best-Seller',
        passengers: '7 - 8 Seats',
        range: '2,165 nm (approx. 4,010 km)',
        speed: '451 kts (835 km/h)',
        baggage: '77 cu ft (8 - 10 cases)',
        hourlyRate: '$4,600',
        description:
          'The undisputed standard for corporate regional efficiency. Combines supreme climb performance and quiet cabin acoustic technology with the capability to touch down on runways as short as 3,410 ft, opening up direct arrivals to remote ski chalets and island airfields.',
        highlights: [
          'Single-pilot certified Collins Aerospace Pro Line 21 avionics',
          'Ergonomic swivel seating with dual executive fold-out tables',
          'Fresh-air circulation system replenished every 120 seconds',
          'Enclosed aft lavatory with natural light skylight',
        ],
        specs: {
          cabinHeight: '4 ft 9 in',
          cabinWidth: '4 ft 10 in',
          cabinLength: '17 ft 4 in',
          endurance: '4.5 Hours',
          runwayReq: '3,410 ft',
          serviceCeiling: '45,000 ft',
        },
      },
      {
        id: 'phenom-300e',
        name: 'Embraer Phenom 300E',
        manufacturer: 'Embraer Executive Jets',
        model: 'Phenom 300E',
        tagline: 'High-Speed Transcontinental Performer',
        badge: 'Fastest in Class',
        passengers: '8 - 9 Seats',
        range: '2,010 nm (approx. 3,723 km)',
        speed: '464 kts (859 km/h - Mach 0.80)',
        baggage: '84 cu ft (largest in light category)',
        hourlyRate: '$4,900',
        description:
          'The fastest and longest-range single-pilot jet in active production. Features Embraer’s bespoke Bossa Nova carbon-accent interior, oversized cabin windows, and best-in-class cabin altitude (6,600 ft at FL450) to virtually eliminate flight fatigue.',
        highlights: [
          'Class-leading Mach 0.80 top cruise speed',
          'Bespoke Bossa Nova diamond-quilted leather ergonomics',
          'Largest baggage compartment in light jet category (84 cu ft)',
          'Lufthansa Technik upper technology touch panel with smart climate',
        ],
        specs: {
          cabinHeight: '4 ft 11 in',
          cabinWidth: '5 ft 1 in',
          cabinLength: '17 ft 2 in',
          endurance: '4.8 Hours',
          runwayReq: '3,209 ft',
          serviceCeiling: '45,000 ft',
        },
      },
    ],
  },
  {
    id: 'super-midsize',
    categoryName: 'Super-Midsize',
    overview:
      'The definitive benchmark for coast-to-coast and transatlantic flights with true stand-up flat-floor headroom, transcontinental range, and whisper-quiet cabins.',
    variants: [
      {
        id: 'challenger-3500',
        name: 'Bombardier Challenger 3500',
        manufacturer: 'Bombardier Aviation',
        model: 'Challenger 3500',
        tagline: 'Flat-Floor Acoustic Sanctuary',
        badge: 'Ultimate Comfort',
        passengers: '9 - 10 Seats',
        range: '3,400 nm (approx. 6,300 km)',
        speed: '470 kts (870 km/h)',
        baggage: '106 cu ft (12 cases)',
        hourlyRate: '$7,200',
        description:
          'An engineering masterpiece blending transcontinental reach with residential tranquility. Featuring revolutionary Nuage tilt-and-pivot zero-gravity seating, voice-controlled cabin management, and the lowest sound level in the super-midsize segment.',
        highlights: [
          'Patented Nuage zero-gravity ergonomic comfort seating',
          'Continuous flat-floor walkaround cabin with 6 ft standing headroom',
          'Voice-controlled cabin lighting, temperature, and audio suite',
          'Lowest direct cabin sound level in the super-midsize category',
        ],
        specs: {
          cabinHeight: '6 ft 0 in',
          cabinWidth: '7 ft 2 in',
          cabinLength: '25 ft 2 in',
          endurance: '7.4 Hours',
          runwayReq: '4,835 ft',
          serviceCeiling: '45,000 ft',
        },
      },
      {
        id: 'praetor-600',
        name: 'Embraer Praetor 600',
        manufacturer: 'Embraer Executive Jets',
        model: 'Praetor 600',
        tagline: 'Non-Stop Transatlantic Leader',
        badge: 'Longest Range',
        passengers: '9 - 12 Seats',
        range: '4,018 nm (approx. 7,440 km)',
        speed: '466 kts (863 km/h)',
        baggage: '155 cu ft (14 cases)',
        hourlyRate: '$7,600',
        description:
          'The only super-midsize jet capable of non-stop London to New York flights against adverse headwinds. Equipped with full digital fly-by-wire flight controls and active turbulence reduction technology for an exceptionally smooth, tranquil flight.',
        highlights: [
          'True 4,000+ nm non-stop intercontinental capability',
          'Full Fly-by-Wire with Active Turbulence Damping technology',
          'Class-leading 155 cu ft fully pressurized, accessible baggage hold',
          'HEPA medical-grade continuous air purification system',
        ],
        specs: {
          cabinHeight: '6 ft 0 in',
          cabinWidth: '6 ft 10 in',
          cabinLength: '26 ft 8 in',
          endurance: '8.5 Hours',
          runwayReq: '4,717 ft',
          serviceCeiling: '45,000 ft',
        },
      },
    ],
  },
  {
    id: 'ultra-long',
    categoryName: 'Ultra-Long-Range',
    overview:
      'The pinnacle of civil aviation connecting continents non-stop with bespoke residential staterooms, lie-flat master suites, and global satellite connectivity.',
    variants: [
      {
        id: 'global-7500',
        name: 'Bombardier Global 7500',
        manufacturer: 'Bombardier Aviation',
        model: 'Global 7500',
        tagline: 'Four-Zone Architectural Flagship',
        badge: 'Master Suite Class',
        passengers: '14 - 19 Seats',
        range: '7,700 nm (approx. 14,260 km)',
        speed: '516 kts (955 km/h - Mach 0.925)',
        baggage: '195 cu ft (20 cases)',
        hourlyRate: '$12,500',
        description:
          'The undisputed architectural flagship of private aviation. Features four distinct true living spaces including an executive dining boardroom, entertainment cinema suite, and permanent master stateroom with a double bed and en-suite stand-up shower.',
        highlights: [
          'Four distinct living spaces plus dedicated crew rest suite',
          'Master bedroom with permanent double bed and private shower',
          'Soleil circadian lighting system synced to destination timezone',
          'Smooth-flex transsonic wing for unrivaled turbulence dampening',
        ],
        specs: {
          cabinHeight: '6 ft 2 in',
          cabinWidth: '8 ft 0 in',
          cabinLength: '54 ft 5 in',
          endurance: '16.0 Hours',
          runwayReq: '5,760 ft',
          serviceCeiling: '51,000 ft',
        },
      },
      {
        id: 'gulfstream-g700',
        name: 'Gulfstream G700',
        manufacturer: 'Gulfstream Aerospace',
        model: 'G700',
        tagline: 'Unrivaled Speed & Lowest Cabin Altitude',
        badge: 'World Record Holder',
        passengers: '15 - 19 Seats',
        range: '7,750 nm (approx. 14,353 km)',
        speed: '516 kts (956 km/h - Mach 0.925)',
        baggage: '195 cu ft (22 cases)',
        hourlyRate: '$13,200',
        description:
          'Holder of over 50 global city-pair speed records, the G700 features the most spacious cabin in business aviation. Boasts 20 iconic panoramic oval windows and the lowest cabin altitude in the industry (2,914 ft at 41,000 ft) ensuring peak cognitive clarity upon arrival.',
        highlights: [
          '20 iconic Gulfstream panoramic oval windows for maximum natural light',
          'Industry-lowest cabin altitude: 2,914 ft at FL410',
          'Ultra-galley with 10 ft of counter space and dual convection ovens',
          'Whisper-quiet acoustic engineering with 100% fresh air flow',
        ],
        specs: {
          cabinHeight: '6 ft 3 in',
          cabinWidth: '8 ft 2 in',
          cabinLength: '56 ft 11 in',
          endurance: '16.2 Hours',
          runwayReq: '5,995 ft',
          serviceCeiling: '51,000 ft',
        },
      },
    ],
  },
]

const popularRoutes = [
  {
    from: 'New York (Teterboro)',
    to: 'Miami (Opa-locka)',
    time: '2h 20m',
    category: 'Light / Super-Midsize',
    distance: '1,090 mi',
  },
  {
    from: 'London (Luton)',
    to: 'Nice (Côte d’Azur)',
    time: '1h 55m',
    category: 'Light / Super-Midsize',
    distance: '645 mi',
  },
  {
    from: 'Los Angeles (Van Nuys)',
    to: 'Aspen (Pitkin County)',
    time: '1h 45m',
    category: 'Light Jet',
    distance: '740 mi',
  },
  {
    from: 'New York (JFK/TEB)',
    to: 'London (Farnborough)',
    time: '6h 15m',
    category: 'Ultra-Long-Range',
    distance: '3,450 mi',
  },
  {
    from: 'Paris (Le Bourget)',
    to: 'Dubai (Al Maktoum)',
    time: '6h 30m',
    category: 'Super-Midsize / Heavy',
    distance: '3,260 mi',
  },
  {
    from: 'Tokyo (Haneda)',
    to: 'Singapore (Seletar)',
    time: '6h 40m',
    category: 'Ultra-Long-Range',
    distance: '3,310 mi',
  },
]

export default function DiscoverPage() {
  const navigate = useNavigate()
  const [selectedClassId, setSelectedClassId] = useState<string>('super-midsize')
  const [selectedVariantId, setSelectedVariantId] = useState<string>('challenger-3500')
  const [showComparison, setShowComparison] = useState<boolean>(false)

  const activeClass =
    fleetClasses.find((c) => c.id === selectedClassId) || fleetClasses[1]

  const activeVariant =
    activeClass.variants.find((v) => v.id === selectedVariantId) ||
    activeClass.variants[0]

  const handleSelectClass = (classId: string) => {
    setSelectedClassId(classId)
    const targetClass = fleetClasses.find((c) => c.id === classId)
    if (targetClass) {
      setSelectedVariantId(targetClass.variants[0].id)
    }
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] text-white flex flex-col font-sans selection:bg-white/20">
      <Navbar variant="solid" />

      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-white/5">
        <div className="absolute inset-0 bg-radial-at-t from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to SkyElite
          </button>

          <div className="max-w-3xl">
            <span className="px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider bg-white/10 text-white/90 border border-white/15">
              Discover SkyElite Fleet &amp; Aircraft Variants
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white mt-6 mb-6">
              Engineering the art <br className="hidden sm:block" />
              of sovereign flight
            </h1>
            <p className="text-lg text-gray-400 font-normal leading-relaxed max-w-2xl">
              Explore 2 bespoke aircraft variants across every class: Light Jet, Super-Midsize, and
              Ultra-Long-Range flagships, curated for speed, range, cabin volume, and uncompromising discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Fleet Explorer Section */}
      <section className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          {/* Header & Class Switcher */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-3">
                THE FLEET
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2">
                Select your aircraft class
              </h2>
              <p className="text-sm text-gray-400 max-w-xl">
                {activeClass.overview}
              </p>
            </div>

            {/* 3 Aircraft Class Selector Tabs */}
            <div className="flex flex-wrap gap-2 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl">
              {fleetClasses.map((cls) => (
                <button
                  key={cls.id}
                  type="button"
                  onClick={() => handleSelectClass(cls.id)}
                  className={`aero-btn px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                    selectedClassId === cls.id
                      ? 'bg-white text-[#0b0f17] shadow-lg shadow-cyan-400/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cls.categoryName}
                </button>
              ))}
            </div>
          </div>

          {/* 2 Variants Selection Ribbon for the Active Class */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                Choose Variant in {activeClass.categoryName} (2 Models Available)
              </span>
              <button
                type="button"
                onClick={() => setShowComparison((prev) => !prev)}
                className="aero-btn inline-flex items-center gap-1.5 text-xs text-cyan-300 hover:text-white transition-colors px-3 py-1.5 rounded-lg bg-white/5 border border-white/10"
              >
                <SlidersHorizontal size={13} />
                {showComparison ? 'Close Comparison' : 'Compare Both Variants'}
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {activeClass.variants.map((v) => {
                const isSelected = selectedVariantId === v.id
                return (
                  <div
                    key={v.id}
                    onClick={() => setSelectedVariantId(v.id)}
                    className={`aero-card rounded-2xl p-6 border transition-all cursor-pointer relative overflow-hidden ${
                      isSelected
                        ? 'bg-gradient-to-br from-white/[0.09] to-white/[0.03] border-cyan-400/50 shadow-xl shadow-cyan-950/20'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider">
                          {v.manufacturer}
                        </span>
                        <h4 className="text-xl font-medium text-white">{v.name}</h4>
                      </div>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/10 text-white border border-white/10 shrink-0">
                        {v.badge}
                      </span>
                    </div>

                    <p className="text-xs text-gray-400 line-clamp-2 mb-4 leading-relaxed">
                      {v.tagline}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                      <div className="text-gray-400">
                        <span className="text-white font-medium">{v.passengers}</span> &bull; {v.range.split('(')[0]}
                      </div>
                      <div className="text-white font-medium">
                        {v.hourlyRate}<span className="text-gray-500 font-normal">/hr</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Side-by-Side Spec Comparison Matrix (Collapsible) */}
          {showComparison && (
            <div className="aero-card mb-12 rounded-3xl p-6 sm:p-8 border border-cyan-400/30 bg-gradient-to-b from-white/[0.04] to-white/[0.01]">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    Direct Model Comparison
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light text-white mt-1">
                    {activeClass.variants[0].model} vs {activeClass.variants[1].model}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setShowComparison(false)}
                  className="text-xs text-gray-400 hover:text-white"
                >
                  Close &times;
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-gray-400">
                      <th className="pb-4 font-normal">Specification</th>
                      <th className="pb-4 font-medium text-white">
                        {activeClass.variants[0].name}
                      </th>
                      <th className="pb-4 font-medium text-cyan-300">
                        {activeClass.variants[1].name}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-gray-300">
                    <tr>
                      <td className="py-3 text-gray-400">Hourly Rate</td>
                      <td className="py-3 font-semibold text-white">{activeClass.variants[0].hourlyRate}/hr</td>
                      <td className="py-3 font-semibold text-cyan-300">{activeClass.variants[1].hourlyRate}/hr</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Passenger Capacity</td>
                      <td className="py-3">{activeClass.variants[0].passengers}</td>
                      <td className="py-3">{activeClass.variants[1].passengers}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Maximum Range</td>
                      <td className="py-3">{activeClass.variants[0].range}</td>
                      <td className="py-3">{activeClass.variants[1].range}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">High Cruise Speed</td>
                      <td className="py-3">{activeClass.variants[0].speed}</td>
                      <td className="py-3">{activeClass.variants[1].speed}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Baggage Capacity</td>
                      <td className="py-3">{activeClass.variants[0].baggage}</td>
                      <td className="py-3">{activeClass.variants[1].baggage}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Cabin Dimensions (H x W x L)</td>
                      <td className="py-3">
                        {activeClass.variants[0].specs.cabinHeight} &times; {activeClass.variants[0].specs.cabinWidth} &times; {activeClass.variants[0].specs.cabinLength}
                      </td>
                      <td className="py-3">
                        {activeClass.variants[1].specs.cabinHeight} &times; {activeClass.variants[1].specs.cabinWidth} &times; {activeClass.variants[1].specs.cabinLength}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Takeoff Runway Required</td>
                      <td className="py-3">{activeClass.variants[0].specs.runwayReq}</td>
                      <td className="py-3">{activeClass.variants[1].specs.runwayReq}</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-gray-400">Service Ceiling</td>
                      <td className="py-3">{activeClass.variants[0].specs.serviceCeiling}</td>
                      <td className="py-3">{activeClass.variants[1].specs.serviceCeiling}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Active Aircraft Showcase Card */}
          <div className="aero-card bg-gradient-to-b from-white/[0.05] to-white/[0.015] border border-white/10 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold tracking-wider text-cyan-400 uppercase">
                    {activeVariant.manufacturer} &bull; {activeClass.categoryName}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/10 text-white">
                    {activeVariant.badge}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mt-2">
                  {activeVariant.name}
                </h3>
                <p className="text-sm text-gray-400 mt-1">{activeVariant.tagline}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-light text-white">
                    {activeVariant.hourlyRate}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Per Flight Hour</div>
                </div>
                <button
                  type="button"
                  onClick={() => navigate('/book')}
                  className="aero-btn aero-sheen px-7 py-3.5 rounded-full bg-white text-[#0b0f17] text-sm font-semibold hover:bg-gray-100 hover:shadow-xl hover:shadow-cyan-400/30 transition-all"
                >
                  Book {activeVariant.model}
                </button>
              </div>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-4xl mb-12">
              {activeVariant.description}
            </p>

            {/* Core Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
                  <Users className="w-4 h-4" /> Capacity
                </div>
                <div className="text-lg sm:text-xl font-medium text-white">{activeVariant.passengers}</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
                  <Compass className="w-4 h-4" /> Max Range
                </div>
                <div className="text-lg sm:text-xl font-medium text-white">{activeVariant.range}</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
                  <Gauge className="w-4 h-4" /> Cruise Speed
                </div>
                <div className="text-lg sm:text-xl font-medium text-white">{activeVariant.speed}</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wider mb-2">
                  <Luggage className="w-4 h-4" /> Baggage Volume
                </div>
                <div className="text-lg sm:text-xl font-medium text-white">{activeVariant.baggage}</div>
              </div>
            </div>

            {/* Highlights & Technical Specs */}
            <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Cabin Highlights &amp; Innovations
                </h4>
                <ul className="space-y-3">
                  {activeVariant.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                  Engineering &amp; Performance Dimensions
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-500 block mb-1">Cabin Dimensions</span>
                    <span className="text-white font-medium">
                      {activeVariant.specs.cabinHeight} &times; {activeVariant.specs.cabinWidth}
                    </span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-500 block mb-1">Cabin Length</span>
                    <span className="text-white font-medium">{activeVariant.specs.cabinLength}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-500 block mb-1">Max Endurance</span>
                    <span className="text-white font-medium">{activeVariant.specs.endurance}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <span className="text-xs text-gray-500 block mb-1">Runway Required</span>
                    <span className="text-white font-medium">{activeVariant.specs.runwayReq}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The In-Flight Experience */}
      <section className="py-20 sm:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              THE EXPERIENCE
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              Unrivaled attention to every detail
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              We eliminate friction at every stage of your flight, offering bespoke catering, pet hospitality,
              and VIP tarmac protocol.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="aero-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-300 mb-6 shadow-inner">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Michelin-Inspired Dining</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Menus curated to your dietary choices, paired with vintage wines and artisan desserts.
                Served at cruising altitude with fine porcelain and sterling silverware.
              </p>
            </div>

            <div className="aero-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-300 mb-6 shadow-inner">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">Office in the Sky</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                High-speed Ka-band and Starlink satellite connectivity allowing uninterrupted 4K
                video conferencing, live trading, and streaming across every continent.
              </p>
            </div>

            <div className="aero-card p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 transition-all cursor-pointer">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-300 mb-6 shadow-inner">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-white mb-3">ARG/US &amp; Wyvern Certified</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Top 2% safety rated flight crews globally. Rigorous maintenance audits, dual-pilot
                flight deck minimums, and strict background protocols on every mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular City Pairs */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-3">
                FREQUENT ROUTES
              </p>
              <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                Curated flight timings
              </h2>
            </div>
            <button
              type="button"
              onClick={() => navigate('/book')}
              className="aero-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:text-white hover:border-cyan-400/40 transition-colors"
            >
              Request custom route quote <ChevronRight size={16} />
            </button>
          </div>

          {/* Alpine Remote Airstrip Showcase Banner */}
          <div className="aero-card mb-12 rounded-3xl overflow-hidden border border-white/10 relative group cursor-pointer">
            <div className="h-[280px] sm:h-[380px] w-full overflow-hidden">
              <img
                src="/images/alpine_destination.jpg"
                alt="SkyElite Alpine Runway Access at St. Moritz Samedan"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/30 to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/60 backdrop-blur-md text-cyan-300 border border-white/15 inline-block mb-3">
                  Unrestricted Mountain &amp; Coastal Access
                </span>
                <h3 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                  Land closer to where you belong
                </h3>
                <p className="text-sm text-gray-300 max-w-xl mt-2 leading-relaxed">
                  Avoid 3-hour ground transfers. SkyElite aircraft are certified for high-altitude steep approaches,
                  allowing direct tarmac arrivals into remote alpine valleys, private Caribbean islands, and exclusive Mediterranean aerodromes.
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate('/book')}
                className="aero-btn aero-sheen px-6 py-3.5 rounded-full bg-white text-[#0b0f17] text-xs font-semibold hover:bg-gray-100 hover:shadow-cyan-400/25 shrink-0"
              >
                Request Custom Mountain Charter
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularRoutes.map((route, idx) => (
              <div
                key={idx}
                className="aero-card p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1 font-mono text-cyan-300/80">
                    <Clock size={12} /> {route.time}
                  </span>
                  <span>{route.distance}</span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <MapPin size={14} className="text-cyan-400 shrink-0" />
                    <span>{route.from}</span>
                  </div>
                  <div className="pl-6 border-l border-white/10 ml-2 py-0.5 text-xs text-gray-500">
                    non-stop
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <Plane size={14} className="text-cyan-400 shrink-0" />
                    <span>{route.to}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                  <span className="text-gray-400">{route.category}</span>
                  <button
                    type="button"
                    onClick={() => navigate('/book')}
                    className="text-cyan-300 hover:text-white font-medium transition-colors"
                  >
                    Book route &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
