<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLElement | null>(null)

let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particlesMesh: THREE.Points
let animationFrameId: number

let mouseX = 0
let mouseY = 0

// Need to safely check window existence for Nuxt SSR
const getWindowSize = () => {
  if (typeof window !== 'undefined') {
    return {
      halfX: window.innerWidth / 2,
      halfY: window.innerHeight / 2,
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: window.devicePixelRatio
    }
  }
  return { halfX: 0, halfY: 0, width: 800, height: 600, pixelRatio: 1 }
}

const init = () => {
  if (!container.value) return
  const win = getWindowSize()

  // 1. Scene setup
  scene = new THREE.Scene()

  // 2. Camera setup
  camera = new THREE.PerspectiveCamera(75, win.width / win.height, 1, 2000)
  camera.position.z = 1000

  // 3. Particles setup
  const particlesGeometry = new THREE.BufferGeometry()
  const particlesCount = 1500
  
  const posArray = new Float32Array(particlesCount * 3)
  const colorsArray = new Float32Array(particlesCount * 3)
  
  const colorPalette = [
    new THREE.Color('#2E7D5B'), // Green 500
    new THREE.Color('#C79A3B'), // Gold 500
    new THREE.Color('#7A4E2D'), // Earth 600
  ]

  for (let i = 0; i < particlesCount * 3; i+=3) {
    // Spread particles in a wide area
    posArray[i] = (Math.random() - 0.5) * 3000
    posArray[i+1] = (Math.random() - 0.5) * 3000
    posArray[i+2] = (Math.random() - 0.5) * 2000

    // Randomly pick a color from the palette
    const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
    colorsArray[i] = color.r
    colorsArray[i+1] = color.g
    colorsArray[i+2] = color.b
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3))

  const particlesMaterial = new THREE.PointsMaterial({
    size: 8,
    vertexColors: true,
    blending: THREE.NormalBlending,
    transparent: true,
    opacity: 0.6
  })

  particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // 4. Renderer setup
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setPixelRatio(win.pixelRatio)
  renderer.setSize(win.width, win.height)
  // Transparent background so the Tailwind bg shows through
  renderer.setClearColor(0x000000, 0) 
  
  container.value.appendChild(renderer.domElement)

  // 5. Event Listeners
  window.addEventListener('resize', onWindowResize)
  document.addEventListener('mousemove', onDocumentMouseMove)
}

const onWindowResize = () => {
  if (!camera || !renderer) return
  const win = getWindowSize()
  camera.aspect = win.width / win.height
  camera.updateProjectionMatrix()
  renderer.setSize(win.width, win.height)
}

const onDocumentMouseMove = (event: MouseEvent) => {
  const win = getWindowSize()
  mouseX = (event.clientX - win.halfX) * 0.5
  mouseY = (event.clientY - win.halfY) * 0.5
}

const animate = () => {
  animationFrameId = requestAnimationFrame(animate)

  if (particlesMesh) {
    // Add a slow constant rotation
    particlesMesh.rotation.y += 0.001
    particlesMesh.rotation.x += 0.0005
  }

  if (camera && scene && renderer) {
    // Smoothly interpolate camera position for a nice parallax effect
    camera.position.x += (mouseX - camera.position.x) * 0.02
    camera.position.y += (-mouseY - camera.position.y) * 0.02
    
    camera.lookAt(scene.position)
    renderer.render(scene, camera)
  }
}

onMounted(() => {
  // ensure it runs only on client
  if (typeof window !== 'undefined') {
    init()
    animate()
  }
})

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', onWindowResize)
    document.removeEventListener('mousemove', onDocumentMouseMove)
    if (animationFrameId) cancelAnimationFrame(animationFrameId)
    
    if (container.value && renderer) {
      container.value.removeChild(renderer.domElement)
    }
    
    if (renderer) renderer.dispose()
    if (scene) {
      scene.clear()
    }
  }
})
</script>

<template>
  <div ref="container" class="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>
</template>

<style scoped>
/* Ensure canvas fills the container and ignores pointer events */
div > canvas {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  pointer-events: none;
}
</style>
