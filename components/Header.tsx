'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import LanguageSwitcher from './LanguageSwitcher'
import { Locale } from '@/i18n/config'

interface HeaderProps {
  lang: Locale
  dict?: any
}

const Header = ({ lang, dict }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { 
      name: lang === 'en' ? 'Home' : 'Ana Sayfa', 
      href: '#hero' 
    },
    { 
      name: lang === 'en' ? 'About' : 'Hakkımda', 
      href: '#about' 
    },
    { 
      name: lang === 'en' ? 'Projects' : 'Projeler', 
      href: '#projects' 
    },
    { 
      name: lang === 'en' ? 'Blog' : 'Blog', 
      href: '#blog' 
    },
    { 
      name: lang === 'en' ? 'Contact' : 'İletişim', 
      href: '#contact' 
    },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset
      
      // Önce scroll yap
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      
      // Sonra menüyü kapat (scroll tamamlandıktan sonra)
      setTimeout(() => {
        setIsMobileMenuOpen(false)
      }, 100)
    } else {
      // Element bulunamazsa hemen menüyü kapat
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
      role="banner"
    >
      <nav className="container mx-auto px-6 flex items-center justify-between" role="navigation" aria-label="Main navigation">
        {/* Logo with gradient */}
        <Link href="/" className="text-2xl font-heading font-bold group">
          <span className="text-white group-hover:text-emerald-400 transition-all duration-300">Semih</span>
          <span className="text-emerald-400">.</span>
          <span className="text-gray-400 group-hover:text-white transition-all duration-300">digital</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, idx) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-primary-cyan transition-colors duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-violet via-primary-cyan to-primary-emerald group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
          
          {/* Language Switcher */}
          <LanguageSwitcher lang={lang} />
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="md:hidden text-white p-2 liquid-glass rounded-lg border border-primary-cyan/30"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-4"
            id="mobile-menu"
            role="menu"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-primary-cyan transition-colors duration-300 py-2 px-4 liquid-glass rounded-lg"
                >
                  {item.name}
                </motion.a>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-white/10">
                <LanguageSwitcher lang={lang} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
