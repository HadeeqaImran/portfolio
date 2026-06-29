import { useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Github,
  Layers,
  Lightbulb,
  Rocket,
  Smartphone,
  Wrench,
  Zap,
} from 'lucide-react'
import projects from '../data/projects'

const getProjectLinks = (project) =>
  [
    project.github ? { href: project.github, label: 'Source Code', Icon: Github } : null,
    project.live ? { href: project.live, label: 'Live Site', Icon: ExternalLink } : null,
    project.android ? { href: project.android, label: 'Google Play', Icon: Smartphone } : null,
    project.ios ? { href: project.ios, label: 'App Store', Icon: Smartphone } : null,
  ].filter(Boolean)

const ProjectPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const projectIndex = projects.findIndex((p) => p.slug === slug)
  const project = projects[projectIndex]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6">
        <h1 className="text-3xl font-black text-slate-950 dark:text-white">Project Not Found</h1>
        <Link to="/" className="primary-action">
          <ArrowLeft size={18} />
          Back to Portfolio
        </Link>
      </div>
    )
  }

  const links = getProjectLinks(project)
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to="/#projects"
              className="mb-6 inline-flex items-center gap-2 text-sm font-bold transition hover:gap-3"
              style={{ color: 'var(--color-primary)' }}
            >
              <ArrowLeft size={16} />
              Back to all projects
            </Link>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="chip chip-accent">{project.category}</span>
                <span className="chip">{project.role}</span>
                <span className="chip">{project.duration}</span>
              </div>

              <h1 className="text-4xl font-black text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                {project.overview}
              </p>

              {links.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {links.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="primary-action"
                    >
                      <Icon size={18} />
                      {label}
                    </a>
                  ))}
                </div>
              )}
              {project.note && (
                <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">{project.note}</p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="surface-card-strong overflow-hidden"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-shell section-muted py-14 sm:py-16">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex items-center gap-3"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
            >
              <Wrench size={20} />
            </span>
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">Tech Stack</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="chip chip-accent"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {project.architecture && (
            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {project.architecture.map((item, i) => (
                <motion.div
                  key={item.layer}
                  className="surface-card p-4"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{item.layer}</p>
                  <p className="mt-1.5 text-sm font-bold text-slate-800 dark:text-slate-200">{item.tech}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="section-shell py-14 sm:py-16">
        <div className="container-shell">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex items-center gap-3"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
            >
              <Zap size={20} />
            </span>
            <h2 className="text-2xl font-black text-slate-950 dark:text-white">Key Contributions</h2>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((highlight, i) => (
              <motion.div
                key={i}
                className="surface-card-strong flex gap-4 p-5"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.06 }}
              >
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black text-white"
                  style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="section-shell section-muted py-14 sm:py-16">
          <div className="container-shell">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="mb-8 flex items-center gap-3"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
              >
                <Lightbulb size={20} />
              </span>
              <h2 className="text-2xl font-black text-slate-950 dark:text-white">Challenges & Solutions</h2>
            </motion.div>

            <div className="grid gap-6">
              {project.challenges.map((challenge, i) => (
                <motion.div
                  key={i}
                  className="surface-card-strong overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="grid gap-0 lg:grid-cols-2">
                    <div className="border-b p-6 lg:border-b-0 lg:border-r" style={{ borderColor: 'var(--border-soft)' }}>
                      <div className="mb-3 flex items-center gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                          <span className="text-xs font-black text-red-600 dark:text-red-400">!</span>
                        </span>
                        <h3 className="text-sm font-black uppercase tracking-wider text-red-600 dark:text-red-400">Challenge</h3>
                      </div>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{challenge.problem}</p>
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2">
                        <span
                          className="flex h-7 w-7 items-center justify-center rounded-full"
                          style={{ background: 'rgba(var(--particle-rgb), 0.15)' }}
                        >
                          <Lightbulb size={14} style={{ color: 'var(--color-primary)' }} />
                        </span>
                        <h3 className="text-sm font-black uppercase tracking-wider" style={{ color: 'var(--color-primary)' }}>Solution</h3>
                      </div>
                      <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{challenge.solution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Navigation between projects */}
      <section className="border-t py-12" style={{ borderColor: 'var(--border-soft)' }}>
        <div className="container-shell">
          <div className="flex items-center justify-between gap-4">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.slug}`}
                className="group flex min-w-0 items-center gap-3 text-left"
              >
                <span className="icon-button shrink-0 transition group-hover:-translate-x-1">
                  <ArrowLeft size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Previous</span>
                  <span className="block truncate text-sm font-black text-slate-950 dark:text-white">{prevProject.title}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/#projects"
              className="icon-button shrink-0"
              aria-label="All projects"
            >
              <Layers size={18} />
            </Link>

            {nextProject ? (
              <Link
                to={`/project/${nextProject.slug}`}
                className="group flex min-w-0 items-center gap-3 text-right"
              >
                <span className="min-w-0">
                  <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">Next</span>
                  <span className="block truncate text-sm font-black text-slate-950 dark:text-white">{nextProject.title}</span>
                </span>
                <span className="icon-button shrink-0 transition group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectPage
