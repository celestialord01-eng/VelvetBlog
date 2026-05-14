import GoogleAnalytics from '@/components/GoogleAnalytics'
  
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'VelvetNest | Fashion, Home & Lifestyle Blog',
  description: 'Discover curated fashion inspiration, cozy home decor ideas, Amazon finds, beauty tips, and self-care rituals. Your destination for elegant living.',
  verification: {
    google: 'VNIYacXcf0rmfRE85E2TvSMkC_kWkblDkteJXIMavCk',
  },
  keywords: ['fashion blog', 'home decor', 'amazon finds', 'outfit ideas', 'beauty', 'self care', 'lifestyle blog'],
  authors: [{ name: 'VelvetNest' }],
  creator: 'VelvetNest',
  openGraph: {
    title: 'VelvetNest | Fashion, Home & Lifestyle Blog',
    description: 'Discover curated fashion inspiration, cozy home decor ideas, Amazon finds, beauty tips, and self-care rituals.',
    type: 'website',
    locale: 'en_US',
    siteName: 'VelvetNest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VelvetNest | Fashion, Home & Lifestyle Blog',
    description: 'Discover curated fashion inspiration, cozy home decor ideas, Amazon finds, beauty tips, and self-care rituals.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${cormorant.variable} ${inter.variable} font-serif antialiased`}>
  <GoogleAnalytics />
  {children}
  {process.env.NODE_ENV === 'production' && <Analytics />}
</body>
    </html>
  )
}
