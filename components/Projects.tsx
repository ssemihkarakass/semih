'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github, Filter, Package, Calculator, Globe, ShoppingCart, BarChart3, Zap } from 'lucide-react'
import { Locale } from '@/i18n/config'

interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  github?: string
  demo?: string
}

interface ProjectsProps {
  dict: any
  lang: Locale
}

const Projects = ({ dict, lang }: ProjectsProps) => {
  const projects: Project[] = [
    {
      id: 1,
      title: dict.projects.items.stokpro.title,
      description: dict.projects.items.stokpro.description,
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&auto=format&fit=crop',
      tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Redis', 'TypeScript'],
      category: 'Enterprise',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://stokpro-demo.vercel.app',
    },
    {
      id: 2,
      title: dict.projects.items.finansmax.title,
      description: dict.projects.items.finansmax.description,
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'PDF Generator'],
      category: 'Enterprise',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://finansmax-demo.vercel.app',
    },
    {
      id: 3,
      title: dict.projects.items.ecommerce.title,
      description: dict.projects.items.ecommerce.description,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop',
      tags: ['Next.js 14', 'Stripe', 'Supabase', 'Tailwind', 'Vercel'],
      category: 'E-Commerce',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://eticaret-demo.vercel.app',
    },
    {
      id: 4,
      title: dict.projects.items.corporate.title,
      description: dict.projects.items.corporate.description,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
      tags: ['Next.js', 'Sanity CMS', 'Framer Motion', 'SEO'],
      category: 'Web Design',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://kurumsal-demo.vercel.app',
    },
    {
      id: 5,
      title: dict.projects.items.restopos.title,
      description: dict.projects.items.restopos.description,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
      tags: ['React', 'Firebase', 'Real-time DB', 'PWA'],
      category: 'Enterprise',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://restopos-demo.vercel.app',
    },
    {
      id: 6,
      title: dict.projects.items.crm.title,
      description: dict.projects.items.crm.description,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop',
      tags: ['TypeScript', 'Express', 'PostgreSQL', 'React Query'],
      category: 'Enterprise',
      github: 'https://github.com/ssemihkarakass',
      demo: 'https://crm-demo.vercel.app',
    },
  ]

  const categories = [dict.projects.filterAll, ...Array.from(new Set(projects.map(p => p.category)))]
  const [selectedCategory, setSelectedCategory] = useState(dict.projects.filterAll)

  const filteredProjects = selectedCategory === dict.projects.filterAll 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 relative" aria-labelledby="projects-heading">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="projects-heading" className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {dict.projects.title} <span className="gradient-text">{dict.projects.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-violet via-primary-cyan to-primary-emerald mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            {dict.projects.subtitle}
          </p>
        </motion.div>

        {/* Filter with modern styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-12 flex-wrap"
        >
          <Filter size={20} className="text-primary-cyan" />
          {categories.map((category, idx) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-violet via-primary-indigo to-primary-cyan text-white shadow-glow-violet'
                  : 'liquid-glass text-gray-300 hover:text-white hover:shadow-glow-cyan border border-primary-cyan/20'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="glossy-card rounded-xl overflow-hidden group hover:border-white/20 transition-all duration-300"
            >
              {/* Project Image with overlay */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent opacity-70" />
                {/* Category badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary-cyan/20 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-cyan border border-primary-cyan/40">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold mb-3 text-white transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags with hover effect */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links with animations and glow */}
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-gray-300 hover:text-white transition-all duration-200 border border-white/10 hover:border-white/20"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">View</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="glossy-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-white">
              {dict.projects.ctaTitle}
            </h3>
            <p className="text-gray-400 mb-6">
              {dict.projects.ctaDescription}
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-violet via-primary-indigo to-primary-cyan text-white rounded-xl font-semibold shadow-glow-violet hover:shadow-glow-cyan transition-all duration-300"
            >
              {dict.projects.ctaButton}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
