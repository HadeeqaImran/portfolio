import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ThemeContext'

const ParticlesBackground = () => {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const ctx = canvas.getContext('2d')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrameId = 0
    let width = 0
    let height = 0
    let nodes = []
    const mouse = { x: -1000, y: -1000, radius: 150 }

    const getParticleColor = () => {
      const styles = getComputedStyle(document.documentElement)
      return styles.getPropertyValue('--particle-rgb').trim() || '14, 165, 233'
    }

    const createNode = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      size: Math.random() * 1.8 + 1,
      alpha: Math.random() * 0.22 + 0.16,
    })

    const createNodes = () => {
      const count = Math.min(86, Math.max(40, Math.floor((width * height) / 19000)))
      nodes = Array.from({ length: count }, createNode)
    }

    const setCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      createNodes()
    }

    const updateNode = (node) => {
      const dx = node.x - mouse.x
      const dy = node.y - mouse.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < mouse.radius) {
        const force = (mouse.radius - distance) / mouse.radius
        const angle = Math.atan2(dy, dx)
        node.x += Math.cos(angle) * force * 1.7
        node.y += Math.sin(angle) * force * 1.7
      }

      node.x += node.vx
      node.y += node.vy

      if (node.x < -20) node.x = width + 20
      if (node.x > width + 20) node.x = -20
      if (node.y < -20) node.y = height + 20
      if (node.y > height + 20) node.y = -20
    }

    const draw = () => {
      const particleRgb = getParticleColor()
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < nodes.length; i += 1) {
        const node = nodes[i]
        if (!reducedMotion) updateNode(node)

        for (let j = i + 1; j < nodes.length; j += 1) {
          const other = nodes[j]
          const dx = node.x - other.x
          const dy = node.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 135) {
            const opacity = (1 - distance / 135) * 0.14
            ctx.strokeStyle = `rgba(${particleRgb}, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(other.x, other.y)
            ctx.stroke()
          }
        }

        ctx.fillStyle = `rgba(${particleRgb}, ${node.alpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2)
        ctx.fill()
      }

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(draw)
      }
    }

    const handlePointerMove = (event) => {
      mouse.x = event.clientX
      mouse.y = event.clientY
    }

    const handlePointerLeave = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId)
      setCanvasSize()
      draw()
    }

    setCanvasSize()
    draw()
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-0 h-full w-full" aria-hidden="true" />
}

export default ParticlesBackground
