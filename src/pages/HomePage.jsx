import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Certifications from '../components/Certifications'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace('#', ''))
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }, [location.hash])

  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Certifications />
      <FAQ />
      <Contact />
    </>
  )
}

export default HomePage
