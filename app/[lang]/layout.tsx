import type { Metadata } from 'next'
import { i18n, type Locale } from '@/i18n/config'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const isEnglish = params.lang === 'en'
  
  return {
    metadataBase: new URL('https://semih.digital'),
    title: {
      default: isEnglish 
        ? 'Semih Karakaş | Full-Stack Developer & Software Engineer'
        : 'Semih Karakaş | Full-Stack Geliştirici & Yazılım Mühendisi',
      template: isEnglish ? '%s | Semih Karakaş' : '%s | Semih Karakaş'
    },
    description: isEnglish
      ? 'Professional portfolio of Semih Karakaş - a 16-year-old full-stack developer specializing in Next.js, React, TypeScript, and modern web technologies. Building enterprise-level applications and innovative solutions.'
      : 'Semih Karakaş\'ın profesyonel portfolyosu - Next.js, React, TypeScript ve modern web teknolojilerinde uzmanlaşmış 16 yaşında bir full-stack geliştirici. Kurumsal seviye uygulamalar ve yenilikçi çözümler geliştiriyor.',
    keywords: isEnglish
      ? [
          'Semih Karakaş',
          'Full-Stack Developer',
          'Software Engineer',
          'Web Development',
          'Next.js Developer',
          'React Developer',
          'TypeScript',
          'Portfolio',
          'Turkey',
          'Enterprise Software',
          'Modern Web Technologies',
          'UI/UX Design'
        ]
      : [
          'Semih Karakaş',
          'Full-Stack Geliştirici',
          'Yazılım Mühendisi',
          'Web Geliştirme',
          'Next.js Geliştirici',
          'React Geliştirici',
          'TypeScript',
          'Portfolyo',
          'Türkiye',
          'Kurumsal Yazılım',
          'Modern Web Teknolojileri',
          'UI/UX Tasarım'
        ],
    authors: [{ name: 'Semih Karakaş', url: 'https://semih.digital' }],
    creator: 'Semih Karakaş',
    publisher: 'Semih Karakaş',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: params.lang === 'en' ? 'en_US' : 'tr_TR',
      url: `https://semih.digital/${params.lang}`,
      title: isEnglish
        ? 'Semih Karakaş | Full-Stack Developer & Software Engineer'
        : 'Semih Karakaş | Full-Stack Geliştirici & Yazılım Mühendisi',
      description: isEnglish
        ? 'Professional portfolio showcasing enterprise-level software projects, modern web applications, and innovative solutions built with Next.js, React, and TypeScript.'
        : 'Next.js, React ve TypeScript ile oluşturulmuş kurumsal seviye yazılım projeleri, modern web uygulamaları ve yenilikçi çözümleri sergileyen profesyonel portfolyo.',
      siteName: 'Semih Karakaş Portfolio',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: isEnglish
            ? 'Semih Karakaş - Full-Stack Developer Portfolio'
            : 'Semih Karakaş - Full-Stack Geliştirici Portfolyosu',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isEnglish
        ? 'Semih Karakaş | Full-Stack Developer & Software Engineer'
        : 'Semih Karakaş | Full-Stack Geliştirici & Yazılım Mühendisi',
      description: isEnglish
        ? 'Professional portfolio showcasing enterprise-level software projects and modern web applications.'
        : 'Kurumsal seviye yazılım projeleri ve modern web uygulamalarını sergileyen profesyonel portfolyo.',
      images: ['/og-image.jpg'],
      creator: '@semihkarakas',
    },
    alternates: {
      canonical: `https://semih.digital/${params.lang}`,
      languages: {
        'en': 'https://semih.digital/en',
        'tr': 'https://semih.digital/tr',
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
  }
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang} className="dark">
      <body>
        {/* Background gradient orbs */}
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
        <div className="bg-orb bg-orb-4" />
        
        <div className="relative z-10">
          <Header lang={params.lang} />
          <main>{children}</main>
          <Footer lang={params.lang} />
        </div>
      </body>
    </html>
  )
}
