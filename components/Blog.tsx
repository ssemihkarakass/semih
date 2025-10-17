'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

const Blog = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Getting Started with Next.js 14 App Router',
      excerpt: 'Learn how to build modern web applications using Next.js 14 with the new App Router, Server Components, and more.',
      date: '2024-10-15',
      readTime: '5 min read',
      category: 'Web Development',
      slug: 'getting-started-nextjs-14',
    },
    {
      id: 2,
      title: 'Building Beautiful UIs with Tailwind CSS',
      excerpt: 'Discover best practices for creating stunning, responsive user interfaces using Tailwind CSS utility classes.',
      date: '2024-10-10',
      readTime: '8 min read',
      category: 'CSS',
      slug: 'building-uis-tailwind',
    },
    {
      id: 3,
      title: 'TypeScript Tips for Better Code Quality',
      excerpt: 'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.',
      date: '2024-10-05',
      readTime: '6 min read',
      category: 'TypeScript',
      slug: 'typescript-tips',
    },
    {
      id: 4,
      title: 'Mastering Framer Motion Animations',
      excerpt: 'Create smooth, professional animations in React applications using Framer Motion library.',
      date: '2024-09-28',
      readTime: '7 min read',
      category: 'Animation',
      slug: 'mastering-framer-motion',
    },
  ]

  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
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
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <span className="font-semibold">Read More</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
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
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 liquid-glass rounded-xl font-semibold text-white bg-primary-cyan/20 hover:bg-primary-cyan/30 border border-primary-cyan/30 btn-glow transition-all duration-300"
          >
            View All Articles
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
