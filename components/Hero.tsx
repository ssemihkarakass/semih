'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code2, Rocket, Sparkles } from 'lucide-react'
import { Locale } from '@/i18n/config'

interface HeroProps {
  dict: any
  lang: Locale
}

const Hero = ({ dict, lang }: HeroProps) => {
  const [text, setText] = useState('')
  const fullText = dict.hero.greeting
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20" aria-label="Hero section">
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="text-white">{text || '\u00A0'}</span>
              <span className={`text-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </h1>
          </motion.div>

          {/* Subtitle with animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 relative"
          >
            <motion.span
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              className="inline-block"
            >
              {dict.hero.subtitle}
            </motion.span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 px-4 py-2 liquid-glass rounded-full">
              <Code2 size={18} className="text-primary-cyan" />
              <span className="text-gray-300">{dict.hero.location}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 liquid-glass rounded-full">
              <Sparkles size={18} className="text-primary-violet" />
              <span className="text-gray-300">{dict.hero.availability}</span>
            </div>
          </motion.div>

          {/* CTA Buttons with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl font-semibold text-white border border-white/20 hover:border-white/30 transition-all duration-200 inline-flex items-center gap-2"
            >
              <Rocket size={20} />
              {dict.hero.viewProjects}
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 rounded-xl font-semibold text-white border border-white/10 hover:border-white/20 transition-all duration-200 inline-flex items-center gap-2"
            >
              {dict.hero.contactMe}
            </motion.a>
          </motion.div>

        </div>
      </div>

      {/* Decorative Elements with gradients */}
      <motion.div
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute top-20 left-10 w-24 h-24 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6, #06B6D4)',
          filter: 'blur(2px)'
        }}
      />
      <motion.div
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-20 right-10 w-32 h-32 rounded-full opacity-20"
        style={{
          background: 'linear-gradient(135deg, #10B981, #F97316)',
          filter: 'blur(2px)'
        }}
      />
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 right-20 w-16 h-16 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.6), transparent)',
          filter: 'blur(20px)'
        }}
      />
    </section>
  )
}

export default Hero
