// components/sections/ParallaxTextImage.tsx
'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

interface ImageData {
  src: string
  alt: string
  leftText?: string
  rightText?: string
}

interface ParallaxTextImageProps {
  images: ImageData[]
  defaultLeftText?: string
  defaultRightText?: string
}

const ParallaxTextImage = ({
  images,
  defaultLeftText = 'Relax',
  defaultRightText = 'Treatments'
}: ParallaxTextImageProps) => {
  const [scrollY, setScrollY] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [nextIndex, setNextIndex] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')
  const [isAnimating, setIsAnimating] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  const currentImage = images[currentIndex]
  const leftText = currentImage.leftText || defaultLeftText
  const rightText = currentImage.rightText || defaultRightText

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = -rect.top
        setScrollY(scrollProgress)
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    setCanScrollLeft(currentIndex > 0)
    setCanScrollRight(currentIndex < images.length - 1)
  }, [currentIndex, images.length])


  const handlePrev = () => {
    if (isAnimating || currentIndex === 0) return

    const prevIdx = currentIndex - 1
    setNextIndex(prevIdx)
    setDirection('prev')
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex(prevIdx)
      setIsAnimating(false)
    }, 600)
  }

  const handleNext = () => {
    if (isAnimating || currentIndex === images.length - 1) return

    const nextIdx = currentIndex + 1
    setNextIndex(nextIdx)
    setDirection('next')
    setIsAnimating(true)

    setTimeout(() => {
      setCurrentIndex(nextIdx)
      setIsAnimating(false)
    }, 600)
  }


  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 overflow-hidden flex items-center justify-center"
    >
      {/* Background Scrolling Text - Left (ATAS) */}
      <div
        className="absolute left-0 top-[20%] whitespace-nowrap pointer-events-none select-none opacity-[0.06] z-0"
        style={{
          transform: `translateX(${scrollY * 0.3}px)`,
          fontSize: 'clamp(8rem, 15vw, 18rem)',
          fontFamily: 'basis-serif',
          color: '#C69C4D',
          fontWeight: '50',
          letterSpacing: '-0.02em'
        }}
      >
        {leftText} {leftText} {leftText}
      </div>

      {/* Background Scrolling Text - Right (BAWAH) */}
      <div
        className="absolute right-0 top-[50%] whitespace-nowrap pointer-events-none select-none opacity-[0.06] z-0"
        style={{
          transform: `translateX(${-scrollY * 0.3}px)`,
          fontSize: 'clamp(8rem, 15vw, 18rem)',
          fontFamily: 'serif',
          color: '#C69C4D',
          fontWeight: '50',
          letterSpacing: '-0.02em'
        }}
      >
        {rightText} {rightText} {rightText}
      </div>

      {/* Arch Image Container - NO overflow-hidden di sini */}
      <div className="relative z-10 w-full max-w-xl px-4">
        <div
          className="relative w-full mx-auto"
          style={{
            aspectRatio: '3/4'
          }}
        >
          {/* Current Image - slide out keluar parent */}
          <div
            key={currentIndex}
            className="absolute inset-0 transition-all duration-600 ease-in-out overflow-hidden rounded-t-full"
            style={{
              transform: isAnimating
                ? direction === 'next'
                  ? 'translateX(-150%) scale(0.8)'
                  : 'translateX(150%) scale(0.8)'
                : 'translateX(0) scale(1)',
              opacity: isAnimating ? 0 : 1,
              zIndex: 1
            }}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>

          {/* Next Image - slide in dari luar parent */}
          {isAnimating && (
            <div
              key={`transition-${nextIndex}`}
              className="absolute inset-0 overflow-hidden rounded-t-full"
              style={{
                zIndex: 2,
                animation: direction === 'next'
                  ? 'slideScaleInRightOut 600ms ease-in-out forwards'
                  : 'slideScaleInLeftOut 600ms ease-in-out forwards'
              }}
            >
              <Image
                src={images[nextIndex].src}
                alt={images[nextIndex].alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}
        </div>
      </div>

      {/* Arrow Navigation Buttons */}
      {images.length > 1 && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!canScrollLeft || isAnimating}
            className={`absolute left-1/2 -translate-x-[calc(50%+40px)] md:left-[9%] md:translate-x-0 bottom-8 md:top-[85%] md:-translate-y-1/2 z-20 w-[58px] h-[58px] md:w-20 md:h-20 border-2 transition-colors duration-300 flex items-center justify-center group
            ${canScrollLeft ? 'border-[rgb(183,159,140)] hover:border-[rgb(183,159,140)]/80' : 'border-[rgb(183,159,140)]/30'}
            disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Previous"
          >
            <svg
              className="w-6 h-6 text-[rgb(183,159,140)] group-hover:text-[rgb(183,159,140)]/80 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!canScrollRight || isAnimating}
            className={`absolute left-1/2 translate-x-[calc(-50%+40px)] md:right-[9%] md:left-auto md:translate-x-0 bottom-8 md:top-[85%] md:-translate-y-1/2 z-20 w-[58px] h-[58px] md:w-20 md:h-20 border-2 transition-colors duration-300 flex items-center justify-center group
            ${canScrollRight ? 'border-[rgb(183,159,140)] hover:border-[rgb(183,159,140)]/80' : 'border-[rgb(183,159,140)]/30'}
            disabled:opacity-50 disabled:cursor-not-allowed`}
            aria-label="Next"
          >
            <svg
              className="w-6 h-6 text-[rgb(183,159,140)] group-hover:text-[rgb(183,159,140)]/80 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}

      {/* Animations - Keluar masuk dari luar parent */}
      <style>{`
        @keyframes slideScaleInRightOut {
          from {
            transform: translateX(150%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
        @keyframes slideScaleInLeftOut {
          from {
            transform: translateX(-150%) scale(0.8);
            opacity: 0;
          }
          to {
            transform: translateX(0) scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default ParallaxTextImage
