// app/rooms/cocoon-jungle/page.tsx
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



export default function CocoonJunglePage() {
  return (
    <main className="bg-[#EFEBE2] overflow-x-hidden">
      <Hero />
      <Description
        title="Cocoon Jungle"
        subtitle="2 Units Total | 72m2"
        paragraphs={[
          "Elevated among the treetops, the Cocoon Jungle Villa is a bamboo-woven<br/> sanctuary featuring a black bamboo bathroom and a spacious private balcony—<br/>perfect for romantic breakfasts overlooking the jungle, garden, and pool. These<br/> elegantly designed, cocoon-like villas offer bamboo floors, the largest private<br/> balcony among all room types, and the most refined ensuite bathroom at Aluman.<br/> Inside, you'll find a luxurious king-sized bed, automatic curtains, and thoughtfully<br/> curated interiors made from exotic natural materials, delivering an experience of<br/> unparalleled comfort and elevated tropical charm."
        ]}
        buttonText="BOOK THIS ROOM"
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
          { left: 'Private balcony', right: 'Massive oval-shaped windows' },
          { left: 'Flat-screen smart TV + Netflix', right: 'Air conditioning' },
          { left: 'Bluetooth speaker', right: 'Automatic curtains' },
          { left: 'Mini fridge', right: 'Espresso coffee machine' },
          { left: 'Safety deposit box', right: 'High-speed wifi' },
          { left: 'Outdoor hanging chair', right: 'Rainshower & wooden bathtub' },
          { left: 'Hot & cold water', right: '' },
        ]}
        benefits={[
          { left: 'Free mini bar', right: 'Tea selections' },
          { left: 'In-room espresso coffee', right: 'Daily resort activities' },
          { left: 'Free access to spa facilities (Sauna, steam room, hot & Cold plunge pools)', right: 'Free access to facilities (Tennis court, in-house gym, infinity pools, yoga shala)' },
        ]}
        facilitiesImage="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&h=600&fit=crop"
        benefitsImage="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop"
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
