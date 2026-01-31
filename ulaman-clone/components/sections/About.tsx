// components/sections/About.tsx
'use client'

import React, { useState, useEffect, useRef } from 'react'
import TextReveal from '@/components/animations/TextReveal'
import ImageSlider from '@/components/ui/ImageSlider'
import UnderlineLink from '@/components/ui/UnderlineLink'

const useIsDesktop = (minWidth: number = 1024) => {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= minWidth)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [minWidth])

  return isDesktop
}

const About = () => {
  const [, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [revealRatio, setRevealRatio] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const textContainerRef = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop(1024)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const inView = rect.top < window.innerHeight * 0.75 && rect.bottom > 0
        if (inView && !isVisible) {
          setIsVisible(true)
        }
      }

      if (textContainerRef.current) {
        const { top, height } = textContainerRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight

        let startOffset, endOffset

        if (isDesktop) {
          startOffset = windowHeight * 0.69
          endOffset = -windowHeight * 0.02
        } else {
          startOffset = windowHeight * 0.59
          endOffset = -windowHeight * 0.02
        }

        const scrollDistance = height + startOffset - endOffset
        const ratio = 1 - (top - endOffset) / scrollDistance
        const newRatio = Math.min(1, Math.max(0, ratio))

        setRevealRatio(newRatio)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible, isDesktop])

  const mainTextMobile =
    "Nestled among the rice |BREAK|" +
    "fields and coconut trees |BREAK|" +
    "of Tabanan, Aluman is |BREAK|" +
    "only 20 minutes away |BREAK|" +
    "from the vibrant town of |BREAK|" +
    "Canggu."

  const mainTextDesktop =
    "Nestled among the rice fields and |BREAK|" +
    "coconut trees of Tabanan, Aluman |BREAK|" +
    "is only 20 minutes away from the |BREAK|" +
    "vibrant town of Canggu."

  const textRevealProps = isDesktop
    ? {
      text: mainTextDesktop,
      className: "font-americana text-[2.5rem] leading-[1.25] font-normal",
      startColor: "#C69C4D",
      endColor: "rgba(198, 156, 77, 0.3)",
    }
    : {
      text: mainTextMobile,
      className: "font-americana text-[1.875rem] leading-[1.25] font-normal",
      startColor: "#C69C4D",
      endColor: "rgba(198, 156, 77, 0.3)",
    }

  const titleText =
    "An award-winning eco-luxury resort offering |BREAK|" +
    "a unique hideaway experience. Embrace |BREAK|" +
    "authenticity, balance, and harmony with |BREAK|" +
    "nature in a healing, luxurious environment.|BREAK|"

  const bodyText =
    "We believe nature and luxury can coexist. Aluman Eco Luxury Resort offers a |BREAK|" +
    "secluded, lush haven with luxurious amenities and impeccable service. |BREAK|" +
    "Immerse yourself in traditional Balinese culture and leave feeling renewed, all|BREAK|" +
    "while minimizing your ecological footprint. Recharge your mind, body, and |BREAK|" +
    "soul in this unique holistic retreat."
  interface Slide {
    [key: string]: unknown // Add index signature
    src: string
    alt: string
    title: string
    body: string
  }

  const sliderData: Slide[] = [
    {
      src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&h=1000&fit=crop&q=80',
      alt: 'Aluman Eco Resort Exterior View',
      title: titleText,
      body: bodyText
    },
    {
      src: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=1000&fit=crop&q=80',
      alt: 'Luxury Interior Design',
      title: titleText,
      body: bodyText
    },
    {
      src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=1000&fit=crop&q=80',
      alt: 'Infinity Pool with Nature View',
      title: titleText,
      body: bodyText
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-[#EFEBE2] from-stone-950 to-stone-900 text-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        {/* Text Reveal Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-20 items-center mb-16 md:mb-24">
          <div
            className="lg:col-span-2 flex justify-center"
            style={{
              animation: isVisible ? 'fadeInLeft 1s ease-out 0.3s both' : 'none'
            }}
          >
            <div ref={textContainerRef} className="max-w-4xl mx-auto text-center px-2 sm:px-4">
              <TextReveal
                {...textRevealProps}
                as="h1"
                revealRatio={revealRatio}
              />
            </div>
          </div>
        </div>

        {/* Image Slider Section */}
        <ImageSlider
          slides={sliderData}
          renderContent={(slide) => (
            <div className="w-full px-0 sm:px-4 md:px-6 lg:ml-12 lg:pr-8">
              {/* Title */}
              <div className="font-americana text-[1.125rem] sm:text-[1.25rem] lg:text-[1.5rem] leading-snug font-medium text-[#C69C4D] transition-opacity duration-500 ease-in-out">
                {(slide as unknown as Slide).title.split('|BREAK|').map((segment: string, index: number, array: string[]) => (
                  <React.Fragment key={index}>
                    {segment}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              {/* Body */}
              <p className="mt-6 sm:mt-8 font-basis text-[#343E35]/70 text-sm sm:text-base leading-relaxed transition-opacity duration-500 ease-in-out">
                {(slide as Slide).body.split('|BREAK|').map((segment: string, index: number, array: string[]) => (
                  <React.Fragment key={index}>
                    {segment}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              {/* Custom Link for this page */}
              <UnderlineLink href="/about" className="mt-5 sm:mt-6 font-basis inline-block">
                ABOUT US
              </UnderlineLink>
            </div>
          )}
        />
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleX {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  )
}

export default About
