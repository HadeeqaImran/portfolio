import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useTheme } from '../context/ThemeContext'

const FloatingShape = ({ position, rotation, scale, speed, color, geometry = 'icosahedron', distort }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x += speed * 0.003
    meshRef.current.rotation.y += speed * 0.005
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.002
  })

  const Geometry = {
    icosahedron: <icosahedronGeometry args={[1, 1]} />,
    octahedron: <octahedronGeometry args={[1, 0]} />,
    torus: <torusGeometry args={[1, 0.4, 16, 32]} />,
    torusKnot: <torusKnotGeometry args={[0.8, 0.3, 64, 16]} />,
    dodecahedron: <dodecahedronGeometry args={[1, 0]} />,
  }

  return (
    <Float speed={speed * 1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {Geometry[geometry]}
        {distort ? (
          <MeshDistortMaterial
            color={color}
            transparent
            opacity={0.15}
            roughness={0.5}
            metalness={0.3}
            distort={0.3}
            speed={2}
            wireframe={false}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.08}
            roughness={0.6}
            metalness={0.2}
            wireframe
          />
        )}
      </mesh>
    </Float>
  )
}

const GradientSphere = ({ color }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.z = state.clock.elapsedTime * 0.03
  })

  return (
    <mesh ref={meshRef} position={[0, 0, -8]} scale={6}>
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial
        color={color}
        transparent
        opacity={0.07}
        roughness={1}
        metalness={0}
        distort={0.4}
        speed={1.5}
      />
    </mesh>
  )
}

const FloatingParticles = ({ count = 80, color }) => {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    pointsRef.current.rotation.x = state.clock.elapsedTime * 0.005
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.04}
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

const SceneContent = () => {
  const { getCurrentColors, theme } = useTheme()
  const colors = getCurrentColors()
  const primaryColor = colors.primary

  const shapes = useMemo(() => [
    { position: [-6, 3, -4], rotation: [0.5, 0.3, 0], scale: 1.2, speed: 0.8, geometry: 'icosahedron', distort: true },
    { position: [7, -2, -5], rotation: [0.2, 0.8, 0.3], scale: 0.9, speed: 1.1, geometry: 'octahedron', distort: false },
    { position: [-3, -4, -3], rotation: [0.7, 0.1, 0.5], scale: 0.7, speed: 1.3, geometry: 'dodecahedron', distort: false },
    { position: [5, 4, -6], rotation: [0.3, 0.6, 0.2], scale: 0.8, speed: 0.9, geometry: 'torus', distort: false },
    { position: [-8, -1, -7], rotation: [0.1, 0.4, 0.7], scale: 1.0, speed: 0.7, geometry: 'torusKnot', distort: true },
    { position: [3, 5, -8], rotation: [0.6, 0.2, 0.4], scale: 0.6, speed: 1.5, geometry: 'icosahedron', distort: false },
    { position: [9, 1, -5], rotation: [0.4, 0.7, 0.1], scale: 0.5, speed: 1.2, geometry: 'dodecahedron', distort: false },
    { position: [-5, 6, -6], rotation: [0.8, 0.5, 0.3], scale: 0.7, speed: 1.0, geometry: 'octahedron', distort: true },
  ], [])

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={0.3} />
      <pointLight position={[-5, -5, -5]} intensity={0.2} color={primaryColor} />

      <GradientSphere color={primaryColor} />
      <FloatingParticles color={primaryColor} />

      {shapes.map((shape, i) => (
        <FloatingShape key={i} {...shape} color={primaryColor} />
      ))}
    </>
  )
}

const Scene3D = () => {
  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent />
      </Canvas>
    </div>
  )
}

export default Scene3D
