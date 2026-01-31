// app/retreats/page.tsx
'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Footer from '@/components/sections/Footer'
import LocationMap from '@/components/sections/Navigation'
import Hero from '@/components/sections/Hero'
import BeanieReveal from '@/components/animations/BeanieReveal'
import UnderlineLink from '@/components/ui/UnderlineLink'
import CTA from '@/components/sections/CallToAction'
import Testimonials from '@/components/sections/Testimonials'
import IntroSection from '@/components/retreats_sections/Introduction'

export default function RetreatsPage() {
  const [activeTab, setActiveTab] = useState<'healing' | 'detox'>('healing')
  const [currentRetreatSlide, setCurrentRetreatSlide] = useState(0)

  const retreatPrograms = {
    healing: {
      title: 'Healing Mind, Body & Soul',
      subtitle: 'Unveil Your True Self',
      nights: ['3 Nights', '5 Nights', '7 Nights'],
      description: `Reconnect with nature and discover your inner harmony, from our 3,<br/>
      5, or 7-night wellness retreats, each designed to nourish your mind,<br/>
      body and soul. Experience the transformative experiences such as<br/>
      chakra balancing, healing rituals, spa treatments and guided wellness<br/>
      activities.`,

      suitable: [
        'Balance their energy',
        'Restore inner peace and strength',
        'Discover themself on a deeper level',
        'Release emotional blockages'
      ],
      images: [
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=800&fit=crop'
      ]
    },
    detox: {
      title: 'Detox & Juice Cleanse Program',
      subtitle: '',
      nights: ['4 Nights', '6 Nights', '8 Nights'],
      description: `Improve your health and well-being with Aluman's carefully planned <br/>
      detox programs. Choose from 4, 6, or 8 nights of personalized <br/>
      cleansing journeys, each offering a mix of renewal, healing and <br/>
      balance.`,
      suitable: [
        'Achieve weight loss and feel lighter',
        'Reset the body and restore balance',
        'Eliminate toxins for a fresh start',
        'Clear the mind and sharpen focus',
        'Release stress, find balance and ignite creativity'
      ],
      images: [
        'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=800&fit=crop',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop'
      ]
    }
  }

  const teamMembers = [
    {
      name: 'Yanti',
      role: 'Yoga & Sound',
      subtitle: 'Healing Practitioner',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=800&fit=crop'
    },
    {
      name: 'Ajik Mangku',
      role: 'Local Balinese Priest',
      subtitle: '',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&h=800&fit=crop'
    }
  ]

  const currentProgram = retreatPrograms[activeTab]

  return (
    <main className="bg-[#EFEBE2]">

      {/* SECTION 1: Hero Section */}
      <Hero />

      {/* SECTION 2: Introduction Text */}
      <IntroSection
        title="Discover your path to<br />wellness and growth."
        content="<p>At Aluman we redefine luxury as an experience that not only pampers the senses but also nurtures <br class='hidden lg:block' />the soul. Nestled in a pristine natural environment, our eco-luxury retreat is a sanctuary designed to <br class='hidden lg:block' />inspire healing and transformation. We believe in the power of dedicated attention and care. That's <br class='hidden lg:block' />why our year-round individualized retreat programs are tailored to suit your every need. Whether <br class='hidden lg:block' /> you seek relaxation, rejuvenation or profound inner change, our meticulously designed activities <br class='hidden lg:block' />and treatments are crafted to address your specific goals.</p>"
      />

      {/* SECTION 3: Retreat Programs Tabs */}
      <section className="py-16 px-8 bg-[#EFEBE2]">
        <div className="max-w-7xl mx-auto">

          {/* Tab Headers */}
          <div className="flex justify-center gap-8 mb-16">
            <button
              onClick={() => setActiveTab('healing')}
              className={`relative font-americana text-2xl lg:text-3xl pb-3 transition-colors ${activeTab === 'healing' ? 'text-[#C5A572]' : 'text-[#C5A572]/40'
                }`}
            >
              Healing Mind, Body & Soul
              {activeTab === 'healing' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A572]" />
              )}
            </button>
            <button
              onClick={() => setActiveTab('detox')}
              className={`relative font-americana text-2xl lg:text-3xl pb-3 transition-colors ${activeTab === 'detox' ? 'text-[#C5A572]' : 'text-[#C5A572]/40'
                }`}
            >
              Detox & Juice Cleanse Program
              {activeTab === 'detox' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C5A572]" />
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left: Image Carousel */}
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={currentProgram.images[currentRetreatSlide]}
                  alt={currentProgram.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Dot Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                  {currentProgram.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentRetreatSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentRetreatSlide === index
                        ? 'bg-[#F4EFE8]'
                        : 'bg-white/70 hover:bg-white'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex flex-col justify-between h-full space-y-8">
              <div>
                <div>
                  <h2 className="font-americana text-xl lg:text-2xl text-[#C69C4D] mb-4">
                    {currentProgram.title}
                  </h2>
                  {currentProgram.subtitle && (
                    <p className="text-[#C69C4D] text-sm lg:text-sm font-basis">
                      {currentProgram.subtitle}
                    </p>
                  )}
                </div>

                {/* Night Options */}
                <div className="flex gap-4 mt-6">
                  {currentProgram.nights.map((night, index) => (
                    <button
                      key={index}
                      className="px-6 py-2 bg-[rgba(173,140,72,0.1)] text-[#6B5D4F] rounded-[0.25rem] text-sm"
                    >
                      {night}
                    </button>
                  ))}
                </div>

                {/* Description */}
                <p
                  className="text-[#343E35] font-basis leading-relaxed mt-6"
                  dangerouslySetInnerHTML={{ __html: currentProgram.description }}
                />

                {/* Suitable For */}
                <div className="mt-8">
                  <p className="text-[#C69C4D] mb-4 font-basis">
                    {activeTab === 'detox'
                      ? 'Our Detox Program is perfect for those who want to:'
                      : 'Suitable for those looking to:'}
                  </p>
                  <ol className="space-y-2 text-[#343E35] font-basis">
                    {currentProgram.suitable.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-3 text-[#C5A572]">{index + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Bottom Row: LEARN & BOOK + Arrow Buttons */}
              <div className="flex justify-between items-center">
                {/* LEARN & BOOK */}
                <UnderlineLink
                  href="#learnbook"
                  className="font-basis text-sm lg:text-base text-[#C5A572] whitespace-nowrap"
                >
                  LEARN & BOOK
                </UnderlineLink>

                {/* Arrow Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setCurrentRetreatSlide(Math.max(0, currentRetreatSlide - 1))}
                    disabled={currentRetreatSlide === 0}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                  <button
                    onClick={() => setCurrentRetreatSlide(Math.min(currentProgram.images.length - 1, currentRetreatSlide + 1))}
                    disabled={currentRetreatSlide >= currentProgram.images.length - 1}
                    className="w-14 h-14 border-2 border-[#C5A572]/40 rounded-lg flex items-center justify-center hover:border-[#C5A572] hover:bg-[#C5A572]/5 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronRight size={24} strokeWidth={1.5} className="text-[#C5A572]" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: Contact Form */}
      <section className="py-24 px-8 bg-[#EFEBE2]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left: Title */}
            <div>
              <h2 className="font-americana text-xl lg:text-2xl text-[#C69C4D] mb-6 leading-tight">
                Not sure which retreat<br />package suits you best?
              </h2>
              <p className="text-[#343E35] text-sm lg:text-base leading-relaxed">
                Consult with our Holistic Healing & Wellness<br />
                Team. Let us know your preferences and we&apos;ll<br />
                contact you.
              </p>
            </div>

            {/* Right: Form */}
            <div className="space-y-6 items-center row-gap-[1.75rem]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name - With Error */}
                <div>
                  <input
                    type="text"
                    placeholder="Full name*"
                    className="w-full bg-transparent border-b border-[#C5A572]/30 py-3 text-[#6B5D4F] placeholder:text-[#6B5D4F]/40 focus:outline-none focus:border-[#C5A572]"
                    disabled
                  />
                  <p className="text-red-500 text-xs mt-1">This field is required</p>
                </div>

                {/* Email - With Error */}
                <div>
                  <input
                    type="email"
                    placeholder="Email address*"
                    className="w-full bg-transparent border-b border-[#C5A572]/30 py-3 text-[#6B5D4F] placeholder:text-[#6B5D4F]/40 focus:outline-none focus:border-[#C5A572]"
                    disabled
                  />
                  <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Phone Number */}
                <input
                  type="text"
                  placeholder="+1 | Phone number (With country code)"
                  className="bg-transparent border-b border-[#C5A572]/30 py-3 text-[#6B5D4F] placeholder:text-[#6B5D4F]/40 focus:outline-none focus:border-[#C5A572]"
                  disabled
                />

                {/* Country */}
                <input
                  type="text"
                  placeholder="Country of residence"
                  className="bg-transparent border-b border-[#C5A572]/30 py-3 text-[#6B5D4F] placeholder:text-[#6B5D4F]/40 focus:outline-none focus:border-[#C5A572]"
                  disabled
                />
              </div>

              <div>
                <p className="text-[#C69C4D] text-xs mb-1">
                  Select as many as needed
                </p>
                <p className="text-red-500 text-sm mb-4">
                  Prefer to be contacted via*
                </p>
                <div className="flex gap-30">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-[#C5A572] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
                    </div>
                    <span className="text-[#343E35] text-sm font-basis">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-[#C5A572] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
                    </div>
                    <span className="text-[#343E35] text-sm font-basis">WhatsApp</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <div className="w-5 h-5 rounded-full border-2 border-[#C5A572] flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-transparent"></div>
                    </div>
                    <span className="text-[#343E35] text-sm font-basis">Telegram</span>
                  </label>
                </div>
              </div>

              <button
                className="text-[#C5A572] text-sm font-medium tracking-widest border-b border-[#C5A572] pb-1 hover:text-[#8B7355] hover:border-[#8B7355] transition-colors uppercase mt-8"
                disabled
              >
                CONTINUE
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 5: Circular Image */}
      <BeanieReveal
        id="beanie-reveal-1"
        className="bg-[#EFEBE2]"
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&h=1000&fit=crop&q=80"
        alt="Retreat Aerial View"
        minHeight={600}
        maxHeight={800}
      />

      {/* SECTION 6: Wellness Team */}
      <section className="relative py-24 px-8 bg-[#EFEBE2] ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left: Title */}
            <div className="lg:sticky lg:top-24 lg:self-start h-fit">
              <h2 className="font-americana text-2xl lg:text-4xl text-[#C69C4D] mb-6 mt-3 leading-tight">
                Our dedicated<br />wellness team.
              </h2>
              <p className="text-[#6B5D4F] text-sm  lg:text-base font-basis leading-relaxed">
                Our experienced practitioners are certified in <br /> multiple modalities and are trained to provide our <br />
                guests with a journey focused on personalized attention and care.
              </p>
            </div>

            {/* Right: Team Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden rounded-2xl shadow-xl mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Name and Learn More in same row */}
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-[#C69C4D] text-sm lg:text-base font-basis ">{member.name}</h3>
                    <UnderlineLink href="#guest" className="mt-4 text-sm lg:text-base">LEARN MORE</UnderlineLink>
                  </div>

                  <p className="text-[#343E35] text-sm lg:text-base">{member.role}</p>
                  {member.subtitle && (
                    <p className="text-[#343E35] text-sm lg:text-base">{member.subtitle}</p>
                  )}
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: Circular Image 2 */}
      <BeanieReveal
        id="beanie-reveal-2"
        className="bg-[#EFEBE2]"
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&h=1000&fit=crop&q=80"
        alt="Retreat Aerial View"
        minHeight={600}
        maxHeight={800}
      />

      {/* SECTION 8: Testimonials */}
      <Testimonials />
      <CTA
        title="Escape the stress of modern life and join<br/>us on a journey to wellness."
        buttonText="LEARN MORE"
        buttonHref="#learnmore"
        optionalSubtitle="@Alumanbali"
      />
      <LocationMap />
      <Footer />
    </main>
  )
}
