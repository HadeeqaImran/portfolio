import { motion } from 'framer-motion'
import { Code, GraduationCap, Palette, Trophy, Zap } from 'lucide-react'

const features = [
  {
    icon: Code,
    title: 'Clean Engineering',
    description: 'I favor maintainable architecture, clear ownership boundaries, and code that a team can keep evolving.',
  },
  {
    icon: Palette,
    title: 'Product Taste',
    description: 'I care about the small interface decisions that make complex workflows feel obvious and polished.',
  },
  {
    icon: Zap,
    title: 'Release Velocity',
    description: 'From CI/CD to store launches, I build with performance, QA, and iteration speed in mind.',
  },
]

const highlights = [
  { value: '4+', label: 'years of full-stack work' },
  { value: '3.96/4.0', label: 'CGPA, Summa cum Laude' },
  { value: 'AI + Mobile', label: 'current product focus' },
]

const About = () => {
  return (
    <section id="about" className="section-shell section-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <GraduationCap size={16} />
            About
          </span>
          <h2 className="section-title">A builder with product instincts and backend depth.</h2>
          <div className="accent-rule" />
          <p className="section-copy">
            I turn ambitious ideas into reliable software, from React Native interfaces to the APIs, cloud workflows, and AI integrations behind them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="mx-auto mb-8 max-w-4xl"
        >
          <div className="surface-card-strong p-5 sm:p-6">
            <div className="grid grid-cols-3 divide-x" style={{ borderColor: 'var(--border-soft)' }}>
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="px-4 text-center first:pl-0 last:pr-0"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ borderColor: 'var(--border-soft)' }}
                >
                  <div className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">{item.value}</div>
                  <p className="mt-2 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="surface-card-strong p-6 sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex flex-wrap gap-3">
              <motion.span
                className="chip chip-accent"
                whileHover={{ scale: 1.05 }}
              >
                <Trophy size={15} />
                Gold Medalist
              </motion.span>
              <span className="chip">FAST University</span>
              <span className="chip">Lahore, Pakistan</span>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I am a full-stack software engineer with over 4 years of experience building web and mobile applications for real users, real launches, and real business constraints.
              </p>
              <p>
                My strongest work sits at the intersection of React Native, Next.js, MERN architecture, and AI integration. I enjoy shaping the front-end experience and the backend systems that make it fast, secure, and scalable.
              </p>
              <p>
                I graduated from FAST University with a Gold Medal and Summa cum Laude distinction, earning a 3.96/4.0 CGPA. That academic rigor still shows up in how I debug, document, and ship.
              </p>
              <p>
                Outside delivery work, I keep exploring frontier models, cloud patterns, and developer workflows so the products I build stay current without chasing trends blindly.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="surface-card group p-5 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex gap-4">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition duration-200 group-hover:scale-110"
                      style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
                    >
                      <Icon size={22} />
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-slate-950 dark:text-white">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
