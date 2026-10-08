import { useState } from 'react'
import { ArrowLeft, Plane, Users, MapPin, Send } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function BookPage() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    departure: '',
    destination: '',
    date: '',
    returnDate: '',
    passengers: '1',
    aircraft: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0b0f17] flex flex-col">
        <Navbar variant="solid" />
        <main className="flex-1 flex items-center justify-center px-8">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
              <Plane className="w-7 h-7 text-green-400" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-4">
              Request received
            </h1>
            <p className="text-gray-400 mb-10 leading-relaxed">
              Thank you, {form.firstName}. Our aviation advisors will contact you within 2 hours 
              with a detailed quote and available aircraft options.
            </p>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white text-sm font-medium transition-all duration-200 hover:bg-white/15 border border-white/10"
            >
              <ArrowLeft size={16} />
              Back to Home
            </button>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0b0f17] flex flex-col">
      <Navbar variant="solid" />

      <main className="flex-1 max-w-5xl mx-auto w-full px-8 py-12 sm:py-20">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to home
        </button>

        {/* Header with Visual Banner */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              BOOK A FLIGHT
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              Request your private flight
            </h1>
            <p className="text-base text-gray-400 max-w-xl">
              Fill in your trip details below. Our senior flight operations desk will respond with confirmed
              tail availability, all-inclusive pricing, and bespoke itineraries within 2 hours.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="aero-card rounded-2xl overflow-hidden border border-white/10 shadow-xl relative group">
              <img
                src="/images/tarmac_chauffeur.jpg"
                alt="Direct Tarmac Chauffeur Boarding"
                className="w-full h-[180px] sm:h-[200px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px]">
                <span className="text-cyan-300 font-medium">VIP Tarmac Escort Included</span>
                <span className="text-gray-400">Direct-to-Aircraft</span>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Personal Information */}
          <fieldset>
            <legend className="text-sm font-semibold text-white tracking-wide mb-6 flex items-center gap-2">
              <Users className="w-4 h-4 text-gray-500" />
              Personal Information
            </legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} required />
              <InputField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} required />
              <InputField name="email" label="Email" type="email" value={form.email} onChange={handleChange} required />
              <InputField name="phone" label="Phone" type="tel" value={form.phone} onChange={handleChange} required />
            </div>
          </fieldset>

          {/* Flight Details */}
          <fieldset>
            <legend className="text-sm font-semibold text-white tracking-wide mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              Flight Details
            </legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <InputField name="departure" label="Departure City / Airport" value={form.departure} onChange={handleChange} required placeholder="e.g., New York (KTEB)" />
              <InputField name="destination" label="Destination City / Airport" value={form.destination} onChange={handleChange} required placeholder="e.g., Miami (KOBE)" />
              <InputField name="date" label="Departure Date" type="date" value={form.date} onChange={handleChange} required />
              <InputField name="returnDate" label="Return Date (optional)" type="date" value={form.returnDate} onChange={handleChange} />
            </div>
          </fieldset>

          {/* Preferences */}
          <fieldset>
            <legend className="text-sm font-semibold text-white tracking-wide mb-6 flex items-center gap-2">
              <Plane className="w-4 h-4 text-gray-500" />
              Preferences
            </legend>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="passengers" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Passengers
                </label>
                <select
                  id="passengers"
                  name="passengers"
                  value={form.passengers}
                  onChange={handleChange}
                  className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-white/25 transition-colors appearance-none"
                >
                  {Array.from({ length: 16 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1} {i === 0 ? 'passenger' : 'passengers'}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="aircraft" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                  Preferred Aircraft (optional)
                </label>
                <select
                  id="aircraft"
                  name="aircraft"
                  value={form.aircraft}
                  onChange={handleChange}
                  className="w-full bg-[#151c24] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                >
                  <option value="">No preference</option>
                  <optgroup label="Light Jet (Regional)">
                    <option value="citation-cj4">Cessna Citation CJ4 Gen2</option>
                    <option value="phenom-300e">Embraer Phenom 300E</option>
                  </optgroup>
                  <optgroup label="Super-Midsize (Transcontinental)">
                    <option value="challenger-3500">Bombardier Challenger 3500</option>
                    <option value="praetor-600">Embraer Praetor 600</option>
                  </optgroup>
                  <optgroup label="Ultra-Long-Range (Intercontinental Flagship)">
                    <option value="global-7500">Bombardier Global 7500</option>
                    <option value="gulfstream-g700">Gulfstream G700</option>
                  </optgroup>
                </select>
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="notes" className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
                Additional Notes
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                value={form.notes}
                onChange={handleChange}
                placeholder="Special requests, catering preferences, ground transport needs..."
                className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-white/25 transition-colors resize-none"
              />
            </div>
          </fieldset>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
            <button
              type="submit"
              className="aero-btn aero-sheen inline-flex items-center gap-2 px-9 py-4 rounded-full bg-white text-[#0b0f17] text-sm font-semibold transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:shadow-cyan-400/30"
            >
              <Send size={16} />
              Submit Request
            </button>
            <p className="text-xs text-gray-500">
              We'll respond within 2 hours with an all-inclusive quote.
            </p>
          </div>
        </form>
      </main>
    </div>
  )
}

/* Reusable Input Field */
function InputField({
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  placeholder,
}: {
  name: string
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  required?: boolean
  placeholder?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs text-gray-500 mb-2 uppercase tracking-wider">
        {label} {required && <span className="text-red-400/60">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-cyan-400/50 focus:shadow-[0_0_15px_rgba(34,211,238,0.15)] transition-all"
      />
    </div>
  )
}
