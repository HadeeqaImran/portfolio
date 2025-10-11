import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
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
            className="flex justify-center space-x-4 mb-12"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(var(--particle-rgb), 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg bg-primary-hover transition-colors duration-200 font-medium"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(var(--particle-rgb), 0.2)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors duration-200 font-medium"
              style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
            >
              View Work
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

