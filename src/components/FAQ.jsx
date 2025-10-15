import React from 'react'
import { motion } from 'framer-motion'
import { HelpCircle } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const FAQ = () => {
  const { theme } = useTheme()

  const faqs = [
    {
      question: 'Who is Hadeeqa Imran?',
      answer:
        'Hadeeqa Imran is a Lahore-based full-stack software engineer and React Native specialist who builds end-to-end mobile and web products for startups and scale-ups.',
    },
    {
      question: 'Is Hadeeqa Imran the same as Hadiqa Imran?',
      answer:
        'Yes—some people spell my name Hadiqa Imran, but it refers to the same engineer. You can find my work here, on LinkedIn, GitHub, and Upwork under the name Hadeeqa Imran.',
    },
    {
      question: 'What services does Hadeeqa Imran provide?',
      answer:
        'I help teams plan, design, and ship performant React Native apps, MERN platforms, and cloud-backed APIs, handling everything from architecture to release.',
    },
    {
      question: 'How can I contact Hadeeqa Imran for a project?',
      answer:
        'Use the contact form below, email me at hadeeqaimran786@gmail.com, or book time via LinkedIn. I typically respond within 24 hours.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="faq"
      className="py-20 bg-white/70 backdrop-blur-sm relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgba(var(--bg-dark), 0.7)`
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
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle size={36} style={{ color: 'var(--color-primary)' }} />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              FAQs About Hadeeqa Imran
            </h2>
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Find quick answers to the questions people search most about Hadeeqa (or Hadiqa) Imran, her experience, and how to collaborate.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl"
              style={{
                backgroundColor: theme === 'dark'
                  ? `rgb(var(--card-bg))`
                  : undefined,
              }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
