import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none'

    const cursor = cursorRef.current
    const glow = glowRef.current

    if (!cursor || !glow) return

    // Setup initial positions
    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    gsap.set(glow, { xPercent: -50, yPercent: -50 })

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const pos = { x: mouse.x, y: mouse.y }
    
    // Quick setter functions for GSAP
    const xSetCursor = gsap.quickSetter(cursor, 'x', 'px')
    const ySetCursor = gsap.quickSetter(cursor, 'y', 'px')
    const xSetGlow = gsap.quickSetter(glow, 'x', 'px')
    const ySetGlow = gsap.quickSetter(glow, 'y', 'px')

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      
      // Update small cursor immediately
      xSetCursor(mouse.x)
      ySetCursor(mouse.y)
    }

    // Add interactivity to hover elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Target elements with "hover-effect" class, or standard interactive tags
      const isInteractive = target.closest('.hover-effect, a, button, input, textarea, select')
      
      if (isInteractive) {
        gsap.to(cursor, {
          scale: 3.5,
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          duration: 0.3,
          ease: 'power2.out'
        })
      } else {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: '#ffffff',
          duration: 0.3,
          ease: 'power2.out'
        })
      }
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    // Ticker for delayed glow
    const tick = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio())
      pos.x += (mouse.x - pos.x) * dt
      pos.y += (mouse.y - pos.y) * dt
      
      xSetGlow(pos.x)
      ySetGlow(pos.y)
    }
    
    gsap.ticker.add(tick)

    return () => {
      document.body.style.cursor = 'auto'
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      gsap.ticker.remove(tick)
    }
  }, [])

  return (
    <div className="hidden md:block">
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference"
      />
      <div 
        ref={glowRef} 
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999] blur-[8px]"
        style={{ backgroundColor: 'var(--cursor-glow-color)' }}
      />
    </div>
  )
}
