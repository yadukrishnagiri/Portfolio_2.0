import React, { useState, useEffect } from 'react'
import './Navigation.css'

function Navigation({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'hero', label: 'HOME', icon: '🎬' },
    { id: 'about', label: 'ABOUT', icon: '⚽' },
    { id: 'projects', label: 'PROJECTS', icon: '🎮' },
    { id: 'contact', label: 'CONTACT', icon: '📧' }
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (sectionId) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`cinema-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo" onClick={() => handleNavClick('hero')}>
          <span className="logo-text">CINEMA</span>
          <span className="logo-accent">REDUX</span>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              <div className="nav-glow"></div>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => handleNavClick(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </div>

      {/* Navigation Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="nav-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  )
}

export default Navigation 