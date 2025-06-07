import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float } from '@react-three/drei'
import './LoadingScreen.css'

// 3D Cinema Reel Component
function CinemaReel() {
  const reelRef = useRef()

  useFrame((state) => {
    if (reelRef.current) {
      reelRef.current.rotation.z += 0.02
      reelRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={reelRef}>
        {/* Main Reel */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[2, 2, 0.3, 32]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Inner Circle */}
        <mesh position={[0, 0, 0.16]}>
          <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
          <meshStandardMaterial color="#666666" metalness={1} roughness={0.1} />
        </mesh>
        
        {/* Film Strip */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh key={i} position={[
            Math.cos((i / 8) * Math.PI * 2) * 1.5,
            Math.sin((i / 8) * Math.PI * 2) * 1.5,
            0.2
          ]} rotation={[0, 0, (i / 8) * Math.PI * 2]}>
            <boxGeometry args={[0.3, 0.1, 0.02]} />
            <meshStandardMaterial color="#1a1a1a" />
          </mesh>
        ))}
      </group>
    </Float>
  )
}

// Floating Particles
function FloatingParticles() {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.children.forEach((particle, i) => {
        particle.position.y += Math.sin(state.clock.elapsedTime + i) * 0.001
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20,
            (Math.random() - 0.5) * 20
          ]}
        >
          <sphereGeometry args={[0.02]} />
          <meshBasicMaterial color="#00ffff" opacity={0.6} transparent />
        </mesh>
      ))}
    </group>
  )
}

// Main Loading Screen Component
function LoadingScreen() {
  const progressRef = useRef()

  useEffect(() => {
    // Animate progress bar
    let progress = 0
    const interval = setInterval(() => {
      progress += Math.random() * 3
      if (progress > 100) progress = 100
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`
      }
      
      if (progress >= 100) {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="loading-screen-overlay">
      <div className="loading-3d-container">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0066ff" />
          
          <CinemaReel />
          <FloatingParticles />
        </Canvas>
      </div>
      
      <div className="loading-content">
        <div className="loading-title">
          <h1 className="cinema-title">CINEMA REDUX</h1>
          <p className="loading-subtitle">Loading Interactive Experience...</p>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div className="progress-fill" ref={progressRef}></div>
          </div>
          <div className="loading-text">
            <span>Initializing 3D Environment</span>
            <span>Setting Up Cinema Theater</span>
            <span>Loading Interactive Elements</span>
          </div>
        </div>
        
        <div className="loading-credits">
          <p>A Portfolio Experience by</p>
          <p className="developer-name">YADU KRISHNA GIRI</p>
        </div>
      </div>
      
      {/* Animated Background Elements */}
      <div className="loading-bg-effects">
        <div className="scanning-line"></div>
        <div className="corner-frames">
          <div className="corner-frame top-left"></div>
          <div className="corner-frame top-right"></div>
          <div className="corner-frame bottom-left"></div>
          <div className="corner-frame bottom-right"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingScreen 