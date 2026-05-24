import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  const count = 3000

  // Generate particles
  const [positions, colors, sizes, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const initPos = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Spread particles across the viewport with some depth (expanded space to avoid empty borders)
      const x = (Math.random() - 0.5) * viewport.width * 2.2
      const y = (Math.random() - 0.5) * viewport.height * 2.2
      const z = (Math.random() - 0.5) * 14 - 4 // Layered z-depth from background to foreground

      pos[i3] = x
      pos[i3 + 1] = y
      pos[i3 + 2] = z
      
      initPos[i3] = x
      initPos[i3 + 1] = y
      initPos[i3 + 2] = z

      // Monochromatic luxury base with 12% probability of very subtle icy blue accent
      let baseColor = new THREE.Color('#ffffff')
      const rand = Math.random()
      
      if (rand < 0.12) {
        baseColor = new THREE.Color('#b9d7ea') // ultra soft low-saturation tech blue
      } else if (rand < 0.5) {
        baseColor = new THREE.Color('#a1a1aa') // silver (zinc-400)
      } else if (rand < 0.8) {
        baseColor = new THREE.Color('#71717a') // charcoal (zinc-500)
      }

      // Mix with dark zinc-700 to fade elements smoothly into deep background depth
      const mixRatio = Math.random() * 0.4
      const c = baseColor.clone().lerp(new THREE.Color('#3f3f46'), mixRatio)
      
      col[i3] = c.r
      col[i3 + 1] = c.g
      col[i3 + 2] = c.b

      // Size distribution: power-law gives many small distant dots & a few large foreground ones
      const randomPower = Math.pow(Math.random(), 2.0)
      siz[i] = (randomPower * 4.0 + 1.0) * 1.5 // 3x larger size: 1.5 to 7.5
    }

    return [pos, col, siz, initPos]
  }, [count, viewport])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
      uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
    }),
    []
  )

  useFrame((state) => {
    if (!pointsRef.current) return
    
    // Update uniforms
    const mat = pointsRef.current.material as THREE.ShaderMaterial
    mat.uniforms.uTime.value = state.clock.elapsedTime
    
    // Smooth mouse position update
    mat.uniforms.uMouse.value.lerp(
      new THREE.Vector2(
        (mouse.x * viewport.width) / 2,
        (mouse.y * viewport.height) / 2
      ),
      0.05
    )

    // Subtle overall rotation
    pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    pointsRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.1) * 0.05
  })

  // Custom shader material for particles
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
      
      // Multi-frequency organic floating movement
      pos.y += sin(uTime * 0.35 + initialPosition.x * 0.4) * 0.4;
      pos.x += cos(uTime * 0.25 + initialPosition.y * 0.4) * 0.4;
      pos.z += sin(uTime * 0.15 + initialPosition.z * 0.4) * 0.3;
      
      // Continuous, elastic mouse repulsion (prevents jitter and sudden snaps)
      vec2 dir = pos.xy - uMouse;
      float distToMouse = length(dir);
      float repulsionRadius = 4.5;
      
      if (distToMouse < repulsionRadius) {
        float force = smoothstep(repulsionRadius, 0.0, distToMouse);
        force = pow(force, 1.5); // Add soft exponential falloff
        vec2 dirNormalized = (distToMouse > 0.001) ? normalize(dir) : vec2(1.0, 0.0);
        pos.xy += dirNormalized * force * 1.5;
      }
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Camera-space depth calculation
      float distToCamera = -mvPosition.z;
      
      // Fade out particles that are too close (near lens) or too far (fog depth)
      float nearFade = smoothstep(1.5, 3.5, distToCamera);
      float farFade = smoothstep(16.0, 10.0, distToCamera);
      vDepthOpacity = nearFade * farFade;
      
      // Size attenuation based on depth, clamped to avoid extreme sizes
      gl_PointSize = clamp(size * uPixelRatio * (20.0 / distToCamera), 1.0, 120.0);
    }
  `

  const fragmentShader = `
    varying vec3 vColor;
    varying float vDepthOpacity;
    
    void main() {
      // Soft circular particles
      float dist = distance(gl_PointCoord, vec2(0.5));
      if (dist > 0.5) discard;
      
      // Multi-component bokeh glow effect (sharp center core + wide soft halo glow)
      float intensity = smoothstep(0.5, 0.0, dist);
      float core = pow(intensity, 4.0) * 0.9;
      float halo = pow(intensity, 1.5) * 0.35;
      float glow = core + halo;
      
      // Combine with depth-fade opacity
      float finalAlpha = glow * vDepthOpacity;
      
      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
        <bufferAttribute
          attach="attributes-initialPosition"
          args={[initialPositions, 3]}
        />
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
