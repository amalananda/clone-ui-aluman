// components/spa_sections/HeroSpa.tsx
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface NavItem {
  label: string
  href: string
}

interface HeroButton {
  label: string
  href?: string
  onClick?: () => void
}

interface SpaHeroProps {
  leftNavItems?: NavItem[]
  rightButton?: HeroButton
  showLogo?: boolean
  heroImage?: string
}

const defaultLeftNavItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Aluman', href: '/aluman' },
  { label: 'Contact', href: '#contact' }
]

const defaultButton: HeroButton = {
  label: 'Book a treatment',
  href: '#booking'
}

const HeroSpa = ({
  heroImage,
  leftNavItems = defaultLeftNavItems,
  rightButton = defaultButton,
  showLogo = true
}: SpaHeroProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    if (href.startsWith('/') && !href.startsWith('/#')) {
      router.push(href)
      setIsMenuOpen(false)
      return
    }
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const handleButtonClick = () => {
    if (rightButton.onClick) {
      rightButton.onClick()
    } else if (rightButton.href) {
      scrollToSection(rightButton.href)
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="spa-home" className="relative min-h-screen bg-[#EFEBE2] overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${scrolled
          ? 'bg-[#EFEBE2] border-b border-[#B79F8C] py-4 md:py-5'
          : 'bg-transparent border-b border-transparent py-6 md:py-8'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Mobile Menu Button - Left */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#B79F8C] p-2 hover:bg-[#B79F8C]/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Left Nav Items - Desktop */}
            <div className="hidden lg:flex items-center space-x-10">
              {leftNavItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="font-basis text-[#B79F8C] hover:text-[#9A816D] transition-colors duration-300 text-sm tracking-wide capitalize relative group"
                  style={{
                    animation: `fadeInDown 0.6s ease-out ${index * 0.1}s both`
                  }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#B79F8C] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Center Logo */}
            {showLogo && (
              <div className="absolute left-1/2 -translate-x-1/2 text-center">
                <div className="text-[#B79F8C]">
                  <svg
                    width="170"
                    height="170"
                    viewBox="0 0 200 200"
                    fill="currentColor"
                    className="mx-auto"
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
              </div>
            )}

            {/* Right Button - Desktop & Mobile */}
            {rightButton && (
              <button
                onClick={handleButtonClick}
                className="px-4 lg:px-8 py-2 lg:py-2.5 border border-[#B79F8C] text-[#B79F8C] hover:bg-[#B79F8C] hover:text-[#EFEBE2] font-basis text-sm tracking-wide capitalize transition-all duration-300 rounded-tl-md rounded-br-md ml-auto"
                style={{
                  animation: 'fadeInDown 0.6s ease-out 0.4s both'
                }}
              >
                <span className="lg:hidden">Book</span>
                <span className="hidden lg:inline">{rightButton.label}</span>
              </button>
            )}

            {/* Spacer for mobile (keeps logo centered) */}
            <div className="lg:hidden w-0"></div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'
              }`}
          >
            <div className="space-y-4 pb-6">
              {leftNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="block font-basis text-[#B79F8C] hover:text-[#9A816D] transition-colors duration-300 text-sm tracking-wide capitalize py-2"
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Button */}
              {rightButton && (
                <button
                  onClick={handleButtonClick}
                  className="w-full px-6 py-3 border border-[#B79F8C] text-[#B79F8C] hover:bg-[#B79F8C] hover:text-[#EFEBE2] font-basis text-sm tracking-wide capitalize transition-all duration-300 rounded-sm"
                >
                  {rightButton.label}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
          style={{
            backgroundImage: `url('${heroImage}')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      </div>

      {/* Animations */}
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
      `}</style>
    </div>
  )
}

export default HeroSpa
