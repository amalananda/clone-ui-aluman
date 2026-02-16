// components/sections/Gallery.tsx
'use client'

import React from 'react'
import GridImages from '@/components/ui/GridImages'
import galleryData from '@/lib/data/gallery-images.json'
import UnderlineLink from '@/components/ui/UnderlineLink'

interface GalleryImage {
  id: number
  url: string
  title: string
  size: 'small' | 'medium' | 'tall' | 'extra-tall' | 'super-tall'
  alternateImages?: string[]
}

interface GalleryProps {
  category?: keyof typeof galleryData
  images?: GalleryImage[]
  title?: string
  subtitle?: string
  autoRotate?: boolean
  rotateInterval?: number
  backgroundColor?: string
  showTitle?: boolean
}

const Gallery = ({
  category = 'home',
  images,
  title,
  subtitle,
  // autoRotate = true,
  // rotateInterval = 3000,
  backgroundColor = '#EFEBE2',
  showTitle = false
}: GalleryProps) => {
  const galleryImages = images || (galleryData[category] as GalleryImage[]) || []

  return (
    <section id="gallery" className="py-8 sm:py-12 md:py-16 lg:py-24" style={{ backgroundColor }}>
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        {showTitle && (title || subtitle) && (
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            {subtitle && (
              <p className="text-[#c9a961] text-xs sm:text-sm md:text-base mb-2 font-americana">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-americana text-[#c9a961]">
                {title}
              </h2>
            )}
          </div>
        )}

        <GridImages
          images={galleryImages}
          autoRotate={true}
          rotateInterval={3000}
          columns={{
            mobile: 2,
            tablet: 3,
            desktop: 3
          }}
          gap={8}
          columnWidth={9999}
          showLightbox={true}
          className="gallery-grid-responsive"
        />

        {/* Center aligned link */}
        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
          <UnderlineLink href="#discover" className="text-[13.57px] md:text-[0.9375rem] font-basis">
            DISCOVER ALL EXPERIENCES
          </UnderlineLink>
        </div>
      </div>

      <style jsx>{`
        :global(.gallery-grid-responsive) {
          padding: 0;
        }

        /* Mobile: gap 8px */
        @media (max-width: 639px) {
          :global(.gallery-grid-responsive) {
            gap: 8px !important;
          }
        }

        /* Small tablets: gap 12px */
        @media (min-width: 640px) and (max-width: 767px) {
          :global(.gallery-grid-responsive) {
            gap: 12px !important;
          }
        }

        /* Tablets: gap 14px */
        @media (min-width: 768px) and (max-width: 1023px) {
          :global(.gallery-grid-responsive) {
            gap: 14px !important;
          }
        }

        /* Desktop: gap 16px */
        @media (min-width: 1024px) {
          :global(.gallery-grid-responsive) {
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Gallery
