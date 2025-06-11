"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Filter, Search, Sparkles, X } from "lucide-react"
import { 
  SiPython, SiTensorflow, SiPytorch, SiScikitlearn, SiNumpy, SiPandas, 
  SiJupyter, SiR, SiMysql, SiMongodb, SiPostgresql, SiReact, SiNextdotjs, 
  SiJavascript, SiTypescript, SiNodedotjs, SiFlask, SiDjango, SiOpenai,
  SiPlotly, SiOpencv, SiHuggingface
} from "react-icons/si"

// CUSTOMIZATION INSTRUCTIONS FOR SKILLS:
/*
=== HOW TO MODIFY SKILLS SECTION ===

1. TO ADD NEW SKILL CONSTELLATIONS:
   - Copy existing constellation object structure
   - Add to constellations array
   - Set unique name, color, and skills array
   - Position skills with x,y coordinates (0-100 range)

2. TO ADD/REMOVE INDIVIDUAL SKILLS:
   - Add/remove from skills array within constellation
   - Include: name, level (0-100), icon, x, y, projectHighlight
   - Adjust x,y positions for visual balance

3. TO CHANGE CONSTELLATION COLORS:
   - Update color property in constellation object
   - Use hex colors for consistency

4. EXAMPLE SKILL OBJECT:
   { 
     name: "New Technology", 
     level: 85, 
     icon: SiReact, 
     x: 25, 
     y: 30, 
     projectHighlight: "Brief description of usage" 
   }
*/

const constellations = [
  {
    name: "ML & AI Galaxy",
    color: "#3B82F6",
    skills: [
      { name: "Prompt Engineering", level: 95, icon: SiOpenai, x: 35, y: 45, projectHighlight: "Used in building real-time GPT-powered assistants" },
      { name: "Machine Learning", level: 90, icon: SiScikitlearn, x: 25, y: 30, projectHighlight: "Developed predictive models with 95% accuracy" },
      { name: "Supervised Learning", level: 88, icon: SiPython, x: 45, y: 25, projectHighlight: "Built classification systems for medical diagnosis" },
      { name: "Unsupervised Learning", level: 85, icon: SiPython, x: 55, y: 40, projectHighlight: "Customer segmentation and anomaly detection" },
      { name: "Facial Recognition", level: 82, icon: SiOpencv, x: 30, y: 55, projectHighlight: "Real-time face detection with 99% accuracy" },
      { name: "Eye-Controlled Mouse", level: 88, icon: SiOpencv, x: 50, y: 60, projectHighlight: "Accessibility tool for hands-free computer control" },
      { name: "Audio Transcription", level: 85, icon: SiPython, x: 20, y: 40, projectHighlight: "Real-time speech-to-text with Whisper API" },
      { name: "AI Summarization", level: 90, icon: SiOpenai, x: 60, y: 30, projectHighlight: "Document summarization with 90% relevance score" },
      { name: "Whisper API", level: 87, icon: SiOpenai, x: 40, y: 70, projectHighlight: "Multi-language audio processing pipeline" },
      { name: "LangChain", level: 85, icon: SiPython, x: 65, y: 50, projectHighlight: "Built RAG systems for document Q&A" },
      { name: "ChromaDB", level: 80, icon: SiPython, x: 25, y: 65, projectHighlight: "Vector database for semantic search" },
    ]
  },
  {
    name: "Data Science Nebula", 
    color: "#10B981",
    skills: [
      { name: "Data Cleaning", level: 92, icon: SiPandas, x: 25, y: 35, projectHighlight: "Processed 10M+ records with 99.9% accuracy" },
      { name: "Regression Analysis", level: 88, icon: SiR, x: 40, y: 25, projectHighlight: "Predictive pricing models for e-commerce" },
      { name: "pandas", level: 95, icon: SiPandas, x: 20, y: 50, projectHighlight: "Data manipulation for Fortune 500 analytics" },
      { name: "NumPy", level: 90, icon: SiNumpy, x: 35, y: 60, projectHighlight: "High-performance numerical computing" },
      { name: "matplotlib", level: 85, icon: SiPython, x: 55, y: 30, projectHighlight: "Created 100+ publication-ready visualizations" },
      { name: "seaborn", level: 82, icon: SiPython, x: 50, y: 45, projectHighlight: "Statistical visualization for research papers" },
      { name: "SciPy", level: 80, icon: SiPython, x: 30, y: 75, projectHighlight: "Scientific computing and optimization" },
      { name: "Data Visualization", level: 88, icon: SiPlotly, x: 65, y: 40, projectHighlight: "Interactive dashboards with 1M+ views" },
      { name: "scikit-learn", level: 90, icon: SiScikitlearn, x: 45, y: 70, projectHighlight: "ML pipeline automation framework" },
      { name: "Keras", level: 85, icon: SiTensorflow, x: 60, y: 55, projectHighlight: "Deep learning for image classification" },
      { name: "TensorFlow", level: 82, icon: SiTensorflow, x: 70, y: 35, projectHighlight: "Production ML models serving millions" },
      { name: "Plotly", level: 87, icon: SiPlotly, x: 55, y: 65, projectHighlight: "Real-time analytics dashboards" },
    ]
  },
  {
    name: "Dev & Systems Cluster",
    color: "#8B5CF6", 
    skills: [
      { name: "Python", level: 95, icon: SiPython, x: 30, y: 40, projectHighlight: "5+ years building scalable applications" },
      { name: "R", level: 80, icon: SiR, x: 45, y: 30, projectHighlight: "Statistical analysis and research computing" },
      { name: "SQL", level: 88, icon: SiMysql, x: 25, y: 55, projectHighlight: "Complex queries on billion-record databases" },
      { name: "HTML/CSS", level: 85, icon: SiJavascript, x: 55, y: 25, projectHighlight: "Responsive designs with modern CSS" },
      { name: "Flask", level: 82, icon: SiFlask, x: 40, y: 65, projectHighlight: "RESTful APIs serving 10K+ requests/min" },
      { name: "Django", level: 78, icon: SiDjango, x: 60, y: 45, projectHighlight: "Full-stack web applications with authentication" },
      { name: "MySQL", level: 85, icon: SiMysql, x: 35, y: 75, projectHighlight: "Database optimization and indexing" },
      { name: "API Integration", level: 90, icon: SiPython, x: 70, y: 35, projectHighlight: "Third-party service integrations" },
      { name: "JavaScript", level: 88, icon: SiJavascript, x: 50, y: 55, projectHighlight: "Modern ES6+ and async programming" },
      { name: "React", level: 85, icon: SiReact, x: 65, y: 65, projectHighlight: "Component-based UI development" },
      { name: "Next.js", level: 82, icon: SiNextdotjs, x: 25, y: 70, projectHighlight: "Server-side rendering and static sites" },
      { name: "TypeScript", level: 80, icon: SiTypescript, x: 75, y: 50, projectHighlight: "Type-safe full-stack applications" },
      { name: "Node.js", level: 78, icon: SiNodedotjs, x: 45, y: 80, projectHighlight: "Backend services and microservices" },
      { name: "MongoDB", level: 75, icon: SiMongodb, x: 60, y: 75, projectHighlight: "Document-based data storage" },
      { name: "PostgreSQL", level: 83, icon: SiPostgresql, x: 55, y: 40, projectHighlight: "Advanced relational database features" },
    ]
  },
  {
    name: "Specialized Tools",
    color: "#F59E0B",
    skills: [
      { name: "OpenCV", level: 88, icon: SiOpencv, x: 35, y: 40, projectHighlight: "Computer vision and image processing" },
      { name: "Mediapipe", level: 82, icon: SiPython, x: 50, y: 30, projectHighlight: "Real-time pose and hand tracking" },
      { name: "transformers", level: 85, icon: SiHuggingface, x: 25, y: 55, projectHighlight: "HuggingFace NLP model deployment" },
      { name: "PyAutoGUI", level: 80, icon: SiPython, x: 65, y: 45, projectHighlight: "GUI automation and testing" },
      { name: "pytube", level: 75, icon: SiPython, x: 40, y: 65, projectHighlight: "YouTube data extraction pipeline" },
      { name: "SpeechRecognition", level: 83, icon: SiPython, x: 55, y: 60, projectHighlight: "Multi-language speech processing" },
      { name: "pydub", level: 78, icon: SiPython, x: 30, y: 70, projectHighlight: "Audio manipulation and processing" },
      { name: "Computer Vision", level: 87, icon: SiOpencv, x: 70, y: 35, projectHighlight: "Object detection and tracking systems" },
      { name: "NLP", level: 85, icon: SiHuggingface, x: 45, y: 75, projectHighlight: "Text analysis and sentiment detection" },
      { name: "Real-time Processing", level: 88, icon: SiPython, x: 60, y: 65, projectHighlight: "Streaming data pipeline architecture" },
    ]
  }
]

export function SkillsSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedSkill, setSelectedSkill] = useState<any>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [activeCluster, setActiveCluster] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      
      // Draw constellation connections
      constellations.forEach(constellation => {
        const opacity = activeCluster === null || activeCluster === constellation.name ? '40' : '10'
        ctx.strokeStyle = constellation.color + opacity
        ctx.lineWidth = activeCluster === constellation.name ? 2 : 1

        // Draw curved connections between nodes
        for (let i = 0; i < constellation.skills.length - 1; i++) {
          const skill1 = constellation.skills[i]
          const skill2 = constellation.skills[i + 1]
          
          const x1 = (skill1.x / 100) * canvas.offsetWidth
          const y1 = (skill1.y / 100) * canvas.offsetHeight
          const x2 = (skill2.x / 100) * canvas.offsetWidth
          const y2 = (skill2.y / 100) * canvas.offsetHeight

          // Draw curved line
          const midX = (x1 + x2) / 2 + (Math.random() - 0.5) * 50
          const midY = (y1 + y2) / 2 + (Math.random() - 0.5) * 50

          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.quadraticCurveTo(midX, midY, x2, y2)
          ctx.stroke()
        }
      })

      // Draw ambient twinkling stars
      const starCount = activeCluster ? 20 : 80
      for (let i = 0; i < starCount; i++) {
        const x = Math.random() * canvas.offsetWidth
        const y = Math.random() * canvas.offsetHeight
        const opacity = 0.2 + Math.sin(Date.now() * 0.001 + i) * 0.3
        const size = Math.random() * 2 + 0.5
        
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }

      // Shooting stars effect
      if (Math.random() < 0.002) {
        const startX = Math.random() * canvas.offsetWidth
        const startY = Math.random() * canvas.offsetHeight * 0.3
        const endX = startX + 200
        const endY = startY + 100

        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, 'rgba(255,255,255,0)')
        gradient.addColorStop(0.5, 'rgba(255,255,255,0.8)')
        gradient.addColorStop(1, 'rgba(255,255,255,0)')

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [activeCluster])

  const handleSkillClick = (skill: any, constellation: any) => {
    console.log(`Skill clicked: ${skill.name} from ${constellation.name}`)
    setSelectedSkill({ ...skill, constellation: constellation.name })
    setIsDialogOpen(true)
  }

  const handleClusterFilter = (clusterName: string) => {
    console.log(`Cluster filter toggled: ${clusterName}`)
    setActiveCluster(activeCluster === clusterName ? null : clusterName)
  }

  const filteredConstellations = constellations.filter(constellation => {
    if (activeCluster && constellation.name !== activeCluster) return false
    if (searchTerm) {
      return constellation.skills.some(skill => 
        skill.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    return true
  })

  const filteredSkills = filteredConstellations.flatMap(constellation =>
    constellation.skills.filter(skill =>
      searchTerm ? skill.name.toLowerCase().includes(searchTerm.toLowerCase()) : true
    ).map(skill => ({ ...skill, constellation }))
  )

  return (
    <TooltipProvider>
      <section id="skills" className="py-20 relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cosmic-gradient mb-4">
              <Sparkles className="inline w-8 h-8 mr-3 mb-2" />
              Skill Constellation
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Navigate through my expertise domains. Each constellation represents a core area of specialization,
              with interconnected skills that power intelligent solutions.
            </p>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-cosmic-blue focus:border-transparent outline-none"
                />
              </div>

              {/* Filter Indicator */}
              {activeCluster && (
                <Badge variant="outline" className="px-3 py-1">
                  <Filter className="w-3 h-3 mr-1" />
                  {activeCluster}
                  <button
                    onClick={() => setActiveCluster(null)}
                    className="ml-2 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          </motion.div>

          {/* Mobile Cluster Selector */}
          {isMobile && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 justify-center">
                <Button
                  variant={activeCluster === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCluster(null)}
                  className="cosmic-gradient text-white"
                >
                  All
                </Button>
                {constellations.map((constellation) => (
                  <Button
                    key={constellation.name}
                    variant={activeCluster === constellation.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleClusterFilter(constellation.name)}
                    style={{
                      backgroundColor: activeCluster === constellation.name ? constellation.color : 'transparent',
                      borderColor: constellation.color,
                      color: activeCluster === constellation.name ? 'white' : constellation.color
                    }}
                  >
                    {constellation.name.split(' ')[0]}
                  </Button>
                ))}
              </div>
            </div>
          )}

          <div className="relative h-[600px] md:h-[800px] border border-border rounded-2xl overflow-hidden bg-card/50 backdrop-blur-sm">
            {/* Canvas Background */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%)' }}
            />

            {/* Desktop Cluster Controls */}
            {!isMobile && (
              <div className="absolute top-4 left-4 space-y-2 z-20">
                {constellations.map((constellation, index) => (
                  <motion.button
                    key={constellation.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleClusterFilter(constellation.name)}
                    className={`block text-left px-4 py-2 rounded-lg transition-all duration-300 ${
                      activeCluster === constellation.name
                        ? 'bg-card shadow-lg transform scale-105'
                        : 'hover:bg-card/50'
                    }`}
                    style={{
                      color: constellation.color,
                      borderLeft: `4px solid ${constellation.color}`,
                    }}
                  >
                    <div className="font-bold text-sm">{constellation.name}</div>
                    <div className="text-xs opacity-70">{constellation.skills.length} skills</div>
                  </motion.button>
                ))}
              </div>
            )}

            {/* Skill Nodes */}
            <AnimatePresence>
              {filteredConstellations.map((constellation) =>
                constellation.skills
                  .filter(skill => !searchTerm || skill.name.toLowerCase().includes(searchTerm.toLowerCase()))
                  .map((skill, index) => {
                    const isHighlighted = !activeCluster || activeCluster === constellation.name
                    const isSearchMatch = !searchTerm || skill.name.toLowerCase().includes(searchTerm.toLowerCase())
                    
                    return (
                      <motion.div
                        key={`${constellation.name}-${skill.name}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: isHighlighted && isSearchMatch ? 1 : 0.7,
                          opacity: isHighlighted && isSearchMatch ? 1 : 0.3
                        }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="absolute cursor-pointer"
                        style={{
                          left: `${skill.x}%`,
                          top: `${skill.y}%`,
                          transform: 'translate(-50%, -50%)',
                        }}
                        whileHover={{ scale: isHighlighted ? 1.3 : 0.8 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <div
                              onClick={() => handleSkillClick(skill, constellation)}
                              className="relative"
                            >
                              <motion.div
                                className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 constellation-node"
                                style={{ backgroundColor: constellation.color }}
                                animate={{
                                  boxShadow: isHighlighted 
                                    ? `0 0 20px ${constellation.color}80` 
                                    : `0 0 10px ${constellation.color}40`,
                                }}
                              >
                                <skill.icon className="w-5 h-5 md:w-7 md:h-7" />
                              </motion.div>
                              
                              {/* Floating label for desktop */}
                              {!isMobile && (
                                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-medium text-center whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                                  {skill.name}
                                </div>
                              )}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <div className="text-center">
                              <div className="font-semibold">{skill.name}</div>
                              <div className="text-xs text-muted-foreground">{constellation.name}</div>
                              <div className="text-xs mt-1">Level: {skill.level}%</div>
                            </div>
                          </TooltipContent>
                        </Tooltip>
                      </motion.div>
                    )
                  })
              )}
            </AnimatePresence>
          </div>

          {/* Stats & Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8"
          >
            {/* Stats */}
            <div className="text-center mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                {constellations.map((constellation) => (
                  <Card key={constellation.name} className="p-3 bg-card/50">
                    <CardContent className="p-0 text-center">
                      <div className="text-2xl font-bold" style={{ color: constellation.color }}>
                        {constellation.skills.length}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {constellation.name.split(' ')[0]}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Instructions */}
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                {isMobile 
                  ? "Tap cluster buttons to filter • Touch nodes for details"
                  : "Click cluster names to filter • Hover nodes for details • Search to find specific skills"
                }
              </p>
              
              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-3">
                {constellations.map((constellation) => (
                  <Badge
                    key={constellation.name}
                    variant="outline"
                    className={`px-3 py-1 cursor-pointer transition-all duration-200 ${
                      activeCluster === constellation.name ? 'shadow-lg transform scale-105' : 'hover:scale-105'
                    }`}
                    style={{ 
                      borderColor: constellation.color, 
                      color: constellation.color,
                      backgroundColor: activeCluster === constellation.name ? `${constellation.color}20` : 'transparent'
                    }}
                    onClick={() => handleClusterFilter(constellation.name)}
                  >
                    <div
                      className="w-3 h-3 rounded-full mr-2"
                      style={{ backgroundColor: constellation.color }}
                    />
                    {constellation.name}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skill Detail Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                {selectedSkill?.icon && <selectedSkill.icon className="w-6 h-6" />}
                {selectedSkill?.name}
              </DialogTitle>
            </DialogHeader>
            {selectedSkill && (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Proficiency Level</span>
                    <span className="text-sm text-muted-foreground">{selectedSkill.level}%</span>
                  </div>
                  <Progress value={selectedSkill.level} className="h-2" />
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Constellation</h4>
                  <Badge variant="outline">{selectedSkill.constellation}</Badge>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Project Highlight</h4>
                  <p className="text-sm text-muted-foreground">
                    {selectedSkill.projectHighlight}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </section>
    </TooltipProvider>
  )
}