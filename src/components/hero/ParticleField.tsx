import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const count = 2000
  const smoothMouse = useRef(new THREE.Vector2(0, 0))
  const rawMouse = useRef(new THREE.Vector2(0, 0))

  // تتبع الماوس بـ event listener عادي — مش بيتأثر بالـ scroll
  useMemo(() => {
    const handler = (e: MouseEvent) => {
      rawMouse.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      )
    }
    window.addEventListener('mousemove', handler, { passive: true })
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  // أرقام ثابتة — مش بتتغير مع viewport أو scroll
  const [positions, colors, sizes, initialPositions] = useMemo(() => {
    const pos     = new Float32Array(count * 3)
    const col     = new Float32Array(count * 3)
    const siz     = new Float32Array(count)
    const initPos = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const x = (Math.random() - 0.5) * 20
      const y = (Math.random() - 0.5) * 14
      const z = (Math.random() - 0.5) * 14 - 4

      pos[i3] = x; pos[i3+1] = y; pos[i3+2] = z
      initPos[i3] = x; initPos[i3+1] = y; initPos[i3+2] = z

      let baseColor: THREE.Color
      const rand = Math.random()
      if      (rand < 0.25) baseColor = new THREE.Color('#60a5fa')
      else if (rand < 0.45) baseColor = new THREE.Color('#93c5fd')
      else if (rand < 0.60) baseColor = new THREE.Color('#bfdbfe')
      else if (rand < 0.75) baseColor = new THREE.Color('#38bdf8')
      else if (rand < 0.88) baseColor = new THREE.Color('#a1a1aa')
      else                  baseColor = new THREE.Color('#ffffff')

      const c = baseColor.clone().lerp(new THREE.Color('#0f172a'), Math.random() * 0.35)
      col[i3] = c.r; col[i3+1] = c.g; col[i3+2] = c.b
      siz[i] = (Math.pow(Math.random(), 2.0) * 4.0 + 1.0) * 1.5
    }

    return [pos, col, siz, initPos]
  }, [count])

  const uniforms = useMemo(() => ({
    uTime:       { value: 0 },
    uMouse:      { value: new THREE.Vector2(0, 0) },
    uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
  }), [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const mat = pointsRef.current.material as THREE.ShaderMaterial
    mat.uniforms.uTime.value = state.clock.elapsedTime

    // smooth mouse بأرقام ثابتة من الـ window مش من الـ viewport
    smoothMouse.current.lerp(
      new THREE.Vector2(
        rawMouse.current.x * 5,
        rawMouse.current.y * 4
      ),
      0.03
    )
    mat.uniforms.uMouse.value.copy(smoothMouse.current)

    pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08
    pointsRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.05) * 0.04
  })

  const vertexShader = `
    uniform float uTime;
    uniform vec2 uMouse;
    uniform float uPixelRatio;
    attribute float size;
    attribute vec3 initialPosition;
    varying vec3 vColor;
    varying float vDepthOpacity;

    void main() {
      vColor = color;
      vec3 pos = initialPosition;
      pos.y += sin(uTime * 0.3 + initialPosition.x * 0.4) * 0.35;
      pos.x += cos(uTime * 0.2 + initialPosition.y * 0.4) * 0.35;
      pos.z += sin(uTime * 0.12 + initialPosition.z * 0.4) * 0.25;

      vec2 dir = pos.xy - uMouse;
      float distToMouse = length(dir);
      float repulsionRadius = 3.5;
      if (distToMouse < repulsionRadius) {
        float force = pow(smoothstep(repulsionRadius, 0.0, distToMouse), 2.0);
        vec2 dirNorm = (distToMouse > 0.001) ? normalize(dir) : vec2(1.0, 0.0);
        pos.xy += dirNorm * force * 1.2;
      }

      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      float distToCamera = -mvPosition.z;
      float nearFade = smoothstep(1.5, 3.5, distToCamera);
      float farFade  = smoothstep(16.0, 10.0, distToCamera);
      vDepthOpacity  = nearFade * farFade;
      gl_PointSize   = clamp(size * uPixelRatio * (20.0 / distToCamera), 1.0, 120.0);
    }
  `

  const fragmentShader = `
    varying vec3 vColor;
    varying float vDepthOpacity;

    void main() {
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      float intensity  = smoothstep(0.5, 0.0, dist);
      float core       = pow(intensity, 4.0) * 0.9;
      float halo       = pow(intensity, 1.5) * 0.35;
      float finalAlpha = (core + halo) * vDepthOpacity;
      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position"        args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"           args={[colors, 3]} />
        <bufferAttribute attach="attributes-size"            args={[sizes, 1]} />
        <bufferAttribute attach="attributes-initialPosition" args={[initialPositions, 3]} />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        vertexColors
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </points>
  )
}