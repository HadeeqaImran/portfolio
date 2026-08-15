import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Github, Rocket, Smartphone } from 'lucide-react'
import projects from '../data/projects'

const filters = [
  { key: 'all', label: 'All Projects' },
  { key: 'ai', label: 'AI-Powered' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'web', label: 'Web' },
]

const getProjectLinks = (project) => [
  project.github ? { href: project.github, label: 'Code', Icon: Github } : null,
  project.live ? { href: project.live, label: 'Live', Icon: ExternalLink } : null,
  project.android ? { href: project.android, label: 'Android', Icon: Smartphone } : null,
  project.ios ? { href: project.ios, label: 'iOS', Icon: Smartphone } : null,
].filter(Boolean)

const ProjectLinks = ({ project }) => {
  const links = getProjectLinks(project)

  if (!links.length) return null

  return (
    <div className="flex flex-wrap gap-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={`${project.title}-${label}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[36px] items-center gap-2 rounded-lg border px-3 py-2 text-xs font-bold text-slate-700 transition hover:-translate-y-0.5 hover:text-[var(--color-primary-hover)] dark:text-slate-200"
          style={{ borderColor: 'var(--border-soft)', background: 'rgba(var(--particle-rgb), 0.06)' }}
          onClick={(e) => e.stopPropagation()}
        >
          <Icon size={15} />
          {label}
        </a>
      ))}
    </div>
  )
}

const ProjectCard = ({ project }) => (
  <motion.article
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.35 }}
    className="surface-card-strong flex h-full flex-col overflow-hidden group"
  >
    <Link to={`/project/${project.slug}`} className="block aspect-video overflow-hidden bg-slate-950">
      <img src={project.image} alt={`${project.title} screenshot`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" loading="lazy" />
    </Link>
    <div className="flex flex-1 flex-col p-5">
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="chip chip-accent">{project.category}</span>
      </div>
      <Link to={`/project/${project.slug}`}>
        <h3 className="text-xl font-black text-slate-950 transition hover:text-[var(--color-primary)] dark:text-white dark:hover:text-[var(--color-primary)]">{project.title}</h3>
      </Link>
      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 5).map((tag) => (
          <span key={tag} className="chip">
            {tag}
          </span>
        ))}
        {project.tags.length > 5 && (
          <span className="chip">+{project.tags.length - 5}</span>
        )}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 pt-6">
        <ProjectLinks project={project} />
        <Link
          to={`/project/${project.slug}`}
          className="inline-flex shrink-0 items-center gap-1.5 text-xs font-black transition hover:gap-2.5"
          style={{ color: 'var(--color-primary)' }}
        >
          Details
          <ArrowRight size={14} />
        </Link>
      </div>
      {project.note ? <p className="mt-3 text-xs font-semibold text-slate-500 dark:text-slate-400">{project.note}</p> : null}
    </div>
  </motion.article>
)

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [featuredProject, ...otherProjects] = projects
  const filteredProjects = activeFilter === 'all'
    ? otherProjects
    : otherProjects.filter((p) => p.filterCategory === activeFilter)

  const showFeatured = activeFilter === 'all' || featuredProject.filterCategory === activeFilter

  return (
    <section id="projects" className="section-shell section-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <Rocket size={16} />
            Projects
          </span>
          <h2 className="section-title">Selected products with real users, stores, and business workflows.</h2>
          <div className="accent-rule" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              className={`relative rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 ${
                activeFilter === filter.key
                  ? 'text-white'
                  : 'text-slate-600 hover:text-[var(--color-primary)] dark:text-slate-300'
              }`}
              style={
                activeFilter === filter.key
                  ? { background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }
                  : { background: 'var(--surface)', border: '1px solid var(--border-soft)' }
              }
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          {showFeatured && (
            <motion.article
              key="featured"
              layout
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="surface-card-strong mb-6 overflow-hidden group"
            >
              <div>
                <Link to={`/project/${featuredProject.slug}`} className="relative block aspect-video overflow-hidden bg-slate-950">
                  <img src={featuredProject.image} alt={`${featuredProject.title} screenshot`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]" loading="lazy" />
                  <div className="absolute left-4 top-4">
                    <span className="chip chip-accent bg-white/90">Featured</span>
                  </div>
                </Link>
                <div className="flex flex-col p-6 sm:p-8 lg:p-10">
                  <span className="chip chip-accent w-fit">{featuredProject.category}</span>
                  <Link to={`/project/${featuredProject.slug}`}>
                    <h3 className="mt-5 text-3xl font-black text-slate-950 transition hover:text-[var(--color-primary)] dark:text-white dark:hover:text-[var(--color-primary)]">{featuredProject.title}</h3>
                  </Link>
                  <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{featuredProject.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                    <ProjectLinks project={featuredProject} />
                    <Link
                      to={`/project/${featuredProject.slug}`}
                      className="inline-flex shrink-0 items-center gap-2 text-sm font-black transition hover:gap-3"
                      style={{ color: 'var(--color-primary)' }}
                    >
                      View Case Study
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>

        <motion.div layout className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && !showFeatured && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 text-center text-sm font-semibold text-slate-500 dark:text-slate-400"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  )
}

export default Projects
