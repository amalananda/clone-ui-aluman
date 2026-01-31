// components/about_sections/Awards.tsx
'use client'
export default function Awards() {
  return (
    < section className="py-24 px-4 sm:px-6 lg:px-8" >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-[#c9a961] mb-12">Awards &<br />recognitions</h2>
          </div>

          <div className="space-y-6">
            {[
              { award: 'Winner of World Luxury Spa Awards', org: 'Riverside Spa by Aluman', year: '2024' },
              { award: 'Winner of Sustainable Hotel of the Year', org: 'Ahead Asia', year: '2023' },
              { award: 'Winner Lodges, Cabins, and Tented Camps', org: 'Ahead Asia', year: '2023' },
              { award: 'TripAdvisor Travelers Choice Award', org: '', year: '2021 - 2023 - 2024' },
              { award: 'Winner Architecture | Sustainable & Green', org: 'Loop Design Award', year: '2023' },
              { award: 'World\'s Best Hotel (Exterior - Special Mention)', org: 'Prix Versailles (Unesco)', year: '2021' },
              { award: 'Asia Pacific Best Hotel (Exterior)', org: 'Prix Versailles (Unesco)', year: '2021' },
              { award: 'Runner-up IDCS Design Excellence - Project of the Year', org: 'IDC Singapore', year: '2021' },
              { award: 'Finalist for Travel / Resort (Architectural Award)', org: 'KOHLER Bold Design Awards', year: '2021' },
              { award: 'Runner up Worlds Best Eco Resort', org: 'Destination Deluxe', year: '2020' }
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b border-stone-300 pb-4">
                <div className="flex-1">
                  <p className="text-stone-800 font-medium">{item.award}</p>
                  {item.org && <p className="text-sm text-[#c9a961]">{item.org}</p>}
                </div>
                <p className="text-[#c9a961] text-sm whitespace-nowrap ml-4">{item.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section >
  )
}
