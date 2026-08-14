import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Box,
  Cloud,
  Code2,
  Database,
  Layers,
  Palette,
  Server,
  Terminal,
  TestTube,
  Wrench,
  Workflow,
} from 'lucide-react'

const skillCategories = [
  {
    category: 'Frontend',
    icon: Code2,
    summary: 'Mobile and web interfaces with production-grade polish.',
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
    summary: 'APIs, data models, and services that support scale.',
    skills: [
      { name: 'Node.js', level: 9, icon: Server },
      { name: 'Express', level: 8.5, icon: Workflow },
      { name: 'Python', level: 8, icon: Terminal },
      { name: 'REST APIs', level: 9, icon: Layers },
      { name: 'MongoDB', level: 8, icon: Database },
      { name: 'PostgreSQL', level: 8, icon: Database },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: Wrench,
    summary: 'Release workflows, automation, and operational hygiene.',
    skills: [
      { name: 'Git', level: 9, icon: Workflow },
      { name: 'Docker', level: 7.5, icon: Box },
      { name: 'AWS', level: 7, icon: Cloud },
      { name: 'Vercel', level: 8.5, icon: Cloud },
      { name: 'CI/CD', level: 7.5, icon: Workflow },
      { name: 'Jest', level: 7.5, icon: TestTube },
    ],
  },
  {
    category: 'AI / Prompt Engineering',
    icon: Workflow,
    summary: 'Model integrations and business workflows built around AI.',
    skills: [
      { name: 'Frontier Model Integration', level: 8, icon: Code2 },
      { name: 'Prompt Engineering', level: 8, icon: Layers },
      { name: 'AI Microservices', level: 7.5, icon: Workflow },
      { name: 'Voice Models', level: 8, icon: Wrench },
      { name: 'AI Workflows', level: 7, icon: Code2 },
    ],
  },
]

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="section-shell">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <Code2 size={16} />
            Skills
          </span>
          <h2 className="section-title">The stack I use to take products from idea to shipped.</h2>
          <div className="accent-rule" />
        </motion.div>

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center"
          >
            {skillCategories.map((cat, index) => {
              const CatIcon = cat.icon
              const isActive = activeCategory === index
              return (
                <button
                  key={cat.category}
                  type="button"
                  onClick={() => setActiveCategory(index)}
                  className={`relative flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-bold transition duration-200 sm:px-5 ${
                    isActive ? 'text-white shadow-lg' : 'text-slate-600 dark:text-slate-300'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                          boxShadow: '0 12px 28px rgba(var(--particle-rgb), 0.3)',
                        }
                      : { background: 'var(--surface)', border: '1px solid var(--border-soft)' }
                  }
                >
                  <CatIcon size={16} />
                  {cat.category}
                </button>
              )
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <div className="surface-card-strong p-6 sm:p-8">
                <div className="mb-8 flex items-center gap-4">
                  {(() => {
                    const CategoryIcon = skillCategories[activeCategory].icon
                    return (
                      <span
                        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
                      >
                        <CategoryIcon size={28} />
                      </span>
                    )
                  })()}
                  <div>
                    <h3 className="text-2xl font-black text-slate-950 dark:text-white">{skillCategories[activeCategory].category}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{skillCategories[activeCategory].summary}</p>
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  {skillCategories[activeCategory].skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon

                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.06 }}
                        className="group"
                      >
                        <div className="mb-2 flex items-center justify-between gap-3">
                          <div className="flex min-w-0 items-center gap-3">
                            <span
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition duration-200 group-hover:scale-110"
                              style={{ background: 'rgba(var(--particle-rgb), 0.08)', color: 'var(--color-primary)' }}
                            >
                              <SkillIcon size={16} />
                            </span>
                            <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{skill.name}</span>
                          </div>
                          <span className="text-xs font-black" style={{ color: 'var(--color-primary)' }}>
                            {skill.level}/10
                          </span>
                        </div>
                        <div
                          className="h-2.5 overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800"
                          role="meter"
                          aria-label={`${skill.name} proficiency`}
                          aria-valuemin={0}
                          aria-valuemax={10}
                          aria-valuenow={skill.level}
                        >
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level * 10}%` }}
                            transition={{ duration: 0.75, delay: skillIndex * 0.06, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
                          />
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mx-auto mt-10 max-w-2xl text-center text-sm font-semibold leading-7 text-slate-500 dark:text-slate-400"
        >
          Always learning, but selective about what makes it into production.
        </motion.p>
      </div>
    </section>
  )
}

export default Skills
