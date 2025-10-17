import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'

interface BlogPost {
  title: string
  content: string
  date: string
  readTime: string
  category: string
}

// Sample blog content
const blogPosts: Record<string, BlogPost> = {
  'getting-started-nextjs-14': {
    title: 'Getting Started with Next.js 14 App Router',
    date: '2024-10-15',
    readTime: '5 min read',
    category: 'Web Development',
    content: `
Next.js 14 introduces some exciting new features and improvements, particularly around the App Router. In this article, we'll explore how to get started with building modern web applications.

## What's New in Next.js 14?

Next.js 14 brings several improvements:

- **Improved Performance**: Faster local server startup and faster code updates
- **Turbopack**: Now more stable and ready for development
- **Server Actions**: Stable and production-ready
- **Partial Prerendering**: Preview of a new rendering model

## Setting Up Your First Project

To create a new Next.js 14 project, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

Choose the App Router when prompted. This will give you access to all the latest features.

## Understanding the App Router

The App Router is built on React Server Components, providing:

- Automatic code splitting
- Streaming and Suspense support
- Built-in loading and error states
- Simplified data fetching

### Creating Your First Route

Create a new folder in the \`app\` directory:

\`\`\`tsx
// app/about/page.tsx
export default function AboutPage() {
  return <h1>About Us</h1>
}
\`\`\`

That's it! The file automatically becomes a route at \`/about\`.

## Best Practices

1. **Use Server Components by default** - Only use Client Components when you need interactivity
2. **Leverage Server Actions** - Simplify your data mutations
3. **Implement proper loading states** - Use Suspense and loading.tsx files
4. **Optimize images** - Always use the Next.js Image component

## Conclusion

Next.js 14 with the App Router provides a powerful foundation for building modern web applications. The combination of Server Components, improved performance, and developer experience makes it an excellent choice for your next project.

Ready to dive deeper? Check out the [official Next.js documentation](https://nextjs.org/docs) for more information.
    `,
  },
  'building-uis-tailwind': {
    title: 'Building Beautiful UIs with Tailwind CSS',
    date: '2024-10-10',
    readTime: '8 min read',
    category: 'CSS',
    content: `
Tailwind CSS has revolutionized how we write CSS. Instead of writing custom CSS, you compose designs using utility classes. Let's explore how to build beautiful, responsive UIs.

## Why Tailwind CSS?

Tailwind offers several advantages:

- **Rapid Development**: Build faster with pre-defined utility classes
- **Consistent Design**: Built-in design system
- **Responsive by Default**: Mobile-first approach
- **Small Bundle Size**: PurgeCSS removes unused styles

## Getting Started

Install Tailwind in your project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## Building a Card Component

Here's how to create a beautiful card:

\`\`\`tsx
<div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
  <h2 className="text-2xl font-bold mb-2">Card Title</h2>
  <p className="text-gray-600">Card content goes here...</p>
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design simple:

\`\`\`tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Your content */}
</div>
\`\`\`

## Custom Configuration

Extend Tailwind's default theme:

\`\`\`js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#0066cc',
      },
    },
  },
}
\`\`\`

## Best Practices

1. **Use @apply sparingly** - Embrace utility-first
2. **Create components** - Extract repeated patterns
3. **Configure your theme** - Customize to match your brand
4. **Use arbitrary values wisely** - \`w-[123px]\` when needed

## Conclusion

Tailwind CSS empowers you to build stunning UIs quickly and consistently. The utility-first approach may feel different at first, but once you embrace it, you'll never want to go back to traditional CSS.
    `,
  },
  'typescript-tips': {
    title: 'TypeScript Tips for Better Code Quality',
    date: '2024-10-05',
    readTime: '6 min read',
    category: 'TypeScript',
    content: `
TypeScript adds static typing to JavaScript, helping you catch errors early and write more maintainable code. Here are essential tips to improve your TypeScript skills.

## 1. Use Type Inference

Let TypeScript infer types when possible:

\`\`\`typescript
// Good - Type is inferred
const message = "Hello, World!"

// Unnecessary - Explicit type not needed
const message: string = "Hello, World!"
\`\`\`

## 2. Leverage Union Types

Union types allow a value to be one of several types:

\`\`\`typescript
type Status = 'pending' | 'success' | 'error'

function handleStatus(status: Status) {
  // TypeScript knows status can only be one of three values
}
\`\`\`

## 3. Use Interfaces for Objects

Define object shapes with interfaces:

\`\`\`typescript
interface User {
  id: number
  name: string
  email: string
}

function greetUser(user: User) {
  console.log(\`Hello, \${user.name}!\`)
}
\`\`\`

## 4. Enable Strict Mode

Always use strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true
  }
}
\`\`\`

## 5. Use Utility Types

TypeScript provides helpful utility types:

\`\`\`typescript
// Partial - Make all properties optional
type PartialUser = Partial<User>

// Pick - Select specific properties
type UserPreview = Pick<User, 'id' | 'name'>

// Omit - Exclude specific properties
type UserWithoutEmail = Omit<User, 'email'>
\`\`\`

## 6. Generic Functions

Write reusable code with generics:

\`\`\`typescript
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}

const firstNumber = getFirstElement([1, 2, 3]) // Type: number
const firstString = getFirstElement(['a', 'b']) // Type: string
\`\`\`

## Best Practices

1. **Don't use \`any\`** - It defeats the purpose of TypeScript
2. **Use \`unknown\` instead of \`any\`** - When you truly don't know the type
3. **Leverage type guards** - Narrow types safely
4. **Document complex types** - Use JSDoc comments

## Conclusion

TypeScript significantly improves code quality and developer experience. These tips will help you write better, more maintainable TypeScript code.
    `,
  },
  'mastering-framer-motion': {
    title: 'Mastering Framer Motion Animations',
    date: '2024-09-28',
    readTime: '7 min read',
    category: 'Animation',
    content: `
Framer Motion is a production-ready motion library for React that makes creating animations simple and intuitive. Let's explore how to create smooth, professional animations.

## Getting Started

Install Framer Motion:

\`\`\`bash
npm install framer-motion
\`\`\`

## Basic Animation

Create your first animation:

\`\`\`tsx
import { motion } from 'framer-motion'

function Box() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello, World!
    </motion.div>
  )
}
\`\`\`

## Variants

Use variants for complex animations:

\`\`\`tsx
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
}

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
  transition={{ duration: 0.5 }}
/>
\`\`\`

## Gesture Animations

Add interactivity with gestures:

\`\`\`tsx
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
/>
\`\`\`

## Layout Animations

Animate layout changes automatically:

\`\`\`tsx
<motion.div layout>
  {/* Content that changes */}
</motion.div>
\`\`\`

## Stagger Children

Create staggered animations:

\`\`\`tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

<motion.div variants={container} initial="hidden" animate="show">
  <motion.div variants={item} />
  <motion.div variants={item} />
  <motion.div variants={item} />
</motion.div>
\`\`\`

## Best Practices

1. **Use \`whileInView\`** - Animate elements when they enter viewport
2. **Keep animations subtle** - Less is often more
3. **Consider performance** - Use \`transform\` and \`opacity\`
4. **Provide reduced motion** - Respect user preferences

## Conclusion

Framer Motion makes creating beautiful animations in React straightforward. With these techniques, you can add polish and delight to your applications.
    `,
  },
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Semih Karakaş`,
    description: post.content.slice(0, 160),
  }
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts[params.slug]

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <article className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 text-sm font-semibold rounded-full border border-emerald-500/20">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="glossy-card rounded-xl p-8 md:p-12">
          <div 
            className="markdown-content prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
          />
        </div>
      </div>
    </article>
  )
}
