'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { Locale } from '@/i18n/config'

export default function NotFound() {
  const params = useParams()
  const lang = (params?.lang as Locale) || 'en'

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>
        <h2 className="text-3xl font-heading font-bold text-white mb-4">
          {lang === 'en' ? 'Page Not Found' : 'Sayfa Bulunamadı'}
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          {lang === 'en' 
            ? "The page you're looking for doesn't exist or has been moved."
            : 'Aradığınız sayfa mevcut değil veya taşınmış.'}
        </p>
        <Link
          href={`/${lang}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-violet via-primary-indigo to-primary-cyan text-white rounded-xl font-semibold shadow-glow-violet hover:shadow-glow-cyan transition-all duration-300"
        >
          {lang === 'en' ? 'Go Home' : 'Ana Sayfaya Dön'}
        </Link>
      </div>
    </div>
  )
}
