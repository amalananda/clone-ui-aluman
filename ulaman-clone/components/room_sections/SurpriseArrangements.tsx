// components/SurpriseArrangements.tsx
'use client'
import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import UnderlineLink from '@/components/ui/UnderlineLink'
import { usePathname } from 'next/navigation'

export default function SurpriseArrangements() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef2 = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const arrangements = [
    {
      id: 1,
      title: 'Balloons and Sparkles',
      price: 'IDR 1.500.000++',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Romantic Bed Decorations',
      price: 'IDR 500.000++',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=800&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Bathtub Flower Decorations',
      price: 'Starting from IDR 350.000++',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=800&fit=crop&q=80'
    }
  ]

  const rooms = [
    {
      id: 1,
      title: 'Cocoon Jungle',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=1000&fit=crop',
      link: '/rooms/cocoon-jungle'
    },
    {
      id: 2,
      title: 'Avatar Tree House',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop',
      link: '/rooms/avatar-tree-house'
    },
    {
      id: 3,
      title: 'Grand Lagoon Private Pool',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=1000&fit=crop',
      link: '/rooms/floating-lake'
    },
  ]
  const filteredRooms = rooms.filter((rooms) => !pathname.includes(rooms.link))

  // Scroll ke kanan (item terakhir) saat component mount untuk section 1
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420
      scrollContainerRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const scroll2 = (direction: 'left' | 'right') => {
    if (scrollContainerRef2.current) {
      const scrollAmount = 420
      scrollContainerRef2.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      {/* Section 1 - Surprise Arrangements */}
      <section className="py-24 bg-[#EFEBE2] relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Side - Image Cards */}
            <div className="lg:col-span-7 col-span-1 -ml-8 lg:-ml-20">
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex flex-row-reverse gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pl-8 lg:pl-20 pointer-events-none"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {arrangements.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[400px] snap-center"
                    >
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl shadow-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="400px"
                          className="object-cover"
                          priority
                        />
                        <svg
                          className="absolute top-0 left-0 w-36 h-36"
                          viewBox="0 0 144 144"
                          fill="none"
                        >
                          <path
                            d="M 0,24 Q 36,30 72,72 Q 108,114 144,144"
                            stroke="#D4C5A0"
                            strokeWidth="3"
                            fill="none"
                            strokeLinecap="round"
                            opacity="0.5"
                          />
                        </svg>
                      </div>

                      <p className="text-[#8B7355] text-sm font-light mb-3 tracking-wide">
                        {item.price}
                      </p>

                      <h3 className="font-americana text-[1.75rem] text-[#C5A572] mb-5 leading-tight">
                        {item.title}
                      </h3>

                      <div className="flex gap-8 pointer-events-auto">
                        <UnderlineLink href="#booknow" className="mt-2">BOOK NOW</UnderlineLink>
                        <UnderlineLink href="#learnmore" className="mt-2">LEARN MORE</UnderlineLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Text & Navigation */}
            <div className="lg:col-span-5 col-span-1 lg:pl-12 pt-12 lg:pt-0">
              <div className="lg:sticky lg:top-32 space-y-12">

                <div>
                  <h2 className="font-americana text-5xl lg:text-6xl text-[#C5A572] mb-8 leading-none tracking-tight">
                    Surprise<br />
                    Arrangements
                  </h2>
                  <p className="text-[#6B5D4F] text-base leading-relaxed font-light max-w-md">
                    Make your stay even more unforgettable by letting us prepare special in-villa arrangements!
                    Whether it&apos;s for surprising your partner or simply creating a romantic, dreamy ambiance within your
                    bedroom, private pool, or bathtub, <span className="italic font-normal">our team is ready to decorate your villa with the utmost creativity.</span>
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => scroll('left')}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>

      {/* Section 2 - Our Other Rooms & Villas */}
      <section className="py-24 bg-[#EFEBE2] relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Side - Text & Navigation */}
            <div className="lg:col-span-5 col-span-1 lg:pr-12 pt-12 lg:pt-0">
              <div className="lg:sticky lg:top-32 space-y-12">

                <div>
                  <h2 className="font-americana text-5xl lg:text-6xl text-[#C5A572] mb-8 leading-none tracking-tight">
                    Our Other<br />
                    Rooms & Villas
                  </h2>
                  <p className="text-[#6B5D4F] text-base leading-relaxed font-light max-w-md">
                    All of our villas and rooms have their <span className="italic font-normal">own unique charm</span>.
                    Aluman offers a variety of luxurious accommodations, each designed to
                    immerse guests in nature&apos;s tranquility and beauty.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => scroll2('left')}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => scroll2('right')}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                </div>

              </div>
            </div>

            {/* Right Side - Image Cards */}
            <div className="lg:col-span-7 col-span-1 -mr-8 lg:-mr-20">
              <div className="relative">
                <div
                  ref={scrollContainerRef2}
                  className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-8 lg:pr-20 pointer-events-none"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {filteredRooms.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[400px] snap-end"
                    >
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-2xl shadow-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="400px"
                          className="object-cover"
                        />
                      </div>

                      <h3 className="font-americana text-[1.75rem] text-[#C5A572] mb-5 leading-tight">
                        {item.title}
                      </h3>

                      <div className="pointer-events-auto">
                        <UnderlineLink href={item.link} className="mt-2">DISCOVER</UnderlineLink>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </section>


    </>
  )
}
