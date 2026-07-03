<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { useNuxtApp } from '#app'

const preloader = ref<HTMLElement | null>(null)
const textContainer = ref<HTMLElement | null>(null)
// Rangkaian teks yang akan muncul berurutan
const words = ["Budaya.", "Tradisi.", "Lestari.", "SuraLestari."]

onMounted(() => {
  if (typeof window === 'undefined') return
  
  // Mengambil instance lenis dari plugin Nuxt
  const { $lenis } = useNuxtApp() as any
  
  // Matikan fungsi scroll selama preloader berjalan
  if ($lenis) {
    $lenis.stop()
  } else {
    document.body.style.overflow = 'hidden'
  }

  // Membuat timeline animasi GSAP
  const tl = gsap.timeline({
    onComplete: () => {
      // Aktifkan scroll kembali setelah animasi selesai
      if ($lenis) {
        $lenis.start()
      } else {
        document.body.style.overflow = ''
      }
      
      // Hapus elemen preloader dari DOM setelah selesai agar tidak mengganggu
      if (preloader.value) {
        preloader.value.style.display = 'none'
      }
    }
  })

  // Animasikan setiap kata
  const wordElements = textContainer.value?.querySelectorAll('span')
  if (wordElements) {
    wordElements.forEach((word, index) => {
      // Efek meluncur dari bawah dan muncul
      tl.fromTo(word, 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }
      )
      
      // Jika bukan kata terakhir, hilangkan dengan meluncur ke atas
      if (index < wordElements.length - 1) {
        tl.to(word, { opacity: 0, y: -40, duration: 0.3, ease: "power2.in" }, "+=0.15")
      } else {
        // Kata terakhir (SuraLestari) bertahan lebih lama sebelum layarnya ditarik
        tl.to(word, { opacity: 0, y: -40, duration: 0.4, ease: "power2.in" }, "+=0.5")
      }
    })
  }

  // Menarik seluruh background preloader ke atas (mengungkap website)
  tl.to(preloader.value, {
    yPercent: -100,
    duration: 0.9,
    ease: "power4.inOut"
  }, "-=0.3") // Mulai sedikit lebih awal sebelum kata terakhir benar-benar hilang
})
</script>

<template>
  <div ref="preloader" class="fixed inset-0 z-[100000] bg-sura-green-900 flex items-center justify-center pointer-events-none">
    <div ref="textContainer" class="relative overflow-hidden h-32 flex items-center justify-center w-full">
      <span 
        v-for="(word, index) in words" 
        :key="index" 
        class="absolute text-4xl md:text-6xl lg:text-7xl font-serif text-sura-gold-300 opacity-0 tracking-[0.1em]"
      >
        {{ word }}
      </span>
    </div>
  </div>
</template>
