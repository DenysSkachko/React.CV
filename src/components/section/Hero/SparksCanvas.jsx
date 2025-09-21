import { useEffect, useRef } from 'react'

const SparkCanvas = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let particles = []
    let animationFrame

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const createParticles = () => {
      particles = []
      for (let i = 0; i < 400; i++) {
        particles.push({
          x: canvas.width / 2 - 300 + Math.random() * 550, 
          y: Math.random() * 200, 
          radius: Math.random() * 1 + 0.8, 
          speed: Math.random() * 0.3 + 0.1, 
          alpha: Math.random() * 0.8 + 0.2,
          flicker: Math.random() * 0.03 + 0.01,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2)
        gradient.addColorStop(0, `rgba(255,255,255,${p.alpha})`) 
        gradient.addColorStop(0.2, `rgba(255,180,180,${p.alpha * 0.9})`) 
        gradient.addColorStop(0.5, `rgba(224,44,50,${p.alpha * 0.8})`)
        gradient.addColorStop(1, `rgba(224,44,50,0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 5, 0, Math.PI * 2)
        ctx.fill()

        p.y += p.speed

        p.alpha += p.flicker * (Math.random() > 0.5 ? 1 : -1)
        if (p.alpha > 1) p.alpha = 1
        if (p.alpha < 0.2) p.alpha = 0.2

        if (p.y > 400) {
          p.y = 0
          p.x = canvas.width / 2 - 300 + Math.random() * 600
        }
      })

      animationFrame = requestAnimationFrame(draw)
    }

    createParticles()
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full max-h-150 pointer-events-none"
      style={{ zIndex: 2 }}
    />
  )
}

export default SparkCanvas
