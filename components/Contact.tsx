'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { Locale } from '@/i18n/config'

interface ContactProps {
  dict: any
  lang: Locale
}

const Contact = ({ dict, lang }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // EmailJS configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      

      // Simulate API call
    

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 relative" aria-labelledby="contact-heading">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-heading font-bold mb-4">
            {dict.contact.title} <span className="gradient-text">{dict.contact.titleHighlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent-rose via-primary-violet to-primary-indigo mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-heading font-bold mb-6 text-white">{dict.contact.connectTitle}</h3>
              <p className="text-gray-400 mb-8">
                {dict.contact.connectDescription}
              </p>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start gap-4 glossy-card rounded-lg p-4"
                >
                  <Mail className="text-primary-cyan mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{dict.contact.email}</h4>
                    <a 
                      href="mailto:contact@semih.digital" 
                      className="text-gray-400 hover:text-primary-cyan transition-colors"
                    >
                      contact@semih.digital
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start gap-4 glossy-card rounded-lg p-4"
                >
                  <User className="text-primary-violet mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{dict.contact.location}</h4>
                    <p className="text-gray-400">{dict.contact.locationValue}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-start gap-4 glossy-card rounded-lg p-4"
                >
                  <MessageSquare className="text-primary-emerald mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{dict.contact.responseTime}</h4>
                    <p className="text-gray-400">{dict.contact.responseValue}</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {dict.contact.form.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card liquid-glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition-all duration-300 border border-primary-cyan/20"
                    placeholder={dict.contact.form.namePlaceholder}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {dict.contact.form.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-card liquid-glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition-all duration-300 border border-primary-cyan/20"
                    placeholder={dict.contact.form.emailPlaceholder}
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {dict.contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-card liquid-glass rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-cyan transition-all duration-300 resize-none border border-primary-cyan/20"
                    placeholder={dict.contact.form.messagePlaceholder}
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-4 rounded-xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary-violet via-primary-indigo to-primary-cyan hover:shadow-glow-violet'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {dict.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {dict.contact.form.submit}
                      <Send size={20} />
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-lg p-4"
                  >
                    <CheckCircle size={20} />
                    <p>{dict.contact.form.success}</p>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/30 rounded-lg p-4"
                  >
                    <AlertCircle size={20} />
                    <p>{dict.contact.form.error}</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
