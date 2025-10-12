import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import UpworkIcon from './UpworkIcon'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  return (
    <footer 
      className="bg-white dark:bg-slate-900 text-gray-900 dark:text-white py-12 relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgb(var(--bg-dark))`
          : undefined,
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-gradient mb-2">Portfolio</h3>
            <p className="text-gray-600 dark:text-gray-400">Building digital experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
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
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-600 dark:text-gray-400 transition-colors duration-200"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                <social.Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
            Made with{' '}
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <Heart size={16} className="mx-2 text-red-500 fill-red-500" />
            </motion.span>{' '}
             2025 Hadeeqa Imran ©. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

