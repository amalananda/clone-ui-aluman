// components/sections/Explore.tsx
'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import UnderlineLink from '../ui/UnderlineLink'

const Explore = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform untuk crop effect - dari full foto ke crop center
  // Semakin di-scroll, semakin banyak crop (fokus ke center)
  const clipPathTop = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.9],
    ['inset(0% 0 0% 0)', 'inset(5% 0 15% 0)', 'inset(10% 0 25% 0)']
  )

  return (
    <section
      ref={containerRef}
      className="relative bg-[#EFEBE2]]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Text */}
        <motion.div
          className="text-center mb-12"
        >
          <p className="text-[#c9a961] text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-light mb-2">
            A world-class gastronomic journey where<br />
            nature&apos;s finest ingredients meet culinary<br />
            craftsmanship.
          </p>
          <UnderlineLink href="#discover" className="mt-5 md:text-xs lg:text-xs">VISIT THE WEBSITE</UnderlineLink>
        </motion.div>

        {/* Image Grid with Clip Path Effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

          {/* Image 1 - Food Dish */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            style={{ clipPath: clipPathTop }}
          >
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&h=1000&fit=crop"
                alt="Aluman Salad"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </motion.div>

          {/* Image 2 - Chef Portrait */}
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            style={{ clipPath: clipPathTop }}
          >
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=1000&fit=crop"
                alt="Our Chef: Arik"
                fill
                className="object-cover "
                sizes="(max-width: 768px) (max-height: 900px)100vw, 33vw"
                priority
              />
            </div>
          </motion.div>

          {/* Image 3 - Restaurant Building */}
          <motion.div
            className="relative aspect-[3/4] overflow-hidden rounded-2xl"
            style={{ clipPath: clipPathTop }}
          >
            <div className="relative w-full h-full">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=1000&fit=crop"
                alt="Restaurant exterior"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Explore
