import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Projects = () => {
  const { theme } = useTheme()
  const projects = [
    {
      title: 'AITube',
      description: 'A full-stack web application built with React and Node.js. Features include user authentication, real-time updates, and responsive design.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'AWS', 'Codemagic', 'In-App Purchases', 'Stripe', 'AI Video Generation'],
      // github: 'https://github.com',
      android: 'https://play.google.com/store/apps/details?id=com.aitube',
      ios: 'https://play.google.com/store/apps/details?id=com.aitube&hl=en',
      // note: "iOS app coming soon",
    },
    {
      title: 'Jarvis',
      description: 'An AI-powered multi-tenant CRM suite for in-house accountability and client lifecycle management for Bayut, Dubizzle and OLX.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux', 'AWS', 'Codemagic'],
      // github: 'https://github.com',
      // live: 'https://example.com',
      note: 'On private app and play store',
    },
    {
      title: 'Fit by Charo',
      description: 'A fitness and wellness platform offering personalized training programs, nutrition guidance, and coaching for women.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['MERN', 'Next.js', 'AWS', 'Firebase', 'Redux', 'Docker'],
      // github: 'https://github.com',
      // android: 'https://play.google.com',
      // ios: 'https://apps.apple.com',
      live: 'https://fitbycharro.com/',
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <section 
      id="projects" 
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 },
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group"
              style={{
                backgroundColor: theme === 'dark'
                  ? `rgb(var(--card-bg))`
                  : undefined,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-opacity-10 dark:bg-opacity-20 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex space-x-4"
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: 'var(--color-primary)' }}
                        className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:text-white transition-colors duration-200"
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: 'var(--color-primary)' }}
                        className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:text-white transition-colors duration-200"
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                    )}
                    {project.android && (
                      <motion.a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: 'var(--color-primary)' }}
                        className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:text-white transition-colors duration-200"
                      >
                        <Smartphone size={20} />
                      </motion.a>
                    )}
                    {project.ios && (
                      <motion.a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ backgroundColor: 'var(--color-primary)' }}
                        className="p-3 bg-white dark:bg-slate-800 dark:text-gray-300 rounded-full hover:text-white transition-colors duration-200"
                      >
                        <Smartphone size={20} />
                      </motion.a>
                    )}
                  </motion.div>
                </motion.div>
              </div>
              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300"
                  onMouseEnter={(e) => {
                    const parent = e.target.closest('.group')
                    if (parent) e.target.style.color = 'var(--color-primary-hover)'
                  }}
                  onMouseLeave={(e) => e.target.style.color = ''}
                >
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1 bg-gray-100 text-sm rounded-full cursor-default transition-colors duration-200"
                      style={{
                        color: 'var(--color-primary)',
                        backgroundColor: theme === 'dark' ? `rgb(var(--bg-dark))` : undefined
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div className="flex flex-wrap gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <Github size={20} className="mr-1" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <ExternalLink size={20} className="mr-1" />
                        Live
                      </a>
                    )}
                    {project.android && (
                      <a
                        href={project.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <Smartphone size={20} className="mr-1" />
                        Android
                      </a>
                    )}
                    {project.ios && (
                      <a
                        href={project.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 dark:text-gray-400 transition-colors duration-200"
                        onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                        onMouseLeave={(e) => e.currentTarget.style.color = ''}
                      >
                        <Smartphone size={20} className="mr-1" />
                        iOS
                      </a>
                    )}
                  </div>
                  {project.note && (
                    <div className="text-xs text-gray-500 dark:text-gray-400 italic ml-2">
                      {project.note}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

