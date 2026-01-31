// components/sections/Wellness.tsx
'use client'
import { useScrollAnimation, scrollAnimationPresets } from '@/hooks/useScrollAnimation'
import SplitImageReveal from '@/components/animations/SplitImageReveal'
import UnderlineLink from '@/components/ui/UnderlineLink'

const Wellness = () => {
  const {
    containerRef
  } = useScrollAnimation(scrollAnimationPresets.splitImages)

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] bg-[#e8e1d8] overflow-hidden"
    >
      <SplitImageReveal
        leftImage={{
          src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=800&fit=crop',
          alt: 'Wellness experience'
        }}
        rightImage={{
          src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop',
          alt: 'Spa treatment'
        }}
      >
        <h2 className="text-[25px] sm:text-[30px] md:text-[40px] font-basis text-[#c9a961] mb-6 leading-tight">
          Discover your path to <br /> wellness and growth.
        </h2>

        <p
          className="w-screen relative left-1/2 right-1/2 -mx-[50vw] text-[14.475px] sm:text-[12.7px] md:text-[13.3px] text-[#343E35] leading-relaxed mb-[18px] mt-[18px] font-basis px-4"
          style={{
            whiteSpace: 'pre-line',
            wordBreak: 'keep-all'
          }}
        >
          At Aluman we redefine luxury as an experience that not only <br className="hidden sm:block" />
          pampers the senses but also nurtures the soul. Nestled in <br className="hidden sm:block" />
          pristine nature, our eco-luxury retreat offers a sanctuary for <br className="hidden sm:block" />
          healing and transformation. With personalized programs year-<br className="hidden sm:block" />
          round, enjoy dedicated attention and care, immersing yourself <br className="hidden sm:block" />
          in relaxation, rejuvenation, or profound inner change through <br className="hidden sm:block" />
          meticulously curated activities and treatments. <span className="italic">Your <br className="hidden sm:block" />transformative journey begins here.</span>
        </p>
        <UnderlineLink href="/retreats" className="mt-5 font-basis text-[0.8472rem] md:text-[0.9375rem]">LEARN MORE</UnderlineLink>

      </SplitImageReveal>

    </section>
  )
}

export default Wellness
