import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Award, Briefcase, Calendar, ChevronDown, Globe, Linkedin, MapPin } from 'lucide-react'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'PixelPK Technologies',
    location: 'Lahore, Pakistan',
    period: 'May 2025 - Present',
    description: 'Building AITube, a next-gen video streaming platform for AI-generated videos, from the ground up.',
    technologies: ['React Native', 'TypeScript', 'AWS', 'Docker', 'Redis', 'CI/CD', 'REST APIs'],
    achievements: [
      'Solely engineered a high-performance mobile app optimized for smooth video playback and AI-driven content delivery.',
      'Integrated secure authentication, push notifications, Stripe, in-app purchases, CI/CD, and real-time data updates.',
      'Collaborated with backend and design teams to launch on the App Store and Google Play Store with maintainable release workflows.',
    ],
    socials: {
      website: 'https://pixelpk.com',
      linkedin: 'https://linkedin.com/company/pixelpk',
    },
  },
  {
    title: 'Software Engineer',
    company: 'Dubizzle Labs',
    location: 'Lahore, Pakistan',
    period: 'May 2024 - May 2025',
    description: 'Developed and maintained multiple client-facing applications, focusing on performance optimization and user experience.',
    technologies: ['React Native', 'AWS', 'CI/CD', 'REST APIs'],
    achievements: [
      'Built and optimized a cross-platform CRM in React Native with improved responsiveness, push notifications, CodePush, and REST API integrations.',
      'Refactored components for cleaner code, stronger scalability, and better long-term maintenance.',
    ],
    socials: {
      website: 'https://dubizzlelabs.com',
      linkedin: 'https://linkedin.com/company/dubizzlelabs',
    },
  },
  {
    title: 'MERN Stack Developer',
    company: 'PixelPK Technologies',
    location: 'Lahore, Pakistan',
    period: 'December 2022 - May 2024',
    description: 'Contributed to web development projects in an agile environment, building modern frameworks and production habits.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'AWS', 'Docker'],
    achievements: [
      'Built scalable MERN applications with seamless frontend-backend integration.',
      'Developed RESTful APIs using Node.js and Express.',
      'Refactored code for performance and maintainability while aligning with business needs.',
    ],
    socials: {
      website: 'https://pixelpk.com',
      linkedin: 'https://linkedin.com/company/pixelpk',
    },
  },
  {
    title: 'Software Engineering Intern',
    company: 'Enxsys',
    location: 'Lahore, Pakistan',
    period: 'June 2022 - November 2022',
    description: 'Worked on an industry-level AI and web development project using React.js, Python, Django, and OpenAI.',
    technologies: ['Python', 'Django', 'JavaScript', 'React', 'Git', 'REST APIs'],
    achievements: [
      'Developed and optimized a Siamese Graph Neural Network for advanced pattern and change detection.',
      'Improved frontend performance and user experience through responsive design and efficient state management in React.',
    ],
    socials: {
      website: 'https://enxsys.com',
      linkedin: 'https://linkedin.com/company/enxsys',
    },
  },
]

const WorkExperience = () => {
  const [expandedCard, setExpandedCard] = useState(0)

  return (
    <section id="experience" className="section-shell">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <Briefcase size={16} />
            Experience
          </span>
          <h2 className="section-title">Product work across mobile, AI, and scalable web systems.</h2>
          <div className="accent-rule" />
        </motion.div>

        <div className="mx-auto max-w-5xl">
          {experiences.map((experience, index) => {
            const isExpanded = expandedCard === index

            return (
              <motion.article
                key={`${experience.company}-${experience.period}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="relative pb-7 pl-9 last:pb-0 sm:pl-12"
              >
                {index !== experiences.length - 1 ? (
                  <motion.span
                    className="absolute left-[15px] top-10 w-px sm:left-[19px]"
                    style={{ background: 'linear-gradient(180deg, var(--color-primary), rgba(var(--particle-rgb), 0.12))' }}
                    aria-hidden="true"
                    initial={{ height: 0 }}
                    whileInView={{ height: 'calc(100% - 2rem)' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  />
                ) : null}

                <motion.span
                  className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 bg-white dark:bg-slate-950 sm:h-10 sm:w-10"
                  style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}
                  aria-hidden="true"
                  whileHover={{ scale: 1.15 }}
                >
                  <Briefcase size={index === 0 ? 17 : 15} />
                </motion.span>

                <div className={`surface-card-strong overflow-hidden transition-shadow duration-300 ${isExpanded ? 'shadow-xl' : ''}`}>
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          {index === 0 ? (
                            <motion.span
                              className="chip chip-accent"
                              animate={{ boxShadow: ['0 0 0 0 rgba(var(--particle-rgb), 0)', '0 0 0 6px rgba(var(--particle-rgb), 0.15)', '0 0 0 0 rgba(var(--particle-rgb), 0)'] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              Current
                            </motion.span>
                          ) : null}
                          <span className="chip">{experience.title}</span>
                        </div>
                        <h3 className="mt-4 text-2xl font-black text-slate-950 dark:text-white">{experience.company}</h3>
                        <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">{experience.description}</p>
                      </div>

                      <div className="flex shrink-0 items-center gap-2">
                        {experience.socials.website ? (
                          <a href={experience.socials.website} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={`${experience.company} website`}>
                            <Globe size={18} />
                          </a>
                        ) : null}
                        {experience.socials.linkedin ? (
                          <a href={experience.socials.linkedin} target="_blank" rel="noopener noreferrer" className="icon-button" aria-label={`${experience.company} LinkedIn`}>
                            <Linkedin size={18} />
                          </a>
                        ) : null}
                        <button
                          type="button"
                          onClick={() => setExpandedCard(isExpanded ? -1 : index)}
                          className="icon-button"
                          aria-label={`${isExpanded ? 'Hide' : 'Show'} impact details for ${experience.company}`}
                          aria-expanded={isExpanded}
                        >
                          <motion.span animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                            <ChevronDown size={20} />
                          </motion.span>
                        </button>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2 text-sm">
                      <span className="chip">
                        <Calendar size={14} />
                        {experience.period}
                      </span>
                      <span className="chip">
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span key={tech} className="chip chip-accent">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded ? (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.28, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="mt-6 border-t pt-5" style={{ borderColor: 'var(--border-soft)' }}>
                            <div className="mb-4 flex items-center gap-2">
                              <Award size={19} style={{ color: 'var(--color-primary)' }} />
                              <h4 className="font-black text-slate-900 dark:text-white">Key impact</h4>
                            </div>
                            <ul className="grid gap-3">
                              {experience.achievements.map((achievement, i) => (
                                <motion.li
                                  key={achievement}
                                  initial={{ opacity: 0, x: -8 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.1 }}
                                  className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300"
                                >
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: 'var(--color-primary)' }} />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
