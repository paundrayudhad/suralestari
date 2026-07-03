import { ref, onMounted, onUnmounted } from 'vue'

export function useParallax(speed = 0.3) {
  const offset = ref(0)
  
  const onScroll = () => { 
    offset.value = window.scrollY * speed 
  }
  
  onMounted(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) window.addEventListener('scroll', onScroll, { passive: true })
  })
  
  onUnmounted(() => window.removeEventListener('scroll', onScroll))
  
  return { offset }
}
