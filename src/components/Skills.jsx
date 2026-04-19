import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import {
  Code2,
  Server,
  Wrench,
  Layers,
  Database,
  Workflow,
  Palette,
  Terminal,
  Cloud,
  Box,
  Figma as FigmaIcon,
  TestTube,
  Code2Icon
} from 'lucide-react'

const Skills = () => {
  const { theme } = useTheme()
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    {
      category: 'Frontend',
      icon: Code2,
      skills: [
        { name: 'React Native', level: 9.5, icon: Layers },
        { name: 'React', level: 9.5, icon: Layers },
        { name: 'Next.js', level: 9, icon: Workflow },
        { name: 'TypeScript', level: 8.5, icon: Code2 },
        { name: 'Tailwind CSS', level: 9.5, icon: Palette },
        { name: 'Redux', level: 8, icon: Database },
        { name: 'HTML/CSS', level: 9.5, icon: Code2 },
      ],
    },
    {
      category: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 9, icon: Server },
        { name: 'Express', level: 8.5, icon: Workflow },
        { name: 'Python', level: 8, icon: Terminal },
        { name: 'REST APIs', level: 9, icon: Layers },
        // { name: 'GraphQL', level: 7.5, icon: Database },
        { name: 'MongoDB', level: 8, icon: Database },
        { name: 'PostgreSQL', level: 8, icon: Database },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 9, icon: Workflow },
        { name: 'Docker', level: 7.5, icon: Box },
        { name: 'AWS', level: 7, icon: Cloud },
        { name: 'Vercel', level: 8.5, icon: Cloud },
        // { name: 'Figma', level: 8, icon: FigmaIcon },
        { name: 'CI/CD', level: 7.5, icon: Workflow },
        { name: 'Jest', level: 7.5, icon: TestTube },
      ],
    },
    {
      category: 'AI / Prompt Engineering',
      icon: Wrench,
      skills: [
        { name: 'Frontier Model Integration', level: 8, icon: Code2 },
        { name: 'Prompt Engineering', level: 8, icon: Layers },
        { name: 'AI Microservice for Businesses', level: 7.5, icon: Workflow },
        { name: 'Voice Models Integration', level: 8, icon: Wrench },
        { name: 'AI Workflows for Businesses', level: 7, icon: Code2 },
      ],
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
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section
      id="skills"
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
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon
            return (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px rgba(var(--particle-rgb), 0.15)`,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-lg hover:shadow-lg transition-all duration-300 p-8 group"
                style={{
                  backgroundColor: theme === 'dark'
                    ? `rgb(var(--card-bg))`
                    : undefined,
                }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mr-3"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    <CategoryIcon size={32} />
                  </motion.div>
                  <h3
                    className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-300"
                    onMouseEnter={(e) => {
                      const parent = e.target.closest('.group')
                      if (parent) e.target.style.color = 'var(--color-primary-hover)'
                    }}
                    onMouseLeave={(e) => (e.target.style.color = '')}
                  >
                    {category.category}
                  </h3>
                </div>

                {/* Skills List */}
                <motion.div
                  variants={containerVariants}
                  className="space-y-6"
                >
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    const skillKey = `${categoryIndex}-${skillIndex}`
                    const isHovered = hoveredSkill === skillKey

                    return (
                      <motion.div
                        key={skillIndex}
                        variants={skillVariants}
                        onMouseEnter={() => setHoveredSkill(skillKey)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative"
                      >
                        {/* Skill Name and Percentage */}
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <motion.div
                              animate={{
                                rotate: isHovered ? 360 : 0,
                                scale: isHovered ? 1.2 : 1,
                              }}
                              transition={{ duration: 0.5 }}
                              style={{
                                color: isHovered
                                  ? 'var(--color-primary-hover)'
                                  : 'var(--color-primary)',
                              }}
                            >
                              <SkillIcon size={18} />
                            </motion.div>
                            <span
                              className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200"
                              style={{
                                color: isHovered
                                  ? 'var(--color-primary-hover)'
                                  : undefined,
                              }}
                            >
                              {skill.name}
                            </span>
                          </div>
                          <motion.span
                            animate={{
                              scale: isHovered ? 1.15 : 1,
                            }}
                            className="text-xs font-semibold text-gray-500 dark:text-gray-400"
                            style={{
                              color: isHovered
                                ? 'var(--color-primary-hover)'
                                : undefined,
                            }}
                          >
                            {skill.level}/10
                          </motion.span>
                        </div>

                        {/* Progress Bar */}
                        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(skill.level / 10) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: skillIndex * 0.1,
                              ease: 'easeOut',
                            }}
                            style={{
                              backgroundColor: isHovered
                                ? 'var(--color-primary-hover)'
                                : 'var(--color-primary)',
                            }}
                          >
                            {/* Shimmer Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{
                                x: ['-100%', '200%'],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                                ease: 'linear',
                              }}
                            />
                          </motion.div>

                          {/* Hover Indicator */}
                          <motion.div
                            className="absolute inset-y-0 left-0 rounded-full"
                            initial={{ width: 0 }}
                            animate={{
                              width: isHovered ? `${(skill.level / 10) * 100}%` : 0,
                              opacity: isHovered ? 0.3 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                            style={{
                              backgroundColor: 'var(--color-accent)',
                            }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p
            className="text-gray-600 dark:text-gray-400 transition-colors duration-300 cursor-default inline-block"
            onMouseEnter={(e) =>
              (e.target.style.color = 'var(--color-primary-hover)')
            }
            onMouseLeave={(e) => (e.target.style.color = '')}
          >
            Always learning and exploring new technologies
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
