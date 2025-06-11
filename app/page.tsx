"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { LoadingScreen } from "@/components/LoadingScreen"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = sessionStorage.getItem('hasVisited')
    
    if (hasVisited) {
      // Skip loading animation for subsequent visits in the same session
      setIsLoading(false)
      setShowContent(true)
    } else {
      // Show loading animation for first visit
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
    setTimeout(() => {
      setShowContent(true)
    }, 200)
  }

  return (
    <>
      <LoadingScreen 
        isLoading={isLoading} 
        onLoadingComplete={handleLoadingComplete} 
      />
      
      <AnimatePresence>
        {showContent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen"
          >
            <Navigation />
            <main>
              <HeroSection />
              <SkillsSection />
              <ExperienceSection />
              <ProjectsSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
