import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';


const Spline = lazy(() => import('@splinetool/react-spline'));

/**
 * Synchronous check — runs once at component init (not in an effect),
 * so the very first render already knows whether to bail out.
 */
function detectLowPower(): boolean {
  if (typeof window === 'undefined') return true;
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isVeryLowConcurrency = (navigator.hardwareConcurrency || 8) <= 2;
  return isMobile || prefersReducedMotion || isVeryLowConcurrency;
}

export function HeroSpline() {
  // Evaluated synchronously on first render — no effect, no re-render.
  const [isLowPower] = useState(detectLowPower);

  // ── Mobile / low-power: return null immediately ──────────────────
  // No hooks below this point run on mobile because React guarantees
  // hooks are called in order and we always call the same number of
  // hooks regardless of isLowPower (they just early-return internally).

  const [shouldMount, setShouldMount] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLowPower) return;              // ← guard: nothing runs on mobile

    let hasTriggered = false;
    let fallbackTimer: ReturnType<typeof setTimeout>;

    const triggerMount = () => {
      if (hasTriggered) return;
      hasTriggered = true;

      // Clean up all listeners and the timer immediately
      window.removeEventListener('scroll', triggerMount);
      window.removeEventListener('mousemove', triggerMount);
      window.removeEventListener('touchstart', triggerMount);
      clearTimeout(fallbackTimer);

      // Defer mounting until the main thread is idle
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(
          () => setShouldMount(true),
          { timeout: 2000 },
        );
      } else {
        setShouldMount(true);
      }
    };

    // Listen for the first user interaction
    window.addEventListener('scroll', triggerMount, { once: true, passive: true });
    window.addEventListener('mousemove', triggerMount, { once: true, passive: true });
    window.addEventListener('touchstart', triggerMount, { once: true, passive: true });

    // Fallback timer for users who land and read without interacting
    fallbackTimer = setTimeout(triggerMount, 8000);

    return () => {
      window.removeEventListener('scroll', triggerMount);
      window.removeEventListener('mousemove', triggerMount);
      window.removeEventListener('touchstart', triggerMount);
      clearTimeout(fallbackTimer);
    };
  }, [isLowPower]);

  useEffect(() => {
    if (isLowPower) return;              // ← guard: no observer on mobile

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: '200px' },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLowPower]);

  const onLoad = (splineApp: any) => {
    const renderer = (splineApp as unknown as {
      _renderer?: { setPixelRatio?: (ratio: number) => void };
    })._renderer;
    try {
      renderer?.setPixelRatio?.(Math.min(window.devicePixelRatio || 1, 1.5));
    } catch (e) {
      console.warn('Could not set Spline pixel ratio', e);
    }
  };

  // ── Render ───────────────────────────────────────────────────────
  if (isLowPower) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: 'auto', backgroundColor: 'var(--hero-scene-bg)', transition: 'background-color 0.35s ease' }}
    >
      {shouldMount && isIntersecting && (
        <Suspense fallback={
          <div
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'radial-gradient(ellipse at 50% 40%, var(--hero-scene-bg) 0%, transparent 70%)',
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
        }>
          <Spline
            scene="https://prod.spline.design/Qyk3g2NhTZdzI8Rq/scene.splinecode"
            onLoad={onLoad}
          />
        </Suspense>
      )}
    </div>
  );
}