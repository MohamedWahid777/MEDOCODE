import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { mouse, viewport } = useThree()
  const count = 1500

  // Generate particles
  const [positions, colors, sizes, initialPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const siz = new Float32Array(count)
    const initPos = new Float32Array(count * 3)

    const colorScheme = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Spread particles across the viewport with some depth
      const x = (Math.random() - 0.5) * viewport.width * 1.5
      const y = (Math.random() - 0.5) * viewport.height * 1.5
      const z = (Math.random() - 0.5) * 10 - 2 // Mostly behind the text

      pos[i3] = x
      pos[i3 + 1] = y
      pos[i3 + 2] = z
      
      initPos[i3] = x
      initPos[i3 + 1] = y
      initPos[i3 + 2] = z

      // Subtle color variations (mostly white/silver)
      const mixRatio = Math.random() * 0.3
      const c = colorScheme.clone().lerp(new THREE.Color('#a1a1aa'), mixRatio)
      
      col[i3] = c.r
      col[i3 + 1] = c.g
      col[i3 + 2] = c.b

      // Varied sizes
      siz[i] = Math.random() * 1.5 + 0.5
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
    
    void main() {
      vColor = color;
      
      vec3 pos = initialPosition;
      
      // Floating movement
      pos.y += sin(uTime * 0.5 + initialPosition.x * 2.0) * 0.3;
      pos.x += cos(uTime * 0.3 + initialPosition.y * 2.0) * 0.3;
      
      // Mouse repulsion
      float distToMouse = distance(pos.xy, uMouse);
      float repulsionRadius = 3.0;
      
      if(distToMouse < repulsionRadius) {
        float force = (repulsionRadius - distToMouse) / repulsionRadius;
        vec2 dir = normalize(pos.xy - uMouse);
        pos.xy += dir * force * 0.5;
      }
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_Position = projectionMatrix * mvPosition;
      
      // Size attenuation based on depth
      gl_PointSize = size * uPixelRatio * (10.0 / -mvPosition.z);
    }
  `

  const fragmentShader = `
    varying vec3 vColor;
    
    void main() {
      // Soft circular particles
      float dist = distance(gl_PointCoord, vec2(0.5));
      if(dist > 0.5) discard;
      
      // Glow effect
      float alpha = (0.5 - dist) * 2.0;
      alpha = pow(alpha, 1.5) * 0.6; // Max opacity 0.6
      
      gl_FragColor = vec4(vColor, alpha);
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
