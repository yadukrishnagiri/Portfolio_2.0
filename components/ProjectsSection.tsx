"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star, Download } from "lucide-react"
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
    title: "AI Code Iterator",
    description: "A web application that helps developers improve their code using AI-powered suggestions. The tool analyzes code snippets and provides intelligent recommendations for optimization, error handling, and best practices, with a focus on game development workflows.",
    image: "/AI Code Iterator.jpeg",
    technologies:  ["Python","Flask",
      "HTML",
      "CSS",
      "JavaScript",
      "OpenAI API",
      "Google Generative AI"],
    liveUrl: "https://ai-compiler.onrender.com",
    githubUrl: "https://github.com/yadukrishnagiri/ai-compiler",
    featured: true
  },
  {
    title: "AskAI - AI-Powered CV Analyzer and Interactive Interviewer",
    description: "An intelligent recruitment tool that analyzes CVs using Gemini AI and conducts interactive technical interviews. The system extracts information from PDF resumes, evaluates technical skills, identifies key achievements, and conducts adaptive interviews with real-time feedback and scoring.",
    image: "/AskAI - AI-Powered CV Analyzer and Interactive Interviewer.jpeg",
    technologies: ["Python", "Google Gemini AI", "PDFPlumber", "JSON", "Threading", "Logging", "Natural Language Processing"],
    liveUrl: "#",
    githubUrl: "https://github.com/yadukrishnagiri/askai",
    featured: true
  },
  {
    title: "A.R.T.E.M.I.S - Football Statistics Assistant",
    description: "Advanced Real-Time Enhanced Match Information System - An AI-powered football statistics assistant using RAG (Retrieval Augmented Generation) technology to provide comprehensive analysis and insights about football matches, players, teams, and historical data through an interactive web interface.",
    image: "/A.R.T.E.M.I.S - Football Statistics Assistant.jpeg",
    technologies: ["Python", "Flask", "LangChain", "ChromaDB", "Ollama", "Pandas", "HTML/CSS", "RAG"],
    liveUrl: "#",
    githubUrl: "https://github.com/yadukrishnagiri/A.R.T.E.M.I.S---Football-Statistics-Assistant",
    featured: false
  },
  {
    title: "Hands-Free Interactive System",
    description: "Developed an innovative accessibility system that combines eye-tracking and voice recognition to enable hands-free computer interaction. The system uses computer vision for precise mouse control and voice commands for text input and system control.",
    image: "/Hands-Free Interactive System.jpeg",
    technologies: [ "Python","OpenCV", "MediaPipe", "SpeechRecognition", "PyAutoGUI", "NumPy", "Matplotlib"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    title: "World Happiness Index Analysis",
    description: "Comprehensive analysis of the World Happiness Report dataset using Python, focusing on understanding factors influencing global happiness through statistical analysis and machine learning models.",
    image: "/World Happiness Index Analysis.jpeg",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "Plotly"],
    liveUrl: "#",
    githubUrl: "https://github.com/yadukrishnagiri/happiness-index-dataset-evaluation",
    featured: false
  },
  {
    title: "OCR Model Performance Comparison: GPU vs CPU",
    description: "A comprehensive performance analysis project comparing OCR (Optical Character Recognition) model inference speed and accuracy between GPU and CPU using TensorFlow. The project implements a CNN-based digit recognition model trained on MNIST dataset and benchmarks FPS (frames per second) and accuracy metrics across different hardware configurations with visualization of results.",
    image: "/OCR Model Performance Comparison GPU vs CPU.jpeg",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Matplotlib", "MNIST", "CNN", "NumPy"],
    liveUrl: "#",
    githubUrl: "https://github.com/yadukrishnagiri/OCR-Model-Performance-Comparison-GPU-vs-CPU",
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:bg-accent hover:scale-105 transition-all duration-200"
              onClick={() => window.open('https://github.com/yadukrishnagiri', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 hover:bg-accent hover:scale-105 transition-all duration-200"
              onClick={() => window.open('/YADUKRISHNAGIRI.pdf', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}