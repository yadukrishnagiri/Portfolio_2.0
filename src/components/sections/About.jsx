import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './About.css'

function About() {
  const aboutRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  // Network connections and tooltip functionality
  useEffect(() => {
    const createNetworkConnections = () => {
      const svg = document.querySelector('.network-connections')
      const hubCenter = document.querySelector('.hub-center')
      const allNodes = document.querySelectorAll('.tech-node:not(.hub-center)')
      
      if (!svg || !hubCenter || !allNodes.length) return

      // Clear existing connections
      svg.innerHTML = svg.innerHTML.split('</defs>')[0] + '</defs>'
      
      const hubRect = hubCenter.getBoundingClientRect()
      const svgRect = svg.getBoundingClientRect()
      
             const hubCenterX = (hubRect.left + hubRect.width / 2 - svgRect.left) / svgRect.width * 600
       const hubCenterY = (hubRect.top + hubRect.height / 2 - svgRect.top) / svgRect.height * 400

       allNodes.forEach((node, index) => {
         const nodeRect = node.getBoundingClientRect()
         const nodeX = (nodeRect.left + nodeRect.width / 2 - svgRect.left) / svgRect.width * 600
         const nodeY = (nodeRect.top + nodeRect.height / 2 - svgRect.top) / svgRect.height * 400

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
        line.setAttribute('x1', hubCenterX)
        line.setAttribute('y1', hubCenterY)
        line.setAttribute('x2', nodeX)
        line.setAttribute('y2', nodeY)
        line.setAttribute('stroke', 'url(#connectionGradient)')
        line.setAttribute('stroke-width', '2')
        line.setAttribute('opacity', '0.4')
        line.setAttribute('filter', 'url(#glow)')
        line.style.animation = 'connectionPulse 4s ease-in-out infinite'
        line.style.animationDelay = `${index * 0.1}s`

        svg.appendChild(line)
      })
    }

    // Tooltip functionality
    const handleTooltip = () => {
      const tooltip = document.getElementById('tech-tooltip')
      const techNodes = document.querySelectorAll('.tech-node')

      techNodes.forEach(node => {
        node.addEventListener('mouseenter', (e) => {
          const tooltipText = node.getAttribute('data-tooltip')
          if (tooltipText && tooltip) {
            tooltip.textContent = tooltipText
            tooltip.style.display = 'block'
            tooltip.style.opacity = '1'
          }
        })

        node.addEventListener('mousemove', (e) => {
          if (tooltip && tooltip.style.display === 'block') {
            tooltip.style.left = e.pageX + 15 + 'px'
            tooltip.style.top = e.pageY - 50 + 'px'
          }
        })

        node.addEventListener('mouseleave', () => {
          if (tooltip) {
            tooltip.style.display = 'none'
            tooltip.style.opacity = '0'
          }
        })
      })
    }

    // Create connections after nodes are rendered
    const timer = setTimeout(() => {
      createNetworkConnections()
      handleTooltip()
    }, 100)

    // Recreate connections on window resize
    const handleResize = () => {
      clearTimeout(timer)
      setTimeout(createNetworkConnections, 100)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="about-container" ref={aboutRef}>
      <div className="container">
        <div className="about-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle">
              Data Science & AI Professional
            </div>
          </div>

          {/* Main About Content */}
          <div className="about-main">
            <div className="about-text">
              <div className="intro-text">
                <h3>Hello! I'm Yadu Krishna Giri</h3>
                <p className="lead-paragraph">
                  A <span className="highlight">Data Science and AI professional</span> with a 
                  forward-thinking approach to innovation and impact. I bring critical analysis, 
                  adaptability, and clear communication to complex challenges in fast-paced environments.
                </p>
              </div>

              <div className="professional-summary">
                <h4>Professional Focus</h4>
                <p>
                  Recognized for delivering precise, actionable insights while continuously advancing 
                  technical and strategic expertise. My passion lies in transforming complex data 
                  into meaningful solutions that drive real-world impact.
                </p>
              </div>

              <div className="education-section">
                <h4>Education</h4>
                <div className="education-item">
                  <div className="degree-info">
                    <h5>Bachelor of Computer Science</h5>
                    <p className="university">SRM University Delhi-NCR</p>
                    <p className="specialization">
                      Specialization in <span className="highlight">Data Science and Artificial Intelligence</span>
                    </p>
                    <p className="achievement">CGPA: <span className="highlight">8.0</span></p>
                    <p className="timeline">Aug 2021 - Present</p>
                  </div>
                </div>
              </div>

              <div className="interests-section">
                <h4>Core Interests</h4>
                <div className="interests-grid">
                  <div className="interest-item">
                    <span className="interest-icon">🤖</span>
                    <span className="interest-label">Artificial Intelligence</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-icon">📊</span>
                    <span className="interest-label">Data Science</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-icon">⚽</span>
                    <span className="interest-label">Football</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-icon">🎬</span>
                    <span className="interest-label">Cinema</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-icon">💡</span>
                    <span className="interest-label">Innovation</span>
                  </div>
                  <div className="interest-item">
                    <span className="interest-icon">🔬</span>
                    <span className="interest-label">Research</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-visual">
              <div className="profile-placeholder cinema-border">
                <div className="profile-content">
                  <div className="data-visualization">
                    <div className="data-point"></div>
                    <div className="data-point"></div>
                    <div className="data-point"></div>
                    <div className="data-line"></div>
                    <div className="data-line"></div>
                  </div>
                  <p className="visual-label">Data Insights in Motion</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="skills-preview">
            <h4>Core Technologies</h4>
            
            {/* Category Headers */}
            <div className="tech-categories">
              <div className="category">
                <span className="category-icon">💻</span>
                <span>Languages</span>
              </div>
              <div className="category">
                <span className="category-icon">🎨</span>
                <span>Frontend</span>
              </div>
              <div className="category">
                <span className="category-icon">⚙️</span>
                <span>Backend</span>
              </div>
              <div className="category">
                <span className="category-icon">🤖</span>
                <span>AI/ML</span>
              </div>
              <div className="category">
                <span className="category-icon">🚀</span>
                <span>DevOps</span>
              </div>
              <div className="category">
                <span className="category-icon">🛠️</span>
                <span>Tools</span>
              </div>
            </div>

            <div className="tech-network">
              <svg className="network-connections" viewBox="0 0 600 400">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.6)" />
                    <stop offset="50%" stopColor="rgba(255, 215, 0, 0.4)" />
                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0.3)" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
              
              <div className="network-nodes">
                {/* Central Hub - Python */}
                <div className="tech-node hub-center" data-tooltip="Core programming language for AI/ML and backend development" data-id="python">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                  <span>Python</span>
                </div>
                
                {/* Inner Ring - Primary Technologies */}
                <div className="tech-node inner-ring languages" data-tooltip="Dynamic web programming and frontend interactivity" data-id="javascript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                  <span>JavaScript</span>
                </div>
                
                <div className="tech-node inner-ring frontend" data-tooltip="Modern React library for building user interfaces" data-id="react">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                  <span>React</span>
                </div>
                
                <div className="tech-node inner-ring backend" data-tooltip="Lightweight web framework for Python applications" data-id="flask">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" alt="Flask" />
                  <span>Flask</span>
                </div>
                
                <div className="tech-node inner-ring aiml" data-tooltip="Google's machine learning and deep learning framework" data-id="tensorflow">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" />
                  <span>TensorFlow</span>
                </div>
                
                <div className="tech-node inner-ring aiml" data-tooltip="Powerful data analysis and manipulation library" data-id="pandas">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" alt="Pandas" />
                  <span>Pandas</span>
                </div>
                
                <div className="tech-node inner-ring devops" data-tooltip="Container platform for application deployment" data-id="docker">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" />
                  <span>Docker</span>
                </div>
                
                {/* Middle Ring - Key Supporting Technologies */}
                <div className="tech-node middle-ring languages" data-tooltip="Statistical programming and data science" data-id="r">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" alt="R" />
                  <span>R</span>
                </div>
                
                <div className="tech-node middle-ring frontend" data-tooltip="Semantic markup language for web structure" data-id="html5">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
                  <span>HTML5</span>
                </div>
                
                <div className="tech-node middle-ring frontend" data-tooltip="Styling language for beautiful web designs" data-id="css3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
                  <span>CSS3</span>
                </div>
                
                <div className="tech-node middle-ring frontend" data-tooltip="3D graphics library for immersive web experiences" data-id="threejs">
                  <img src="https://threejs.org/files/threejs-logo.svg" alt="Three.js" />
                  <span>Three.js</span>
                </div>
                
                <div className="tech-node middle-ring backend" data-tooltip="JavaScript runtime for server-side development" data-id="nodejs">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
                  <span>Node.js</span>
                </div>
                
                <div className="tech-node middle-ring backend" data-tooltip="High-performance API framework for Python" data-id="fastapi">
                  <img src="https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" alt="FastAPI" />
                  <span>FastAPI</span>
                </div>
                
                <div className="tech-node middle-ring aiml" data-tooltip="Facebook's deep learning research platform" data-id="pytorch">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" alt="PyTorch" />
                  <span>PyTorch</span>
                </div>
                
                <div className="tech-node middle-ring aiml" data-tooltip="Fundamental scientific computing library" data-id="numpy">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" />
                  <span>NumPy</span>
                </div>
                
                <div className="tech-node middle-ring aiml" data-tooltip="Machine learning toolkit with easy-to-use algorithms" data-id="sklearn">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="Scikit-learn" />
                  <span>Scikit-learn</span>
                </div>
                
                <div className="tech-node middle-ring aiml" data-tooltip="Interactive development environment for data science" data-id="jupyter">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" alt="Jupyter" />
                  <span>Jupyter</span>
                </div>
                
                <div className="tech-node middle-ring tools" data-tooltip="Advanced relational database system" data-id="postgresql">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" />
                  <span>PostgreSQL</span>
                </div>
                
                <div className="tech-node middle-ring tools" data-tooltip="Flexible NoSQL document database" data-id="mongodb">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
                  <span>MongoDB</span>
                </div>
                
                {/* Outer Ring - Specialized Tools & Libraries */}
                <div className="tech-node outer-ring tools" data-tooltip="High-performance in-memory data store" data-id="redis">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" />
                  <span>Redis</span>
                </div>
                
                <div className="tech-node outer-ring devops" data-tooltip="Distributed version control system" data-id="git">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" />
                  <span>Git</span>
                </div>
                
                <div className="tech-node outer-ring devops" data-tooltip="Google Cloud Platform for scalable applications" data-id="gcp">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Cloud" />
                  <span>GCP</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="Comprehensive plotting library for data visualization" data-id="matplotlib">
                  <img src="https://matplotlib.org/stable/_static/images/logo2.svg" alt="Matplotlib" />
                  <span>Matplotlib</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Google's advanced generative AI models" data-id="gemini">
                  <img src="https://ai.google.dev/static/site-assets/images/share.png" alt="Google Gemini" />
                  <span>Gemini AI</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="OpenAI's GPT models and API" data-id="openai">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="OpenAI" />
                  <span>OpenAI</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Fast AI inference API service" data-id="groq">
                  <img src="https://groq.com/wp-content/uploads/2024/03/PBG-mark1-color.svg" alt="Groq" />
                  <span>Groq API</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Local AI model deployment and inference" data-id="ollama">
                  <img src="https://github.com/ollama/ollama/raw/main/docs/ollama.png" alt="Ollama" />
                  <span>Ollama</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Speech recognition and transcription API" data-id="assemblyai">
                  <img src="https://www.assemblyai.com/blog/content/images/2023/08/aai-logo-dark.png" alt="AssemblyAI" />
                  <span>AssemblyAI</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="Vector database for embeddings and semantic search" data-id="chromadb">
                  <img src="https://docs.trychroma.com/img/chroma.png" alt="ChromaDB" />
                  <span>ChromaDB</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="Streamlit web app framework for data science" data-id="streamlit">
                  <img src="https://streamlit.io/images/brand/streamlit-mark-color.png" alt="Streamlit" />
                  <span>Streamlit</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="Cross-platform GUI toolkit for Python" data-id="tkinter">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png" alt="Tkinter" />
                  <span>Tkinter</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Hugging Face transformers for NLP models" data-id="transformers">
                  <img src="https://huggingface.co/front/assets/huggingface_logo-noborder.svg" alt="Transformers" />
                  <span>Transformers</span>
                </div>
                
                <div className="tech-node outer-ring aiml" data-tooltip="Natural Language Toolkit for text processing" data-id="nltk">
                  <img src="https://miro.medium.com/v2/resize:fit:592/1*YM2HXc7f4v02pZBEO8h-qw.png" alt="NLTK" />
                  <span>NLTK</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="Computer vision and pose estimation library" data-id="mediapipe">
                  <img src="https://mediapipe.dev/images/mediapipe_small.png" alt="MediaPipe" />
                  <span>MediaPipe</span>
                </div>
                
                <div className="tech-node outer-ring tools" data-tooltip="PDF text extraction and processing" data-id="pdfplumber">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/121px-Python-logo-notext.svg.png" alt="PDFPlumber" />
                  <span>PDFPlumber</span>
                </div>
              </div>
              
              <div className="tech-tooltip" id="tech-tooltip"></div>
            </div>
          </div>
        </div>
      </div>
      {/* Background Elements */}
      <div className="about-decorations">
        <div className="floating-data">
          <div className="data-element">📈</div>
          <div className="data-element">🧠</div>
          <div className="data-element">💻</div>
          <div className="data-element">📊</div>
        </div>
      </div>
    </div>
  )
}

export default About 