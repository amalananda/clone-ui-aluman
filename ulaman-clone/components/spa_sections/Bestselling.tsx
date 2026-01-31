// components/spa_sections/Bestselling.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Clock } from 'lucide-react'

interface Treatment {
  id: string
  title: string
  price: string
  duration: string
  image: string
  description: string
}

const treatments: Treatment[] = [
  {
    id: 'honeymoon',
    title: 'Honeymoon Spa Package',
    price: 'IDR 4000K',
    duration: '3.5 hours',
    image:
      'https://images.unsplash.com/photo-1596707328659-1e330a13e2d7?auto=format&fit=crop&q=80&w=800&h=800',
    description:
      `Our Honeymoon Spa Package is tailored for couples seeking a romantic getaway. Enjoy a Balinese massage, body scrub and our 'Garden Glow' facial followed by a soothing 'Floral Bliss' flower bath, accompanied by mocktails and a fresh fruit platter, creating a perfect intimate retreat for you both.`
  },
  {
    id: 'detox',
    title: 'The Detox Package',
    price: 'IDR 1800K',
    duration: '2.5 hours',
    image:
      'https://images.unsplash.com/photo-1557877292-cc79b2940af4?auto=format&fit=crop&q=80&w=800&h=800',
    description:
      `Experience our rejuvenating spa package that begins with a Foot Clean, followed by a Lymphatic Detox Massage and a Balinese Salt Scrub for silky-smooth skin. Conclude with a Bentonite Clay Body Wrap to detoxify and boost skin elasticity and collagen levels. This holistic treatment is enhanced with a complimentary Green Juice for added nourishment. Treat yourself to this luxurious spa journey and emerge feeling renewed and radiant.`
  },
  {
    id: 'aluman',
    title: 'Aluman Esalen Massage',
    price: 'IDR 900K • 75 min',
    duration: 'IDR 1100K • 90 min',
    image:
      'https://images.unsplash.com/photo-1594928095147-38e21a20c324?auto=format&fit=crop&q=80&w=800&h=800',
    description:
      `Aluman Esalen massage integrates a holistic approach to massage therapy, blending techniques like Lomi-Lomi, stretching, long flowing strokes, gentle rocking and passive joint movements. This combination creates a deeply relaxing and nurturing experience, emphasizing the mind-body connection for enhanced relaxation, stress relief and overall well-being.`
  }
]

const ACCENT_COLOR = '#b79f8c'
const DEFAULT_BG_COLOR = '#e8e4dd'

// ✅ Hover texture menggunakan SVG inline agar bebas error 404
const HOVER_TEXTURE_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='480'%3E%3Crect width='400' height='480' fill='%23000'/%3E%3Cpath d='M0 0 L400 480 M400 0 L0 480' stroke='%23b79574' stroke-width='0.5' opacity='0.15'/%3E%3C/svg%3E`

// --- Komponen Background Ornamen ---
const DecorativeBackground = () => (
  <div
    className="absolute inset-0"
    style={{
      backgroundColor: DEFAULT_BG_COLOR,
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 0 L150 50 L100 100 L50 50 Z' fill='%23b79574' opacity='0.1'/%3E%3C/svg%3E")`,
      backgroundSize: '100px 100px',
      opacity: 0.7
    }}
  />
)

// --- Komponen Kartu Treatment ---
const TreatmentCard = ({
  treatment,
  isHovered,
  onHoverStart,
  onHoverEnd
}: {
  treatment: Treatment
  isHovered: boolean
  onHoverStart: () => void
  onHoverEnd: () => void
}) => {
  const cardHeight = 'h-[420px] md:h-[574px]'
  const cardWidth = 'w-[300px] md:w-[441px]'
  const borderRadiusClass = 'rounded-[150px] md:rounded-[185px]'

  return (
    <div
      key={treatment.id}
      className={`relative ${cardHeight} ${cardWidth} flex-shrink-0 ${borderRadiusClass} overflow-hidden cursor-pointer group`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Latar belakang default */}
      <div className={`transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
        <DecorativeBackground />
      </div>

      {/* Latar belakang hover */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'} ${borderRadiusClass}`}
      >
        <Image
          src={HOVER_TEXTURE_IMAGE}
          alt="Dark texture background"
          fill
          className="object-cover"
          sizes="33vw"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Border */}
      <div
        className={`absolute inset-0 ${borderRadiusClass}`}
        style={{
          border: `1px solid ${ACCENT_COLOR}`,
          opacity: 0.5
        }}
      />

      {/* Konten Default */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 transition-opacity duration-500  ${isHovered ? 'opacity-0' : 'opacity-100'
          }`}
      >
        <h3
          className="relative text-[25px] lg:text-4xl font-americana text-center font-normal mb-3 w-56 md:w-64 lg:w-80"
          style={{ color: ACCENT_COLOR }}
        >
          {treatment.title}
        </h3>
        <div className='bg-[#ede6d8] px-3 py-1'>
          <div className="flex items-center gap-1.5 text-sm font-light tracking-wider" style={{ color: ACCENT_COLOR }}>
            <Clock size={14} className="md:w-4 md:h-4" strokeWidth={1.2} />
            <span className="text-[11px] md:text-xs lg:text-[13px] font-basis text-[#343e35]">
              {treatment.id === 'aluman'
                ? treatment.price
                : `${treatment.price} / ${treatment.duration}`}
            </span>
          </div>
        </div>
      </div>

      {/* Konten Hover */}
      <div
        className={`absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 lg:p-12 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h3 className="text-xl md:text-2xl lg:text-3xl font-['Playfair_Display'] text-white text-center font-normal leading-tight mb-2 md:mb-3">
          {treatment.title}
        </h3>

        <div className="inline-flex items-center gap-1.5 text-white text-xs font-light tracking-wider mb-4 md:mb-6">
          <Clock size={12} className="md:w-[14px] md:h-[14px]" strokeWidth={1} />
          <span className="text-xs md:text-sm font-light tracking-wider">
            {treatment.id === 'aluman'
              ? treatment.price
              : `${treatment.price} / ${treatment.duration}`}
          </span>
        </div>

        <p className="text-white text-center text-xs md:text-sm font-light leading-relaxed mb-6 md:mb-8 px-2">
          {treatment.description}
        </p>

        <button className="text-white text-[10px] md:text-xs font-normal uppercase tracking-widest border-b border-white pb-1 hover:opacity-80 transition-opacity">
          BOOK NOW
        </button>
      </div>
    </div>
  )
}

// --- Komponen Utama ---
const Bestselling = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  return (
    <section className="w-full min-h-screen bg-[#EFEBE2]" >
      <div className="max-w-[1440px] py-12 md:py-16 mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2
            className="text-2xl md:text-4xl font-americana font-light leading-snug"
            style={{ color: ACCENT_COLOR }}
          >
            Our Bestselling
            <br />
            Treatments
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide px-4">
          <div className="flex gap-5" style={{ width: 'max-content' }}>
            {treatments.map((treatment) => (
              <TreatmentCard
                key={treatment.id}
                treatment={treatment}
                isHovered={hoveredId === treatment.id}
                onHoverStart={() => setHoveredId(treatment.id)}
                onHoverEnd={() => setHoveredId(null)}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-15 max-w-[1440px] px-4 sm:px-6 md:px-15">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              isHovered={hoveredId === treatment.id}
              onHoverStart={() => setHoveredId(treatment.id)}
              onHoverEnd={() => setHoveredId(null)}
            />
          ))}
        </div>

      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Bestselling
