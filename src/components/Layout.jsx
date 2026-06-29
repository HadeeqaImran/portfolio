import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ParticlesBackground from './ParticlesBackground'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  const location = useLocation()
  const isProjectPage = location.pathname.startsWith('/project/')

  return (
    <div className="min-h-screen relative">
      <ParticlesBackground />
      <div className="relative z-10">
        <Navbar isProjectPage={isProjectPage} />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  )
}

export default Layout
