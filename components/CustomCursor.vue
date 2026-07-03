<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

const cursorDot = ref<HTMLElement | null>(null)
const cursorRing = ref<HTMLElement | null>(null)
let ctx: gsap.Context

onMounted(() => {
  if (typeof window === 'undefined') return
  
  // Only activate on pointer devices
  if (!window.matchMedia("(pointer: fine)").matches) return

  ctx = gsap.context(() => {
    // Initial hidden state to prevent jumping from top-left
    gsap.set([cursorDot.value, cursorRing.value], { opacity: 0 })

    // QuickTo for high performance mouse tracking
    const xToDot = gsap.quickTo(cursorDot.value, "x", { duration: 0.1, ease: "power3" })
    const yToDot = gsap.quickTo(cursorDot.value, "y", { duration: 0.1, ease: "power3" })
    
    const xToRing = gsap.quickTo(cursorRing.value, "x", { duration: 0.4, ease: "power3" })
    const yToRing = gsap.quickTo(cursorRing.value, "y", { duration: 0.4, ease: "power3" })

    let isVisible = false

    const moveCursor = (e: MouseEvent) => {
      if (!isVisible) {
        gsap.to([cursorDot.value, cursorRing.value], { opacity: 1, duration: 0.3 })
        isVisible = true
      }
      // Center the cursors on the mouse
      xToDot(e.clientX)
      yToDot(e.clientY)
      xToRing(e.clientX)
      yToRing(e.clientY)
    }

    window.addEventListener('mousemove', moveCursor)

    // Handle magnetic hover effects on links and buttons
    const attachMagneticEffects = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, select, textarea')
      
      interactiveElements.forEach((el) => {
        // Prevent multiple bindings
        if ((el as any)._hasMagnetic) return
        (el as any)._hasMagnetic = true

        el.addEventListener('mouseenter', () => {
          gsap.to(cursorRing.value, {
            scale: 1.5,
            backgroundColor: 'rgba(46, 125, 91, 0.1)', // sura-green-500 with opacity
            borderColor: 'rgba(46, 125, 91, 0)',
            duration: 0.3
          })
          gsap.to(cursorDot.value, {
            scale: 0.5,
            duration: 0.2
          })
        })

        el.addEventListener('mouseleave', () => {
          gsap.to(cursorRing.value, {
            scale: 1,
            backgroundColor: 'transparent',
            borderColor: '#2E7D5B', // sura-green-500
            duration: 0.3
          })
          gsap.to(cursorDot.value, {
            scale: 1,
            duration: 0.2
          })
        })
      })
    }

    // Attach initial effects
    attachMagneticEffects()

    // Mutation observer to handle elements added dynamically (e.g. via navigation)
    const observer = new MutationObserver(() => {
      attachMagneticEffects()
    })
    
    observer.observe(document.body, { childList: true, subtree: true })

    // Cleanup listeners on context revert
    return () => {
      window.removeEventListener('mousemove', moveCursor)
      observer.disconnect()
    }
  })
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <div class="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
    <!-- Inner Dot -->
    <div ref="cursorDot" class="absolute top-0 left-0 w-2 h-2 bg-sura-green-700 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
    
    <!-- Outer Ring -->
    <div ref="cursorRing" class="absolute top-0 left-0 w-10 h-10 border border-sura-green-500 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
  </div>
</template>
