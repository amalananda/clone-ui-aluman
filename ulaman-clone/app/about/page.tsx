// app/about/page.tsx
'use client'
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useScrollAnimation, scrollAnimationPresets } from '@/hooks/useScrollAnimation'
import { useGalleryData } from '@/hooks/useGalleryData'
import Footer from "@/components/sections/Footer"
import LocationMap from '@/components/sections/Navigation'
import SplitImageReveal from '@/components/animations/SplitImageReveal'
import GridImages from '@/components/ui/GridImages'
import Hero from '@/components/sections/Hero'
import CTA from '@/components/sections/CallToAction'
import Awards from '@/components/about_sections/Awards'
import OurValues from '@/components/about_sections/OurValues'

export default function AboutPage() {
  const [currentTeamSlide, setCurrentTeamSlide] = useState(0)
  const timelineContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: timelineContainerRef,
    offset: ["start center", "end center"],
    layoutEffect: false
  })

  const timeline2Ref = useRef<HTMLDivElement>(null)
  const timeline3Ref = useRef<HTMLDivElement>(null)
  const timeline4Ref = useRef<HTMLDivElement>(null)

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Fetch gallery data - PRIORITAS BACKEND, FALLBACK JSON
  const {
    images: aboutGalleryImages,
    loading: galleryLoading,
  } = useGalleryData('aboutGalleryImages')

  const teamSlides = [
    {
      label: '(Spot Mono in the middle!)',
      images: [
        'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop'
      ]
    },
    {
      label: 'Our Managers',
      images: [
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop'
      ]
    },
    {
      label: 'Front Office',
      images: [
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop'
      ]
    }
  ]

  const nextTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev + 1) % teamSlides.length)
  }

  const prevTeamSlide = () => {
    setCurrentTeamSlide((prev) => (prev - 1 + teamSlides.length) % teamSlides.length)
  }

  const { containerRef } = useScrollAnimation(scrollAnimationPresets.splitImages)

  return (
    <main className="bg-[#EFEBE2] overflow-x-hidden">
      <Hero heroImage="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1920&h=1080&fit=crop" />

      {/* Mission Section - 2 Images with Text */}
      <section
        ref={containerRef}
        className="relative min-h-[100vh] bg-[#EFEBE2] overflow-hidden"
      >
        <SplitImageReveal
          leftImage={{
            src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop',
            alt: 'Wellness experience'
          }}
          rightImage={{
            src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop',
            alt: 'Spa treatment'
          }}
        >
          <p
            className="text-[25px] sm:text-[30px] md:text-[25px] font-basis text-[#c9a961] mb-6 leading-tight"
            style={{ whiteSpace: 'pre-line' }}
          >
            Our mission is to create a self-<br />
            sustainable community rooted in <br />
            compassion, empowering our <br />
            employees and guests to <br />
            embrace authenticity and reach<br />
            their full potential.
          </p>
        </SplitImageReveal>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#c9a961] leading-tight">
                Eco-friendly by design,<br />
                and practice.
              </h2>
            </div>

            <div className="space-y-6 text-stone-700 text-base leading-relaxed">
              <p>
                At Aluman, our award-winning vision and commitment to eco-living and sustainability principles have been evident since the beginning. We&apos;ve designed Aluman using all <em>local, sustainable, and eco-friendly materials</em>, some sourced directly on-site. Our structures feature locally sourced bamboo and &apos;Rammed Earth&apos; walls, exposing natural elements like earth, sand, lime, and gravel.
              </p>
              <p>
                Eco-conscious practices are integral to our daily operations, including a solar power facility, a no-plastic policy, organic gardens, composting, natural pest control, chemical-free amenities, and filtered well water. These initiatives demonstrate our dedication to <em>leading the hospitality industry in minimizing environmental impact through sustainable operations.</em>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=750&fit=crop"
                alt="Bamboo architecture"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-sm text-stone-800">
                Reminders
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=750&fit=crop"
                alt="Natural interior"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=750&fit=crop"
                alt="Spa interior"
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#c9a961] leading-tight mb-8">
                State-of-the-art<br />
                architectural design
              </h2>
            </div>

            <div className="space-y-6 text-stone-700 text-base leading-relaxed">
              <p>
                The heart and soul of Aluman is our captivating bamboo architecture, featuring unimaginable curved arches and roofs that define our resort as a timeless avatar-like masterpiece. Seamlessly integrated across the entire resort, these bamboo structures rise gracefully from the earth, <em>designed around the existing landscape to blend naturally with the jungle and river surroundings.</em> Bold yet elegant, they leave a lasting impression on every guest fortunate enough to experience their beauty.
              </p>
              <p>
                From the elaborate bamboo and rammed earth lobby to the cocoon-shaped entrance of the main house and the bamboo grand staircase, each detail is crafted to inspire awe. Immerse yourself in a transformative <em>architectural paradise where luxury meets natural beauty</em>, inviting you to discover serenity and wonder.
              </p>
              <a href="#materials" className="inline-block text-[#c9a961] border-b border-[#c9a961] hover:text-[#b8975a] hover:border-[#b8975a] transition-colors mt-4">
                The materials
              </a>
            </div>
          </div>
        </div>
      </section>

      <OurValues />

      {/* Timeline Section - Story */}
      <section ref={timelineContainerRef} className="relative py-24 px-4 sm:px-6 lg:px-8">
        <header className="max-w-7xl mx-auto text-center mb-16">
          <div className='text-brand font-americana text-[#C69C4D]'>
            <p className='text-[1.3vw]'>The Aluman Story </p>
            <h3 className="heading display-3 text-[2.5vw]">Let&apos;s start from the </h3>
            <h3 className="heading display-3 text-[2.5vw]">very beginning.</h3>
          </div>
        </header>

        <motion.svg
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 3000"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          <motion.path
            d="M600,250
            L600,300 Q300,300 300,600
            L300,800 Q700,800 700,900
            L1000,900 Q1000,1000 900,1050
            L700,1150 Q600,1200 600,1300
            L600,1500 Q600,1600 500,1650
            L300,1750 Q200,1800 200,1900
            L200,2100 Q200,2200 300,2250
            L500,2350 Q600,2400 600,2500
            L600,2900"
            stroke="#c9a961"
            strokeWidth="5"
            fill="none"
            style={{
              pathLength: pathLength,
              opacity: 0.8
            }}
          />
        </motion.svg>

        <div className="max-w-7xl mx-auto space-y-32 relative z-10">
          {/* 2018 - Finding the land */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=600&fit=crop" alt="Waterfall" fill sizes="100vw" className="object-cover" priority />
                </div>
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl mt-8">
                  <Image src="https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400&h=600&fit=crop" alt="Jungle hut" fill sizes="100vw" className="object-cover" priority />
                </div>
              </div>
            </div>

            <div>
              <p className="text-sm text-stone-600 mb-2">2018</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#c9a961] mb-6">Finding the land</h3>
              <p className="text-stone-700 leading-relaxed">
                In 2018, a friend named Micca introduced Mono to an enchanting piece of natural waterfall jungle land near Kaba Keba in the region of Tabanan. Micca initially proposed a joint venture for her hippy-style community dream, but their visions didn&apos;t align, leading both to walk away from the land. However, <em>the remote and magical jungle waterfall remained etched in Mono&apos;s mind</em>, and over time, he felt a compelling urge to return and find the land and its owner. Eventually, he located the beautiful old landowner lady who, over time, agreed to lease the land to him.
              </p>
            </div>
          </div>

          {/* 2018 - The Next Steps */}
          <div ref={timeline2Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <div className="lg:order-2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" alt="Team meeting" fill sizes="100vw" className="object-cover" priority />
              </div>
            </div>

            <div className="lg:order-1">
              <p className="text-sm text-stone-600 mb-2">2018</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#c9a961] mb-6">The Next Steps</h3>
              <p className="text-stone-700 leading-relaxed">
                Mono then connected with Charlie Hearn of Inspiral Architects recognized as a &apos;green architect&apos; within Bali&apos;s eco-conscious community. Although Charlie did not have much experience in Bamboo construction his vision perfectly aligned with Mono&apos;s dream of integrating architectural design with the surrounding jungle and landscape. The initial over-the-top design and extraordinary roof lines proposed by Charlie, using bamboo, surpassed all expectations.
              </p>
            </div>
          </div>

          {/* 2020 - The Build */}
          <div ref={timeline3Ref} className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=600&fit=crop" alt="Construction" fill sizes="100vw" className="object-cover" priority />
              </div>
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl mt-8">
                <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=600&fit=crop" alt="Team photo" fill sizes="100vw" className="object-cover" priority />
              </div>
            </div>

            <div>
              <p className="text-sm text-stone-600 mb-2">2020</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#c9a961] mb-6">The Build</h3>
              <p className="text-stone-700 leading-relaxed">
                Once it was decided that Mono was building a retreat-style hotel,
                <em>the design concept shifted to include more villas than initially planned.
                </em> Practical additions for hotel guests, such as reception, dining, office, and yoga areas, were incorporated. Mono, with his unique style and inspirations, hired local Balinese stone carvers to bring the original cliffside wall to life with 3D lifelike carvings depicting Buddha&apos;s journey, drunken monkeys around his new wine cave, a hidden Kama Sutra corner, and the &apos;sacred tree&apos; house over the Aluman river. <em>The build took just over a year</em>, during which Mono learned all about the local materials and construction techniques. Next, it was time to find a team and staff to start the business.
              </p>
            </div>
          </div>

          {/* 2024 - Aluman Today */}
          <div ref={timeline4Ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
            <div className="lg:order-2">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                <Image src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=800&fit=crop" alt="Aluman today" fill sizes="100vw" className="object-cover" priority />
              </div>
            </div>

            <div className="lg:order-1">
              <p className="text-sm text-stone-600 mb-2">2024</p>
              <h3 className="text-3xl md:text-4xl font-serif text-[#c9a961] mb-6">Aluman Today</h3>
              <p className="text-stone-700 leading-relaxed">
                Mono and Rano have continued their collaboration, combining Inspiral&apos;s award-winning architectural designs with nature and Mono&apos;s dedication to meticulous detail and unparalleled standards in hospitality and cuisine. <em>This synergy has shaped Aluman Eco Luxury Resort into what it is today.</em> Mono states, &quot;Our biggest challenge and achievement is maintaining a delicate balance between &apos;eco and luxury&apos;, a feat very few hotels in the world have managed as well as we have.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - DATA DARI BACKEND/JSON */}
      <section id="gallery" className="py-12 md:py-24 bg-[#EFEBE2]">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-americana text-[#c9a961] mb-4">Gallery</h2>
            <p className="text-[#c9a961] text-sm md:text-base">The Journey of Aluman</p>
          </div>

          {galleryLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#c9a961]"></div>
            </div>
          ) : (
            <GridImages
              images={aboutGalleryImages}
              autoRotate={true}
              rotateInterval={3000}
              columns={{
                mobile: 2,
                tablet: 3,
                desktop: 3
              }}
              columnWidth={347.44}
              gap={16}
              showLightbox={true}
            />
          )}
        </div>
      </section>

      <Awards />

      {/* Team Gallery Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-start gap-4 mb-12">
            <button
              onClick={prevTeamSlide}
              className="w-12 h-12 border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTeamSlide}
              className="w-12 h-12 border-2 border-[#c9a961] text-[#c9a961] hover:bg-[#c9a961] hover:text-white transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <p className="text-[#c9a961] text-sm mb-8">{teamSlides[currentTeamSlide].label}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {teamSlides[currentTeamSlide].images.map((img, index) => (
              <div key={index} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                <Image src={img} alt={`Team ${index + 1}`} fill sizes="100vw" className="object-cover" priority />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#c9a961] leading-tight">Meet the Aluman Family</h2>
            </div>

            <div className="space-y-6">
              <p className="text-stone-700 leading-relaxed">
                At Aluman, our staff is <em>the heart and soul of our mission</em>, embodying the Balinese family spirit and community values. Our dedication to service excellence and a genuine love for what we do creates an unforgettable experience for our guests, allowing them to feel a part of the Aluman family. Our staff&apos;s commitment ensures that <em>everyone who visits leaves inspired, rejuvenated, and deeply touched</em> by the warmth and authenticity of Balinese people and culture.
              </p>

              <div className="pt-8">
                <svg className="w-32 h-16" viewBox="0 0 200 100" fill="none">
                  <path d="M20,50 Q40,20 60,50 T100,50" stroke="#c9a961" strokeWidth="2" fill="none" />
                </svg>
                <p className="text-sm text-stone-600 mt-2">
                  Quote from Mono,<br />
                  Founder of Aluman
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Escape the stress of modern life and join<br/>us on a journey to wellness."
        buttonText="BOOK YOUR STAY"
        buttonHref="#booking"
        optionalSubtitle="@alumanbali"
      />
      <LocationMap />
      <Footer />
    </main>
  )
}
