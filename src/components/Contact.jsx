import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    alert('Thanks for reaching out! This is a demo form.')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hadeeqaimran786@gmail.com',
      href: 'mailto:hadeeqaimran786@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+92 334 4418107',
      href: 'tel:+923344418107',
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Pakistan',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section 
      id="contact" 
      className="py-20 bg-white/50 backdrop-blur-sm relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgba(var(--bg-dark-alt), 0.5)`
          : undefined,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-4"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? Feel free to reach out!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Contact Information</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-start"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="mr-4 mt-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 dark:text-gray-200 transition-colors duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 dark:text-gray-200">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border bg-white text-gray-900 dark:text-gray-100 rounded-lg ring-primary focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{
                    backgroundColor: theme === 'dark' ? `rgb(var(--card-bg))` : undefined,
                    borderColor: theme === 'dark' ? `rgb(var(--bg-dark))` : '#e5e7eb',
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border bg-white text-gray-900 dark:text-gray-100 rounded-lg ring-primary focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{
                    backgroundColor: theme === 'dark' ? `rgb(var(--card-bg))` : undefined,
                    borderColor: theme === 'dark' ? `rgb(var(--bg-dark))` : '#e5e7eb',
                  }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 border bg-white text-gray-900 dark:text-gray-100 rounded-lg ring-primary focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                  style={{
                    backgroundColor: theme === 'dark' ? `rgb(var(--card-bg))` : undefined,
                    borderColor: theme === 'dark' ? `rgb(var(--bg-dark))` : '#e5e7eb',
                  }}
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full px-8 py-3 bg-primary text-white rounded-lg bg-primary-hover transition-colors duration-200 font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

