import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Who is Hadeeqa Imran?',
    answer:
      'Hadeeqa Imran is a Lahore-based full-stack software engineer and React Native specialist who builds end-to-end mobile and web products for startups and scale-ups.',
  },
  {
    question: 'Is Hadeeqa Imran the same as Hadiqa Imran?',
    answer:
      'Yes — some people spell my name Hadiqa Imran, but it refers to the same engineer. You can find my work here, on LinkedIn, GitHub, and Upwork under the name Hadeeqa Imran.',
  },
  {
    question: 'What services does Hadeeqa Imran provide?',
    answer:
      'I help teams plan, design, and ship performant React Native apps, MERN platforms, and cloud-backed APIs, handling everything from architecture to release.',
  },
  {
    question: 'How can I contact Hadeeqa Imran for a project?',
    answer:
      'Use the contact form above, email me at hadeeqaimran786@gmail.com, or book time via LinkedIn. I typically respond within 24 hours.',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section-shell section-muted">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.55 }}
          className="section-header"
        >
          <span className="section-eyebrow">
            <HelpCircle size={16} />
            FAQ
          </span>
          <h2 className="section-title">FAQs About Hadeeqa Imran</h2>
          <div className="accent-rule" />
          <p className="section-copy">
            Find quick answers to the questions people search most about Hadeeqa (or Hadiqa) Imran, her experience, and how to collaborate.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="surface-card-strong overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-base font-black text-slate-950 dark:text-white sm:text-lg">{faq.question}</h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="border-t px-5 pb-5 pt-4 sm:px-6 sm:pb-6" style={{ borderColor: 'var(--border-soft)' }}>
                        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
