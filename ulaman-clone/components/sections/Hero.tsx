// components/sections/Hero.tsx
'use client'

import React from 'react'
import { HeroProps } from '@/lib/hero-types'
import { defaultLeftNavItems, defaultButton } from '@/lib/hero-constants'
import { useHero } from '@/lib/use-hero'
import { Navigation } from './NavHero'
import { FullMenuOverlay } from './MenuOverlay'

const Hero = ({
  heroImage = 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&h=1080&fit=crop&q=80',
  leftNavItems = defaultLeftNavItems,
  rightButton = defaultButton,
  logoText = 'ALUMAN',
  logoSubtext = 'Eco Luxury Resort',
  showLogo = true
}: HeroProps) => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isFullMenuOpen,
    setIsFullMenuOpen,
    scrolled,
    navStates,
    showLogoAnim,
    showButton,
    showBg,
    scrollToSection,
    pathname
  } = useHero()

  const handleButtonClick = () => {
    if (rightButton.onClick) {
      rightButton.onClick()
    } else if (rightButton.href) {
      scrollToSection(rightButton.href)
    }
    setIsMenuOpen(false)
    setIsFullMenuOpen(false)
  }

  return (
    <div id="home" className="relative min-h-screen bg-[#EFEBE2] overflow-hidden">
      {/* Full Page Menu Overlay */}
      <FullMenuOverlay
        isFullMenuOpen={isFullMenuOpen}
        setIsFullMenuOpen={setIsFullMenuOpen}
        heroImage={heroImage}
        logoText={logoText}
        logoSubtext={logoSubtext}
        showLogo={showLogo}
        rightButton={rightButton}
        scrollToSection={scrollToSection}
        handleButtonClick={handleButtonClick}
        scrolled={scrolled}
        currentPath={pathname}
      />

      {/* Navigation */}
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isFullMenuOpen={isFullMenuOpen}
        setIsFullMenuOpen={setIsFullMenuOpen}
        scrolled={scrolled}
        navStates={navStates}
        showLogoAnim={showLogoAnim}
        showButton={showButton}
        leftNavItems={leftNavItems}
        rightButton={rightButton}
        logoText={logoText}
        logoSubtext={logoSubtext}
        showLogo={showLogo}
        scrollToSection={scrollToSection}
        handleButtonClick={handleButtonClick}
      />

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${showBg ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          style={{
            backgroundImage: `url('${heroImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Animations & Styles */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleX {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* Hover effect - both lines extend to same length (54px) */
        .hamburger-button:hover .line-1 {
          transform: scaleX(2) !important;
          transform-origin: left center;
          transition: all 0.3s ease-in-out !important;
        }
      `}</style>
    </div>
  )
}

export default Hero
