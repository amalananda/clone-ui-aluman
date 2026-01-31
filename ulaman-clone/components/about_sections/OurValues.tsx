// components/about_sections/OurValues.tsx
'use client'
import Image from 'next/image'
export default function OurValues() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop"
          alt="Nature background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-16">Our values</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">Balance and Harmony</h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              At Aluman, we believe in the Balinese philosophy and principles of &apos;Tri Hita Karana&apos; integrating <em>balance and harmony with nature.</em> Surrounded by the sounds of water, jungle and tranquil rice terraces encourages personal growth in harmony with Mother nature&apos;s rhythms.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">People are Our Priority</h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              We are dedicated to creating a community rooted in compassion and family values, promoting eco-friendly practices and empowerment. This commitment cultivates authenticity and potential among all team members, ensuring our guests <em>feel valued, well cared for, and part of the Aluman family.</em>
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg">
            <h3 className="text-2xl font-serif text-[#c9a961] mb-4">Self-sustainable Community</h3>
            <p className="text-stone-700 text-sm leading-relaxed">
              Aluman embodies a self-sustainable community rooted in compassion and authenticity. We prioritize operational excellence, honesty, integrity, and dedication, <em>empowering individuals to heal and embody their best selves effortlessly.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
