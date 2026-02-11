import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const syne = Syne({ 
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'More Success Academy | AI-Powered Learning for Africa',
  description: 'Transform your future with personalized, AI-driven education. Career pathways, practical skills, and job-ready training designed for African learners.',
  keywords: 'online learning, AI education, career development, African education, skills training, personalized learning',
  authors: [{ name: 'More Success Academy' }],
  openGraph: {
    title: 'More Success Academy | AI-Powered Learning for Africa',
    description: 'Transform your future with personalized, AI-driven education.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans">
        <div className="relative min-h-screen overflow-x-hidden">
          {/* Background effects */}
          <div className="fixed inset-0 -z-10 bg-dark">
            <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
            <div className="absolute inset-0 dot-pattern" />
          </div>
          
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
