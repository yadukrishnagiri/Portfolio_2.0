import React, { useEffect, useRef, useState } from 'react'
import './Projects.css'

function Projects() {
  const projectsRef = useRef()
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      },
      { threshold: 0.1 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      id: 1,
      title: "AI Code Iterator",
      subtitle: "AI-Powered Code Improvement Tool",
      description: "A web application that helps developers improve their code using AI-powered suggestions. The tool analyzes code snippets and provides intelligent recommendations for optimization, error handling, and best practices, with a focus on game development workflows.",
      techStack: ["Python",
    "Flask",
    "HTML",
    "CSS",
    "JavaScript",
    "OpenAI API",
    "Google Generative AI"],
      features: [
        "Interactive code input and modification interface",
    "AI-powered code suggestions and improvements",
    "Custom prompt-based code enhancement",
    "Code integration capabilities",
    "Real-time code analysis and feedback",
    "Game development specific optimizations"
      ],
      liveLink: "https://ai-compiler.onrender.com",
      githubLink: "https://github.com/yadukrishnagiri/ai-compiler",
      image: "🎯",
      category: "ML",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI-Powered CV Analyzer & Interview Simulator",
      subtitle: "Artificial Intelligence & Natural Language Processing",
      description: "An intelligent system that analyzes CVs using Google's Gemini AI, extracts technical skills and experience, and conducts automated technical interviews with dynamic difficulty adjustment and real-time feedback.",
      techStack: [ "Python",
        "Google Gemini AI",
        "PDF Plumber",
        "NLTK",
        "Transformers",
        "JSON Processing",
        "Concurrent Programming"],
      features: [
        "Automated CV analysis with skill extraction",
        "Intelligent interview simulation with dynamic difficulty",
        "Real-time answer evaluation and feedback",
        "Concurrent processing with timeout handling",
        "Automated technical skill assessment",
        "JSON-based response parsing and validation"
      ],
      liveLink: "https://ai-cv-analyzer.onrender.com",
      githubLink: "https://github.com/yadukrishnagiri/AI-CV-Analyzer",
      image: "🧠",
      category: "NLP",
      status: "Completed"
    },
    {
      id: 3,
      title: "A.R.T.E.M.I.S - Football Statistics Assistant",
      subtitle: "AI-Powered Sports Analytics Platform",
      description: "An advanced football statistics assistant that leverages RAG (Retrieval Augmented Generation) technology to provide comprehensive analysis of match data, player statistics, and team performance through an interactive web interface.",
      techStack: ["Python","Flask","LangChain","ChromaDB","Ollama","Pandas","HTML/CSS"],
      features: [
    "Real-time match statistics analysis",
    "AI-powered query system using RAG",
    "Interactive web interface for multiple teams",
    "Comprehensive data visualization",
    "Multi-category statistical analysis (attacking, defending, goalkeeping)",
    "Semantic search capabilities"
  ],
      liveLink: "https://your-football-analytics.streamlit.app",
      githubLink: "https://github.com/yadukrishnagiri/A.R.T.E.M.I.S---Football-Statistics-Assistant",
      image: "⚽",
      category: "Analytics",
      status: "Completed"
    },
    {
      id: 4,
      title: "Hands-Free Interactive System",
      subtitle: "Computer Vision & Voice Recognition",
      description: "Developed an innovative accessibility system that combines eye-tracking and voice recognition to enable hands-free computer interaction. The system uses computer vision for precise mouse control and voice commands for text input and system control.",
      techStack: [  "Python",
        "OpenCV",
        "MediaPipe",
        "SpeechRecognition",
        "PyAutoGUI",
        "NumPy",
        "Matplotlib"],
      features: [
        "Real-time eye-tracking mouse control with 95% accuracy",
    "Voice command recognition and text input system",
    "Multi-threaded architecture for seamless operation",
    "Intuitive voice commands for system control (click, scroll, pause/resume)"
  ],
      liveLink: "https://hands-free-interactive-system.onrender.com",
      githubLink: "https://github.com/yadukrishnagiri/Hands-Free-Interactive-System",
      image: "👁️",
      category: "Computer Vision",
      status: "Completed"
    },
    {
      id: 5,
      title: " World Happiness Index Analysis",
      subtitle: "Data Analysis & Machine Learning",
      description: "Comprehensive analysis of the World Happiness Report dataset using Python, focusing on understanding factors influencing global happiness through statistical analysis and machine learning models.",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jupyter Notebook"],
      features: [
        "Data exploration and visualization",
        "Statistical analysis of happiness factors",
        "Machine learning model development",
        "Interactive data analysis environment"
      ],
      liveLink: "https://world-happiness-index-analysis.onrender.com",
      githubLink: "https://github.com/yadukrishnagiri/World-Happiness-Index-Analysis",
      image: "🔄",
      category: "Data Engineering",
      status: "Completed"
    },
    {
      id: 6,
      title: "Cinema Redux Portfolio",
      subtitle: "3D Interactive Web Experience",
      description: "This very portfolio! A 3D interactive website built with React and Three.js, featuring cinema-themed design, smooth animations, and responsive layout. Showcases modern web development skills.",
      techStack: ["React", "Three.js", "GSAP", "Vite", "CSS3"],
      features: [
        "3D interactive elements",
        "Cinema-themed design",
        "Smooth animations",
        "Fully responsive"
      ],
      liveLink: "https://yadukrishnagiri.netlify.app",
      githubLink: "https://github.com/yadukrishnagiri/cinema-redux-portfolio",
      image: "🎬",
      category: "Web Development",
      status: "Completed"
    }
  ]

  const categories = ["All", "ML", "NLP", "Analytics", "Computer Vision", "Data Engineering", "Web Development"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="projects-container" ref={projectsRef}>
      <div className="container">
        <div className="projects-content">
          {/* Section Header */}
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-subtitle">
              Innovation Through Code & Data
            </div>
            <p className="section-description">
              A showcase of my journey in Data Science, AI, and Software Development. 
              Each project represents a unique challenge solved with cutting-edge technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="category-filter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${index === activeProject ? 'active' : ''}`}
                onMouseEnter={() => setActiveProject(index)}
              >
                <div className="project-header">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-meta">
                    <div className="project-category">{project.category}</div>
                    <div className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.description}</p>

                  <div className="project-features">
                    <h4>Key Features:</h4>
                    <ul>
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="tech-stack">
                    <h4>Tech Stack:</h4>
                    <div className="tech-tags">
                      {project.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn primary"
                  >
                    <span>View Live</span>
                    <div className="btn-icon">🚀</div>
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                  >
                    <span>View Code</span>
                    <div className="btn-icon">💻</div>
                  </a>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>

      {/* Background Elements */}
      <div className="projects-background">
        <div className="floating-code">
          <div className="code-element">{ }</div>
          <div className="code-element">&lt;/&gt;</div>
          <div className="code-element">[ ]</div>
          <div className="code-element">( )</div>
          <div className="code-element">import</div>
          <div className="code-element">def</div>
        </div>
        <div className="data-flow">
          <div className="flow-line"></div>
          <div className="flow-line"></div>
          <div className="flow-line"></div>
        </div>
      </div>
    </div>
  )
}

export default Projects 