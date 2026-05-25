import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const WORD = 'MEDOCODE'
const total = WORD.length
const LETTER_W = 38
const GAP = 4
const totalW = total * LETTER_W + (total - 1) * GAP
const PAD = 20

const fallOrder = [0, 4, 2, 6, 1, 5, 3, 7]

function easeOutCubic(t: number) { return 1 - Math.pow(1 - t, 3) }
function bounceDown(t: number) {
  if (t < 0.65)      return easeOutCubic(t / 0.65)
  else if (t < 0.82) return 1 - 0.07 * Math.sin(((t - 0.65) / 0.17) * Math.PI)
  else               return 1 - 0.07 * (1 - (t - 0.82) / 0.18)
}

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const { t } = useTranslation()
  const stageRef = useRef<HTMLDivElement>(null)
  const lineRef  = useRef<HTMLDivElement>(null)
  const rafRef   = useRef<number>(0)

  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    const stage = stageRef.current
    const lineEl = lineRef.current
    if (!stage || !lineEl) return

    const stageW = stage.offsetWidth
    const stageH = stage.offsetHeight
    const lineY  = stageH / 2 + 30
    const startX = (stageW - totalW) / 2

    const LINE_INIT_LEFT   = 10
    const LINE_INIT_RIGHT  = stageW - 10
    const LINE_FINAL_LEFT  = startX - PAD
    const LINE_FINAL_RIGHT = startX + totalW + PAD

    lineEl.style.top   = (lineY + 125) + 'px'
    lineEl.style.left  = LINE_INIT_LEFT + 'px'
    lineEl.style.width = (LINE_INIT_RIGHT - LINE_INIT_LEFT) + 'px'

    const finalX = (i: number) => startX + i * (LETTER_W + GAP)
    const finalY = () => lineY + 65  // الحروف توقع فوق الخط مباشرة
    const dropX  = (i: number) =>
      LINE_INIT_LEFT + (i / (total - 1)) * (LINE_INIT_RIGHT - LINE_INIT_LEFT - LETTER_W)

    const DROP_DUR      = 0.5
    const STAGGER       = 0.3
    const lastFallStart = 0.4 + (total - 1) * STAGGER
    const rollStart     = lastFallStart + DROP_DUR + 0.2
    const rollEnd       = rollStart + 0.7

    const letters = WORD.split('').map((char, i) => {
      const el = document.createElement('span')
      el.textContent = char
      el.style.cssText = `
        font-family: 'Geist Sans', system-ui, sans-serif;
        font-size: 56px;
        font-weight: 700;
        color: #ffffff;
        display: inline-block;
        position: absolute;
        user-select: none;
        opacity: 0;
      `
      stage.appendChild(el)

      const dx       = dropX(i)
      const fx       = finalX(i)
      const spinDir  = dx > fx ? -1 : 1
      const dist     = Math.abs(fx - dx)
      const orderIdx = fallOrder.indexOf(i)
      const dropStart = 0.4 + orderIdx * STAGGER

      return { el, dx, fx, spinDir, dist, dropStart, dropEnd: dropStart + DROP_DUR, done: false }
    })

    const t0 = performance.now()

    function tick(now: number) {
      const t = (now - t0) / 1000
      let allDone = true

      letters.forEach(l => {
        if (l.done) return
        allDone = false

        if (t < l.dropStart) {
          l.el.style.opacity = '0'

        } else if (t < l.dropEnd) {
          const p   = (t - l.dropStart) / (l.dropEnd - l.dropStart)
          const yp  = bounceDown(p)
          const y   = -90 + (finalY() + 90) * yp
          const rot = (1 - easeOutCubic(p)) * (l.spinDir * -10)
          l.el.style.opacity   = '1'
          l.el.style.left      = l.dx + 'px'
          l.el.style.top       = y + 'px'
          l.el.style.transform = `rotate(${rot}deg)`

        } else if (t < rollStart) {
          l.el.style.opacity   = '1'
          l.el.style.left      = l.dx + 'px'
          l.el.style.top       = finalY() + 'px'
          l.el.style.transform = 'rotate(0deg)'

        } else if (t < rollEnd) {
          const p   = (t - rollStart) / (rollEnd - rollStart)
          const ep  = easeOutCubic(p)
          const x   = l.dx + (l.fx - l.dx) * ep
          const rot = l.spinDir * (1 - ep) * (l.dist / 35) * 22
          l.el.style.left      = x + 'px'
          l.el.style.top       = finalY() + 'px'
          l.el.style.transform = `rotate(${rot}deg)`

        } else {
          l.el.style.left      = l.fx + 'px'
          l.el.style.top       = finalY() + 'px'
          l.el.style.transform = 'rotate(0deg)'
          l.done = true
        }
      })

      if (t < rollStart) {
        lineEl.style.left  = LINE_INIT_LEFT + 'px'
        lineEl.style.width = (LINE_INIT_RIGHT - LINE_INIT_LEFT) + 'px'
      } else {
        const p  = Math.min((t - rollStart) / (rollEnd - rollStart), 1)
        const ep = easeOutCubic(p)
        const curLeft  = LINE_INIT_LEFT  + (LINE_FINAL_LEFT  - LINE_INIT_LEFT)  * ep
        const curRight = LINE_INIT_RIGHT + (LINE_FINAL_RIGHT - LINE_INIT_RIGHT) * ep
        lineEl.style.left  = curLeft + 'px'
        lineEl.style.width = (curRight - curLeft) + 'px'
      }

      if (!allDone) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setIsLoading(false)
          document.body.classList.remove('overflow-hidden')
        }, 1000)
      }
    }

    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafRef.current)
      letters.forEach(l => l.el.remove())
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center pointer-events-auto"
        >
          <div ref={stageRef} className="relative w-full" style={{ height: '400px' }}>
            <div ref={lineRef} className="absolute" style={{ height: '1px', background: 'rgba(255,255,255,0.25)' }} />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.2, duration: 0.6 }}
            className="font-mono-label text-on-surface-variant tracking-widest pb-16"
          >
            {t('hero.subtitle', 'Creative Developer & Architect')}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}