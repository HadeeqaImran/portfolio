import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, Moon, Sparkles, Sun, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

const Navbar = ({ isProjectPage }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [activeSection, setActiveSection] = useState('home')
  const lastScrollYRef = useRef(0)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    let frameId = 0

    const updateNavbar = () => {
      const currentScrollY = window.scrollY
      setIsScrolled(currentScrollY > 18)
      setIsVisible(currentScrollY < 120 || currentScrollY < lastScrollYRef.current)
      lastScrollYRef.current = currentScrollY
    }

    const handleScroll = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(updateNavbar)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateNavbar()

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isProjectPage) return

    const sectionIds = navLinks.map((link) => link.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        }
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isProjectPage, location.pathname])

  useEffect(() => {
    if (!isVisible) {
      setIsMobileMenuOpen(false)
    }
  }, [isVisible])

  const getNavHref = (hash) => {
    if (isProjectPage) {
      return `/${hash}`
    }
    return hash
  }

  const scrollToSection = (e, hash) => {
    e.preventDefault()
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const navbarHeight = 80
      const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({ top, behavior: 'smooth' })
      window.history.pushState(null, '', hash)
    }
  }

  const NavLink = ({ link }) => {
    const isActive = !isProjectPage && activeSection === link.href.replace('#', '')

    if (isProjectPage) {
      return (
        <Link
          to={`/${link.href}`}
          className={`nav-link relative`}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <a
        href={link.href}
        onClick={(e) => scrollToSection(e, link.href)}
        className={`nav-link relative ${isActive ? 'text-[var(--color-primary)]' : ''}`}
      >
        {link.label}
        {isActive && (
          <motion.span
            layoutId="activeNav"
            className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full"
            style={{ background: 'var(--color-primary)' }}
            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
          />
        )}
      </a>
    )
  }

  const MobileNavLink = ({ link }) => {
    const isActive = !isProjectPage && activeSection === link.href.replace('#', '')

    if (isProjectPage) {
      return (
        <Link
          to={`/${link.href}`}
          className="nav-link text-center"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <a
        href={link.href}
        className={`nav-link text-center ${isActive ? 'text-[var(--color-primary)]' : ''}`}
        style={isActive ? { background: 'rgba(var(--particle-rgb), 0.09)' } : undefined}
        onClick={(e) => {
          scrollToSection(e, link.href)
          setIsMobileMenuOpen(false)
        }}
      >
        {link.label}
      </a>
    )
  }

  const logoLink = isProjectPage ? (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Hadeeqa Imran home">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white shadow-lg transition-transform duration-200 group-hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          boxShadow: '0 14px 32px rgba(var(--particle-rgb), 0.26)',
        }}
      >
        HI
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-black text-slate-950 dark:text-white sm:text-base">
          Hadeeqa Imran
        </span>
        <span className="hidden items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:flex">
          <Sparkles size={13} style={{ color: 'var(--color-primary)' }} />
          Full-stack engineer
        </span>
      </span>
    </Link>
  ) : (
    <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="group flex min-w-0 items-center gap-3" aria-label="Hadeeqa Imran home">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white shadow-lg transition-transform duration-200 group-hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
          boxShadow: '0 14px 32px rgba(var(--particle-rgb), 0.26)',
        }}
      >
        HI
      </span>
      <span className="min-w-0">
        <span className="block truncate text-sm font-black text-slate-950 dark:text-white sm:text-base">
          Hadeeqa Imran
        </span>
        <span className="hidden items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:flex">
          <Sparkles size={13} style={{ color: 'var(--color-primary)' }} />
          Full-stack engineer
        </span>
      </span>
    </a>
  )

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))',
        }}
      />

      <motion.nav
        initial={{ y: -96 }}
        animate={{ y: isVisible ? 0 : -96 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className="fixed inset-x-0 top-[3px] z-50 px-3 pt-3 sm:px-4"
        aria-label="Primary navigation"
      >
        <div
          className={`mx-auto max-w-7xl rounded-lg border px-3 transition duration-300 sm:px-4 ${
            isScrolled ? 'py-2 shadow-xl' : 'py-3'
          }`}
          style={{
            background: isScrolled ? 'var(--surface-strong)' : 'var(--surface)',
            borderColor: 'var(--border-soft)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="flex items-center justify-between gap-3">
            {logoLink}

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) => (
                <NavLink key={link.href} link={link} />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                type="button"
                onClick={toggleTheme}
                className="icon-button"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                whileTap={{ rotate: 180, scale: 0.85 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
              </motion.button>

              <button
                type="button"
                className="icon-button lg:hidden"
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen ? (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="grid grid-cols-2 gap-2 pb-2 pt-4 sm:grid-cols-4">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} link={link} />
                  ))}
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar
