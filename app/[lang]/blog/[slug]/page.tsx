'use client'

import { Locale } from '@/i18n/config'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'

export default function BlogPostPage() {
  const params = useParams()
  const lang = params.lang as Locale
  const slug = params.slug as string

  // Blog post verileri
  const blogPosts: Record<string, any> = {
    'getting-started-nextjs-14': {
      title: {
        en: 'Getting Started with Next.js 14 App Router',
        tr: 'Next.js 14 App Router ile Başlangıç'
      },
      date: '2024-10-15',
      readTime: lang === 'en' ? '5 min read' : '5 dk okuma',
      category: lang === 'en' ? 'Web Development' : 'Web Geliştirme',
      content: {
        en: `
# Getting Started with Next.js 14 App Router

Next.js 14 introduces powerful new features that make building modern web applications easier than ever. In this guide, we'll explore the App Router and how to leverage its capabilities.

## What's New in Next.js 14?

The App Router is a game-changer for Next.js applications. It provides:

- **Server Components by default** - Better performance and SEO
- **Streaming and Suspense** - Improved loading states
- **Layouts and Templates** - Better code organization
- **Route Groups** - Flexible routing structure

## Getting Started

First, create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Creating Your First Route

In the App Router, routes are defined using folders. Create a new route by adding a folder in the \`app\` directory:

\`\`\`
app/
  about/
    page.tsx
\`\`\`

## Server Components

By default, all components in the App Router are Server Components. This means they run on the server and send HTML to the client.

\`\`\`tsx
// This is a Server Component
export default function Page() {
  return <h1>Hello from Server Component!</h1>
}
\`\`\`

## Conclusion

Next.js 14's App Router is a powerful tool for building modern web applications. Start experimenting with it today!
        `,
        tr: `
# Next.js 14 App Router ile Başlangıç

Next.js 14, modern web uygulamaları oluşturmayı her zamankinden daha kolay hale getiren güçlü yeni özellikler sunuyor. Bu kılavuzda, App Router'ı ve yeteneklerinden nasıl yararlanacağınızı keşfedeceğiz.

## Next.js 14'te Neler Yeni?

App Router, Next.js uygulamaları için oyunun kurallarını değiştiriyor. Şunları sağlıyor:

- **Varsayılan olarak Server Components** - Daha iyi performans ve SEO
- **Streaming ve Suspense** - İyileştirilmiş yükleme durumları
- **Layouts ve Templates** - Daha iyi kod organizasyonu
- **Route Groups** - Esnek yönlendirme yapısı

## Başlarken

Öncelikle yeni bir Next.js 14 projesi oluşturun:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## İlk Route'unuzu Oluşturma

App Router'da, route'lar klasörler kullanılarak tanımlanır. \`app\` dizinine bir klasör ekleyerek yeni bir route oluşturun:

\`\`\`
app/
  about/
    page.tsx
\`\`\`

## Server Components

Varsayılan olarak, App Router'daki tüm bileşenler Server Components'tir. Bu, sunucuda çalıştıkları ve istemciye HTML gönderdikleri anlamına gelir.

\`\`\`tsx
// Bu bir Server Component
export default function Page() {
  return <h1>Server Component'ten Merhaba!</h1>
}
\`\`\`

## Sonuç

Next.js 14'ün App Router'ı, modern web uygulamaları oluşturmak için güçlü bir araçtır. Bugün denemeye başlayın!
        `
      }
    },
    'building-uis-tailwind': {
      title: {
        en: 'Building Beautiful UIs with Tailwind CSS',
        tr: 'Tailwind CSS ile Güzel Arayüzler Oluşturma'
      },
      date: '2024-10-10',
      readTime: lang === 'en' ? '8 min read' : '8 dk okuma',
      category: 'CSS',
      content: {
        en: `
# Building Beautiful UIs with Tailwind CSS

Tailwind CSS has revolutionized how we build user interfaces. Learn the best practices for creating stunning designs.

## Why Tailwind CSS?

Tailwind provides utility-first CSS that makes styling fast and consistent.

## Getting Started

Install Tailwind in your project and start building beautiful UIs today!
        `,
        tr: `
# Tailwind CSS ile Güzel Arayüzler Oluşturma

Tailwind CSS, kullanıcı arayüzleri oluşturma şeklimizde devrim yarattı. Çarpıcı tasarımlar oluşturmak için en iyi uygulamaları öğrenin.

## Neden Tailwind CSS?

Tailwind, stil vermeyi hızlı ve tutarlı hale getiren utility-first CSS sağlar.

## Başlarken

Projenize Tailwind'i kurun ve bugün güzel arayüzler oluşturmaya başlayın!
        `
      }
    },
    'typescript-tips': {
      title: {
        en: 'TypeScript Tips for Better Code Quality',
        tr: 'Daha İyi Kod Kalitesi için TypeScript İpuçları'
      },
      date: '2024-10-05',
      readTime: lang === 'en' ? '6 min read' : '6 dk okuma',
      category: 'TypeScript',
      content: {
        en: `
# TypeScript Tips for Better Code Quality

TypeScript helps you write better, more maintainable code. Here are essential tips.

## Type Safety

Always use proper types to catch errors early.

## Best Practices

Follow TypeScript best practices for clean, maintainable code.
        `,
        tr: `
# Daha İyi Kod Kalitesi için TypeScript İpuçları

TypeScript, daha iyi, daha sürdürülebilir kod yazmanıza yardımcı olur. İşte temel ipuçları.

## Tip Güvenliği

Hataları erken yakalamak için her zaman uygun tipleri kullanın.

## En İyi Uygulamalar

Temiz, sürdürülebilir kod için TypeScript en iyi uygulamalarını takip edin.
        `
      }
    },
    'mastering-framer-motion': {
      title: {
        en: 'Mastering Framer Motion Animations',
        tr: 'Framer Motion Animasyonlarında Ustalaşma'
      },
      date: '2024-09-28',
      readTime: lang === 'en' ? '7 min read' : '7 dk okuma',
      category: lang === 'en' ? 'Animation' : 'Animasyon',
      content: {
        en: `
# Mastering Framer Motion Animations

Framer Motion makes creating animations in React simple and powerful.

## Getting Started

Install Framer Motion and start creating smooth animations.

## Best Practices

Learn the best practices for performant animations.
        `,
        tr: `
# Framer Motion Animasyonlarında Ustalaşma

Framer Motion, React'te animasyon oluşturmayı basit ve güçlü hale getirir.

## Başlarken

Framer Motion'ı kurun ve pürüzsüz animasyonlar oluşturmaya başlayın.

## En İyi Uygulamalar

Performanslı animasyonlar için en iyi uygulamaları öğrenin.
        `
      }
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <article className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>{lang === 'en' ? 'Back to Blog' : 'Bloga Dön'}</span>
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/20">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            {post.title[lang]}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center gap-6 text-gray-400 mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString(lang === 'en' ? 'en-US' : 'tr-TR', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content[lang]}
            </div>
          </div>

          {/* Back Button Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
            >
              <ArrowLeft size={20} />
              <span>{lang === 'en' ? 'Back to All Articles' : 'Tüm Yazılara Dön'}</span>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
