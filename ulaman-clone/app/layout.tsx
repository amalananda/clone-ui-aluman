// app/layout.tsx
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import PageTransition from "@/components/animations/PageTransition"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const americana = Inter({
  subsets: ["latin"],
  variable: "--font-americana",
  display: "swap",
})

const basisGrotesque = Inter({
  subsets: ["latin"],
  variable: "--font-basis-grotesque",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Aluman Eco Luxury Resort | Bali",
  description: "Experience unparalleled eco-luxury in the heart of Bali's pristine jungle. Where sustainability meets sophistication.",
  keywords: ["eco resort", "bali", "luxury", "sustainable", "bamboo", "eco-luxury", "aluman"],
  authors: [{ name: "Aluman Bali" }],
  openGraph: {
    title: "Aluman Eco Luxury Resort | Bali",
    description: "Experience unparalleled eco-luxury in the heart of Bali's pristine jungle",
    siteName: "Aluman Bali",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aluman Eco Luxury Resort",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aluman Eco Luxury Resort | Bali",
    description: "Experience unparalleled eco-luxury in the heart of Bali's pristine jungle",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${americana.variable} ${basisGrotesque.variable} font-sans antialiased`}
      >
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  )
}
