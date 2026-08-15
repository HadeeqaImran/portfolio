import { motion } from 'framer-motion'
import { Award, Calendar, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'LLM Engineering: Master AI, Large Language Models & Agents',
    issuer: 'Udemy',
    date: 'June 10, 2025',
    credentialId: 'UC-eb664df9-b7ab-4348-abfb-3ba972ae504e',
    link: 'https://www.udemy.com/certificate/UC-eb664df9-b7ab-4348-abfb-3ba972ae504e/',
    description: 'Building intelligent agents, multi-modal tools, and high-performance AI systems from scratch.',
  },
  {
    title: "Next JS: The Complete Developer's Guide",
    issuer: 'Udemy',
    date: 'March 25, 2025',
    credentialId: 'UC-c63cce26-88a2-4b8f-9b41-ca4a8064be88',
    link: 'https://www.udemy.com/certificate/UC-c63cce26-88a2-4b8f-9b41-ca4a8064be88/',
    description: 'Crafting fast, secure, modern web experiences with Next.js and the latest React ecosystem.',
  },
  {
    title: 'Mastering TypeScript, 2024 Edition',
    issuer: 'Udemy',
    date: 'October 12, 2024',
    credentialId: 'UC-9cac93e8-39b1-4a02-b9a2-ddcd91a9b274',
    link: 'https://www.udemy.com/certificate/UC-9cac93e8-39b1-4a02-b9a2-ddcd91a9b274/',
    description: 'Writing cleaner, safer, smarter TypeScript from language fundamentals to React integration.',
  },
  {
    title: 'Node JS: Advanced Concepts',
    issuer: 'Udemy',
    date: 'March 22, 2025',
    credentialId: 'UC-e002fee5-1272-478b-a449-61676461d98d',
    link: 'https://www.udemy.com/certificate/UC-e002fee5-1272-478b-a449-61676461d98d/',
    description: 'Engineering high-performance Node.js applications with event loop mastery, Redis, and AWS patterns.',
  },
]

const Certifications = () => {
  return (
    <section id="certifications" className="section-shell section-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <Award size={16} />
            Certifications
          </span>
          <h2 className="section-title">Recent learning that sharpens the work I ship.</h2>
          <div className="accent-rule" />
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.credentialId}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="surface-card-strong group flex h-full flex-col overflow-hidden"
            >
              <div
                className="h-1.5 w-full"
                style={{ background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))' }}
              />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg transition duration-200 group-hover:scale-110"
                    style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
                  >
                    <Award size={24} />
                  </span>
                  <span className="chip">{cert.issuer}</span>
                </div>

                <h3 className="text-lg font-black leading-7 text-slate-950 dark:text-white">{cert.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{cert.description}</p>

                <div className="mt-5 space-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                  <p className="break-all">ID: {cert.credentialId}</p>
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-[40px] items-center gap-2 pt-6 text-sm font-black transition hover:gap-3"
                  style={{ color: 'var(--color-primary)' }}
                >
                  View Credential
                  <ExternalLink size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
