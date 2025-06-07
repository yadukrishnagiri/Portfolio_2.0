import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

function Contact() {
  const contactRef = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You can integrate with your preferred form handling service
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="contact-container" ref={contactRef}>
      <div className="container">
        <div className="contact-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-subtitle">
              Let's Create Something Amazing Together
            </div>
            <p className="section-description">
              Ready to collaborate on innovative AI solutions or discuss exciting opportunities? 
              I'm always open to new challenges and meaningful conversations.
            </p>
          </div>

          {/* Main Contact Content */}
          <div className="contact-main">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-card">
                <h3>Connect With Me</h3>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">📧</div>
                    <div className="method-content">
                      <h4>Email</h4>
                      <a href="mailto:yadukrishnagiri@gmail.com" className="contact-link">
                        yadukrishnagiri@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">💼</div>
                    <div className="method-content">
                      <h4>LinkedIn</h4>
                      <a href="https://linkedin.com/in/yadukrishnagiri" className="contact-link" target="_blank" rel="noopener noreferrer">
                        linkedin.com/in/yadukrishnagiri
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">💻</div>
                    <div className="method-content">
                      <h4>GitHub</h4>
                      <a href="https://github.com/yadukrishnagiri" className="contact-link" target="_blank" rel="noopener noreferrer">
                        github.com/yadukrishnagiri
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">🎓</div>
                    <div className="method-content">
                      <h4>University</h4>
                      <p className="contact-text">SRM University Delhi-NCR</p>
                      <p className="contact-subtext">Computer Science (Data Science & AI)</p>
                    </div>
                  </div>
                </div>

                <div className="availability">
                  <h4>Current Status</h4>
                  <div className="status-indicator">
                    <div className="status-dot available"></div>
                    <span>Available for collaborations and opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-card">
                <h3>Send a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Tell me about your project, idea, or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">
                    <span>Send Message</span>
                    <div className="button-glow"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Quick Connect CTA */}
          <div className="quick-connect-cta">
            <h3>Ready to Connect?</h3>
            <p>Whether it's about AI innovation, collaboration opportunities, or just a chat about technology - I'd love to hear from you!</p>
            <div className="cta-buttons">
              <a href="mailto:yadukrishnagiri@gmail.com" className="cta-button primary">
                <span>💬</span>
                <span>Let's Talk</span>
              </a>
              <a href="https://linkedin.com/in/yadukrishnagiri" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
                <span>🔗</span>
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="contact-background">
        <div className="floating-elements">
          <div className="element">💼</div>
          <div className="element">🚀</div>
          <div className="element">🤝</div>
          <div className="element">💡</div>
          <div className="element">🎯</div>
        </div>
        
        <div className="connection-lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  )
}

export default Contact 