import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Certifications = () => {
  const { theme } = useTheme()

  const certifications = [
    {
      title: 'LLM Engineering: Master AI, Large Language Models & Agents',
      issuer: 'Udemy',
      date: 'June 10, 2025',
      credentialId: 'UC-eb664df9-b7ab-4348-abfb-3ba972ae504e',
      link: 'https://www.udemy.com/certificate/UC-eb664df9-b7ab-4348-abfb-3ba972ae504e/',
      description: 'Explore the power of large language models by building intelligent agents, multi-modal tools, and high-performance AI systems from scratch.'
    },
    {
      title: 'Next JS: The Complete Developer\'s Guide',
      issuer: 'Udemy',
      date: 'March 25, 2025',
      credentialId: 'UC-c63cce26-88a2-4b8f-9b41-ca4a8064be88',
      link: 'https://www.udemy.com/certificate/UC-c63cce26-88a2-4b8f-9b41-ca4a8064be88/',
      description: 'Craft blazing-fast, secure, and modern web experiences using the full power of Next.js and the latest React ecosystem.'
    },
    {
      title: 'Mastering TypeScript - 2024 Edition',
      issuer: 'Udemy',
      date: 'October 12, 2024',
      credentialId: 'UC-9cac93e8-39b1-4a02-b9a2-ddcd91a9b274',
      link: 'https://www.udemy.com/certificate/UC-9cac93e8-39b1-4a02-b9a2-ddcd91a9b274/',
      description: 'Learn to write cleaner, safer, and smarter code by mastering TypeScript from syntax to React integration.'

    },
    {
      title: 'Node JS: Advanced Concepts',
      issuer: 'Udemy',
      date: 'March 22, 2025',
      credentialId: 'UC-e002fee5-1272-478b-a449-61676461d98d',
      link: 'https://www.udemy.com/certificate/UC-e002fee5-1272-478b-a449-61676461d98d/',
      description: 'Engineer blazing-fast Node.js apps through event loop mastery, Redis caching, and cloud-powered scalability with AWS S3.'
    },
    
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="certifications"
      className="py-20 bg-gray-50/80 backdrop-blur-sm relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgba(var(--bg-dark-alt), 0.8)`
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Continuous learning keeps Hadeeqa Imran ahead of the curve&mdash;here are select certifications validating her expertise in AI, Next.js, TypeScript, and modern Node.js practices.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px rgba(var(--particle-rgb), 0.15)`,
                transition: { duration: 0.3 },
              }}
              className="bg-white p-6 rounded-lg hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              style={{
                backgroundColor: theme === 'dark'
                  ? `rgb(var(--card-bg))`
                  : undefined,
              }}
            >
              {/* Decorative corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 opacity-10"
                style={{
                  background: 'var(--color-primary)',
                  clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
                }}
              ></motion.div>

              {/* Award Icon */}
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                style={{
                  backgroundColor: theme === 'dark'
                    ? `rgba(var(--particle-rgb), 0.1)`
                    : 'rgba(var(--particle-rgb), 0.1)',
                  color: 'var(--color-primary)',
                }}
              >
                <Award size={24} />
              </motion.div>

              {/* Certification Title */}
              <h3
                className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300"
                onMouseEnter={(e) => {
                  const parent = e.target.closest('.group')
                  if (parent) e.target.style.color = 'var(--color-primary-hover)'
                }}
                onMouseLeave={(e) => (e.target.style.color = '')}
              >
                {cert.title}
              </h3>

              {/* Issuer */}
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-3">
                {cert.issuer}
              </p>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {cert.description}
              </p>

              {/* Date & Credential */}
              <div className="flex-col items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
                <div className="text-xs">
                  ID: {cert.credentialId}
                </div>
              </div>

              {/* View Credential Link */}
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: 'var(--color-primary)' }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = 'var(--color-primary-hover)')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = 'var(--color-primary)')
                }
              >
                View Credential
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
