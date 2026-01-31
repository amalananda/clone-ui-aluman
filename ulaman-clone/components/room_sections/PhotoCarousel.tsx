// components/room_sections/PhotoCarousel.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function PhotoCarousel() {
  const [currentImage, setCurrentImage] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=1000&fit=crop&q=80',
      alt: 'Villa exterior architecture'
    },
    {
      src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop&q=80',
      alt: 'Villa interior lounge'
    },
    {
      src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop&q=80',
      alt: 'Villa bedroom view'
    }
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top
        setScrollY(scrollProgress)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Background Scrolling Text - Left Moving */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.08] z-0"
        style={{
          transform: `translateY(-50%) translateX(${scrollY * 0.8}px)`,
          fontSize: '14rem',
          fontFamily: 'serif',
          color: '#C5A572',
          fontWeight: '400',
          letterSpacing: '-0.02em'
        }}
      >
        ALUMAN
      </div>

      {/* Background Scrolling Text - Right Moving */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none opacity-[0.08] z-0"
        style={{
          transform: `translateY(-50%) translateX(${-scrollY * 0.8}px)`,
          fontSize: '14rem',
          fontFamily: 'serif',
          color: '#C5A572',
          fontWeight: '400',
          letterSpacing: '-0.02em'
        }}
      >
        RESORT
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto relative z-10">
        {/* Image Container */}
        <div className="relative aspect-[3/4] mb-8 rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            fill
            className="object-cover transition-opacity duration-500"
            sizes="(max-width: 768px) 50vw, 25vw"
            priority
          />
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={prevImage}
            className="w-12 h-12 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572] hover:text-white transition-all duration-300 group"
            aria-label="Previous image"
          >
            <ArrowLeft className="w-5 h-5 text-[#C5A572] group-hover:text-white transition-colors" />
          </button>
          <button
            onClick={nextImage}
            className="w-12 h-12 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572] hover:text-white transition-all duration-300 group"
            aria-label="Next image"
          >
            <ArrowRight className="w-5 h-5 text-[#C5A572] group-hover:text-white transition-colors" />
          </button>
        </div>
      </div>
    </section>
  )
}
