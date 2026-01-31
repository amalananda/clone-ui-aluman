// components/sections/Footer.tsx
'use client'
import React, { useState } from 'react'
import UnderlineLink from '@/components/ui/UnderlineLink'

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '' })

  const exploreLinks = {
    column1: [
      { label: 'Home', href: '#home' },
      { label: 'Dining', href: '#dining' },
      { label: 'Retreats', href: '#retreats' },
      { label: 'Facilities', href: '#facilities' },
      { label: 'About', href: '#about' },
      { label: 'Contact', href: '#contact' }
    ],
    column2: [
      { label: 'Villas', href: '#villas' },
      { label: 'Spa', href: '#spa' },
      { label: 'Experiences', href: '#experiences' },
      { label: 'Aluman Map', href: '#map' },
      { label: 'Articles', href: '#articles' },
      { label: 'Video Testimonials', href: '#testimonials' }
    ]
  }

  const connectLinks = {
    column1: [
      { label: 'Whatsapp', href: '#whatsapp' },
      { label: 'TripAdvisor', href: '#tripadvisor' },
      { label: 'Facebook', href: '#facebook' }
    ],
    column2: [
      { label: 'Directions', href: '#directions' },
      { label: 'Instagram', href: '#instagram' }
    ]
  }

  const awards = [
    { name: 'Interior Design Confederation Singapore', logo: 'IDCS' },
    { name: 'Unique Experiences', logo: 'UE' },
    { name: 'World Luxury Hotel Awards', logo: 'WLHA' },
    { name: 'Destination Deluxe', logo: 'DD' },
    { name: 'UNESCO', logo: 'UNESCO' },
    { name: 'Kohler Bold Design Awards', logo: 'KOHLER' },
    { name: 'Loop Design Awards', logo: 'LOOP' },
    { name: 'Interior Design Confederation Singapore', logo: 'IDCS2' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <footer className="bg-[#7A8B7F] ">
      <div className="max-w-7xl mx-auto pt-8 md:pt-12 pb-8 px-4 md:px-6 lg:px-8">

        {/* Coloumn Link & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-8 md:mb-12">
          {/* Get Notified */}
          <div>
            <h3 className="text-[1.36rem] md:text-[1.567rem] font-americana text-[#F4EFE8] mb-6 md:mb-8">Get Notified On Our Offers</h3>
            <div className="space-y-4 md:space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name*"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/40 pb-2 text-sm md:text-base text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                />
              </div>
              <button
                onClick={handleSubmit}
                className="text-[#F4EFE8]/40 border-b border-white/40 pb-1 hover:border-white font-basis transition-colors text-[13.57px] md:text-[15.65px] tracking-wider"
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-[1.1308rem] md:text-[1.265rem] text-[#F4EFE8] font-americana mb-6 md:mb-8">Explore</h3>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <ul className="space-y-2 md:space-y-3">
                  {exploreLinks.column1.map((link, index) => (
                    <li key={index}>
                      <UnderlineLink
                        href={link.href}
                        className="text-[#EFEBE2] hover:text-white font-basis text-[0.907rem] md:text-[1.01rem]"
                        underlineColor="#7A8B7F"
                      >
                        {link.label}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2 md:space-y-3">
                  {exploreLinks.column2.map((link, index) => (
                    <li key={index}>
                      <UnderlineLink
                        href={link.href}
                        className="text-[#EFEBE2] hover:text-white font-basis text-[0.907rem] md:text-[1.01rem]"
                        underlineColor="#7A8B7F"
                      >
                        {link.label}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="text-[1.1308rem] md:text-[1.265rem] font-americana text-[#F4EFE8] mb-6 md:mb-8">Connect</h3>
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              <div>
                <ul className="space-y-2 md:space-y-3">
                  {connectLinks.column1.map((link, index) => (
                    <li key={index}>
                      <UnderlineLink
                        href={link.href}
                        className="text-[#EFEBE2] hover:text-white font-basis text-[0.907rem] md:text-[1.01rem]"
                        underlineColor="#7A8B7F"
                      >
                        {link.label}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-2 md:space-y-3">
                  {connectLinks.column2.map((link, index) => (
                    <li key={index}>
                      <UnderlineLink
                        href={link.href}
                        className="text-[#EFEBE2] hover:text-white font-basis text-[0.907rem] md:text-[1.01rem]"
                        underlineColor="#7A8B7F"
                      >
                        {link.label}
                      </UnderlineLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-8 md:mb-12 overflow-hidden">
          <div className="flex animate-scroll-infinite whitespace-nowrap">
            {/* Duplicate awards 3x untuk seamless infinite loop */}
            {[...Array(3)].map((_, groupIndex) => (
              <React.Fragment key={groupIndex}>
                {awards.map((award, index) => (
                  <div
                    key={`${groupIndex}-${index}`}
                    className="flex-shrink-0 bg-white/10 backdrop-blur-sm px-4 md:px-6 py-3 md:py-4 rounded flex items-center justify-center mx-2 md:mx-3"
                    style={{ minWidth: '120px', height: '60px' }}
                  >
                    <span className="text-white/60 text-[10px] md:text-xs text-center">{award.logo}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Copyright & Links */}
        <div className="font-americana pt-6 w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-4 text-xs md:text-sm text-white/70">
            <div className="flex flex-wrap gap-x-3 md:gap-x-8 gap-y-2 md:gap-y-4 justify-start md:justify-start text-left md:text-left">
              <UnderlineLink
                href="#terms"
                className="text-[#EFEBE2] hover:text-white font-basis text-[0.734rem] md:text-[0.824rem]"
                underlineColor="#7A8B7F"
              >
                Terms
              </UnderlineLink>
              <UnderlineLink
                href="#privacy"
                className="text-[#EFEBE2] hover:text-white font-basis text-[0.734rem] md:text-[0.824rem]"
                underlineColor="#7A8B7F"
              >
                Privacy
              </UnderlineLink>
              <div className="flex gap-x-3 md:gap-x-8">
                <UnderlineLink
                  href="#aluman-bookings"
                  className="text-[#EFEBE2] hover:text-white font-basis text-[0.734rem] md:text-[0.824rem]"
                  underlineColor="#7A8B7F"
                >
                  Aluman Bookings
                </UnderlineLink>
                <span className="text-[#EFEBE2] text-[0.734rem] md:text-[0.824rem] md:w-auto">Kids under 6 are not advised.</span>
              </div>
              <span className="w-full text-[#EFEBE2] text-[0.734rem] md:text-[0.824rem] md:w-auto">© 2024-2025 Two Moons Studio for alumanbali.com. All Rights Reserved</span>
              <span className="w-full text-[#EFEBE2] text-[0.734rem] md:text-[0.824rem] md:w-auto">Made With ❤︎ By Two Suns Studio </span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. RUNNING TEXT (FULL WIDTH) */}
      <div className="mt-6 md:mt-8 overflow-hidden bg-[#EFEBE2] py-2 md:py-3 w-full">
        <div className="flex animate-scroll-infinite whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex">
              <span className="text-[#7A8B7F] text-xs md:text-sm mx-4 md:mx-8">● The Avatar Experience | 3 days 2 nights</span>
              <span className="text-[#7A8B7F] text-xs md:text-sm mx-4 md:mx-8">● The Ultimate Honeymoon | 3 days 2 nights</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 30s linear infinite;
        }
      `}</style>
    </footer>
  )
}

export default Footer
