import React, { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, Stars, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Floating Particles Component
function FloatingParticles({ count = 100 }) {
  const mesh = useRef()
  const light = useRef()

  // Generate random positions for particles
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
    }
    return positions
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      mesh.current.rotation.y += 0.002
    }
    if (light.current) {
      light.current.position.x = Math.sin(state.clock.elapsedTime) * 10
      light.current.position.z = Math.cos(state.clock.elapsedTime) * 10
    }
  })

  return (
    <group>
      <points ref={mesh}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={count}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.05}
          color="#00ffff"
          transparent
          opacity={0.6}
          blending={THREE.AdditiveBlending}
        />
      </points>
      <pointLight
        ref={light}
        color="#00ffff"
        intensity={2}
        distance={30}
        position={[5, 5, 5]}
      />
    </group>
  )
}

// Cinema Elements
function CinemaElements() {
  const groupRef = useRef()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* Film Reels */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-15, 5, -10]}>
          <cylinderGeometry args={[1, 1, 0.2, 16]} />
          <meshStandardMaterial color="#333333" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[12, -8, -15]}>
          <cylinderGeometry args={[0.8, 0.8, 0.15, 16]} />
          <meshStandardMaterial color="#444444" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      {/* Floating Screens */}
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.6}>
        <mesh position={[8, 3, -8]} rotation={[0.2, -0.3, 0]}>
          <planeGeometry args={[3, 2]} />
          <meshStandardMaterial
            color="#001122"
            transparent
            opacity={0.8}
            emissive="#0066ff"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Geometric Shapes */}
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <mesh position={[-8, -3, -12]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.3}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  )
}

// Main Background3D Component
function Background3D({ activeSection }) {
  const { camera } = useThree()

  useFrame((state) => {
    // Subtle camera movement based on active section
    const targetY = activeSection === 'hero' ? 0 : 
                   activeSection === 'about' ? -2 : 
                   activeSection === 'skills' ? 2 : 
                   activeSection === 'projects' ? -1 : 1

    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02)
    
    // Gentle camera rotation
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      {/* Ambient Lighting */}
      <ambientLight intensity={0.2} color="#ffffff" />
      
      {/* Key Lights */}
      <pointLight
        position={[10, 10, 10]}
        intensity={1}
        color="#00ffff"
        distance={30}
      />
      <pointLight
        position={[-10, -10, 5]}
        intensity={0.8}
        color="#0066ff"
        distance={25}
      />
      <pointLight
        position={[0, 0, 20]}
        intensity={0.5}
        color="#9900ff"
        distance={40}
      />

      {/* Directional Light for depth */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.3}
        color="#ffffff"
        castShadow
      />

      {/* Background Stars */}
      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Floating Particles */}
      <FloatingParticles count={150} />

      {/* Cinema Elements */}
      <CinemaElements />

      {/* Fog for depth */}
      <fog attach="fog" args={['#0a0a0a', 30, 100]} />
    </>
  )
}

export default Background3D 