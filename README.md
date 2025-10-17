# Semih Karakaş - Personal Portfolio & Blog

A modern, minimalist portfolio and blog website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Features clean design, smooth animations, and emerald green accents.

![Portfolio Preview](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop)

## ✨ Features

- 🎨 **Minimalist Theme** - Clean black background with white and emerald green accents
- ⚡ **Next.js 14 App Router** - Latest Next.js features with server components
- 🎭 **Framer Motion Animations** - Smooth, professional animations throughout
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🔍 **SEO Optimized** - Meta tags, Open Graph, and semantic HTML
- 📝 **Blog System** - Built-in blog with markdown support
- 📧 **Contact Form** - Working contact form with Email.js integration
- 🎯 **Performance Focused** - Optimized for speed and user experience

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email**: EmailJS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/ssemihkarakass/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Set up environment variables** (Optional - for contact form)
   
   Create a \`.env.local\` file in the root directory:
   \`\`\`env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   \`\`\`

   Get your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

5. **Open your browser**
   
   Navigate to [http://localhost:3002](http://localhost:3002)

## 🎨 Customization

### Update Personal Information

1. **Header & Footer** - Edit \`components/Header.tsx\` and \`components/Footer.tsx\`
2. **Hero Section** - Modify \`components/Hero.tsx\` to change your name and title

### Customize Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: {
    emerald: '#10b981',  // Main accent color
    teal: '#14b8a6',     // Secondary accent
    cyan: '#06b6d4',     // Tertiary accent
  },
}
```

### Add New Pages

Create new pages in the `app` directory:

```bash
app/
  ├── your-page/
  │   └── page.tsx
\`\`\`

## 📧 Setting Up Contact Form

1. **Sign up for EmailJS**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Create a free account

2. **Create Email Service**
   - Add a new email service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**
   - Create a new email template
   - Use variables: \`{{from_name}}\`, \`{{from_email}}\`, \`{{message}}\`
   - Note your Template ID

4. **Get Public Key**
   - Go to Account > API Keys
   - Copy your Public Key

5. **Update Contact Component**
   - Edit \`components/Contact.tsx\`
   - Replace the placeholder values with your actual IDs

## 📝 Adding Blog Posts

To add new blog posts, edit \`app/blog/[slug]/page.tsx\`:

\`\`\`typescript
const blogPosts: Record<string, BlogPost> = {
  'your-post-slug': {
    title: 'Your Post Title',
    date: '2024-10-17',
    readTime: '5 min read',
    category: 'Category',
    content: \`Your markdown content here...\`,
  },
}
\`\`\`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using EmailJS)
5. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import your repository
4. Build command: \`npm run build\`
5. Publish directory: \`.next\`
6. Deploy!

## 📁 Project Structure

\`\`\`
semihblog/
├── app/
│   ├── blog/
│   │   ├── [slug]/
│   │   │   └── page.tsx      # Individual blog post
│   │   └── page.tsx          # Blog listing
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   ├── About.tsx             # About section
│   ├── Blog.tsx              # Blog preview section
│   ├── Contact.tsx           # Contact form
│   ├── Footer.tsx            # Footer component
│   ├── Header.tsx            # Header/Navigation
│   ├── Hero.tsx              # Hero section
│   └── Projects.tsx          # Projects showcase
├── public/                   # Static assets
├── .gitignore
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── README.md
\`\`\`

## 🎯 Performance Optimizations

- ✅ Server Components by default
- ✅ Automatic code splitting
- ✅ Image optimization with Next.js Image
- ✅ Font optimization with Google Fonts
- ✅ CSS purging with Tailwind
- ✅ Lazy loading for animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ssemihkarakass/portfolio/issues).

## 👨‍💻 Author

**Semih Karakaş**

- Website: [semih.digital](https://semih.digital)
- GitHub: [@ssemihkarakass](https://github.com/ssemihkarakass)
- Instagram: [@ssemihkarakass](https://instagram.com/ssemihkarakass)
- LinkedIn: [@semihkarakas](https://linkedin.com/in/semihkarakas)
- Email: contact@semih.digital

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ by Semih Karakaş
