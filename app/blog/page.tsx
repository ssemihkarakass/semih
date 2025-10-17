import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog | Semih Karakaş',
  description: 'Read articles about web development, TypeScript, React, and more.',
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  slug: string
}

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

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 text-white">
            Blog
          </h1>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, and technology.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="glossy-card rounded-xl p-6 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
                  {post.category}
                </span>
              </div>

              <h2 className="text-2xl font-heading font-bold mb-3 text-white transition-all duration-300">
                {post.title}
              </h2>

              <p className="text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>

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

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
              >
                <span className="font-semibold">Read More</span>
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
