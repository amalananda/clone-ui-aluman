// components/villa_sections/Accomodations
export default function Accommodations() {
  return (
    <div className="bg-[#EFEBE2] px-6 py-36 md:px-12">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto">
        {/* Text Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-32">
          {/* Left Text */}
          <div className="text-[#343E35] font-basis">
            <p className="text-[0.9048rem] md:text-[0.999rem] leading-relaxed mb-4">
              All of our villas and rooms have their own unique charm. Aluman offers a
              variety of luxurious accommodations, each designed to <em className="italic">immerse guests
                in nature&apos;s tranquility and beauty</em>. Our rooms and villas feature eco-friendly materials, luxurious comforts, and open-air living spaces that{' '}
              <em className="italic">blend seamlessly with the environment</em>.
            </p>
          </div>

          {/* Right Text */}
          <div className="text-[#343E35] font-basis">
            <p className="text-[0.9048rem] md:text-[0.999rem] leading-relaxed">
              Guests can enjoy private plunge pools, stunning views of rice fields and
              lakes, and unique architectural designs. Aluman provides <em className="italic">a harmonious
                blend of luxury and nature</em>, ensuring a relaxing and unforgettable stay.
            </p>
          </div>
        </div>

        {/* Amenities Icons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {/* High-Speed Wifi */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40 55C41.6569 55 43 53.6569 43 52C43 50.3431 41.6569 49 40 49C38.3431 49 37 50.3431 37 52C37 53.6569 38.3431 55 40 55Z"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M32 45C35.5 41.5 44.5 41.5 48 45"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25 37C31.5 30.5 48.5 30.5 55 37"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 29C28 19 52 19 62 29"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-[#c4a876] text-sm">High-Speed Wifi</p>
          </div>

          {/* Netflix + Smart TV */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="20"
                  y="25"
                  width="40"
                  height="28"
                  rx="2"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                />
                <path
                  d="M35 53L35 57M45 53L45 57"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M30 57L50 57"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <text
                  x="40"
                  y="42"
                  textAnchor="middle"
                  fill="#c4a876"
                  fontSize="16"
                  fontWeight="300"
                  fontFamily="serif"
                >
                  N
                </text>
              </svg>
            </div>
            <p className="text-[#c4a876] text-sm">Netflix + Smart TV</p>
          </div>

          {/* Air Conditioning */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="25"
                  y="33"
                  width="30"
                  height="16"
                  rx="2"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                />
                <circle
                  cx="50"
                  cy="41"
                  r="2"
                  fill="#c4a876"
                />
                <path
                  d="M28 49L28 52M33 49L33 52M38 49L38 52M43 49L43 52M48 49L48 52M52 49L52 52"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="text-[#c4a876] text-sm">Air Conditioning</p>
          </div>

          {/* Mini Bar + Espresso Machine */}
          <div className="flex flex-col items-center text-center">
            <div className="mb-6">
              <svg
                className="w-16 h-16 lg:w-20 lg:h-20"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="28"
                  y="35"
                  width="24"
                  height="18"
                  rx="1"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                />
                <circle
                  cx="40"
                  cy="28"
                  r="3"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                />
                <path
                  d="M40 31L40 35"
                  stroke="#c4a876"
                  strokeWidth="1.5"
                />
                <rect
                  x="32"
                  y="39"
                  width="5"
                  height="7"
                  rx="0.5"
                  stroke="#c4a876"
                  strokeWidth="1"
                />
                <rect
                  x="43"
                  y="39"
                  width="5"
                  height="7"
                  rx="0.5"
                  stroke="#c4a876"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <p className="text-[#c4a876] text-sm">Mini Bar + Espresso Machine</p>
          </div>
        </div>
      </div>
    </div>
  )
}
