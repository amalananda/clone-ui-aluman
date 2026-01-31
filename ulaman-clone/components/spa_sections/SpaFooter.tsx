import React from 'react'
import UnderlineLink from '../ui/UnderlineLink'
import UnderlineLinkOnHover from '../ui/UnderlineLinkOnHover'


const SpaFooter = () => {
  return (
    <footer className="bg-[#E6DACA]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Section with Button and Logo */}
        <div className="flex flex-row justify-between items-center md:min-h-[200px] mb-12 md:mb-0">
          {/* Book Button */}
          <div className="md:self-center">
            <UnderlineLink href="/spa/day-pass"
              className="font-americana text-[0.845rem] md:text-[0.935rem] pb-1"
              textColor="text-[#9A816D]"
              underlineColor="bg-[#9A816D]"
              hoverUnderlineColor="bg-[#E6DACA]"
            >
              BOOK A TREATMENT
            </UnderlineLink>
          </div>

          {/* Logo */}
          <div className="md:self-end">
            <div className="w-24 h-24 md:w-36 md:h-36">
              <svg viewBox="0 0 200 200" className="w-full h-full fill-[#8B7355]">
                {/* Lotus flower icon - simplified version */}
                <path d="M100 40 C80 60, 60 80, 60 100 L70 110 C70 90, 80 70, 100 60 C120 70, 130 90, 130 110 L140 100 C140 80, 120 60, 100 40 Z" />
                <path d="M100 50 C85 65, 75 85, 75 105 L80 110 C80 95, 88 80, 100 70 C112 80, 120 95, 120 110 L125 105 C125 85, 115 65, 100 50 Z" />
                <ellipse cx="100" cy="120" rx="25" ry="15" />
                <path d="M75 120 L70 140 L80 145 L75 120 Z" />
                <path d="M125 120 L130 140 L120 145 L125 120 Z" />
                <path d="M90 125 L85 145 L95 148 L90 125 Z" />
                <path d="M110 125 L115 145 L105 148 L110 125 Z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Links Grid */}
        <div className="flex flex-wrap md:flex-nowrap justify-start md:gap-20">
          {/* Address */}
          <div className="w-1/2 md:w-auto md:flex-shrink-0">
            <h3 className="font-americana text-[#9A816D] text-[0.96rem] md:text-[1.25rem] mb-4 border-b border-[#9A816D] inline-block pb-1">
              Address
            </h3>
            <div className="font-basis text-[#9A816D] text-sm leading-relaxed mt-2 md:mt-6 ">
              <p>Aluman Road, Buwit, Kediri,</p>
              <p>Tabanan Regency,</p>
              <p>Bali 82121</p>
            </div>
          </div>

          {/* Hours */}
          <div className="ml-10 md:ml-0">
            <h3 className="font-americana text-[#9A816D] text-[0.96rem] md:text-[1.25rem] mb-4 border-b border-[#9A816D] inline-block pb-1">
              Hours
            </h3>
            <div className="font-basis text-[#9A816D] text-sm leading-relaxed mt-2 md:mt-6 ">
              <p>Open daily from</p>
              <p>9 AM to 9 PM</p>
            </div>
          </div>

          {/* Connect */}
          <div className="w-1/2 md:w-auto md:flex-shrink-0 mt-8 md:mt-0 order-3 md:order-none flex flex-col items-center md:items-start">
            <h3 className="font-americana text-[#9A816D] text-[0.96rem] md:text-[1.25rem] mb-4 mr-10 md:mr-0 border-b border-[#9A816D] inline-block pb-1">
              Connect
            </h3>
            <div className="font-basis text-[#9A816D] text-xs md:text-sm leading-relaxed mt-2 md:mt-6 ml-2 md:ml-0 flex md:flex-col gap-2 md:gap-0">
              <UnderlineLinkOnHover
                href="/contact"
                textColor="text-[#9A816D]"
                underlineColor="bg-[#9A816D]"
                textSize="text-xs md:text-sm"
                className="md:mb-2"
              >
                Contact
              </UnderlineLinkOnHover>
              <UnderlineLinkOnHover
                href="/instagram"
                textColor="text-[#9A816D]"
                underlineColor="bg-[#9A816D]"
                textSize="text-xs md:text-sm"
                className="md:mb-2"
              >
                Instagram
              </UnderlineLinkOnHover>
            </div>
          </div>

          {/* Explore */}
          <div className="w-1/2 md:w-auto md:flex-shrink-0 mt-8 md:mt-0 order-2 md:order-none ">
            <h3 className="font-americana text-[#9A816D] text-[0.96rem] md:text-[1.25rem] mb-4 border-b border-[#9A816D] inline-block pb-1">
              Explore
            </h3>
            <div className="font-basis text-[#9A816D] text-xs md:text-sm leading-relaxed mt-2 md:mt-6  flex md:flex-col gap-2 md:gap-0">
              <UnderlineLinkOnHover
                href="/"
                textColor="text-[#9A816D]"
                underlineColor="bg-[#9A816D]"
                textSize="text-xs md:text-sm"
                className="md:mb-2"
              >
                Home
              </UnderlineLinkOnHover>
              <UnderlineLinkOnHover
                href="#Spamenu"
                textColor="text-[#9A816D]"
                underlineColor="bg-[#9A816D]"
                textSize="text-xs md:text-sm"
                className="md:mb-2"
              >
                Spa menu
              </UnderlineLinkOnHover>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left Links */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 font-basis text-[#9A816D] text-[0.62rem]">
              <div className="flex gap-18">
                <a href="#" className="hover:opacity-70 transition-opacity">TERMS</a>
                <a href="#" className="hover:opacity-70 transition-opacity">PRIVACY</a>
                <a href="#" className="hover:opacity-70 transition-opacity">VISIT ALUMANBALI.COM</a>
              </div>
              <div className="font-basis text-[#9A816D] text-[0.62rem] md:text-[0.57rem] text-start md:flex-1">
                © 2024-2025 TWO MOONS STUDIO FOR RIVERSIDESPA@ALUMAN.COM. ALL RIGHTS RESERVED
              </div>
            </div>

            {/* Center Copyright */}


            {/* Right Credit */}
            <div className="font-basis text-[#9A816D] text-[0.57rem]">
              MADE WITH ❤️ BY TWO MOONS STUDIO
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="bg-[#EDE6D8] py-5 md:py-6 text-center">
        <div className="font-basis text-[#B79F8C] text-[0.79rem] md:text-[0.935rem]">
          <p className="mb-2">
            Not staying at Aluman?{' '}
            <UnderlineLink href="/spa/day-pass"
              className="inline-block translate-y-[5px]"
              textColor="text-[#B79F8C]"
              underlineColor="bg-[#B79F8C]"
              textSize="text-[0.849rem] md:text-[0.935rem]"
            >
              DISCOVER OUR DAY PASS
            </UnderlineLink>
          </p>
          <p className="text-[0.79rem] md:text-[0.935rem]">Kids under 12 years old are not advised</p>
        </div>
      </div>
    </footer>
  )
}

export default SpaFooter
