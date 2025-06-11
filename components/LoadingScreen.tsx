"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

interface LoadingScreenProps {
  isLoading: boolean
  onLoadingComplete: () => void
}

export function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    if (isLoading) {
      // Simulate loading progress
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => {
              onLoadingComplete()
            }, 500)
            return 100
          }
          return prev + Math.random() * 15 + 5
        })
      }, 150)

      // Show text after a short delay
      const textTimer = setTimeout(() => {
        setShowText(true)
      }, 800)

      return () => {
        clearInterval(interval)
        clearTimeout(textTimer)
      }
    }
  }, [isLoading, onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 overflow-hidden"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            {/* Floating Cosmic Orbs */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute rounded-full blur-xl ${
                  i % 3 === 0 ? 'bg-cosmic-blue/20' :
                  i % 3 === 1 ? 'bg-cosmic-purple/20' : 'bg-cosmic-amber/20'
                }`}
                style={{
                  width: `${Math.random() * 300 + 100}px`,
                  height: `${Math.random() * 300 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Twinkling Stars */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Loading Content */}
          <div className="relative z-10 flex flex-col items-center space-y-8">
            {/* Cosmic Loading Spinner */}
            <div className="relative">
              {/* Outer Ring */}
              <motion.div
                className="w-24 h-24 rounded-full border-4 border-transparent"
                style={{
                  background: "conic-gradient(from 0deg, #6366F1, #8B5CF6, #F59E0B, #6366F1)",
                  padding: "4px",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full bg-background" />
              </motion.div>

              {/* Inner Pulsing Core */}
              <motion.div
                className="absolute inset-0 w-24 h-24 rounded-full bg-cosmic-gradient opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Center Dot */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-3 h-3 rounded-full bg-cosmic-gradient"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>

            {/* Loading Text */}
            <AnimatePresence>
              {showText && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                  className="text-center space-y-4"
                >
                  <h2 className="text-2xl font-bold text-cosmic-gradient">
                    Yadukrishnagiri
                  </h2>
                  <p className="text-muted-foreground">
                    Crafting intelligent solutions...
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-cosmic-gradient"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>

            {/* Progress Percentage */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-sm text-muted-foreground font-mono"
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Shooting Stars */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-star-${i}`}
              className="absolute w-1 h-1 bg-cosmic-gradient rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, 200],
                y: [0, 100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: i * 2 + Math.random() * 2,
                repeat: Infinity,
                repeatDelay: 4,
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
} 