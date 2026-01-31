// app/rooms/page.tsx
import Hero from "@/components/sections/Hero"
import Accommodations from '@/components/villa_sections/Accommodations'
import LocationMap from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import VillaRooms from "@/components/villa_sections/VillaRooms"
import CTA from "@/components/sections/CallToAction"
import BeanieReveal from '@/components/animations/BeanieReveal'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFEBE2] overflow-x-hidden">
      <Hero />
      <div className="py-20 text-center">
        <h2 className="text-[1.698rem] md:text-[2.499rem] font-americana text-[#C69C4D] leading-tight tracking-tight">
          {/* Mobile Version */}
          <span className="block md:hidden">
            Discover our eco<br />
            Luxury<br />State-of-the-Art
            Villas.
          </span>

          {/* Desktop Version */}
          <span className="hidden md:block">
            Discover our eco Luxury<br />
            State-of-the-Art Villas.
          </span>
        </h2>
      </div>
      <BeanieReveal
        id="beanie-reveal-2"
        className="bg-[#EFEBE2] "
        image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&h=1000&fit=crop&q=80"
        alt="Retreat Aerial View"
        minHeight={600}
        maxHeight={800}
      />
      <Accommodations />
      <VillaRooms />
      <CTA
        titleColor="text-[#C69C4D]"
        buttonColor="text-[#C69C4D] font-basis text-[0.935rem]"
        optionalSubtitleColor="text-[#C69C4D] font-basis text-[0.906rem] md:text-[0.999rem]"
        titleMobile="Experience nature,<br/>comfort, and luxury like<br/> never before."
        titleDesktop="Experience nature, comfort, and<br/>luxury like never before."
        buttonText="BOOK YOUR STAY"
        buttonHref="#learnmore"
        optionalSubtitle="@alumanbali"
        titleSize="text-[1.583rem] lg:text-[2.185rem]"
      />
      <LocationMap />
      <Footer />
    </main>
  )
}
