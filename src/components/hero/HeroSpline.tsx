import React, { Suspense, lazy, useEffect, useState, useRef } from 'react';
import type { Application } from '@splinetool/runtime';

const Spline = lazy(() => import('@splinetool/react-spline'));

export function HeroSpline() {
  const [shouldMount, setShouldMount] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [isLowPower, setIsLowPower] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1. Detect low power/mobile conditions.
    // NOTE: hardwareConcurrency is reported by a lot of perfectly normal
    // desktops/laptops as 4 or even lower (and some browsers cap it for
    // fingerprint resistance), so treating "<= 4" as low-power is too
    // aggressive and was silently hiding the scene on regular machines.
    // Screen width + reduced-motion are reliable; cores are now just a
    // secondary, much stricter signal.
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isVeryLowConcurrency = (navigator.hardwareConcurrency || 8) <= 2;

    const lowPower = isMobile || prefersReducedMotion || isVeryLowConcurrency;

    if (lowPower) {
      // Debug visibility: if the scene is ever missing again, check the
      // console first — this tells you exactly which condition fired.
      console.info('[HeroSpline] Skipping 3D scene — low power conditions:', {
        isMobile,
        prefersReducedMotion,
        isVeryLowConcurrency,
        hardwareConcurrency: navigator.hardwareConcurrency,
      });
      setIsLowPower(true);
      return;
    }

    // 2. Defer mounting until after paint.
    // Delay long enough for first paint + interactivity (LCP, fonts, nav)
    // to finish before the heavy Spline runtime (~2MB JS + WASM) starts
    // executing and blocking the main thread.
    const mountTimeout = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(
          () => setShouldMount(true),
          { timeout: 4000 } // ensure it fires even if the browser stays busy
        );
      } else {
        setShouldMount(true);
      }
    }, 2000);

    return () => clearTimeout(mountTimeout);
  }, []);

  useEffect(() => {
    if (isLowPower) return;

    // 3. Intersection observer for unmounting when off-screen.
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '200px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [isLowPower]);

  const onLoad = (splineApp: Application) => {
    // There is no public setPixelRatio() on the Application API (confirmed
    // against the published runtime.d.ts) — the previous check silently did
    // nothing. The renderer is reachable as a private field, so cap it
    // defensively instead.
    const renderer = (splineApp as unknown as {
      _renderer?: { setPixelRatio?: (ratio: number) => void };
    })._renderer;
    try {
      renderer?.setPixelRatio?.(Math.min(window.devicePixelRatio || 1, 1.5));
    } catch (e) {
      console.warn('Could not set Spline pixel ratio', e);
    }
  };

  if (isLowPower) {
    // Fallback for mobile/low-power: gradients in HeroSection already cover
    // the background, so null is fine here — but now it's a deliberate,
    // logged decision instead of an accidental one.
    return null;
  }

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