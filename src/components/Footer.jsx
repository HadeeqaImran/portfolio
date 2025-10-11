import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12 relative transition-colors duration-300">
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
            <p className="text-gray-400 dark:text-gray-500">Building digital experiences</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6 mb-6 md:mb-0"
          >
            {[
              { href: 'https://github.com', Icon: Github },
              { href: 'https://linkedin.com', Icon: Linkedin },
              { href: 'mailto:your.email@example.com', Icon: Mail },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 dark:text-gray-500 hover:text-primary-400 dark:hover:text-blue-400 transition-colors duration-200"
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
          className="border-t border-gray-800 dark:border-slate-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400 dark:text-gray-500 flex items-center justify-center">
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
            © {currentYear}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

