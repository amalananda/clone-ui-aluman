// components/OtherVillas.tsx
'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function OtherVillas() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const villas = [
    {
      title: 'Cocoon Jungle',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Avatar Tree House',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Grand Lagoon Private Pool',
      image: '/api/placeholder/600/800'
    },
    {
      title: 'Jungle Bungalow',
      image: '/api/placeholder/600/800'
    }
  ]

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-serif text-5xl text-[#C5A572] mb-6">
            Our Other<br />Rooms & Villas
          </h2>
          <p className="text-[#6B5D4F] max-w-md leading-relaxed mb-12">
            All of our villas and rooms have their <span className="italic">own unique charm</span>.
            Aluman offers a variety of luxurious accommodations, each designed to
            immerse guests in nature&apos;s tranquility and beauty.
          </p>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              className="w-12 h-12 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572] hover:text-white transition"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(villas.length - 2, currentSlide + 1))}
              className="w-12 h-12 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572] hover:text-white transition"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {villas.slice(currentSlide, currentSlide + 3).map((villa, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-lg">
                <Image
                  src={villa.image}
                  alt={villa.title}
                  layout="responsive"
                  width={600}
                  height={800}
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <h3 className="font-serif text-2xl text-[#C5A572] mb-4">{villa.title}</h3>
              <button className="border-b border-[#C5A572] text-[#C5A572] text-sm pb-1 hover:border-[#8B7355] hover:text-[#8B7355] transition">
                DISCOVER
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <h3 className="font-serif text-4xl text-[#C5A572] mb-8">
            Reconnect with yourself in<br />luxurious comfort.
          </h3>
          <button className="border-b-2 border-[#C5A572] text-[#C5A572] pb-1 hover:border-[#8B7355] hover:text-[#8B7355] transition">
            BE OUR GUEST
          </button>
        </div>
        <div className="max-w-7xl mx-auto text-center">
          <a
            href="https://instagram.com/alumanbali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C5A572] hover:text-[#8B7355] transition"
          >
            @alumanbali
          </a>
        </div>
      </div>
    </section>
  )
}
