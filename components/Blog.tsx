'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Locale } from '@/i18n/config'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

interface BlogProps {
  dict: any
  lang: Locale
}

const Blog = ({ dict, lang }: BlogProps) => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: lang === 'en' 
        ? 'Getting Started with Next.js 14 App Router'
        : 'Next.js 14 App Router ile Başlangıç',
      excerpt: lang === 'en'
        ? 'Learn how to build modern web applications using Next.js 14 with the new App Router, Server Components, and more.'
        : 'Next.js 14 ile yeni App Router, Server Components ve daha fazlasını kullanarak modern web uygulamaları oluşturmayı öğrenin.',
      date: '2024-10-15',
      readTime: lang === 'en' ? '5 min read' : '5 dk okuma',
      category: lang === 'en' ? 'Web Development' : 'Web Geliştirme',
      slug: 'getting-started-nextjs-14',
    },
    {
      id: 2,
      title: lang === 'en'
        ? 'Building Beautiful UIs with Tailwind CSS'
        : 'Tailwind CSS ile Güzel Arayüzler Oluşturma',
      excerpt: lang === 'en'
        ? 'Discover best practices for creating stunning, responsive user interfaces using Tailwind CSS utility classes.'
        : 'Tailwind CSS utility sınıflarını kullanarak çarpıcı, responsive kullanıcı arayüzleri oluşturmak için en iyi uygulamaları keşfedin.',
      date: '2024-10-10',
      readTime: lang === 'en' ? '8 min read' : '8 dk okuma',
      category: 'CSS',
      slug: 'building-uis-tailwind',
    },
    {
      id: 3,
      title: lang === 'en'
        ? 'TypeScript Tips for Better Code Quality'
        : 'Daha İyi Kod Kalitesi için TypeScript İpuçları',
      excerpt: lang === 'en'
        ? 'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.'
        : 'Kodunuzu daha sürdürülebilir ve tip güvenli hale getirecek temel TypeScript kalıpları ve uygulamaları.',
      date: '2024-10-05',
      readTime: lang === 'en' ? '6 min read' : '6 dk okuma',
      category: 'TypeScript',
      slug: 'typescript-tips',
    },
    {
      id: 4,
      title: lang === 'en'
        ? 'Mastering Framer Motion Animations'
        : 'Framer Motion Animasyonlarında Ustalaşma',
      excerpt: lang === 'en'
        ? 'Create smooth, professional animations in React applications using Framer Motion library.'
        : 'Framer Motion kütüphanesini kullanarak React uygulamalarında pürüzsüz, profesyonel animasyonlar oluşturun.',
      date: '2024-09-28',
      readTime: lang === 'en' ? '7 min read' : '7 dk okuma',
      category: lang === 'en' ? 'Animation' : 'Animasyon',
      slug: 'mastering-framer-motion',
    },
  ]

  return (
    <section id="blog" className="py-20 relative" aria-labelledby="blog-heading">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="blog-heading" className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {dict.blog.title} <span className="gradient-text">{dict.blog.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-emerald via-primary-teal to-primary-cyan mx-auto rounded-full" />
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="glossy-card rounded-xl p-6 group hover:border-white/20 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-heading font-bold mb-3 text-white transition-all duration-300">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-gray-400 mb-4 line-clamp-2">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <Link
                href={`/${lang}/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <span className="font-semibold">{lang === 'en' ? 'Read More' : 'Devamını Oku'}</span>
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 px-8 py-4 liquid-glass rounded-xl font-semibold text-white bg-primary-cyan/20 hover:bg-primary-cyan/30 border border-primary-cyan/30 btn-glow transition-all duration-300"
          >
            {dict.blog.viewAll}
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glossy-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">
              {dict.blog.ctaTitle}
            </h3>
            <p className="text-gray-400 mb-6">
              {dict.blog.ctaDescription}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-emerald to-primary-teal text-white rounded-lg font-semibold shadow-glow-cyan transition-all duration-300"
              >
                {dict.blog.viewProjects}
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 liquid-glass text-white rounded-lg font-semibold border border-primary-cyan/30 hover:border-primary-cyan/60 transition-all duration-300"
              >
                {dict.blog.getInTouch}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
