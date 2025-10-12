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
          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Hey there! I’m a Full-Stack Software Engineer with over 4 years of experience turning complex ideas into clean, elegant web and mobile applications, or as I like to call them, digital magic tricks.
          </motion.p>

          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I specialize in building scalable, high-performing solutions using React Native, Next.js, and the MERN stack, and I enjoy crafting both the pixel-perfect frontends you see and the powerful backends that make everything work seamlessly.
          </motion.p>

          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Along the way, I’ve picked up a strong toolkit, from AI integration and cloud setups to CI/CD pipelines and API development, all to make sure my code doesn’t just work, but works beautifully.
          </motion.p>

          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            I hold a Bachelor’s in Computer Science from FAST University, where I graduated with a Gold Medal and Summa cum Laude (3.96/4.0 CGPA). I’m constantly learning, experimenting, and exploring new technologies to stay ahead of the curve.
          </motion.p>

          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            When I’m not buried in code, you’ll probably find me exploring new tech trends, contributing to open-source, or helping fellow developers level up their skills.
          </motion.p>

          <motion.p variants={itemVariants} className="text-md text-gray-600 dark:text-gray-300 leading-relaxed">
            Let’s just say: if it involves creativity, code, and a good challenge, I’m in!
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
              className="bg-white p-8 rounded-lg hover:shadow-lg transition-all duration-300 group"
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

