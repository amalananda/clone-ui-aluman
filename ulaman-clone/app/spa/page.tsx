// app/spa/page.tsx
'use client'
import React from 'react'
import BeanieReveal from '@/components/animations/BeanieReveal'
import UnderlineLink from '@/components/ui/UnderlineLink'
import CTA from '@/components/sections/CallToAction'
import SpaTextReveal from '@/components/spa_sections/SpaTextReveal'
import Description from '@/components/room_sections/Description'
import GridImages from '@/components/ui/GridImages'
import { useGalleryData } from '@/hooks/useGalleryData'
import Bestselling from '@/components/spa_sections/Bestselling'
import ParallaxTextImage from '@/components/sections/ParallaxTextImage'
import SpaFacilities from '@/components/spa_sections/SpaFacilities'
import DayPass from '@/components/spa_sections/DayPass'
import SpaServices from '@/components/spa_sections/SpaServices'
import SpaFooter from '@/components/spa_sections/SpaFooter'
import HeroSpa from '@/components/spa_sections/HeroSpa'

export default function SpaPage() {
  const SINGLE_HERO_IMAGE =
    'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070'

  // ✅ Fetch gallery data dari backend dengan fallback ke JSON
  const {
    images: spaGalleryImages,
    loading: galleryLoading,
    isFromBackend
  } = useGalleryData('spa')

  return (
    <main className="relative bg-[#EFEBE2] overflow-x-hidden">

      {/* SECTION 1: Hero Section */}
      <HeroSpa
        heroImage="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070"
        leftNavItems={[
          { label: 'Home', href: '/' },
          { label: 'Treatments', href: '#treatments' },
          { label: 'Aluman', href: '#aluman' },
          { label: 'Contact', href: '#contact' }
        ]}
        rightButton={{
          label: 'Book a Treatment',
          href: '#booking'
        }}
      />

      {/* SECTION 2: Introduction Text */}
      <div className="flex flex-col justify-center items-center h-screen bg-[#EFEBE2]">
        <SpaTextReveal
          textMobile="Indulge in a luxurious and|BREAK| natural retreat at|BREAK|
          Riverside Spa, where|BREAK| every detail enhances|BREAK|
          your relaxation and|BREAK| rejuvenation. Experience|BREAK| a|BREAK|
          unique sanctuary of|BREAK| wellness and serenity."
          textDesktop="Indulge in a luxurious and natural retreat at |BREAK|
          Riverside Spa, where every detail enhances |BREAK|
          your relaxation and rejuvenation. Experience a |BREAK|
          unique sanctuary of wellness and serenity."
          backgroundColor="#EFEBE2"
          startColor="#b79f8c"
          endColor="rgba(219, 207, 197, 0.7)"
        />

        <UnderlineLink
          href="#spamenu"
          className="relative text-[#b79f8c] text-sm lg:text-base"
        >
          SPA MENU
        </UnderlineLink>
      </div>

      {/* SECTION 3: IMAGE BEANIE ANIMATION - REUSABLE */}
      <BeanieReveal
        image={SINGLE_HERO_IMAGE}
        alt="Luxury Villa View"
        minHeight={700}
        maxHeight={900}
        maxRadius={20000}
        id="beanie-image"
        className='relative'
      />

      {/* SECTION 4: Description */}
      <div className="flex flex-col justify-center items-center h-screen bg-[#EFEBE2] mt-[-8rem]">
        <Description
          title="A sanctuary of calm and<br/> deep relaxation."
          subtitle=""
          paragraphs={[
            "Experience Riverside Spa's serene luxury with our elegantly designed dome and<br/> state-of-the-art facilities. Enjoy rejuvenating treatments, including massage rooms, hot and cold plunge pools and an infrared sauna, all set to the soothing sounds of the Aluman River"
          ]}
          titleClassName='text-2xl lg:text-4xl text-[#b79f8c]'
          paragraphClassName='text-sm lg:text-base text-[#343e35]'
          buttonText="BOOK NOW"
          buttonTextClassName="text-[#b79f8c]"
          buttonLink="#booking"
        />
      </div>

      {/* SECTION 5: Spa Gallery - DATA DARI BACKEND/JSON */}
      <section id="spaGallery" className="relative py-12 md:py-24 bg-[#EFEBE2] mt-[-15rem]">
        <div className="max-w-[1600px] mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Debug info - bisa dihapus nanti */}
          {!galleryLoading && (
            <div className="text-center mb-4">
              <p className="text-xs text-gray-500">
                {isFromBackend ? '✅ Data from Backend' : '📦 Data from Local JSON'}
              </p>
            </div>
          )}

          {galleryLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b79f8c]"></div>
            </div>
          ) : (
            <GridImages
              images={spaGalleryImages}
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

      {/* SECTION 6: Description */}
      <div className="flex flex-col justify-start items-center py-12 md:py-16 bg-[#EFEBE2] -mt-20 md:-mt-16">
        <Description
          title="Discover Our Wide<br/> Range of Spa<br/> Treatments."
          paragraphs={[
            "Indulge in our spa treatments, featuring traditional Balinese massage, hot stone<br/>therapy, bamboo massage and 4 hand massage. Our full-service packages include<br/> facials and body scrubs, ranging from detox sessions to full-day pampering, using<br/> natural, organic ingredients."
          ]}
          mobileTitle="Discover Our Wide Range<br/> of Spa Treatments."
          mobileParagraphs={[
            "Indulge in our spa treatments, featuring traditional<br/> Balinese massage, hot stone therapy, bamboo<br/> massage and 4 hand massage. Our full-service<br/> packages include facials and body scrubs, ranging<br/> from detox sessions to full-day pampering, using<br/> natural, organic ingredients."
          ]}
          subtitle=""
          titleClassName='text-[1.6rem] lg:text-4xl text-[#b79f8c]'
          paragraphClassName='text-[14.475px] lg:text-[15.6px] text-[#343e35]'
          buttonText="SPA MENU"
          buttonTextClassName="text-[#b79f8c]"
          buttonLink="#spamenu"
        />
      </div>

      {/* SECTION 7: Bestselling Spa */}
      <div className="-mt-8 md:-mt-12">
        <Bestselling />
      </div>

      {/* SECTION 8: Description */}
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-16 md:py-0 md:h-screen bg-[#EFEBE2] mt-[-8rem]">
        <Description
          title="Enchanting amenities for<br/> ultimate relaxation."
          subtitle=""
          paragraphs={[
            "Discover Riverside Spa's unique amenities with the floating glass-lit floor,<br/> large leaf-shaped hammocks over the river and glowing backlit bathtubs<br/> for a serene flower bath. Enjoy our relaxing hot and cold plunge pools<br/> and detoxify in the infrared sauna and steam room, all while surrounded<br/> by the soothing sounds of the Aluman River."
          ]}
          titleClassName='text-2xl lg:text-4xl text-[#b79f8c]'
          paragraphClassName='text-sm lg:text-base text-[#343e35]'
          buttonText="BOOK NOW"
          buttonTextClassName="text-[#b79f8c]"
          buttonLink="#booking"
        />
      </div>

      {/* SECTION 9: Parallax Text */}
      <div className="-mt-32 md:-mt-60 mb-32 md:mb-60">
        <ParallaxTextImage
          images={[
            {
              src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&h=1000&fit=crop&q=80",
              alt: "Healing Hands",
              leftText: "Peaceful",
              rightText: "Wellness"
            },
            {
              src: "https://images.unsplash.com/photo-1639162906614-0603b0ae95fd?w=800&h=1000&fit=crop&q=80",
              alt: "Spa Pool",
              leftText: "Relaxation",
              rightText: "Massage"
            },
            {
              src: "https://images.unsplash.com/photo-1532926381893-7542290edf1d?w=800&h=1000&fit=crop&q=80",
              alt: "Spa Interior",
              leftText: "Interior",
              rightText: "Indoors"
            }
          ]}
          defaultLeftText="Relax"
          defaultRightText="Treatments"
        />
      </div>

      {/* SECTION 10: Spa Facilities */}
      <SpaFacilities />

      {/* SECTION 11: Day Pass Spa */}
      <DayPass />

      {/* SECTION 12: Circular Image 2 */}
      <BeanieReveal
        id="beanie-reveal-2"
        className="bg-[#EFEBE2]"
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&h=1000&fit=crop&q=80"
        alt="Retreat Aerial View"
        minHeight={600}
        maxHeight={800}
      />

      {/* SECTION 13: Spa Services */}
      <SpaServices />

      <CTA
        titleColor="text-[#B79F8C]"
        buttonColor="text-[#B79F8C]"
        optionalSubtitleColor="text-[#B79F8C]"
        titleMobile="Book your luxurious spa<br/> experience<br/>at Riverside today!"
        titleDesktop="Book your luxurious<br/>spa experience today!"
        buttonText="BOOK NOW"
        buttonHref="#learnmore"
        optionalSubtitle="@riversidebyaluman"
        titleSize="text-[1.56rem] lg:text-[2.16rem]"
      />
      <SpaFooter />
    </main>
  )
}
