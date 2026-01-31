// components/spa_sections/DayPass.tsx
'use client'
import React, { useRef } from 'react'
import ImageSlider from '@/components/ui/ImageSlider'
import UnderlineLink from '@/components/ui/UnderlineLink'

const DayPass = () => {
  const sectionRef = useRef<HTMLElement>(null)

  const titleText =
    "Indulge in a day of luxury, relaxation, |BREAK|" +
    "wellness at a spa surrounded by the |BREAK|" +
    "jungle and river waterfalls. |BREAK|"

  const bodyText =
    "Visit Riverside Spa and enjoy a day pass with full access to spa facilities and |BREAK|" +
    "pools. Enjoy healthy juices and lunch at E.A.R.T.H. Restaurant. |BREAK|"

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
      className="relative bg-[#EFEBE2] overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-24 md:py-32">
        {/* Image Slider Section */}
        <ImageSlider
          slides={sliderData}
          renderContent={(slide) => (
            <div className="space-y-9 lg:space-y-5 xl:space-y-9 prose:p:max-w-md">
              <div className="font-basis text-[0.9rem] md:text-[1rem] text-[#B79F8C] mb-9">
                <span>Discover our day pass</span>
              </div>
              {/* Title */}
              <div className="font-americana text-[1.5rem] lg:text-[1.625rem] leading-snug font-medium text-[#B79F8C] transition-opacity duration-500 ease-in-out">
                {(slide as unknown as Slide).title.split('|BREAK|').map((segment: string, index: number, array: string[]) => (
                  <React.Fragment key={index}>
                    {segment}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>

              {/* Body */}
              <p className="mt-9 font-basis text-[#343E35] text-base leading-relaxed transition-opacity duration-500 ease-in-out">
                {(slide as Slide).body.split('|BREAK|').map((segment: string, index: number, array: string[]) => (
                  <React.Fragment key={index}>
                    {segment}
                    {index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              {/* Custom Link for this page */}
              <div className="flex mt-5 gap-3 ">
                <UnderlineLink href="/spa/day-pass" className="relative text-[#b79f8c]">
                  ENQUIRE
                </UnderlineLink>
                <UnderlineLink href="/spa/day-pass" className="relative text-[#b79f8c]">
                  LEARN MORE
                </UnderlineLink>
              </div>
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

export default DayPass
