import React from 'react'
import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Certifications = () => {
  const { theme } = useTheme()

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'ABC123456',
      link: '#',
      description: 'Expertise in designing distributed systems on AWS'
    },
    {
      title: 'Meta Front-End Developer',
      issuer: 'Meta',
      date: '2023',
      credentialId: 'DEF789012',
      link: '#',
      description: 'Professional certificate in modern front-end development'
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GHI345678',
      link: '#',
      description: 'Cloud architecture and development on GCP'
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
              <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
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
