// app/rooms/floating-lake/page.tsx
import Hero from '@/components/sections/Hero'
import Description from '@/components/room_sections/Description'
import GalleryRooms from '@/components/room_sections/GalleryRooms'
import VillaDetails from '@/components/room_sections/VillaDetails'
import Facilities from '@/components/room_sections/Facilities'
import Testimonials from '@/components/sections/Testimonials'
import PhotoCarousel from '@/components/room_sections/PhotoCarousel'
import SurpriseArrangements from '@/components/room_sections/SurpriseArrangements'
import LocationMap from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import Discover from '@/components/sections/Discover'
import BeanieReveal from '@/components/animations/BeanieReveal'
import CTA from '@/components/sections/CallToAction'



export default function FloatingLakePage() {
  return (
    <main className="bg-[#EFEBE2] overflow-x-hidden">
      <Hero />
      <Description
        title="Floating Lake"
        subtitle="4 Units Total | 52m2"
        paragraphs={[
          "Set above Bali's only bio-filtered, koi-filled lake, Aluman's Floating Lake Villas offer a<br/> serene and luxurious experience unlike any other.Each villa features a private<br/> floating deck and a sunken round hammock, thoughtfully designed for couples—<br/>perfect for stargazing or feeding the koi below. Seamlessly blending modern<br/> tropical elegance with natural elements, the villas include a sun deck patio, hanging<br/> net, and a handcrafted teakwood bathtub.",
          "Expansive glass doors invite natural light and reveal tranquil lake views. Inside,<br/> automatic curtains, a spacious layout, and attentive service create a peaceful<br/> retreat that reflects Aluman's eco-luxury philosophy—perfect for relaxation and<br/> rejuvenation."
        ]}
        buttonText="BOOK THIS VILLA"
      />
      <GalleryRooms />
      <BeanieReveal
        image="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=1000&fit=crop&q=80"
        alt="Floating Lake Villa Aerial View"
        minHeight={600}
        maxHeight={800}
      />
      <VillaDetails />
      <Facilities />
      <Testimonials />
      <PhotoCarousel />
      <Discover />
      <SurpriseArrangements />
      <CTA
        title="Reconnect With Yourself In<br/>Luxurious Comfort."
        buttonText="BOOK YOUR STAY"
        buttonHref="#book"
        optionalSubtitle="@alumanbali"
      />
      <LocationMap />
      <Footer />
    </main>
  )
}
