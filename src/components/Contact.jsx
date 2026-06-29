import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Download, Mail, MapPin, Phone, Send, Terminal, Zap } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hadeeqaimran786@gmail.com',
    href: 'mailto:hadeeqaimran786@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+92 334 4418107',
    href: 'tel:+923344418107',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Pakistan',
  },
]

const bootLines = [
  { text: '> contact.module loaded', type: 'system', delay: 120 },
  { text: '> project_brief intake ready', type: 'system', delay: 520 },
  { text: '> response window: usually within 24 hours', type: 'info', delay: 920 },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [consoleLines, setConsoleLines] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  useEffect(() => {
    const timers = bootLines.map(({ text, type, delay }) =>
      window.setTimeout(() => {
        setConsoleLines((prev) => [...prev, { text, type }])
      }, delay),
    )

    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [])

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    )
    return `mailto:hadeeqaimran786@gmail.com?subject=${subject}&body=${body}`
  }, [formData])

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitSuccess(false)
    setConsoleLines((prev) => [
      ...prev,
      { text: '> validating message payload', type: 'command' },
      { text: `> sender: ${formData.name || 'unknown'}`, type: 'info' },
      { text: '> opening secure email draft', type: 'info' },
    ])

    window.setTimeout(() => {
      window.location.href = mailtoHref
      setConsoleLines((prev) => [
        ...prev,
        { text: '> email draft opened successfully', type: 'success' },
        { text: '> ready for the next project brief', type: 'system' },
      ])
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ name: '', email: '', message: '' })
    }, 650)
  }

  const handleDownloadCV = () => {
    setConsoleLines((prev) => [
      ...prev,
      { text: '> downloadCV()', type: 'command' },
      { text: '> resume file located', type: 'info' },
      { text: '> download started', type: 'success' },
    ])

    const link = document.createElement('a')
    link.href = '/cv.pdf'
    link.download = 'Hadeeqa_Imran_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <Terminal size={16} />
            Contact
          </span>
          <h2 className="section-title">Have a product to build or improve?</h2>
          <div className="accent-rule" />
          <p className="section-copy">Send the brief, timeline, or problem statement. I will respond with the clearest next step.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55 }}
            className="space-y-4"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              const content = (
                <>
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition duration-200 group-hover:scale-110"
                    style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
                  >
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{info.label}</span>
                    <span className="mt-1 block break-words text-sm font-black text-slate-950 dark:text-white">{info.value}</span>
                  </span>
                </>
              )

              return info.href ? (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="surface-card group flex items-center gap-4 p-4 hover:-translate-y-1"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {content}
                </motion.a>
              ) : (
                <motion.div
                  key={info.label}
                  className="surface-card group flex items-center gap-4 p-4"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {content}
                </motion.div>
              )
            })}

            <motion.button
              type="button"
              onClick={handleDownloadCV}
              className="surface-card group flex w-full items-center gap-4 p-4 text-left transition hover:-translate-y-1"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition duration-200 group-hover:scale-110"
                style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
              >
                <Download size={22} />
              </span>
              <span>
                <span className="block text-sm font-black text-slate-950 dark:text-white">Download CV</span>
                <span className="mt-1 block text-xs font-semibold text-slate-500 dark:text-slate-400">Full resume as PDF</span>
              </span>
            </motion.button>

            <div className="surface-card-strong overflow-hidden">
              <div className="flex items-center gap-2 border-b px-4 py-3" style={{ borderColor: 'var(--border-soft)', background: 'rgba(15, 23, 42, 0.88)' }}>
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
                <span className="ml-2 text-xs font-bold text-slate-300">console</span>
              </div>
              <div className="h-56 overflow-y-auto bg-slate-950 p-4 font-mono text-xs leading-6" aria-live="polite">
                <AnimatePresence initial={false}>
                  {consoleLines.map((line, index) => (
                    <motion.div
                      key={`${line.text}-${index}`}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      style={{
                        color:
                          line.type === 'success'
                            ? '#34d399'
                            : line.type === 'command'
                              ? '#fbbf24'
                              : line.type === 'info'
                                ? '#67e8f9'
                                : '#cbd5e1',
                      }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                </AnimatePresence>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="mt-1 inline-block h-4 w-2"
                  style={{ background: 'var(--color-accent)' }}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55 }}
            className="surface-card-strong p-5 sm:p-8"
          >
            <div className="mb-7 flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-lg"
                style={{ background: 'rgba(var(--particle-rgb), 0.1)', color: 'var(--color-primary)' }}
              >
                <Zap size={22} />
              </span>
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Send a Message</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">Project briefs, product audits, and collaboration requests.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="input-field"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  placeholder="Tell me what you are building, where it is stuck, and what success looks like."
                  className="input-field resize-none"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="primary-action w-full disabled:cursor-not-allowed disabled:opacity-70"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitSuccess ? (
                  <>
                    <Check size={19} />
                    Draft Opened
                  </>
                ) : isSubmitting ? (
                  <>
                    <Terminal size={19} className="animate-spin" />
                    Preparing Draft
                  </>
                ) : (
                  <>
                    <Send size={19} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
