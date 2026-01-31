// app/page.tsx
import Hero from "@/components/sections/Hero"
import About from "@/components/sections/About"
import Rooms from "@/components/sections/Rooms"
import Experiences from "@/components/sections/Experiences"
import Gallery from "@/components/sections/Gallery"
import Testimonials from "@/components/sections/Testimonials"
import Footer from "@/components/sections/Footer"
import LocationMap from '@/components/sections/Navigation'
import Discover from '@/components/sections/Discover'
import Wellness from '@/components/sections/Wellness'
import Explore from '@/components/sections/Explore'
import CTA from "@/components/sections/CallToAction"
import Schedule from "@/components/sections/Schedule"
import ParallaxTextImage from '@/components/sections/ParallaxTextImage'
import LazySection from '@/components/ui/LazyLoading'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFEBE2] overflow-x-hidden">
      <Hero />
      <About />

      <LazySection>
        <Experiences />
      </LazySection>

      <LazySection>
        <Rooms />
      </LazySection>

      <LazySection>
        <Wellness />
      </LazySection>

      <LazySection>
        <ParallaxTextImage
          images={[
            {
              src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600&h=1000&fit=crop&q=80",
              alt: "Aluman Riverside View",
              leftText: "Balanced",
              rightText: "Renewal"
            }
          ]}
          defaultLeftText="Relaxing"
          defaultRightText="Healing"
        />
      </LazySection>

      <LazySection>
        <Explore />
      </LazySection>

      <LazySection>
        <Discover />
      </LazySection>

      <LazySection>
        <Testimonials showContinueReading={true} />
      </LazySection>

      <LazySection>
        <Gallery />
      </LazySection>

      <LazySection>
        <Schedule />
      </LazySection>

      <LazySection>
        <CTA
          title="Reconnect With Yourself In<br/>Luxurious Comfort."
          buttonText="BOOK YOUR STAY"
          buttonHref="#book"
          optionalSubtitle="@alumanbali"
        />
      </LazySection>

      <LazySection>
        <LocationMap />
        <Footer />
      </LazySection>
    </main>
  )
}
