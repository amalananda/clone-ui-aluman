// components/sections/SpaServices.tsx
'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

interface SpaService {
  title: string
  description: string
  openingHours: string
  image: string
}

const SpaServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  const services: SpaService[] = [
    {
      title: 'The Main Spa',
      description: 'Riverside Spa offers world-class relaxation with massage |BREAK|rooms, hot and cold plunge pools, an infrared sauna and a |BREAK|serene riverside setting.',
      openingHours: 'Opening hours: 9 AM to 9 PM',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=500&h=600&fit=crop'
    },
    {
      title: 'Tree House Spa',
      description: 'Our Tree House Spa, perched over Aluman Waterfall and River, |BREAK|is the only tree house spa in Bali and Southeast Asia, built |BREAK|around the most spiritual tree on the property.',
      openingHours: 'Opening hours: 7 AM to 6 PM',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&h=600&fit=crop'
    },
    {
      title: 'Riverside Romantic Bath',
      description: 'Located next to the Aluman river and waterfalls, our hand-carved stone |BREAK|bathtub is perfect for flower, moringa and Epsom salt baths after an |BREAK|exclusive treatment at our Tree House Spa above. Enjoy a private, romantic |BREAK|experience in your private bamboo oasis with hand-beaded curtains.',
      openingHours: 'Opening hours: 7 AM to 6 PM',
      image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=500&h=600&fit=crop'
    }
  ]

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    if (hoveredIndex !== null && !isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [hoveredIndex, isMobile])

  return (
    <section className="relative bg-[#EFEBE2] text-[#4A4A4A] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              className="relative md:cursor-pointer transition-opacity duration-300 md:hover:opacity-90"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 py-12 md:py-12">
                {/* Left Column - Title & Description */}
                <div className="flex-1 max-w-2xl">
                  <h2 className="font-americana text-[2rem] md:text-[2.184rem] leading-tight font-normal text-[#B79F8C] mb-6">
                    {service.title}
                  </h2>
                  <p className="font-basis text-[#4A4A4A] text-[14.475px] md:text-base leading-relaxed">
                    {service.description.split('|BREAK|').map((segment, i, arr) => {
                      // Handle italic text
                      let processedSegment: React.ReactNode = segment

                      // Check for italic patterns
                      if (segment.includes('serene riverside setting')) {
                        const parts = segment.split('serene riverside setting')
                        processedSegment = (
                          <>
                            {parts[0]}
                            <em className="italic">serene riverside setting</em>
                            {parts[1]}
                          </>
                        )
                      } else if (segment.includes('only tree house spa in Bali and Southeast Asia')) {
                        const parts = segment.split('only tree house spa in Bali and Southeast Asia')
                        processedSegment = (
                          <>
                            {parts[0]}
                            <em className="italic">only tree house spa in Bali and Southeast Asia</em>
                            {parts[1]}
                          </>
                        )
                      } else if (segment.includes('Enjoy a private, romantic')) {
                        const parts = segment.split('Enjoy a private, romantic')
                        processedSegment = (
                          <>
                            {parts[0]}
                            <em className="italic">Enjoy a private, romantic</em>
                            {parts[1]}
                          </>
                        )
                      }

                      return (
                        <React.Fragment key={i}>
                          {processedSegment}
                          {i < arr.length - 1 && <br />}
                        </React.Fragment>
                      )
                    })}
                  </p>
                </div>

                {/* Right Column - Opening Hours */}
                <div className="md:text-right md:min-w-[280px] md:self-end">
                  <p className="font-basis text-[#B79F8C] text-base md:text-lg">
                    {service.openingHours}
                  </p>
                </div>
              </div>

              {/* Mobile Image - Di luar flex container, sebelum divider */}
              {isMobile && (
                <div className="relative w-full h-[280px] overflow-hidden shadow-lg">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              )}

              {/* Divider */}
              {index < services.length && (
                <div className="border-t border-[#343E35]"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Image that follows cursor - Desktop Only */}
      {!isMobile && hoveredIndex !== null && (
        <div
          className="fixed pointer-events-none z-50 transition-opacity duration-300"
          style={{
            left: `${mousePosition.x - 150}px`,
            top: `${mousePosition.y - 150}px`,
            transform: 'translate(0, 0)'
          }}
        >
          <div className="relative w-[280px] h-[340px] rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={services[hoveredIndex].image}
              alt={services[hoveredIndex].title}
              fill
              sizes="280px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      )}
    </section>
  )
}

export default SpaServices
