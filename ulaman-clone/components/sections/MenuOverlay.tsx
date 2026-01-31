// components/sections/MenuOverlay.tsx
'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { HeroButton } from '@/lib/hero-types'
import { AnimatedMenuIcon } from '@/components/ui/AnimatedMenuIcon'
import { fullMenuLeftRows, fullMenuRightRows, fullMenuBottomItems, fullMenuLeftMobile, fullMenuRightMobile } from '@/lib/hero-constants'

interface FullMenuOverlayProps {
  isFullMenuOpen: boolean
  setIsFullMenuOpen: (open: boolean) => void
  heroImage: string
  logoText: string
  logoSubtext: string
  showLogo: boolean
  rightButton: HeroButton
  scrollToSection: (href: string) => void
  handleButtonClick: () => void
  scrolled: boolean
  currentPath: string
}

export const FullMenuOverlay = ({
  isFullMenuOpen,
  setIsFullMenuOpen,
  heroImage,
  logoText,
  logoSubtext,
  showLogo,
  rightButton,
  scrollToSection,
  handleButtonClick,
  scrolled,
  currentPath
}: FullMenuOverlayProps) => {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)

  // Gambar yang ditampilkan: hoveredImage jika ada, heroImage jika tidak
  const displayImage = hoveredImage || heroImage

  // Helper function to check if menu item is active
  const isActivePage = (href: string) => {
    // Normalize paths for comparison
    const normalizedHref = href.startsWith('/') ? href : `/${href}`
    const normalizedPath = currentPath || '/'

    // Special case for home
    if (normalizedHref === '/home' && (normalizedPath === '/' || normalizedPath === '/home')) {
      return true
    }

    // For other pages, check if path starts with the href
    return normalizedPath === normalizedHref || normalizedPath.startsWith(normalizedHref + '/')
  }

  return (
    <div
      className={`fixed inset-0 bg-[#EFEBE2] z-[100] transition-all duration-500 ${isFullMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
    >
      <div className="h-full flex flex-col">
        {/* Header with close button */}
        <div className={`md:mt-4${scrolled ? 'border-b border-[#C69C4D]/30' : ''}`}>
          <div className="max-w-7xl mx-auto py-6 md:py-5">
            <div className="relative flex justify-between items-center px-4 md:px-8">
              <button
                onClick={() => setIsFullMenuOpen(false)}
                className="text-[#C69C4D] p-2 hover:bg-[#C69C4D]/10 rounded-lg transition-all duration-300 -ml-2 md:-ml-20"
                aria-label="Close menu"
              >
                <AnimatedMenuIcon
                  isOpen={true}
                  firstLineLength={27}
                  secondLineLength={54}
                  strokeWidth={0.5}
                />
              </button>

              {/* Center Logo */}
              {showLogo && (
                <div className="absolute left-1/2 -translate-x-1/2 text-center">
                  <div className="text-[#C69C4D] -mt-2 ">
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 200 200"
                      fill="currentColor"
                      className="mx-auto md:w-25 md:h-25"
                    >
                      {/* Lotus flower petals */}
                      <path d="M100 60 C80 70, 65 85, 65 100 L75 105 C75 92, 85 78, 100 70 C115 78, 125 92, 125 105 L135 100 C135 85, 120 70, 100 60 Z" />
                      <path d="M100 75 C88 82, 78 92, 78 105 L85 108 C85 97, 92 87, 100 82 C108 87, 115 97, 115 108 L122 105 C122 92, 112 82, 100 75 Z" />

                      {/* Center circle */}
                      <ellipse cx="100" cy="110" rx="22" ry="12" />

                      {/* Bottom petals */}
                      <path d="M78 110 L72 130 L82 133 L85 110 Z" />
                      <path d="M122 110 L128 130 L118 133 L115 110 Z" />
                      <path d="M88 112 L83 132 L93 135 L95 112 Z" />
                      <path d="M112 112 L117 132 L107 135 L105 112 Z" />
                      <path d="M100 114 L98 135 L102 135 L100 114 Z" />
                    </svg>
                  </div>
                  <h1 className="text-base md:text-lg tracking-[0.2rem] -mt-6 font-basis text-[#C69C4D]">
                    {logoText}
                  </h1>
                  <p className="text-[9px] md:text-[11px] uppercase text-[#C69C4D] -mt-6
                  _ font-basis mt-0.5">
                    {logoSubtext}
                  </p>
                </div>
              )}

              {/* Right Button */}
              {rightButton && (
                <button
                  onClick={() => {
                    setIsFullMenuOpen(false)
                    handleButtonClick()
                  }}
                  className="px-4 md:px-6 py-2 md:py-2.5 border border-[#C69C4D] text-[#C69C4D] hover:text-[#F4EFE8] hover:bg-[#C69C4D] text-xs tracking-wider transition-all duration-300 rounded-tl-md rounded-br-md md:absolute md:-right-12"
                >
                  <span className="hidden md:inline capitalize">{rightButton.label}</span>
                  <span className="md:hidden uppercase">Book</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Menu Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl relative">
            {/* Mobile View - Single Column */}
            <div className="md:hidden space-y-2 pt-12">
              {/* Left Column Items - 3 per row */}
              <div className="space-y-2">
                {fullMenuLeftMobile.map((row, rowIndex) => (
                  <div
                    key={`left-mobile-${rowIndex}`}
                    className="flex flex-wrap gap-x-4"
                    style={{
                      animation: isFullMenuOpen
                        ? `fadeInUp 0.5s ease-out ${rowIndex * 0.1}s both`
                        : 'none'
                    }}
                  >
                    {row.map((item) => (
                      <React.Fragment key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsFullMenuOpen(false)
                            scrollToSection(item.href)
                          }}
                          onMouseEnter={() => item.image && setHoveredImage(item.image)}
                          onMouseLeave={() => setHoveredImage(null)}
                          className={`text-[#C69C4D] hover:text-[#b8975a] transition-all duration-300 font-americana cursor-pointer ${isActivePage(item.href) ? 'opacity-40' : 'opacity-100'
                            }`}
                          style={{
                            fontSize: '25.6px',
                            lineHeight: '1.3',
                            letterSpacing: '0',
                            fontWeight: 'normal',
                            wordSpacing: 'normal'
                          }}
                        >
                          {item.label}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>

              {/* Right Column Items - 2 per row */}
              <div className="space-y-1">
                {fullMenuRightMobile.map((row, rowIndex) => (
                  <div
                    key={`right-mobile-${rowIndex}`}
                    className="flex flex-wrap gap-x-4"
                    style={{
                      animation: isFullMenuOpen
                        ? `fadeInUp 0.5s ease-out ${(rowIndex + 3) * 0.1}s both`
                        : 'none'
                    }}
                  >
                    {row.map((item) => (
                      <React.Fragment key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsFullMenuOpen(false)
                            scrollToSection(item.href)
                          }}
                          onMouseEnter={() => item.image && setHoveredImage(item.image)}
                          onMouseLeave={() => setHoveredImage(null)}
                          className={`text-[#C69C4D] hover:text-[#b8975a] transition-all duration-300 font-americana cursor-pointer ${isActivePage(item.href) ? 'opacity-40' : 'opacity-100'
                            }`}
                          style={{
                            fontSize: '25.6px',
                            lineHeight: '1.3',
                            letterSpacing: '0',
                            fontWeight: 'normal',
                            wordSpacing: 'normal'
                          }}
                        >
                          {item.label}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>

              {/* Bottom Links - Mobile */}
              <div className="pt-6">
                {/* Baris 1: 3 items pertama */}
                <div className="flex flex-wrap gap-1 text-[#C69C4D] font-basis text-[12.66px] mb-2">
                  {fullMenuBottomItems.slice(0, 3).map((item, index) => (
                    <React.Fragment key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsFullMenuOpen(false)
                          scrollToSection(item.href)
                        }}
                        className="hover:text-[#b8975a] transition-colors duration-300 font-basis"
                      >
                        {item.label}
                      </a>
                      {index < 2 && (
                        <span className="text-[#C69C4D]">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                {/* Baris 2: 2 items terakhir */}
                <div className="flex flex-wrap gap-1 text-[#C69C4D] font-basis text-[12.66px]">
                  {fullMenuBottomItems.slice(3, 5).map((item, index) => (
                    <React.Fragment key={item.href}>
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsFullMenuOpen(false)
                          scrollToSection(item.href)
                        }}
                        className="hover:text-[#b8975a] transition-colors duration-300 font-basis"
                      >
                        {item.label}
                      </a>
                      {index < 1 && (
                        <span className="text-[#C69C4D]">/</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Center Image - Mobile (at bottom) */}
              <div
                className="flex items-center justify-center pt-8"
                style={{
                  animation: isFullMenuOpen ? 'fadeInUp 0.5s ease-out 0.8s both' : 'none'
                }}
              >
                <div className="relative w-full max-w-sm h-[400px] rounded-t-full overflow-hidden">
                  <Image
                    key={displayImage}
                    src={displayImage}
                    alt="Menu Preview"
                    fill
                    sizes="100vw"
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Desktop View - 3 Column Grid */}
            <div className="hidden md:grid md:grid-cols-3 gap-12 md:gap-16 lg:gap-24 items-center">
              {/* Left Column */}
              <div className="space-y-4 md:space-y-0">
                {fullMenuLeftRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap gap-x-4"
                    style={{
                      animation: isFullMenuOpen
                        ? `fadeInUp 0.5s ease-out ${rowIndex * 0.1}s both`
                        : 'none'
                    }}
                  >
                    {row.map((item) => (
                      <React.Fragment key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsFullMenuOpen(false)
                            scrollToSection(item.href)
                          }}
                          onMouseEnter={() => item.image && setHoveredImage(item.image)}
                          onMouseLeave={() => setHoveredImage(null)}
                          className={`text-[#C69C4D] hover:text-[#b8975a] transition-all duration-300 text-[2.525rem] font-americana cursor-pointer ${isActivePage(item.href) ? 'opacity-40' : 'opacity-100'
                            }`}
                        >
                          {item.label}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>

              {/* Center Image */}
              <div
                className="hidden md:flex items-center justify-center"
                style={{
                  animation: isFullMenuOpen ? 'fadeInUp 0.5s ease-out 0.3s both' : 'none'
                }}
              >
                <div className="relative w-full h-[550px] rounded-t-full overflow-hidden">
                  <Image
                    key={displayImage}
                    src={displayImage}
                    alt="Menu Preview"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="md:space-y-0 md:text-right">
                {fullMenuRightRows.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex flex-wrap gap-x-4 md:justify-end"
                    style={{
                      animation: isFullMenuOpen
                        ? `fadeInUp 0.5s ease-out ${(rowIndex + 1) * 0.1}s both`
                        : 'none'
                    }}
                  >
                    {row.map((item) => (
                      <React.Fragment key={item.href}>
                        <a
                          href={item.href}
                          onClick={(e) => {
                            e.preventDefault()
                            setIsFullMenuOpen(false)
                            scrollToSection(item.href)
                          }}
                          onMouseEnter={() => item.image && setHoveredImage(item.image)}
                          onMouseLeave={() => setHoveredImage(null)}
                          className={`text-[#C69C4D] hover:text-[#b8975a] transition-all duration-300 text-[2.525rem] font-americana cursor-pointer ${isActivePage(item.href) ? 'opacity-40' : 'opacity-100'
                            }`}
                        >
                          {item.label}
                        </a>
                      </React.Fragment>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Links - Desktop only (horizontally aligned with left column, vertically aligned with bottom of center image) */}
            <div className="hidden md:block absolute bottom-0 left-0">
              {/* Baris 1: 3 items pertama */}
              <div className="flex flex-wrap gap-1 md:gap-2 text-[#C69C4D] font-basis text-[12.66px] md:text-[14.17px] mb-2">
                {fullMenuBottomItems.slice(0, 3).map((item, index) => (
                  <React.Fragment key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsFullMenuOpen(false)
                        scrollToSection(item.href)
                      }}
                      className="hover:text-[#b8975a] transition-colors duration-300 font-basis"
                    >
                      {item.label}
                    </a>
                    {index < 2 && (
                      <span className="text-[#C69C4D]">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Baris 2: 2 items terakhir */}
              <div className="flex flex-wrap gap-1 md:gap-2 text-[#C69C4D] font-basis text-[12.66px] md:text-[14.17px]">
                {fullMenuBottomItems.slice(3, 5).map((item, index) => (
                  <React.Fragment key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        setIsFullMenuOpen(false)
                        scrollToSection(item.href)
                      }}
                      className="hover:text-[#b8975a] transition-colors duration-300 font-basis"
                    >
                      {item.label}
                    </a>
                    {index < 1 && (
                      <span className="text-[#C69C4D]">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
