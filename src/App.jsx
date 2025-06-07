import React, { useState, useEffect, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Preload } from '@react-three/drei'
import Navigation from './components/Navigation'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Background3D from './components/3d/Background3D'
import LoadingScreen from './components/LoadingScreen'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showLensFlare, setShowLensFlare] = useState(false)

  useEffect(() => {
    // Simulate app loading time for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false)
      // Hide HTML loading screen
      const loadingScreen = document.getElementById('loading-screen')
      if (loadingScreen) {
        loadingScreen.classList.add('loading-hidden')
      }
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  // Enhanced scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollProgress(scrollPercent)

      // Trigger lens flare on certain scroll positions
      const shouldShowFlare = scrollPercent > 20 && scrollPercent < 80
      setShowLensFlare(shouldShowFlare)

      // Add section in-view classes for glow effects
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const isInView = rect.top < window.innerHeight * 0.7 && rect.bottom > window.innerHeight * 0.3
        if (isInView) {
          section.classList.add('in-view')
        } else {
          section.classList.remove('in-view')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Section navigation handler
  const navigateToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="app">
      {/* Scroll Progress Bar */}
      <div className="scroll-progress">
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Fixed 3D Background Canvas */}
      <div className="canvas-container fixed-canvas">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Suspense fallback={null}>
            <Background3D activeSection={activeSection} />
            <Preload all />
          </Suspense>
        </Canvas>
      </div>

      {/* Floating Particles */}
      <div className="scroll-particles">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`
            }}
          />
        ))}
      </div>

      {/* Cinema Lens Flare */}
      <div className={`lens-flare ${showLensFlare ? 'active' : ''}`}>
        <div className="flare-spot"></div>
        <div className="flare-spot"></div>
        <div className="flare-spot"></div>
      </div>

      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        onNavigate={navigateToSection} 
      />

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="hero" className="section hero-section">
          <Hero onNavigate={navigateToSection} />
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </main>

      {/* Cinema UI Elements */}
      <div className="cinema-ui">
        {/* Film Strip Decorations */}
        <div className="film-strip film-strip-left"></div>
        <div className="film-strip film-strip-right"></div>
        
        {/* Vintage Overlay Effects */}
        <div className="vintage-overlay"></div>
      </div>
    </div>
  )
}

export default App 