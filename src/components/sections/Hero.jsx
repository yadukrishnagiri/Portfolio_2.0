import React, { useEffect, useRef } from 'react'
import './Hero.css'

function Hero({ onNavigate }) {
  const heroRef = useRef()

  useEffect(() => {
    // Add entrance animation
    if (heroRef.current) {
      heroRef.current.style.opacity = '0'
      heroRef.current.style.transform = 'translateY(50px)'
      
      setTimeout(() => {
        heroRef.current.style.transition = 'all 1s ease-out'
        heroRef.current.style.opacity = '1'
        heroRef.current.style.transform = 'translateY(0)'
      }, 500)
    }
  }, [])

  return (
    <div className="hero-container" ref={heroRef}>
      <div className="container">
        <div className="hero-content">
          {/* Main Title */}
          <div className="hero-title">
            <h1 className="title-line-1">WELCOME TO THE</h1>
            <h1 className="title-line-2 glow-text">CINEMA REDUX</h1>
            <h2 className="subtitle">Interactive Portfolio Experience</h2>
          </div>

          {/* Description */}
          <div className="hero-description">
            <p className="hero-text">
              Welcome to the digital realm of <span className="highlight">Yadu Krishna Giri</span>, 
              where <span className="highlight">Data Science</span> meets 
              <span className="highlight">Artificial Intelligence</span> and 
              <span className="highlight">Innovation</span>. 
              Explore my journey through interactive 3D environments showcasing cutting-edge AI solutions.
            </p>
          </div>

          {/* Call to Action Buttons */}
          <div className="hero-actions">
            <button 
              className="btn btn-primary hero-btn"
              onClick={() => onNavigate('about')}
            >
              <span>🎬</span>
              Start The Experience
            </button>
            <button 
              className="btn btn-secondary hero-btn"
              onClick={() => onNavigate('projects')}
            >
              <span>🚀</span>
              View Projects
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="scroll-indicator">
            <div className="scroll-arrow">
              <span>↓</span>
            </div>
            <p className="scroll-text">Scroll to explore</p>
          </div>
        </div>

        {/* Hero Stats */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">8.0</span>
            <span className="stat-label">CGPA Achievement</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">AI</span>
            <span className="stat-label">Specialization</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">∞</span>
            <span className="stat-label">Innovation Drive</span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hero-decorations">
        <div className="floating-element element-1">⚽</div>
        <div className="floating-element element-2">🎮</div>
        <div className="floating-element element-3">🤖</div>
        <div className="floating-element element-4">🎬</div>
      </div>
    </div>
  )
}

export default Hero 