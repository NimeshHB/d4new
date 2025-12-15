export function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6 bg-white text-[color:var(--color-foreground)] overflow-hidden">
      {/* optional faint hex texture could be added as background-image via CSS if desired */}
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight">
            <span className="text-black">
              SOME NUMBER OF OUR ACHIEVEMENT
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-black text-sm sm:text-base md:text-lg leading-relaxed mb-12">
            Welcome to Web Design Sri Lanka, the forefront of web innovation in Sri Lanka. With a proven track record of
            delivering cutting-edge designs, intuitive user interfaces, and seamless functionality, we have empowered
            numerous businesses to thrive online.
          </p>

          {/* Stats cards row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        <StatCard
                            icon={<UsersIcon />}
                            number="4+"
                            label="Years Experience"
                        />
                        <StatCard
                            icon={<GearCheckIcon />}
                            number="50+"
                            label="Satisfied Web Clients"
                        />
                        <StatCard
                            icon={<CheckIcon />}
                            number="200+"
                            label="Projects"
                        />
                        <StatCard
                            icon={<ServerRackIcon />}
                            number="10+"
                            label="Satisfied Hosting Clients" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <div className="relative rounded-2xl bg-[#0F0F0F] p-6 flex flex-col items-start gap-4 transition-transform hover:-translate-y-2 group">
      <div className="absolute inset-0 rounded-2xl pointer-events-none" />
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-transparent text-[color:var(--mint-green)]">
        {icon}
      </div>
      <div className="mt-2">
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[color:var(--mint-green)] tracking-tight" style={{
            textShadow: '0 0 18px rgba(0,223,130,0.28), inset 0 -2px 0 rgba(0,0,0,0.35)'
          }}>{number}</div>
          <div className="text-sm text-[color:var(--mint-green)]/90 font-medium uppercase mt-2">{label}</div>
      </div>
      <div className="absolute -inset-px rounded-2xl pointer-events-none border border-[color:var(--mint-green)]/6 group-hover:border-[color:var(--mint-green)]/40" />
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{ boxShadow: '0 12px 40px rgba(0,223,130,0.10)' }} />
    </div>
  )
}

function UsersIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 7a4 4 0 110-8 4 4 0 010 8z" transform="translate(0,8)" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function GearCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15.5A3.5 3.5 0 1012 8.5a3.5 3.5 0 000 7z" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33" stroke="#00DF82" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke="#00DF82" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 6L9 17l-5-5" stroke="#00DF82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ServerRackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6"/>
      <rect x="3" y="10" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6"/>
      <rect x="3" y="16" width="18" height="5" rx="1" stroke="#00DF82" strokeWidth="1.6"/>
    </svg>
  )
}
