import { Locale } from '@/i18n/config'
import { getDictionary } from '@/i18n/dictionaries'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function BlogPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  const blogPosts = [
    {
      id: 1,
      title: params.lang === 'en' 
        ? 'Getting Started with Next.js 14 App Router'
        : 'Next.js 14 App Router ile Başlangıç',
      excerpt: params.lang === 'en'
        ? 'Learn how to build modern web applications using Next.js 14 with the new App Router, Server Components, and more.'
        : 'Next.js 14 ile yeni App Router, Server Components ve daha fazlasını kullanarak modern web uygulamaları oluşturmayı öğrenin.',
      date: '2024-10-15',
      readTime: params.lang === 'en' ? '5 min read' : '5 dk okuma',
      category: params.lang === 'en' ? 'Web Development' : 'Web Geliştirme',
      slug: 'getting-started-nextjs-14',
    },
    {
      id: 2,
      title: params.lang === 'en'
        ? 'Building Beautiful UIs with Tailwind CSS'
        : 'Tailwind CSS ile Güzel Arayüzler Oluşturma',
      excerpt: params.lang === 'en'
        ? 'Discover best practices for creating stunning, responsive user interfaces using Tailwind CSS utility classes.'
        : 'Tailwind CSS utility sınıflarını kullanarak çarpıcı, responsive kullanıcı arayüzleri oluşturmak için en iyi uygulamaları keşfedin.',
      date: '2024-10-10',
      readTime: params.lang === 'en' ? '8 min read' : '8 dk okuma',
      category: 'CSS',
      slug: 'building-uis-tailwind',
    },
    {
      id: 3,
      title: params.lang === 'en'
        ? 'TypeScript Tips for Better Code Quality'
        : 'Daha İyi Kod Kalitesi için TypeScript İpuçları',
      excerpt: params.lang === 'en'
        ? 'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.'
        : 'Kodunuzu daha sürdürülebilir ve tip güvenli hale getirecek temel TypeScript kalıpları ve uygulamaları.',
      date: '2024-10-05',
      readTime: params.lang === 'en' ? '6 min read' : '6 dk okuma',
      category: 'TypeScript',
      slug: 'typescript-tips',
    },
    {
      id: 4,
      title: params.lang === 'en'
        ? 'Mastering Framer Motion Animations'
        : 'Framer Motion Animasyonlarında Ustalaşma',
      excerpt: params.lang === 'en'
        ? 'Create smooth, professional animations in React applications using Framer Motion library.'
        : 'Framer Motion kütüphanesini kullanarak React uygulamalarında pürüzsüz, profesyonel animasyonlar oluşturun.',
      date: '2024-09-28',
      readTime: params.lang === 'en' ? '7 min read' : '7 dk okuma',
      category: params.lang === 'en' ? 'Animation' : 'Animasyon',
      slug: 'mastering-framer-motion',
    },
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4">
            {dict.blog.title} <span className="gradient-text">{dict.blog.titleHighlight}</span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-emerald via-primary-teal to-primary-cyan mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {params.lang === 'en' 
              ? 'Thoughts, tutorials, and insights about web development, design, and technology.'
              : 'Web geliştirme, tasarım ve teknoloji hakkında düşünceler, eğitimler ve içgörüler.'}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
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
              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString(params.lang === 'en' ? 'en-US' : 'tr-TR', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Read More */}
              <Link
                href={`/${params.lang}/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <span className="font-semibold">
                  {params.lang === 'en' ? 'Read More' : 'Devamını Oku'}
                </span>
                <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
