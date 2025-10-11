import React, { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let nodes = []

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    // Network Node class
    class NetworkNode {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseX = this.x
        this.baseY = this.y
        this.size = Math.random() * 2.5 + 2.5 // Slightly larger nodes
        this.baseSize = this.size
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.opacity = Math.random() * 0.2 + 0.25 // Lower dot opacity
        this.velocityX = 0
        this.velocityY = 0
        this.density = Math.random() * 20 + 20
      }

      update(mouse) {
        // Calculate distance from mouse
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          // Phobic behavior - run away from mouse
          const force = (mouse.radius - distance) / mouse.radius
          const angle = Math.atan2(this.y - mouse.y, this.x - mouse.x)
          
          // Apply fleeing force
          this.velocityX = Math.cos(angle) * force * this.density * 0.4
          this.velocityY = Math.sin(angle) * force * this.density * 0.4
          
          // Make node slightly bigger when fleeing
          this.size = this.baseSize * 1.5
        } else {
          // Return to base position
          this.velocityX *= 0.92
          this.velocityY *= 0.92
          
          // Gentle pull back to base position
          const returnForce = 0.015
          this.velocityX += (this.baseX - this.x) * returnForce
          this.velocityY += (this.baseY - this.y) * returnForce
          
          // Return to base size
          this.size += (this.baseSize - this.size) * 0.08
        }

        // Apply velocity and base speed
        this.x += this.velocityX + this.speedX
        this.y += this.velocityY + this.speedY

        // Update base position (for continuous movement)
        this.baseX += this.speedX
        this.baseY += this.speedY

        // Wrap around screen
        if (this.baseX > canvas.width) {
          this.baseX = 0
          this.x = 0
        }
        if (this.baseX < 0) {
          this.baseX = canvas.width
          this.x = canvas.width
        }
        if (this.baseY > canvas.height) {
          this.baseY = 0
          this.y = 0
        }
        if (this.baseY < 0) {
          this.baseY = canvas.height
          this.y = canvas.height
        }
      }

      draw(isDark) {
        // Draw node with glow effect - theme aware colors
        const nodeColor = isDark ? '100, 181, 246' : '14, 165, 233' // Blue for dark, cyan for light
        ctx.shadowBlur = 6
        ctx.shadowColor = `rgba(${nodeColor}, ${this.opacity * 0.4})`
        ctx.fillStyle = `rgba(${nodeColor}, ${this.opacity * 0.45})` // Lower dot opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create nodes
    const createNodes = () => {
      const numberOfNodes = Math.floor((canvas.width * canvas.height) / 15000) // Balanced quantity
      for (let i = 0; i < numberOfNodes; i++) {
        nodes.push(new NetworkNode())
      }
    }
    createNodes()

    // Connect nearby nodes with lines (graph edges) - theme aware
    const connectNodes = (isDark) => {
      const maxDistance = 150
      const lineColor = isDark ? '100, 181, 246' : '14, 165, 233' // Blue for dark, cyan for light
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = (1 - distance / maxDistance) * 0.2 // More visible lines
            
            // Create gradient for lines
            const gradient = ctx.createLinearGradient(
              nodes[i].x, nodes[i].y,
              nodes[j].x, nodes[j].y
            )
            gradient.addColorStop(0, `rgba(${lineColor}, ${opacity * nodes[i].opacity * 0.5})`) // More visible
            gradient.addColorStop(1, `rgba(${lineColor}, ${opacity * nodes[j].opacity * 0.5})`) // More visible
            
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1 // Slightly thicker for graph appearance
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
    }

    // Mouse interaction
    let mouse = { 
      x: null, 
      y: null, 
      radius: 150
    }

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleMouseLeave = () => {
      mouse.x = null
      mouse.y = null
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      const isDark = document.documentElement.classList.contains('dark')
      
      // Create gradient background matching the theme
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      if (isDark) {
        // Dark theme - deep blue shades
        gradient.addColorStop(0, 'rgba(15, 23, 42, 0.5)') // slate-950 with opacity
        gradient.addColorStop(0.5, 'rgba(30, 41, 59, 0.4)') // slate-800 with opacity
        gradient.addColorStop(1, 'rgba(51, 65, 85, 0.3)') // slate-700 with opacity
      } else {
        // Light theme - light blue shades
        gradient.addColorStop(0, 'rgba(240, 249, 255, 0.3)') // Very light blue (primary-50)
        gradient.addColorStop(0.5, 'rgba(224, 242, 254, 0.25)') // Light blue (primary-100)
        gradient.addColorStop(1, 'rgba(186, 230, 253, 0.2)') // Lighter blue (primary-200)
      }
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first (behind nodes)
      connectNodes(isDark)

      // Update and draw nodes
      nodes.forEach((node) => {
        if (mouse.x && mouse.y) {
          node.update(mouse)
        } else {
          node.update({ x: -1000, y: -1000, radius: 0 })
        }
        node.draw(isDark)
      })

      // Draw subtle mouse indicator
      if (mouse.x && mouse.y) {
        const mouseColor = isDark ? '100, 181, 246' : '14, 165, 233'
        ctx.strokeStyle = `rgba(${mouseColor}, 0.06)` // Slightly more visible
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      nodes = []
      createNodes()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  )
}

export default ParticlesBackground

