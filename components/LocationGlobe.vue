<script setup>
import { onMounted, ref, onBeforeUnmount } from 'vue'
import createGlobe from 'cobe'

const canvasRef = ref(null)
let globe = null

onMounted(() => {
  let phi = 0
  
  if (canvasRef.value) {
    globe = createGlobe(canvasRef.value, {
      devicePixelRatio: 2,
      width: 800,
      height: 800,
      phi: 0,
      theta: 0.2, // Tilted slightly to show Indonesia better
      dark: 0, 
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.96, 0.94, 0.89], // Light cream (Sura-Cream)
      markerColor: [0.18, 0.49, 0.35], // Sura-Green-500
      glowColor: [0.85, 0.74, 0.42], // Sura-Gold glow for the atmosphere
      markers: [
        // Pin at Surakarta (Solo), Central Java: -7.5666, 110.8166
        { location: [-7.5666, 110.8166], size: 0.1 }
      ],
      onRender: (state) => {
        // Automatically rotate the globe
        state.phi = phi
        phi += 0.003
      }
    })
  }
})

onBeforeUnmount(() => {
  if (globe) {
    globe.destroy()
  }
})
</script>

<template>
  <div class="w-full aspect-square flex items-center justify-center relative">
    <canvas
      ref="canvasRef"
      style="width: 100%; height: 100%; max-width: 500px; max-height: 500px; contain: layout paint size;"
    ></canvas>
    
    <!-- Backdrop glow -->
    <div class="absolute inset-0 bg-sura-gold-300/10 rounded-full blur-[80px] -z-10 pointer-events-none scale-75"></div>
  </div>
</template>
