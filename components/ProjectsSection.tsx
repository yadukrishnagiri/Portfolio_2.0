"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

// CUSTOMIZATION INSTRUCTIONS FOR PROJECTS:
/*
=== HOW TO MODIFY PROJECTS SECTION ===

1. TO DELETE EXISTING PROJECTS:
   - Remove objects from projects array
   - Each object represents one project

2. TO ADD NEW PROJECTS:
   - Copy structure of existing project object
   - Update all fields: title, description, image, technologies, liveUrl, githubUrl, featured
   - Add to projects array

3. PROJECT OBJECT STRUCTURE:
   {
     title: "Your Project Name",
     description: "Detailed description of what the project does and its key features",
     image: "https://your-image-url.com/image.jpg", // Use Unsplash or your own images
     technologies: ["Tech1", "Tech2", "Tech3"], // Array of strings
     liveUrl: "https://your-live-project.com", // Replace "#" with actual URL
     githubUrl: "https://github.com/your-username/repo", // Replace "#" with actual URL  
     featured: true // or false - featured projects get special styling
   }

4. TO ADD MORE PROJECT CARDS:
   - Simply add more objects to the projects array
   - Grid will automatically expand to accommodate

5. TO REMOVE PROJECT CARDS:
   - Delete objects from the projects array
   - Grid will automatically adjust layout

6. FEATURED PROJECTS:
   - Set featured: true for your best 2-3 projects
   - Featured projects get highlighted styling and badges
*/

const projects = [
  {
    title: "AI-Powered Medical Diagnosis System",
    description: "Deep learning system for automated medical image analysis with 95% accuracy. Trained on 100,000+ medical images using custom CNN architecture. Features real-time inference, uncertainty quantification, and HIPAA-compliant data handling.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Docker", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Real-time Facial Recognition System",
    description: "Computer vision application with live facial detection and recognition capabilities. Implements advanced face embedding techniques with 99.2% accuracy on real-world datasets. Includes privacy-focused edge computing deployment.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=600&h=400&fit=crop",
    technologies: ["Python", "OpenCV", "dlib", "Mediapipe", "SQLite", "Streamlit"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "NLP Document Summarization API",
    description: "RESTful API service for intelligent document summarization using transformer models. Supports multiple languages, custom summary lengths, and batch processing. Deployed on cloud infrastructure serving 10K+ requests daily.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "HuggingFace", "FastAPI", "Redis", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    title: "Stock Price Prediction Dashboard",
    description: "Interactive web application combining machine learning models with real-time financial data visualization. Features multiple ML algorithms, technical indicators, and risk assessment metrics for investment decision support.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    technologies: ["Python", "React", "D3.js", "scikit-learn", "Alpha Vantage API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Voice-Controlled Smart Assistant",
    description: "Multi-modal AI assistant with speech recognition, natural language understanding, and voice synthesis. Integrated with IoT devices for smart home automation and supports custom voice commands for personalized interactions.",
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop",
    technologies: ["Python", "SpeechRecognition", "pyttsx3", "spaCy", "Raspberry Pi", "MQTT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "Automated Data Pipeline System",
    description: "ETL pipeline for processing large-scale datasets with automated data quality checks, transformation, and loading. Handles 1M+ records daily with comprehensive logging, monitoring, and error recovery mechanisms.",
    image: "https://images.unsplash.com/photo-1518186233392-c232d7dd8c0d?w=600&h=400&fit=crop",
    technologies: ["Python", "Apache Airflow", "Pandas", "PostgreSQL", "AWS S3", "Grafana"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
]

export function ProjectsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI and machine learning projects that demonstrate practical applications 
            of cutting-edge technology in solving real-world problems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group"
            >
              <Card className={`h-full hover-lift bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${
                project.featured ? 'ring-2 ring-cosmic-gradient ring-opacity-50' : ''
              }`}>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <Badge className="bg-cosmic-gradient text-white">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}
                    
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-3 text-foreground group-hover:text-cosmic-gradient transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Badge 
                            variant="outline" 
                            className="text-xs bg-background/50 hover:bg-accent transition-colors duration-200"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="flex-1 bg-cosmic-gradient hover:opacity-90 text-white transition-opacity"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-accent transition-colors duration-200"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Interested in seeing more of my work?
          </p>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 hover:bg-accent hover:scale-105 transition-all duration-200"
            onClick={() => window.open('https://github.com/your-username', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  )
}