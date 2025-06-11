"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin, Twitter } from "lucide-react"

// CUSTOMIZATION INSTRUCTIONS:
// 1. Update name from "John Doe" to your actual name
// 2. Replace bio paragraphs with your personal story
// 3. Update techStack array with your actual skills
// 4. Replace "JD" initials with your actual initials or photo URL
// 5. Update email and social links
// 6. Add actual resume download link

const techStack = [
  "Python", "Machine Learning", "Data Science", "React", "Next.js",
  "TensorFlow", "PyTorch", "SQL", "MongoDB", "AWS"
]

const socialLinks = [
  { icon: Github, href: "https://github.com/yadukrishnagiri", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/yadukrishnagiri/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/YADUKRISHNGIRi", label: "Twitter" },
]

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cosmic-blue/20 rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-cosmic-purple/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cosmic-amber/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Avatar */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="flex justify-center mb-8">
              <Avatar className="w-32 h-32 border-4 border-cosmic-gradient">
                <AvatarImage src="/avatar.jpg" alt="Yadukrishnagiri" />
                <AvatarFallback className="text-2xl font-bold bg-cosmic-gradient text-white">
                  YG
                </AvatarFallback>
              </Avatar>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-cosmic-gradient">Yadukrishnagiri</span>
            </h1>
            
            <div className="text-xl sm:text-2xl text-muted-foreground mb-8">
              <span className="block">AI/ML Engineer & Full-Stack Developer</span>
              <span className="block text-lg mt-2">Transforming Ideas into Intelligent Solutions</span>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div variants={itemVariants} className="mb-12 space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Data Science and AI professional with a forward-thinking approach to innovation and impact. 
              I bring critical analysis, adaptability, and clear communication to complex challenges in fast-paced environments.
            </p>
            <p>
              Currently pursuing B.Tech in Computer Science with specialization in Data Science and Artificial Intelligence 
              at SRM University Delhi-NCR. Passionate about bridging the gap between cutting-edge AI research and practical applications.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div variants={itemVariants} className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
              {techStack.map((tech, index) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="px-3 py-1 bg-card hover:bg-accent transition-colors duration-200 hover:scale-105 transform"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="cosmic-gradient text-white hover:opacity-90 transition-opacity px-8 py-3 text-lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-2 hover:bg-accent hover:scale-105 transition-all duration-200"
              onClick={() => window.open('/YADUKRISHNAGIRI.pdf', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-6">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="hover:text-cosmic-gradient hover:scale-110 transition-all duration-200"
                onClick={() => window.open(social.href, '_blank')}
              >
                <social.icon className="h-6 w-6" />
                <span className="sr-only">{social.label}</span>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full animate-bounce mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}