import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'HTML/CSS'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL', 'PostgreSQL'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma', 'Jest'],
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

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900 relative transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary-600 dark:bg-blue-500 mx-auto"
          ></motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(14, 165, 233, 0.15)',
                transition: { duration: 0.3 },
              }}
              className="bg-gray-50 dark:bg-slate-800 p-8 rounded-lg transition-colors duration-300"
            >
              <motion.h3
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center"
              >
                {category.category}
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-3 justify-center"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: '0 5px 15px rgba(14, 165, 233, 0.3)',
                      y: -5,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md hover:text-primary-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

