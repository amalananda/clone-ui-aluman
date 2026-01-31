// components/sections/Experiences.tsx
'use client'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useRef, useState } from 'react'
import UnderlineLink from '@/components/ui/UnderlineLink'
import ImageNavControls from '@/components/ui/ImageNavControls'

const Experiences = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [imageIndices, setImageIndices] = useState<{ [key: number]: number }>({
    1: 0,
    2: 0,
    3: 0
  })

  const FloatingLakeImages = [
    {
      src: 'https://images.unsplash.com/photo-1683598545969-7f560be8ac2c?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Luxury villa lounge area'
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=700&fit=crop&q=80',
      alt: 'Modern bathroom with mirror'
    },
    {
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=700&fit=crop&q=80',
      alt: 'Villa bedroom interior'
    },
  ]
  const AvatarTreeHouseImages = [
    {
      src: 'https://images.unsplash.com/photo-1751834410433-b350273959f6?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Luxury villa lounge area'
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=700&fit=crop&q=80',
      alt: 'Modern bathroom with mirror'
    },
    {
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=700&fit=crop&q=80',
      alt: 'Villa bedroom interior'
    },
  ]
  const CocoonJungleImages = [
    {
      src: 'https://images.unsplash.com/photo-1692888756078-a8282e78ff86?q=75&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Luxury villa lounge area'
    },
    {
      src: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600&h=700&fit=crop&q=80',
      alt: 'Modern bathroom with mirror'
    },
    {
      src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600&h=700&fit=crop&q=80',
      alt: 'Villa bedroom interior'
    },
  ]
  const experiences = [
    {
      id: 1,
      title: 'Floating Lake',
      subtitle: 'A <i>luxurious floating villa</i> on Aluman’s bio-filtered lake.',
      images: FloatingLakeImages,
      link: '/rooms/floating-lake'
    },
    {
      id: 2,
      title: 'Cocoon Jungle',
      subtitle: 'Indulge in an unparalleled <i>blend of exotic elegance and coziness</i>.',
      images: CocoonJungleImages,
      link: '/rooms/cocoon-jungle'
    },
    {
      id: 3,
      title: 'Avatar Tree House',
      subtitle: 'Experience luxury in an <i>avant-garde</i> design with breathtaking 180° views.',
      images: AvatarTreeHouseImages,
      link: '/rooms/avatar-tree-house'
    },
  ]

  // 🔑 LOGIKA SCROLL NAVIGASI
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 450
      if (direction === 'left') {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
      }
    }
  }

  // Navigation untuk image carousel
  const handlePrevImage = (expId: number, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [expId]: (prev[expId] - 1 + totalImages) % totalImages
    }))
  }

  const handleNextImage = (expId: number, totalImages: number) => {
    setImageIndices(prev => ({
      ...prev,
      [expId]: (prev[expId] + 1) % totalImages
    }))
  }

  const handleDotClick = (expId: number, index: number) => {
    setImageIndices(prev => ({
      ...prev,
      [expId]: index
    }))
  }
  return (
    <section id="experiences" className="py-10 md:py-15 bg-[#EFEBE2] text-stone-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-8 md:mb-10 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-[1.873rem] font-americana text-[#C69C4D] leading-tight max-w-2xl px-4">
            Discover cozy elegance, where tranquility <br />
            meets Bali&apos;s serene beauty.
          </h2>
        </div>

        <div className="flex flex-col lg:gap-[10rem] lg:flex-row items-center">
          <div className="hidden lg:flex flex-col items-center lg:w-[10vw] lg:h-[12vw] xl:w-[5vw] xl:h-[15vw] flex-shrink-0 space-y-8 border-current lg:mr-[1vw] lg:ml-[2vw] xl:ml-[-3vw]">
            <button
              onClick={() => scroll('left')}
              className="p-[1.5vw] border border-[#C69C4D] transition-all duration-300 text-[#C69C4D]"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-[2vw] h-[2vw]" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-[1.5vw] border border-[#C69C4D] transition-all duration-300 text-[#C69C4D]"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-[2vw] h-[2vw]" />
            </button>
          </div>

          <div className="w-full">
            <div
              ref={scrollContainerRef}
              className="flex space-x-4 md:space-x-6 lg:space-x-8 pb-4 snap-x snap-mandatory scrollbar-hide pr-4 md:pr-10 pl-0"
            >
              {experiences.map((exp) => {
                const currentIndex = imageIndices[exp.id] || 0
                const currentImage = exp.images[currentIndex]

                return (
                  <div
                    key={exp.id}
                    className="flex-none snap-start group relative overflow-hidden rounded-lg transition-all duration-500 w-[308px] sm:w-[420px] lg:w-[450px] xl:w-[480px] max-w-[480px]"
                  >
                    <div className="relative overflow-hidden w-full aspect-[3/4] group">
                      <Image
                        src={currentImage.src}
                        alt={currentImage.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 85vw, (max-width: 768px) 50vw, (max-width: 1024px) 40vw, 30vw"
                        priority={exp.id === 1}
                      />

                      {exp.images.length > 1 && (
                        <ImageNavControls
                          currentIndex={currentIndex}
                          totalSlides={exp.images.length}
                          onPrev={() => handlePrevImage(exp.id, exp.images.length)}
                          onNext={() => handleNextImage(exp.id, exp.images.length)}
                          onDotClick={(index) => handleDotClick(exp.id, index)}
                        />
                      )}
                    </div>

                    <div className="mt-4 bg-[#EFEBE2]">
                      <h3 className="text-xl md:text-[1.625rem] font-americana text-[#C69C4D] mb-2">{exp.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: exp.subtitle }} className="text-sm sm:text-base font-americana text-stone-600 mb-3 sm:mb-4 " />
                      <UnderlineLink href={exp.link} className="mt-4 sm:mt-5 text-sm md:text-[0.9375rem] font-basis">DISCOVER</UnderlineLink>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences
