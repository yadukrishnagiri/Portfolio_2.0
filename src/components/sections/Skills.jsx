import React, { useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const skillsRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="skills-container" ref={skillsRef}>
      <div className="container">
        <div className="skills-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Skills & Expertise</h2>
            <div className="section-subtitle">
              Core Technologies & Capabilities
            </div>
            <p className="section-description">
              Specialized in Data Science, AI, and Software Development with a focus on practical applications and innovative solutions.
            </p>
          </div>

          {/* Simple Skills Overview */}
          <div className="skills-overview">
            <div className="skill-highlight">
              <div className="skill-icon">🐍</div>
              <h3>Python & Data Science</h3>
              <p>Advanced proficiency in Python ecosystem including pandas, NumPy, scikit-learn</p>
            </div>
            
            <div className="skill-highlight">
              <div className="skill-icon">🤖</div>
              <h3>Machine Learning & AI</h3>
              <p>Deep learning, neural networks, NLP, and predictive modeling</p>
            </div>
            
            <div className="skill-highlight">
              <div className="skill-icon">📊</div>
              <h3>Data Visualization</h3>
              <p>Creating compelling visualizations with modern tools and frameworks</p>
            </div>

            <div className="skill-highlight">
              <div className="skill-icon">🌐</div>
              <h3>Full Stack Development</h3>
              <p>React, JavaScript, APIs, and modern web technologies</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="skills-cta">
            <p>Interested in my technical background?</p>
            <a href="#projects" className="cta-link">
              View My Projects <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="skills-background">
        <div className="floating-elements">
          <div className="float-element">⚡</div>
          <div className="float-element">🔥</div>
          <div className="float-element">💎</div>
          <div className="float-element">🚀</div>
        </div>
      </div>
    </div>
  )
}

export default Skills 