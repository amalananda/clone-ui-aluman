'use client'
import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import Image from 'next/image'
import locationsData from '@/lib/data/locations.json'

interface Location {
  id: number
  name: string
  icon: string
  top: string
  left: string
  category: string
  description: string
  fullDescription: string
  image: string
  features?: string[]
}

const Discover = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null)

  interface SvgElement {
    key: string
    cx?: number
    cy?: number
    r?: number
    fill?: string
    opacity?: number
    x?: number
    y?: number
  }

  const [svgElements, setSvgElements] = useState<{ trees: SvgElement[]; palms: SvgElement[] }>({ trees: [], palms: [] })

  const generateSvgElements = () => {
    const TREE_COUNT = 50
    const PALM_COUNT = 30

    const trees = [...Array(TREE_COUNT)].map((_, i) => ({
      key: `tree-${i}`,
      cx: Math.random() * 1600,
      cy: Math.random() * 1000,
      r: 15 + Math.random() * 25,
      fill: Math.random() > 0.5 ? '#6B9B7B' : '#8BAA8B',
      opacity: 0.6 + Math.random() * 0.3,
    }))

    const palms = [...Array(PALM_COUNT)].map((_, i) => ({
      key: `palm-${i}`,
      x: Math.random() * 1600,
      y: Math.random() * 1000,
    }))

    return { trees, palms }
  }

  useEffect(() => {
    setSvgElements(generateSvgElements())
  }, [])

  const locations: Location[] = locationsData.locations

  const selectedLoc = locations.find(loc => loc.id === selectedLocation)

  return (
    <section className="relative min-h-screen bg-[#EFEBE2] py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-americana text-[#C69C4D] mb-4">
            Discover Aluman<br />From Above
          </h2>
          <div className="flex items-center gap-2 text-[#C69C4D]">
            <div className="w-3 h-3 bg-amber-600 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Tap on an icon</span>
          </div>
        </div>

        <div className="relative w-full" style={{ paddingBottom: '65%' }}>
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <svg viewBox="0 0 1600 1000" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#D4E7D4" />
                  <stop offset="100%" stopColor="#E8DCC0" />
                </linearGradient>
                <filter id="watercolor">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" />
                  <feColorMatrix type="saturate" values="0.3" />
                </filter>
              </defs>

              <rect width="1600" height="1000" fill="url(#groundGradient)" />
              <rect width="1600" height="1000" fill="#C8DCC8" opacity="0.3" filter="url(#watercolor)" />

              <path d="M 1200,0 Q 1250,200 1300,400 T 1400,800 L 1450,1000" stroke="#9B9B9B" strokeWidth="60" fill="none" opacity="0.4" />
              <path d="M 1200,0 Q 1250,200 1300,400 T 1400,800 L 1450,1000" stroke="#7A7A7A" strokeWidth="50" fill="none" opacity="0.3" />

              <ellipse cx="400" cy="350" rx="120" ry="80" fill="#76B7CD" opacity="0.6" />
              <ellipse cx="720" cy="420" rx="90" ry="60" fill="#76B7CD" opacity="0.6" />
              <ellipse cx="950" cy="520" rx="80" ry="50" fill="#76B7CD" opacity="0.6" />

              {svgElements.trees.map((tree) => (
                <circle key={tree.key} cx={tree.cx} cy={tree.cy} r={tree.r} fill={tree.fill} opacity={tree.opacity} />
              ))}

              {svgElements.palms.map((palm) => (
                <g key={palm.key}>
                  {palm.y !== undefined && (
                    <>
                      <line x1={palm.x} y1={palm.y} x2={palm.x} y2={palm.y - 40} stroke="#8B7355" strokeWidth="3" opacity="0.5" />
                      <circle cx={palm.x} cy={palm.y - 45} r="12" fill="#6B9B7B" opacity="0.6" />
                    </>
                  )}
                </g>
              ))}

              <ellipse cx="250" cy="280" rx="70" ry="55" fill="#C8B4A0" opacity="0.7" />
              <ellipse cx="320" cy="300" rx="65" ry="50" fill="#D4C0AC" opacity="0.7" />
              <ellipse cx="380" cy="250" rx="60" ry="48" fill="#C8B4A0" opacity="0.7" />
              <ellipse cx="450" cy="270" rx="68" ry="52" fill="#D4C0AC" opacity="0.7" />
              <ellipse cx="700" cy="320" rx="75" ry="58" fill="#C8B4A0" opacity="0.7" />
              <ellipse cx="900" cy="180" rx="70" ry="55" fill="#D4C0AC" opacity="0.7" />
              <ellipse cx="1050" cy="220" rx="65" ry="50" fill="#C8B4A0" opacity="0.7" />
              <ellipse cx="950" cy="550" rx="80" ry="60" fill="#C8B4A0" opacity="0.7" />
              <ellipse cx="1050" cy="650" rx="75" ry="58" fill="#D4C0AC" opacity="0.7" />
              <ellipse cx="1120" cy="750" rx="70" ry="55" fill="#C8B4A0" opacity="0.7" />

              <path d="M 250,280 Q 400,350 700,420" stroke="#B8A898" strokeWidth="15" fill="none" opacity="0.4" />
              <path d="M 450,270 Q 600,350 750,400" stroke="#B8A898" strokeWidth="15" fill="none" opacity="0.4" />
              <path d="M 700,320 Q 850,400 950,520" stroke="#B8A898" strokeWidth="15" fill="none" opacity="0.4" />
            </svg>

            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => setSelectedLocation(location.id)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group"
                style={{ top: location.top, left: location.left }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                  <div className="relative w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-amber-600 group-hover:scale-110 group-hover:shadow-xl transition-all duration-300 cursor-pointer">
                    <span className="text-2xl">{location.icon}</span>
                  </div>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-amber-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap shadow-lg">
                      {location.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                        <div className="border-4 border-transparent border-t-amber-900"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Info Modal with Image */}
        {selectedLoc && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-[#F5F1E8] rounded-xl shadow-2xl max-w-3xl w-full overflow-hidden relative animate-fadeIn">
              <button
                onClick={() => setSelectedLocation(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
              >
                <X size={18} className="text-amber-700" />
              </button>

              {/* Flex Container - Image & Content Side by Side */}
              <div className="flex flex-col md:flex-row">

                {/* Image Section - Left Side */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto flex-shrink-0">
                  <Image
                    src={selectedLoc.image}
                    alt={selectedLoc.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-4">
                    <span className="inline-block px-2 py-1 bg-amber-600 text-white text-xs font-medium rounded-full">
                      {selectedLoc.category}
                    </span>
                  </div>
                </div>

                {/* Content Section - Right Side */}
                <div className="flex-1 p-5 md:p-6 flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-3xl">{selectedLoc.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif text-amber-700 mb-1">{selectedLoc.name}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{selectedLoc.fullDescription}</p>
                    </div>
                  </div>

                  {selectedLoc.features && (
                    <div className="mt-auto pt-4">
                      <h4 className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">Features</h4>
                      <div className="grid grid-cols-1 gap-1.5 mb-4">
                        {selectedLoc.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-1.5 text-xs text-stone-700">
                            <div className="w-1 h-1 bg-amber-600 rounded-full flex-shrink-0"></div>
                            <span className="italic">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <button className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-sm rounded-lg transition-colors font-medium shadow-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Discover
