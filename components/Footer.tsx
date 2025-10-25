'use client'

import { Github, Instagram, Linkedin, Mail, Heart } from 'lucide-react'
import { motion } from 'framer-motion'
import { Locale } from '@/i18n/config'

interface FooterProps {
  lang: Locale
  dict?: any
}

const Footer = ({ lang, dict }: FooterProps) => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ssemihkarakass', label: 'GitHub' },
    { icon: Instagram, href: 'https://instagram.com/ssemihkarakass', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com/in/semihkarakas', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contact@semih.digital', label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-dark-border py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 liquid-glass rounded-lg hover:shadow-glow-cyan transition-all duration-300 border border-primary-cyan/20 hover:border-primary-cyan/50"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-gray-300 hover:text-primary-cyan transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-400"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart size={16} className="text-accent-rose" fill="currentColor" />
              </motion.span> by{' '}
              <span className="gradient-text font-semibold">Semih Karakaş</span>
            </p>
            <p className="text-sm mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
