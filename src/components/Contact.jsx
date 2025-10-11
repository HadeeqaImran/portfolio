import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MapPin, Phone, Terminal, Send, Check, Zap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Contact = () => {
  const { theme } = useTheme()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [consoleLines, setConsoleLines] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    // Initial console boot sequence
    const bootSequence = [
      { text: '> Initializing Developer Console...', delay: 0 },
      { text: '> Loading contact module...', delay: 400 },
      { text: '> System ready. Awaiting input...', delay: 800 },
    ]

    bootSequence.forEach(({ text, delay }) => {
      setTimeout(() => {
        setConsoleLines(prev => [...prev, { text, type: 'system' }])
      }, delay)
    })
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Console feedback during submission
    setConsoleLines(prev => [
      ...prev,
      { text: '> Executing: contactForm.submit()', type: 'command' },
      { text: `> Preparing message from ${formData.name}...`, type: 'info' },
      { text: '> Establishing secure connection...', type: 'info' },
    ])

    // Simulate API call
    setTimeout(() => {
      setConsoleLines(prev => [
        ...prev,
        { text: '> ✓ Message transmitted successfully!', type: 'success' },
        { text: '> ✓ You will receive a response within 24 hours', type: 'success' },
        { text: '> Connection closed. Ready for next command.', type: 'system' },
      ])
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset after success
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' })
        setSubmitSuccess(false)
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hadeeqaimran786@gmail.com',
      href: 'mailto:hadeeqaimran786@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 334 4418107',
      href: 'tel:+923344418107',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pakistan',
    },
  ]

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              style={{ color: 'var(--color-primary)' }}
            >
              <Terminal size={36} />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Let's Connect
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto mb-4"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            <span className="font-mono" style={{ color: 'var(--color-primary)' }}>// </span>
            Transforming ideas into elegant code solutions
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Quick Contact
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="group"
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg border transition-all duration-200"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(var(--card-bg), 0.5)' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-primary)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = theme === 'dark' ? '#374151' : '#e5e7eb'
                      }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        style={{ color: 'var(--color-primary)' }}
                      >
                        <Icon size={24} />
                      </motion.div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div
                      className="flex items-center gap-4 p-4 rounded-lg border"
                      style={{
                        backgroundColor: theme === 'dark' ? 'rgba(var(--card-bg), 0.5)' : '#ffffff',
                        borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
                      }}
                    >
                      <div style={{ color: 'var(--color-primary)' }}>
                        <Icon size={24} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{info.label}</p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              )
            })}

            {/* Developer Console Output */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8"
            >
              <div
                className="rounded-lg border overflow-hidden"
                style={{
                  backgroundColor: theme === 'dark' ? '#0a0a0a' : '#1a1a1a',
                  borderColor: theme === 'dark' ? '#374151' : '#4b5563',
                }}
              >
                {/* Console Header */}
                <div
                  className="flex items-center gap-2 px-3 py-2 border-b"
                  style={{
                    backgroundColor: theme === 'dark' ? '#1a1a1a' : '#2d2d2d',
                    borderColor: theme === 'dark' ? '#374151' : '#4b5563',
                  }}
                >
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs font-mono text-gray-400 ml-2">console</span>
                </div>

                {/* Console Content */}
                <div className="p-4 h-64 overflow-y-auto font-mono text-xs space-y-1">
                  <AnimatePresence>
                    {consoleLines.map((line, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{
                          color:
                            line.type === 'success'
                              ? '#10b981'
                              : line.type === 'command'
                              ? '#f59e0b'
                              : line.type === 'info'
                              ? '#38bdf8'
                              : '#9ca3af',
                        }}
                      >
                        {line.text}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="inline-block w-2 h-3.5 ml-1"
                    style={{ backgroundColor: 'var(--color-primary)' }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-xl p-8 border shadow-xl"
              style={{
                backgroundColor: theme === 'dark' ? 'rgba(var(--card-bg), 0.8)' : '#ffffff',
                borderColor: theme === 'dark' ? '#374151' : '#e5e7eb',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Zap size={24} style={{ color: 'var(--color-primary)' }} />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Send a Message
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Have a project idea? Let's bring it to life together.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span className="font-mono" style={{ color: 'var(--color-primary)' }}>
                      {'> '}
                    </span>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(var(--bg-dark), 0.5)' : '#f9fafb',
                      borderColor: theme === 'dark' ? '#374151' : '#d1d5db',
                      color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)'
                      e.target.style.boxShadow = `0 0 0 3px rgba(var(--particle-rgb), 0.1)`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme === 'dark' ? '#374151' : '#d1d5db'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span className="font-mono" style={{ color: 'var(--color-primary)' }}>
                      {'> '}
                    </span>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 focus:outline-none"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(var(--bg-dark), 0.5)' : '#f9fafb',
                      borderColor: theme === 'dark' ? '#374151' : '#d1d5db',
                      color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)'
                      e.target.style.boxShadow = `0 0 0 3px rgba(var(--particle-rgb), 0.1)`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme === 'dark' ? '#374151' : '#d1d5db'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    <span className="font-mono" style={{ color: 'var(--color-primary)' }}>
                      {'> '}
                    </span>
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:ring-2 focus:ring-opacity-50 resize-none focus:outline-none"
                    style={{
                      backgroundColor: theme === 'dark' ? 'rgba(var(--bg-dark), 0.5)' : '#f9fafb',
                      borderColor: theme === 'dark' ? '#374151' : '#d1d5db',
                      color: theme === 'dark' ? '#e5e7eb' : '#1f2937',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'var(--color-primary)'
                      e.target.style.boxShadow = `0 0 0 3px rgba(var(--particle-rgb), 0.1)`
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = theme === 'dark' ? '#374151' : '#d1d5db'
                      e.target.style.boxShadow = 'none'
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full py-4 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
                  style={{
                    backgroundColor: submitSuccess
                      ? '#10b981'
                      : 'var(--color-primary)',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting && !submitSuccess) {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting && !submitSuccess) {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary)'
                    }
                  }}
                >
                  {submitSuccess ? (
                    <>
                      <Check size={20} />
                      <span>Message Sent!</span>
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      >
                        <Terminal size={20} />
                      </motion.div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
                  <span className="font-mono" style={{ color: 'var(--color-primary)' }}>
                    //
                  </span>{' '}
                  I typically respond within 24 hours
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
