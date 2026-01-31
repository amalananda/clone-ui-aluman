// app/rooms/avatar-tree-house/page.tsx
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



export default function AvatarTreeHousePage() {
  return (
    <main className="bg-[#EFEBE2] overflow-x-hidden">
      <Hero />
      <Description
        title="Avatar Tree House"
        subtitle="4 Units Total | 64m2"
        paragraphs={[
          "Elevated among the treetops, Aluman's Avatar Tree House Villas offer a truly unique<br/> sanctuary, surrounded by breathtaking rice field views and lush jungle landscapes.<br/> Perched 9 meters above ground and accessed via a striking bamboo-woven tunnel,<br/> these villas immerse guests in a seamless blend of architectural elegance and<br/> natural serenity. Inside, the spacious interiors feature handcrafted wooden<br/> furnishings, intricately carved accents and soft ambient lighting that enhance the<br/> villa's tranquil ambiance.",
          "Expansive glass windows provide panoramic views of Aluman and its surroundings,<br/> while each villa also includes a Sky Balcony for private dining, automatic curtains<br/> and a 360° swivel door leading to a generous ensuite bathroom with a skylight and<br/> a dedicated makeup area. Thoughtfully designed for both relaxation and inspiration,<br/> the Avatar Tree House Villas offer luxurious comfort and a deep, immersive<br/> connection to nature."
        ]}
      />
      <GalleryRooms />
      <BeanieReveal
        image="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1600&h=1000&fit=crop&q=80"
        alt="Cocoon Jungle Villa Aerial View"
        minHeight={600}
        maxHeight={800}
      />
      <VillaDetails />
      <Facilities
        facilities={[
          { left: 'Designer signature bathroom', right: 'Rain & hand shower' },
          { left: 'Exclusive bathroom amenities', right: 'Hot & cold water' },
          { left: 'Skylight', right: 'Bluetooth speaker' },
          { left: 'Flat-screen smart TV + Netflix', right: 'Air conditioner' },
          { left: 'Automatic curtains', right: 'Mini refrigerator' },
          { left: 'Espresso coffee machine', right: 'Safety deposit box' },
          { left: 'High-speed wifi', right: 'Sky balcony' },
        ]}
        benefits={[
          { left: 'Free mini bar', right: 'Tea selections' },
          { left: 'In-room espresso coffee', right: 'Daily resort activities' },
          { left: 'Free access to spa facilities (Sauna, steam room, hot & Cold plunge pools)', right: 'Free access to facilities (Tennis court, in-house gym, infinity pools, yoga shala)' },
        ]}
        facilitiesImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop"
        benefitsImage="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop"
      />
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
