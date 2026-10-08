import { Globe, Shield, Clock, Star, Plane, Users } from 'lucide-react'

export default function StorySection() {
  return (
    <section id="story" className="relative bg-[#0b0f17] py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header with VIP Lounge Image */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">
              OUR STORY
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
              Redefining private aviation <br className="hidden sm:block" />
              for a new generation
            </h2>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6">
              Founded in 2019, SkyElite was born from a simple belief: luxury air travel 
              shouldn't come with complexity. We've built a seamless platform that connects 
              discerning travelers with the world's finest private aircraft — no hidden fees, 
              no compromises, no wasted time.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              From dedicated VIP FBO lounges with private customs clearance to direct tarmac transfers,
              every step is designed for maximum speed, privacy, and absolute serenity.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="aero-card relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer">
              <img
                src="/images/vip_fbo_lounge.jpg"
                alt="SkyElite VIP FBO Private Terminal Lounge"
                className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-xs">
                <span className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white font-medium border border-white/15">
                  Private FBO Lounge Access
                </span>
                <span className="text-gray-400 font-mono">0-Min Check-in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { value: '2,400+', label: 'Flights completed' },
            { value: '98.7%', label: 'On-time performance' },
            { value: '180+', label: 'Destinations worldwide' },
            { value: '4.9★', label: 'Client satisfaction' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="aero-card p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-center md:text-left cursor-pointer"
            >
              <div className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Shield,
              title: 'Safety First',
              desc: 'Every aircraft in our fleet meets the highest safety standards with Wyvern and ARG/US certifications.',
            },
            {
              icon: Clock,
              title: 'Time Optimized',
              desc: 'From booking to boarding in under 4 hours. Skip the terminals, skip the lines.',
            },
            {
              icon: Globe,
              title: 'Global Reach',
              desc: 'Access 5,000+ airports worldwide — including private airfields commercial airlines can\'t reach.',
            },
            {
              icon: Star,
              title: 'Bespoke Service',
              desc: 'Every detail curated to your preferences — from catering to ground transport.',
            },
            {
              icon: Plane,
              title: 'Fleet Diversity',
              desc: 'Light jets to ultra-long-range aircraft. The right plane for every mission.',
            },
            {
              icon: Users,
              title: 'Dedicated Team',
              desc: 'Your personal aviation advisor, available 24/7 for anything you need.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="aero-card group p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] cursor-pointer"
            >
              <item.icon className="w-6 h-6 text-gray-500 mb-5 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300" />
              <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
