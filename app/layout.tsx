import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Semih Karakaş | Software Developer Portfolio',
  description: 'Portfolio and blog of Semih Karakaş, a 16-year-old software developer from Turkey passionate about modern web technologies.',
  keywords: ['Semih Karakaş', 'Software Developer', 'Web Development', 'Portfolio', 'Turkey', 'Next.js', 'React'],
  authors: [{ name: 'Semih Karakaş' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://semih.digital',
    title: 'Semih Karakaş | Software Developer Portfolio',
    description: 'Portfolio and blog of Semih Karakaş, a 16-year-old software developer from Turkey.',
    siteName: 'Semih Karakaş Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Semih Karakaş | Software Developer Portfolio',
    description: 'Portfolio and blog of Semih Karakaş, a 16-year-old software developer from Turkey.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        {/* Background gradient orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />
        
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
