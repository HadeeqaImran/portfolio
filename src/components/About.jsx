import React from 'react'
import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const About = () => {
  const { theme } = useTheme()
  const features = [
    {
      icon: <Code size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my priority.',
    },
    {
      icon: <Palette size={32} />,
      title: 'Beautiful Design',
      description: 'Creating visually appealing interfaces with great user experience.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Fast Performance',
      description: 'Optimizing applications for speed and performance.',
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section 
      id="about" 
      className="py-20 bg-white/80 backdrop-blur-sm relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgba(var(--bg-dark), 0.8)`
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
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
          className="max-w-3xl mx-auto mb-16"
        >
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I'm a passionate full-stack developer with a love for creating elegant solutions
            to complex problems. With expertise in modern web technologies, I specialize in
            building responsive, user-friendly applications that make a difference.
          </motion.p>
          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies, contributing to
            open-source projects, or sharing knowledge with the developer community.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                boxShadow: `0 20px 40px rgba(var(--particle-rgb), 0.15)`,
                transition: { duration: 0.3 },
              }}
              className="bg-gray-100 p-8 rounded-lg hover:shadow-lg transition-all duration-300 group"
              style={{
                backgroundColor: theme === 'dark'
                  ? `rgb(var(--card-bg))`
                  : undefined,
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="mb-4 inline-block"
                style={{ color: 'var(--color-primary)' }}
              >
                {feature.icon}
              </motion.div>
              <h3 
                className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300"
                onMouseEnter={(e) => {
                  const parent = e.target.closest('.group')
                  if (parent) e.target.style.color = 'var(--color-primary-hover)'
                }}
                onMouseLeave={(e) => e.target.style.color = ''}
              >
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About

