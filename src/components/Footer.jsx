import { motion } from 'framer-motion'
import { Github, Heart, Linkedin, Mail } from 'lucide-react'
import UpworkIcon from './UpworkIcon'

const socialLinks = [
  { href: 'https://github.com/HadeeqaImran', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/hadeeqa-imran', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.upwork.com/freelancers/~01a82d848618e8d06c', label: 'Upwork', Icon: UpworkIcon },
  { href: 'mailto:hadeeqaimran786@gmail.com', label: 'Email', Icon: Mail },
]

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t py-12" style={{ background: 'var(--surface-muted)', borderColor: 'var(--border-soft)' }}>
      <div className="container-shell">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <a href="#home" className="text-2xl font-black text-gradient">
              Hadeeqa Imran
            </a>
            <p className="mt-3 max-w-md text-sm font-semibold leading-6 text-slate-500 dark:text-slate-400">
              Full-stack engineer building mobile, web, and AI-powered products. From architecture to release.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.06 }}
          >
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-slate-500 transition duration-200 hover:text-[var(--color-primary)] dark:text-slate-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12 }}
          >
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-slate-700 dark:text-slate-200">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="icon-button"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 border-t pt-6 sm:flex-row sm:justify-between" style={{ borderColor: 'var(--border-soft)' }}>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
            &copy; {currentYear} Hadeeqa Imran. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500">
            Built with <Heart size={13} className="text-red-400" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
