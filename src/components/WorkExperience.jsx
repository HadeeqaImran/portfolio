import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, Linkedin, Twitter, Globe, ChevronDown, Award } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const WorkExperience = () => {
  const { theme } = useTheme()
  const [expandedCard, setExpandedCard] = useState(0)

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'PixelPK Technologies',
      location: 'Lahore, Pakistan',
      period: 'May, 2025 - Present',
      description: 'Building AITube, a next-gen video streaming platform for AI-generated videos, from the ground up.',
      technologies: ['React Native', 'TypeScript', 'AWS', 'Docker', 'Redis', 'CI/CD', 'REST APIs'],
      achievements: [
        'Solely engineered a high-performance mobile app optimized for smooth video playback and AI-driven content delivery.',
        'Integrated secure authentication, push notifications, stripe and in-app purchases, CI/CD pipeline, and real-time data updates for a seamless user experience.',
        'Collaborated with backend and design teams to launch the app on App Store and Google Play Store, ensuring scalability and maintainability.'
      ],
      socials: {
        website: 'https://pixelpk.com',
        linkedin: 'https://linkedin.com/company/pixelpk',
      }
    },
    {
      title: 'Software Engineer',
      company: 'Dubizzle Labs',
      location: 'Lahore, Pakistan',
      period: 'May 2024 - May 2025',
      description: 'Developed and maintained multiple client-facing applications, focusing on performance optimization and user experience.',
      technologies: ['React Native', 'AWS', 'CI/CD', 'REST APIs'],
      achievements: [
        'Built and optimized a high-performance cross-platform CRM in React Native, enhanced UI/UX, improved responsiveness, and integrated push notifications, CI/CD pipeline, codepush and REST APIs.',
        'Refactored components for clean code, better performance and scalability.'
      ],
      socials: {
        website: 'https://dubizzlelabs.com',
        linkedin: 'https://linkedin.com/company/dubizzlelabs',
      }
    },
    {
      title: 'MERN Stack Developer',
      company: 'PixelPK Technologies',
      location: 'Lahore, Pakistan',
      period: 'December, 2022 - May, 2024',
      description: 'Contributed to various web development projects, learning modern frameworks and best practices in agile environment.',
      technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS', 'Docker'],
      achievements: [
        'Built scalable MERN stack web apps with seamless frontend-backend integration',
        'Developed RESTful APIs using Node.js and Express',
        'Refactored code for performance, and maintainability while aligning with business needs'
      ],
      socials: {
        website: 'https://pixelpk.com',
        linkedin: 'https://linkedin.com/company/pixelpk',
      }
    },
    {
      title: 'Software Engineering Intern',
      company: 'Enxsys',
      location: 'Lahore, Pakistan',
      period: 'June, 2022 - November, 2022',
      description: 'Worked on an industry-level AI and web development project using React.js, Python, Django, and OpenAI, focusing on performance, scalability, and intelligent automation.',
      technologies: ['Python', 'Django', 'JavaScript', 'React', 'Git', 'REST APIs'],
      achievements: [
        'Developed and optimized a Siamese Graph Neural Network (GNN) for advanced pattern and change detection.',
        'Improved frontend performance and user experience through responsive design and efficient state management in React.'
      ],
      socials: {
        website: 'https://enxsys.com',
        linkedin: 'https://linkedin.com/company/enxsys',
      }
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const achievementVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        height: { duration: 0.4 },
        opacity: { duration: 0.2 },
      },
    },
  }

  return (
    <section
      id="experience"
      className="py-20 relative transition-colors duration-300"
      style={{
        backgroundColor: theme === 'dark'
          ? `rgba(var(--bg-dark-alt), 0.8)`
          : 'rgba(255, 255, 255, 0.6)',
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
            Work Experience
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-primary mx-auto"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A closer look at the product launches and engineering impact Hadeeqa Imran has made across venture-backed startups and enterprise teams.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-5xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div
                  className="absolute left-[15px] top-[40px] w-[2px] h-[calc(100%-40px)] transition-colors duration-300"
                  style={{
                    background: theme === 'dark'
                      ? 'linear-gradient(180deg, var(--color-primary) 0%, rgba(var(--particle-rgb), 0.3) 100%)'
                      : 'linear-gradient(180deg, var(--color-primary) 0%, rgba(var(--particle-rgb), 0.2) 100%)',
                  }}
                />
              )}

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-0 top-0 w-[32px] h-[32px] rounded-full border-4 flex items-center justify-center transition-colors duration-300"
                style={{
                  backgroundColor: theme === 'dark'
                    ? `rgb(var(--bg-dark))`
                    : 'white',
                  borderColor: 'var(--color-primary)',
                }}
              >
                <Briefcase
                  size={16}
                  style={{ color: 'var(--color-primary)' }}
                />
              </motion.div>

              {/* Content card */}
              <motion.div
                initial={false}
                animate={{
                  scale: expandedCard === index ? 1.02 : 1,
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className="ml-6 rounded-xl shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-300 cursor-pointer border"
                style={{
                  backgroundColor: theme === 'dark'
                    ? `rgba(var(--card-bg), 0.95)`
                    : 'rgba(255, 255, 255, 0.95)',
                  borderColor: expandedCard === index
                    ? 'var(--color-primary)'
                    : theme === 'dark'
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(0, 0, 0, 0.1)',
                  boxShadow: expandedCard === index
                    ? `0 20px 60px rgba(var(--particle-rgb), 0.1), 0 0 0 2px var(--color-primary)`
                    : `0 10px 30px rgba(0, 0, 0, ${theme === 'dark' ? '0.5' : '0.1'})`,
                }}
                onClick={() => setExpandedCard(expandedCard === index ? -1 : index)}
              >
                {/* Gradient overlay bar */}
                <motion.div
                  className="h-1.5 w-full"
                  style={{
                    background: `linear-gradient(90deg, var(--color-primary), var(--color-accent))`,
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />

                <div className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <motion.h3
                          className="text-2xl font-bold mb-2 transition-colors duration-300"
                          // style={{ color: 'var(--color-primary)' }}
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          {experience.title}
                        </motion.h3>
                        <div className="flex items-center gap-3 mb-3 flex-wrap">
                          <div className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                            {experience.company}
                          </div>

                          {/* Social Links */}
                          {experience.socials && (
                            <div className="flex items-center gap-1.5">
                              {experience.socials.website && (
                                <motion.a
                                  href={experience.socials.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.15, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-2 rounded-lg transition-all duration-300"
                                  style={{
                                    color: 'var(--color-primary)',
                                    backgroundColor: theme === 'dark'
                                      ? 'rgba(var(--particle-rgb), 0.1)'
                                      : 'rgba(var(--particle-rgb), 0.05)',
                                  }}
                                  aria-label="Company website"
                                >
                                  <Globe size={16} />
                                </motion.a>
                              )}
                              {experience.socials.linkedin && (
                                <motion.a
                                  href={experience.socials.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.15, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-2 rounded-lg transition-all duration-300"
                                  style={{
                                    color: 'var(--color-primary)',
                                    backgroundColor: theme === 'dark'
                                      ? 'rgba(var(--particle-rgb), 0.1)'
                                      : 'rgba(var(--particle-rgb), 0.05)',
                                  }}
                                  aria-label="Company LinkedIn"
                                >
                                  <Linkedin size={16} />
                                </motion.a>
                              )}
                              {experience.socials.twitter && (
                                <motion.a
                                  href={experience.socials.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  whileHover={{ scale: 1.15, rotate: 5 }}
                                  whileTap={{ scale: 0.9 }}
                                  onClick={(e) => e.stopPropagation()}
                                  className="p-2 rounded-lg transition-all duration-300"
                                  style={{
                                    color: 'var(--color-primary)',
                                    backgroundColor: theme === 'dark'
                                      ? 'rgba(var(--particle-rgb), 0.1)'
                                      : 'rgba(var(--particle-rgb), 0.05)',
                                  }}
                                  aria-label="Company Twitter"
                                >
                                  <Twitter size={16} />
                                </motion.a>
                              )}
                            </div>
                          )}
                        </div>

                        {/* Meta information */}
                        <div className="flex flex-wrap gap-4 text-sm">
                          <motion.div
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors duration-300"
                            style={{
                              backgroundColor: theme === 'dark'
                                ? 'rgba(var(--particle-rgb), 0.15)'
                                : 'rgba(var(--particle-rgb), 0.1)',
                              color: 'var(--color-primary)',
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar size={14} />
                            <span className="font-medium">{experience.period}</span>
                          </motion.div>
                          <motion.div
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-gray-600 dark:text-gray-400 transition-colors duration-300"
                            style={{
                              backgroundColor: theme === 'dark'
                                ? 'rgba(255, 255, 255, 0.05)'
                                : 'rgba(0, 0, 0, 0.05)',
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            <MapPin size={14} />
                            <span className="font-medium">{experience.location}</span>
                          </motion.div>
                        </div>
                      </div>

                      {/* Expand/Collapse button */}
                      <motion.div
                        animate={{ rotate: expandedCard === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 rounded-full"
                        style={{
                          backgroundColor: theme === 'dark'
                            ? 'rgba(var(--particle-rgb), 0.1)'
                            : 'rgba(var(--particle-rgb), 0.1)',
                          color: 'var(--color-primary)',
                        }}
                      >
                        <ChevronDown size={24} />
                      </motion.div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  {experience.technologies && experience.technologies.length > 0 && (
                    <div className="mb-4">
                      {/* <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                        Technologies Used:
                      </h4> */}
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                            whileHover={{
                              scale: 1.1,
                              y: -2,
                              transition: { duration: 0.2 },
                            }}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-default"
                            style={{
                              backgroundColor: theme === 'dark'
                                ? `rgb(var(--bg-dark))`
                                : 'rgba(var(--particle-rgb), 0.1)',
                              color: 'var(--color-primary)',
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements - Expandable */}
                  <AnimatePresence initial={false}>
                    {expandedCard === index && (
                      <motion.div
                        key="achievements"
                        variants={achievementVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-2 mb-4">
                            <Award
                              size={20}
                              style={{ color: 'var(--color-primary)' }}
                            />
                            <h4 className="font-bold text-gray-800 dark:text-gray-200">
                              Key Achievements
                            </h4>
                          </div>
                          <ul className="space-y-3">
                            {experience.achievements.map((achievement, achIndex) => (
                              <motion.li
                                key={achIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: achIndex * 0.1 }}
                                className="flex items-start gap-3 group"
                              >
                                <motion.div
                                  className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0"
                                  style={{ backgroundColor: 'var(--color-primary)' }}
                                  whileHover={{ scale: 1.5 }}
                                  transition={{ duration: 0.2 }}
                                />
                                <span className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                  {achievement}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Tap to expand hint */}
                  {expandedCard !== index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700 text-center"
                    >
                      <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                        Click to view achievements
                      </span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperience
