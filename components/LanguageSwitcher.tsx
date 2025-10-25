'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'
import { i18n, type Locale } from '@/i18n/config'

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname()
  
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center gap-2">
      <Globe size={18} className="text-gray-400" />
      {i18n.locales.map((locale) => {
        const isActive = lang === locale
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className="relative"
          >
            <motion.span
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 ${
                isActive
                  ? 'text-white bg-primary-cyan/20 border border-primary-cyan/40'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {locale.toUpperCase()}
            </motion.span>
          </Link>
        )
      })}
    </div>
  )
}
