'use client'

import { motion } from 'framer-motion'
import { Code, Laptop, Zap, Globe } from 'lucide-react'
import { Locale } from '@/i18n/config'

interface AboutProps {
  dict: any
  lang: Locale
}

const About = ({ dict, lang }: AboutProps) => {
  const skills = [
    { icon: Code, title: 'Web Development', description: 'Building modern, responsive web applications' },
    { icon: Laptop, title: 'Full Stack', description: 'Frontend and backend development expertise' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' },
    { icon: Globe, title: 'Modern Tech', description: 'Always learning new technologies' },
  ]

  const techStack = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 
    'Tailwind CSS', 'PostgreSQL', 'MongoDB', 'Git'
  ]

  return (
    <section id="about" className="py-20 relative" aria-labelledby="about-heading">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="about-heading" className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {dict.about.title} <span className="gradient-text">{dict.about.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-violet via-primary-cyan to-primary-emerald mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div 
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:block absolute inset-0 bg-gradient-to-br from-primary-violet via-primary-cyan to-primary-emerald rounded-2xl blur-3xl opacity-20" 
              />
              <div className="relative glossy-card rounded-2xl p-8 h-full flex items-center justify-center">
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-violet via-primary-indigo to-primary-cyan flex items-center justify-center text-8xl shadow-glow-violet"
                  >
                    👨‍💻
                  </motion.div>
                  <h3 className="text-2xl font-heading font-bold text-white">Semih Karakaş</h3>
                  <p className="gradient-text font-semibold">Software Developer</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold mb-6 text-white">
              {dict.about.heading}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {dict.about.description1}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {dict.about.description2}
            </p>

            {/* Tech Stack */}
            <div className="mb-8">
              <h4 className="text-xl font-heading font-semibold mb-4 gradient-text">{dict.about.techStack}</h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="px-4 py-2 liquid-glass rounded-full text-sm text-gray-300 hover:text-primary-emerald transition-colors border border-primary-emerald/20 hover:border-primary-emerald/50 cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-primary-violet to-primary-cyan text-white rounded-lg font-semibold shadow-glow-violet hover:shadow-glow-cyan transition-all duration-300"
              >
                {dict.about.viewProjects}
              </motion.a>
              <motion.a
                href="#blog"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 liquid-glass text-white rounded-lg font-semibold border border-primary-cyan/30 hover:border-primary-cyan/60 transition-all duration-300"
              >
                {dict.about.readBlog}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="glossy-card rounded-xl p-6 text-center group hover:border-white/20 transition-all duration-300"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="mb-4"
              >
                <skill.icon className="w-12 h-12 mx-auto text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
              <h4 className="font-heading font-semibold mb-2 text-white group-hover:gradient-text transition-all">{skill.title}</h4>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
