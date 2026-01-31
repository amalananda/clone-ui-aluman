// components/villa_section/VillaRooms.tsx
'use client'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import UnderlineLink from '@/components/ui/UnderlineLink'
import { usePathname } from 'next/navigation'
import BookingModal from './BookingModal'

export default function VillaRooms() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef2 = useRef<HTMLDivElement>(null)
  const scrollContainerRef3 = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState('Floating Lake')

  const floatingLake = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=800&fit=crop&q=80'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=800&fit=crop&q=80'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=800&fit=crop&q=80'
    }
  ]

  const rooms = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=1000&fit=crop',
      link: '/rooms/cocoon-jungle'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop',
      link: '/rooms/avatar-tree-house'
    },
    {
      id: 3,
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
  const scroll3 = (direction: 'left' | 'right') => {
    if (scrollContainerRef3.current) {
      const scrollAmount = 420
      scrollContainerRef3.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isBookingOpen])



  const closeBookingModal = () => {
    setIsBookingOpen(false)
  }

  return (
    <>
      <BookingModal
        isOpen={isBookingOpen}
        onClose={closeBookingModal}
        roomType={selectedRoom}
      />
      {/* Section 1 - Floating Lake */}
      <section className="py-24 bg-[#EFEBE2] relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          {/* MOBILE VIEW - Image First, Then Text */}
          <div className="block lg:hidden space-y-8">
            {/* Images */}
            <div className="-mr-8">
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-8">
                  {filteredRooms.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[300px] snap-end">
                      <div className="relative aspect-[3/4] overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          fill
                          sizes="300px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text & Links (No Navigation Arrows) */}
            <div>
              <h2 className=" display-3 font-americana text-[1.75rem] text-[#C69C4D] mb-5 leading-snug tracking-tight font-medium ">
                Floating Lake
              </h2>
              <p className="text-[0.792rem] text-[#617262] mb-7">
                4 Units Available | 64m<sup>2</sup>
              </p>
              <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                <div className="bg-[#EDE6D8]">King sized bed</div>
              </div>
              <p className="text-[#343E35] text-[15.98px] font-basis mb-8">
                Set above Bali&apos;s only bio-filtered, koi-filled lake, Aluman&apos;s Floating Lake Villas offer a serene and luxurious experience unlike any other. Each villa features a private floating deck and a sunken round hammock, thoughtfully designed for couples—perfect for stargazing or feeding the koi below. Seamlessly blending modern tropical elegance with natural elements, the villas include a sun deck patio, hanging net, and a handcrafted teakwood bathtub.
              </p>
              <div className="flex gap-8">
                <UnderlineLink onClick={() => {
                  setSelectedRoom('Floating Lake')
                  setIsBookingOpen(true)
                }}>
                  BOOK NOW
                </UnderlineLink>
                <UnderlineLink
                  href={filteredRooms[0].link}
                  className="text-[#C69C4D]/50"
                  underlineColor="bg-[#C69C4D]/50"
                >LEARN NOW</UnderlineLink>
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW - Original Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Text & Navigation */}
            <div className="lg:col-span-5 lg:col-start-2 col-span-1 lg:pr-12 -mt-8">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div>
                  <h2 className="font-americana text-[1.585rem] md:text-[2.186rem] text-[#C69C4D] mb-5 leading-none tracking-tight">
                    Floating Lake
                  </h2>
                  <p className="text-sm text-[#617262] mb-7">
                    4 Units Available | 64m<sup>2</sup>
                  </p>
                  <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                    <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                    <div className="bg-[#EDE6D8]">King sized bed</div>
                  </div>
                  <p className="text-[#343E35] md:text-[15.98px] font-basis max-w-lg md:mt-8">
                    Set above Bali&apos;s only bio-filtered, koi-filled lake, Aluman&apos;s Floating<br /> Lake Villas offer a serene and luxurious experience unlike any other.<br />
                    Each villa features a private floating deck and a sunken round<br />
                    hammock, thoughtfully designed for couples—perfect for stargazing<br />
                    or feeding the koi below. Seamlessly blending modern tropical<br />
                    elegance with natural elements, the villas include a sun deck patio,<br />
                    hanging net, and a handcrafted teakwood bathtub.
                  </p>
                </div>
                <div className="flex gap-8 pointer-events-auto ">
                  <UnderlineLink onClick={() => {
                    setSelectedRoom('Floating Lake')
                    setIsBookingOpen(true)
                  }}>
                    BOOK NOW
                  </UnderlineLink>
                  <UnderlineLink
                    href={filteredRooms[0].link}
                    className="text-[#C69C4D]/50"
                    underlineColor="bg-[#C69C4D]/50"
                  >LEARN NOW</UnderlineLink>
                </div>

                <div className="flex gap-4 lg:items-end md:pt-28">
                  <button
                    onClick={() => scroll('left')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image Cards */}
            <div className="lg:col-span-6 col-span-2 -mr-8 lg:ml-20">
              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-8 lg:pr-20 pointer-events-none"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {filteredRooms.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[447.55px] snap-end"
                    >
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md ">
                        <Image
                          src={item.image}
                          fill
                          sizes="447.55px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
                        />
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

      {/* Section 2 - Cocoon Jungle */}
      <section className="py-24 bg-[#EFEBE2] relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          {/* MOBILE VIEW - Image First, Then Text */}
          <div className="block lg:hidden space-y-8">
            {/* Images */}
            <div className="-ml-8">
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pl-8">
                  {floatingLake.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[300px] snap-end">
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          fill
                          sizes="300px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text & Links (No Navigation Arrows) */}
            <div>
              <h2 className=" display-3 font-americana text-[1.75rem] text-[#C69C4D] mb-5 leading-snug tracking-tight font-medium ">
                Cocoon Jungle
              </h2>
              <p className="text-sm text-[#617262] mb-7">
                4 Units Available | 64m<sup>2</sup>
              </p>
              <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                <div className="bg-[#EDE6D8]">King sized bed</div>
              </div>
              <p className="text-[#343E35] text-[15.98px] font-basis mb-8">
                Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-woven sanctuary featuring a black bamboo bathroom and a spacious private balcony—perfect for romantic breakfasts overlooking the jungle, garden, and pool. These elegantly designed, cocoon-like villas offer bamboo floors, the largest private balcony among all room types, and the most refined ensuite bathroom at Aluman.
              </p>
              <div className="flex gap-8">
                <UnderlineLink onClick={() => {
                  setSelectedRoom('Cocoon Jungle')
                  setIsBookingOpen(true)
                }}>
                  BOOK NOW
                </UnderlineLink>
                <UnderlineLink
                  href={filteredRooms[0].link}
                  className="text-[#C69C4D]/50"
                  underlineColor="bg-[#C69C4D]/50"
                >LEARN NOW</UnderlineLink>
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW - Original Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Side - Image Cards */}
            <div className="lg:col-span-6 col-span-2 -ml-8 lg:-ml-20">
              <div className="relative">
                <div
                  ref={scrollContainerRef2}
                  className="flex flex-row-reverse gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pl-8 lg:pl-20 pointer-events-none"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {floatingLake.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[447.55px] snap-center"
                    >
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          fill
                          sizes="447.55px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
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

                      </p>

                      <h3 className="font-americana text-[1.75rem] text-[#C5A572] mb-5 leading-tight">

                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Text & Navigation */}
            <div className="lg:col-span-5 col-span-2 lg:pl-12 pt-12 lg:pt-0">
              <div className="lg:sticky lg:top-32 space-y-12">
                <div>
                  <h2 className="font-americana text-[1.585rem] md:text-[2.186rem] text-[#C69C4D] mb-5 leading-none tracking-tight">
                    Cocoon Jungle
                  </h2>
                  <p className="text-sm text-[#617262] mb-7">
                    4 Units Available | 64m<sup>2</sup>
                  </p>
                  <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                    <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                    <div className="bg-[#EDE6D8]">King sized bed</div>
                  </div>
                  <p className="text-[#343E35] md:text-[15.98px] font-basis max-w-lg md:mt-8">
                    Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-<br />
                    woven sanctuary featuring a black bamboo bathroom and a<br />
                    spacious private balcony—perfect for romantic breakfasts<br />
                    overlooking the jungle, garden, and pool. These elegantly designed,<br />
                    cocoon-like villas offer bamboo floors, the largest private balcony<br />
                    among all room types, and the most refined ensuite bathroom at<br />
                    Aluman.
                  </p>
                </div>

                <div className="flex gap-8 pointer-events-auto ">
                  <UnderlineLink onClick={() => {
                    setSelectedRoom('Cocoon Jungle')
                    setIsBookingOpen(true)
                  }}>
                    BOOK NOW
                  </UnderlineLink>
                  <UnderlineLink
                    href={filteredRooms[0].link}
                    className="text-[#C69C4D]/50"
                    underlineColor="bg-[#C69C4D]/50"
                  >LEARN NOW</UnderlineLink>
                </div>

                <div className="flex gap-4 lg:items-end md:pt-12">
                  <button
                    onClick={() => scroll2('left')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => scroll2('right')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
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

      {/* Section 3 - Avatar Tree House */}
      <section className="py-24 bg-[#EFEBE2] relative overflow-x-hidden">
        <div className="max-w-[1600px] mx-auto px-8">
          {/* MOBILE VIEW - Image First, Then Text */}
          <div className="block lg:hidden space-y-8">
            {/* Images */}
            <div className="-mr-8">
              <div className="relative">
                <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-8">
                  {filteredRooms.map((item) => (
                    <div key={item.id} className="flex-shrink-0 w-[300px] snap-end">
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md">
                        <Image
                          src={item.image}
                          fill
                          sizes="300px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Text & Links (No Navigation Arrows) */}
            <div>
              <h2 className=" display-3 font-americana text-[1.75rem] text-[#C69C4D] mb-5 leading-snug tracking-tight font-medium ">
                Avatar Tree House
              </h2>
              <p className="text-sm text-[#617262] mb-7">
                4 Units Available | 64m<sup>2</sup>
              </p>
              <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                <div className="bg-[#EDE6D8]">King sized bed</div>
              </div>
              <p className="text-[#343E35] text-[15.98px] font-basis mb-8">
                Elevated among the treetops, Aluman&apos;s Avatar Tree House Villas offer a truly unique sanctuary, surrounded by breathtaking rice field views and lush jungle landscapes. Perched 9 meters above ground and accessed via a striking bamboo-woven tunnel, these villas immerse guests in a seamless blend of architectural elegance and natural serenity.
              </p>
              <div className="flex gap-8">
                <UnderlineLink onClick={() => {
                  setSelectedRoom('Avatar Tree House')
                  setIsBookingOpen(true)
                }}>
                  BOOK NOW
                </UnderlineLink>
                <UnderlineLink
                  href={filteredRooms[0].link}
                  className="text-[#C69C4D]/50"
                  underlineColor="bg-[#C69C4D]/50"
                >LEARN NOW</UnderlineLink>
              </div>
            </div>
          </div>

          {/* DESKTOP VIEW - Original Layout */}
          <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Text & Navigation */}
            <div className="lg:col-span-5 lg:col-start-2 col-span-1 lg:pr-12 -mt-8">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div>
                  <h2 className="font-americana text-[1.585rem] md:text-[2.186rem] text-[#C69C4D] mb-5 leading-none tracking-tight">
                    Avatar Tree House
                  </h2>
                  <p className="text-sm text-[#617262] mb-7">
                    4 Units Available | 64m<sup>2</sup>
                  </p>
                  <div className="flex gap-8 text-[0.81rem] font-basis text-[#343E35] pb-4">
                    <div className="bg-[#EDE6D8]">Sleeps 3 (With sofa bed)</div>
                    <div className="bg-[#EDE6D8]">King sized bed</div>
                  </div>
                  <p className="text-[#343E35] md:text-[15.98px] font-basis max-w-lg md:mt-8">
                    Elevated among the treetops, Aluman&apos;s Avatar Tree House Villas<br />
                    offer a truly unique sanctuary, surrounded by breathtaking rice field<br />
                    views and lush jungle landscapes. Perched 9 meters above ground<br />
                    and accessed via a striking bamboo-woven tunnel, these villas<br />
                    immerse guests in a seamless blend of architectural elegance and<br />
                    natural serenity.
                  </p>
                </div>
                <div className="flex gap-8 pointer-events-auto ">
                  <UnderlineLink onClick={() => {
                    setSelectedRoom('Avatar Tree House')
                    setIsBookingOpen(true)
                  }}>
                    BOOK NOW
                  </UnderlineLink>
                  <UnderlineLink
                    href={filteredRooms[0].link}
                    className="text-[#C69C4D]/50"
                    underlineColor="bg-[#C69C4D]/50"
                  >LEARN NOW</UnderlineLink>
                </div>

                <div className="flex gap-4 lg:items-end md:pt-28">
                  <button
                    onClick={() => scroll3('left')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => scroll3('right')}
                    className="w-[79.91px] h-[79.91px] border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side - Image Cards */}
            <div className="lg:col-span-6 col-span-2 -mr-8 lg:ml-20">
              <div className="relative">
                <div
                  ref={scrollContainerRef3}
                  className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide pr-8 lg:pr-20 pointer-events-none"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {filteredRooms.map((item) => (
                    <div
                      key={item.id}
                      className="flex-shrink-0 w-[447.55px] snap-end"
                    >
                      <div className="relative aspect-[3/4] mb-4 overflow-hidden rounded-md ">
                        <Image
                          src={item.image}
                          fill
                          sizes="447.55px"
                          className="object-cover"
                          alt={`Image of room ${item.id}`}
                        />
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
