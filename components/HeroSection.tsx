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
  { icon: Github, href: "https://github.com/your-username", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/your-handle", label: "Twitter" },
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
          <motion.div variants={itemVariants} className="mb-8">
            <Avatar className="w-32 h-32 mx-auto border-4 border-gradient-to-r from-cosmic-blue to-cosmic-purple">
              <AvatarImage src="/profile-photo.jpg" alt="Profile" />
              <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-cosmic-blue to-cosmic-purple text-white">
                JD
              </AvatarFallback>
            </Avatar>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-cosmic-gradient leading-tight"
          >
            John Doe
          </motion.h1>

          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
          >
            ML Engineer & Full-Stack Developer
          </motion.h2>

          {/* Bio */}
          <motion.div variants={itemVariants} className="mb-12 space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              I'm a passionate Machine Learning Engineer with a deep love for transforming data into intelligent solutions. 
              With expertise spanning from neural networks to web applications, I bridge the gap between cutting-edge AI research and practical, scalable implementations.
            </p>
            <p>
              My journey began with curiosity about how machines could learn and adapt, leading me through the fascinating worlds of 
              computer vision, natural language processing, and predictive analytics. Today, I combine this AI expertise with full-stack 
              development skills to create end-to-end intelligent applications.
            </p>
            <p>
              When I'm not training models or crafting code, you'll find me exploring the latest research papers, contributing to open-source 
              projects, or mentoring the next generation of AI enthusiasts. I believe in the power of technology to solve real-world problems 
              and make a positive impact on society.
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
              onClick={() => window.open('/resume.pdf', '_blank')}
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