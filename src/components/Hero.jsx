import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Briefcase } from 'lucide-react'
import ColorSlider from './ColorSlider'
import UpworkIcon from './UpworkIcon'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="text-gradient inline-block hover:scale-110 transition-transform duration-300 cursor-default">
              Your Name
            </span>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          >
            <span 
              className="inline-block transition-colors duration-300 cursor-default"
              onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-hover)'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >Full Stack Developer</span>
            {' | '}
            <span 
              className="inline-block transition-colors duration-300 cursor-default"
              onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-hover)'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >Designer</span>
            {' | '}
            <span 
              className="inline-block transition-colors duration-300 cursor-default"
              onMouseEnter={(e) => e.target.style.color = 'var(--color-primary-hover)'}
              onMouseLeave={(e) => e.target.style.color = ''}
            >Problem Solver</span>
          </motion.p>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            I build beautiful, functional, and user-friendly web applications.
            Passionate about creating seamless digital experiences.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: '0 20px 40px rgba(var(--particle-rgb), 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-xl font-semibold text-white overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
              }}
            >
              <motion.span
                className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              />
              <span className="relative flex items-center gap-2">
                <Sparkles size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.1))`,
                }}
              />
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{
                scale: 1.08,
                y: -3,
                boxShadow: '0 20px 40px rgba(var(--particle-rgb), 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 rounded-xl font-semibold overflow-hidden group border-2 transition-all duration-300"
              style={{
                borderColor: 'var(--color-primary)',
                color: 'var(--color-primary)',
              }}
            >
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                }}
              />
              <span className="relative flex items-center gap-2 group-hover:text-white transition-colors duration-300">
                <Briefcase size={20} className="group-hover:-rotate-12 transition-transform duration-300" />
                View Work
              </span>
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {[
              { href: 'https://github.com/HadeeqaImran', Icon: Github },
              { href: 'https://www.linkedin.com/in/hadeeqa-imran', Icon: Linkedin },
              { href: 'https://www.upwork.com/freelancers/~01a82d848618e8d06c', Icon: UpworkIcon },
              { href: 'mailto:hadeeqaimran786@gmail.com', Icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <social.Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            className="text-gray-400 dark:text-gray-500 transition-colors duration-200"
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-primary-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = ''}
          >
            <ArrowDown size={32} />
          </a>
        </motion.div>
        
        {/* Color Palette Slider */}
        <div className="absolute bottom-8 right-3 sm:right-6 lg:right-8">
          <ColorSlider />
        </div>
      </div>
    </section>
  )
}

export default Hero

