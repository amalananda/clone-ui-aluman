// components/Facilities.tsx
'use client'
import React from 'react'
import Image from 'next/image'

interface FacilityItem {
  left: string
  right: string
}

interface FacilitiesProps {
  facilities?: FacilityItem[]
  benefits?: FacilityItem[]
  facilitiesImage?: string
  benefitsImage?: string
}

export default function Facilities({
  facilities = [
    { left: 'Bluetooth speaker', right: 'Air conditioner' },
    { left: 'Automatic curtains', right: 'Mini refrigerator' },
    { left: 'Flat-screen smart TV + Netflix', right: 'Espresso coffee machine' },
    { left: 'Safety deposit box', right: 'High-speed wifi' },
    { left: 'Designer signature bathroom', right: 'Hot & cold water' },
    { left: 'Rain & hand shower', right: 'Wooden bathtub' },
    { left: 'Sun deck patio', right: 'Outdoor dining' },
    { left: 'Hanging net over the lake', right: 'Direct access to bio-filtered lake' }
  ],
  benefits = [
    { left: 'Free mini bar', right: 'Tea selections' },
    { left: 'In-room espresso coffee', right: 'Daily resort activities' },
    {
      left: 'Free access to spa facilities (Sauna, steam room, hot & Cold plunge pools)',
      right: 'Free access to facilities (Tennis court, in-house gym, infinity pools, yoga shala)'
    },
  ],
  facilitiesImage = 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=800&fit=crop&q=80',
  benefitsImage = 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=800&fit=crop&q=80'
}: FacilitiesProps) {

  return (
    <section className="py-24 px-6 bg-[#EFEBE2]">
      {/* Section Facilities */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h2 className="font-serif text-4xl text-[#C5A572] mb-12">
            The rooms<br />facilities
          </h2>
          <div className="space-y-6">
            {facilities.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-8 pb-4 border-b border-[#AD8C48]/30">
                <span className="text-[#6B5D4F]">{item.left}</span>
                <span className="text-[#6B5D4F]">{item.right}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={facilitiesImage}
            alt="Luxury spa bath with flower petals and candles - Aluman Bali"
            className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
            width={600}
            height={800}
          />
        </div>
      </div>

      {/* Section Benefits */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative group overflow-hidden rounded-lg">
          <Image
            src={benefitsImage}
            alt="Hammock over lake - Aluman Bali"
            className="w-full h-[700px] object-cover transition-transform duration-700 group-hover:scale-110"
            width={600}
            height={800}
          />
        </div>

        <div>
          <h2 className="font-serif text-4xl text-[#C5A572] mb-12">
            The inclusions<br />& benefits
          </h2>
          <div className="space-y-6">
            {benefits.map((item, idx) => (
              <div key={idx} className="grid grid-cols-2 gap-8 pb-6 border-b border-[#AD8C48]/30">
                <span className="text-[#6B5D4F]">{item.left}</span>
                <span className="text-[#6B5D4F]">{item.right}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
