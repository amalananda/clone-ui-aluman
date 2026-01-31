// components/room_sections/Testimonials.tsx
'use client'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import UnderlineLink from '@/components/ui/UnderlineLink'

interface TestimonialsProps {
  showContinueReading?: boolean
}

export default function Testimonials({ showContinueReading = false }: TestimonialsProps) {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)

  const testimonials = [
    {
      name: 'Nasha, (GPT Retreats)',
      location: 'from Georgia, USA',
      date: 'May 2024',
      quote: '"Incredible day recharging and relaxing."',
      review: '"Alignment is key! Changing Pace Travel had an incredible day recharging and relaxing. To achieve balance and harmony within, we partook in multiple private wellness sessions led by an amazing team of Balinese spiritual healers. Starting with guided meditation and breathwork in the morning, and later in the day, a sound healing journey in the jungle! Jero Buddhi and Jero Ratih and their team have us feeling refreshed, connected, and grateful."'
    },
    {
      name: 'Anne & Steve',
      date: 'May 2024',
      quote: 'A truly memorable experience.',
      review: 'Fabulous architecture, beautiful natural setting, and wonderful staff combine to provide a truly memorable experience. Our stay at Aluman Eco Resort was one we will remember forever. We came to just relax in this amazing setting with its beautiful architecture set around a waterfall and surrounded by rice paddies...'
    },
    {
      name: 'Beata B',
      date: 'Apr. 2024',
      quote: 'Mind-blowing architecture and top-notch service!',
      review: 'From the moment you step into this incredible resort, you feel like you are in another world. A world where imagination has no limits and where your body and mind can recharge to the fullest. We were blown away by the incredible architecture and design. We loved our stay at Aluman...'
    }
  ]

  return (
    <section className="py-24 px-8 bg-[#EFEBE2]">
      <div className="max-w-7xl mx-auto">
        {/* Header with Navigation */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="font-americana text-2xl lg:text-3xl text-[#C69C4D] mb-6 leading-tight">
              What others say<br />about us
            </h2>
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-xs lg:text-sm text-[#C69C4D]">
              <span>4.8 ⭐ / 295 Tripadvisor Reviews</span>
              <span>4.7 ⭐ / 742 Google Reviews</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setCurrentTestimonialSlide(Math.max(0, currentTestimonialSlide - 1))}
              className="w-16 h-16 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572]/10 transition-colors"
              disabled={currentTestimonialSlide === 0}
            >
              <ChevronLeft size={20} className="text-[#C5A572]" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => setCurrentTestimonialSlide(Math.min(testimonials.length - 1, currentTestimonialSlide + 1))}
              className="w-16 h-16 border border-[#C5A572] rounded flex items-center justify-center hover:bg-[#C5A572]/10 transition-colors"
              disabled={currentTestimonialSlide === testimonials.length - 1}
            >
              <ChevronRight size={20} className="text-[#C5A572]" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="border-t border-[#C5A572]/20 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            {/* Left: Author Info */}
            <div className="lg:col-span-3">
              <h3 className="text-[#617262] font-americana text-base mb-1">
                {testimonials[currentTestimonialSlide].name}
              </h3>
              <p className="text-[#617262] font-americana text-base">
                {testimonials[currentTestimonialSlide].location}
              </p>
              <p className="text-[#343E35] text-xs mt-4">
                {testimonials[currentTestimonialSlide].date}
              </p>
            </div>

            {/* Middle: Quote */}
            <div className="lg:col-span-4">
              <p className="text-[#617262] text-xl lg:text-xl font-americana leading-snug">
                {testimonials[currentTestimonialSlide].quote}
              </p>
            </div>

            {/* Right: Review */}
            <div className="lg:col-span-5">
              <p className="text-[#343E35] text-base leading-relaxed">
                {testimonials[currentTestimonialSlide].review}
              </p>

              {showContinueReading && (
                <UnderlineLink href="#reading" className="mt-5 disabled">CONTINUE READING</UnderlineLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
