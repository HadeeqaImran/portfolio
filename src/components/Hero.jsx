import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowDown, Briefcase, Github, Linkedin, Mail, Rocket, ShieldCheck } from 'lucide-react'
import ColorSlider from './ColorSlider'
import UpworkIcon from './UpworkIcon'
import saelaSyncImage from '../assets/saela-sync.png'
import aitubeImage from '../assets/aitube.png'
import lawbotImage from '../assets/pakistan-lawbot.png'

const socialLinks = [
  { href: 'https://github.com/HadeeqaImran', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/hadeeqa-imran', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://www.upwork.com/freelancers/~01a82d848618e8d06c', label: 'Upwork', Icon: UpworkIcon },
  { href: 'mailto:hadeeqaimran786@gmail.com', label: 'Email', Icon: Mail },
]

const featuredProducts = [
  {
    title: 'Saela Sync',
    type: 'AI health companion',
    image: saelaSyncImage,
  },
  {
    title: 'AITube',
    type: 'AI video platform',
    image: aitubeImage,
  },
  {
    title: 'Pakistan Lawbot',
    type: 'Legal AI assistant',
    image: lawbotImage,
  },
]

const stats = [
  { value: 4, suffix: '+', label: 'years shipping software' },
  { value: 7, suffix: '', label: 'featured products' },
  { value: 3.96, suffix: '', label: 'FAST-NU CGPA', decimals: 2 },
]

const roles = ['React Native', 'Next.js', 'MERN Stack', 'AI Integration', 'AWS Cloud']

const AnimatedCounter = ({ value, suffix = '', decimals = 0 }) => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    decimals > 0 ? latest.toFixed(decimals) : Math.round(latest),
  )
  const [display, setDisplay] = useState(decimals > 0 ? '0.00' : '0')

  useEffect(() => {
    const unsubscribe = rounded.on('change', (v) => setDisplay(v))
    return unsubscribe
  }, [rounded])

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: 'easeOut',
    })
    return controls.stop
  }, [count, value])

  return (
    <span>
      {display}
      {suffix}
    </span>
  )
}

const Typewriter = ({ words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    let timeout

    if (!isDeleting && currentText === word) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false)
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setCurrentText(
            isDeleting ? word.substring(0, currentText.length - 1) : word.substring(0, currentText.length + 1),
          )
        },
        isDeleting ? deletingSpeed : typingSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="text-gradient">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-0.5 inline-block w-[3px] align-middle"
        style={{ height: '1em', background: 'var(--color-primary)' }}
      />
    </span>
  )
}

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mx-auto max-w-5xl min-w-0 text-center"
        >
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3">
            <motion.span
              className="chip chip-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ShieldCheck size={15} />
              Gold Medalist @ FAST-NU
            </motion.span>
            <motion.span
              className="chip"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.45 }}
            >
              <Rocket size={15} />
              Building production mobile and web apps
            </motion.span>
          </div>

          <h1 className="text-balance break-words text-4xl font-black leading-[0.96] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            Hadeeqa Imran
          </h1>

          <p className="text-pretty mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
            Full-stack software engineer specializing in{' '}
            <Typewriter words={roles} />
          </p>

          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500 dark:text-slate-400">
            From architecture through release — polished products with real users.
          </p>

          <div className="mx-auto mt-9 flex w-full max-w-md flex-col items-center justify-center gap-3 sm:max-w-none sm:flex-row">
            <motion.a
              href="#contact"
              className="primary-action w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={19} />
              Work With Me
            </motion.a>
            <motion.a
              href="#projects"
              className="secondary-action w-full sm:w-auto"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Briefcase size={19} />
              View Selected Work
            </motion.a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            {socialLinks.map(({ href, label, Icon }, i) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="icon-button"
                aria-label={label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Icon size={21} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: 'easeOut' }}
          className="mx-auto mt-14 grid max-w-6xl min-w-0 gap-4 lg:grid-cols-[1.25fr_0.75fr]"
        >
          <div className="surface-card-strong min-w-0 overflow-hidden group">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3 sm:px-5" style={{ borderColor: 'var(--border-soft)' }}>
              <div className="min-w-0">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Selected Launch</p>
                <h2 className="mt-1 text-lg font-black text-slate-950 dark:text-white">Saela Sync</h2>
              </div>
              <span className="chip chip-accent">React Native + AI</span>
            </div>
            <div className="relative aspect-[16/8.4] overflow-hidden bg-slate-950">
              <img
                src={saelaSyncImage}
                alt="Saela Sync product screenshot"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/82 to-transparent p-5 text-left">
                <p className="max-w-2xl text-sm font-semibold leading-6 text-white/90">
                  AI-powered health guidance with real-time support, subscriptions, secure auth, and production mobile release workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="grid min-w-0 gap-4">
            <div className="surface-card-strong min-w-0 p-5">
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="min-w-0 text-center">
                    <div className="text-2xl font-black text-slate-950 dark:text-white">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                    </div>
                    <div className="mt-1 text-xs font-semibold leading-5 text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden min-w-0 grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-2">
              {featuredProducts.slice(1).map((product) => (
                <div key={product.title} className="surface-card min-w-0 overflow-hidden group">
                  <div className="aspect-[16/11] overflow-hidden bg-slate-900">
                    <img src={product.image} alt={`${product.title} product screenshot`} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-black text-slate-950 dark:text-white">{product.title}</h3>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{product.type}</p>
                  </div>
                </div>
              ))}
            </div>

            <ColorSlider />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-slate-500 transition hover:text-[var(--color-primary-hover)] dark:text-slate-400 md:block"
        aria-label="Scroll to about section"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="block"
        >
          <ArrowDown size={28} />
        </motion.span>
      </a>
    </section>
  )
}

export default Hero
