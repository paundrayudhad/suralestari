<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const sectionRef = ref<HTMLElement | null>(null)
const trackRef = ref<HTMLElement | null>(null)
let ctx: gsap.Context

onMounted(() => {
  if (typeof window === 'undefined') return
  gsap.registerPlugin(ScrollTrigger)
  
  // Timeout ensures DOM images are rendered so scrollWidth is accurate
  setTimeout(() => {
    ctx = gsap.context(() => {
      if (!sectionRef.value || !trackRef.value) return
      
      const track = trackRef.value
      
      // Calculate how far to translate the track
      const getScrollAmount = () => {
        let trackWidth = track.scrollWidth;
        return -(trackWidth - window.innerWidth + window.innerWidth * 0.1); // add 10vw padding at the end
      }

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.value,
          pin: true,
          scrub: 1, // Smooth scrubbing
          start: "top top",
          end: () => `+=${track.scrollWidth}`, // Scroll duration based on total width
          invalidateOnRefresh: true, // Recalculate on resize
        }
      })
    })
  }, 100)
})

onUnmounted(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <section ref="sectionRef" class="h-screen bg-sura-cream-100 flex flex-col justify-center overflow-hidden relative">
    <!-- Divider decor -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sura-gold-300/50 to-transparent"></div>
    
    <!-- Horizontal Track -->
    <div ref="trackRef" class="flex flex-nowrap items-center gap-8 md:gap-16 px-6 md:px-[10vw] w-max">
      
      <!-- Title Block (Card 0) -->
      <div class="w-[85vw] md:w-[400px] shrink-0 pr-8">
        <h4 class="text-sura-gold-500 font-semibold tracking-widest text-sm mb-4 uppercase">Destinasi</h4>
        <h2 class="text-5xl md:text-7xl font-serif text-sura-green-900 leading-[1.1] mb-6">Jelajah Sekitar</h2>
        <p class="text-lg text-sura-green-700 leading-relaxed">
          Temukan pesona budaya dan alam Surakarta melalui lensa pariwisata berkelanjutan.
        </p>
      </div>

      <!-- Card 1 -->
      <div class="w-[85vw] md:w-[500px] shrink-0 bg-sura-cream-200 rounded-[2.5rem] overflow-hidden hover:shadow-[0_10px_30px_rgba(20,52,43,0.12)] transition-all duration-300 border border-sura-gold-300/30 group">
        <div class="aspect-[4/3] overflow-hidden relative">
          <img src="/laweyan.jpg" alt="Kampung Batik Kauman" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div class="absolute top-6 left-6 bg-sura-cream-100/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold text-sura-green-900 border border-sura-gold-300">
            Budaya &amp; Komunitas
          </div>
        </div>
        <div class="p-8 md:p-10">
          <h3 class="text-2xl font-serif text-sura-green-900 mb-3">Kampung Batik Kauman</h3>
          <p class="text-sura-green-700 text-base leading-relaxed">Batik klasik bernuansa keraton, jelajahi labirin gang sempit dengan kehangatan komunitas pengrajin asli.</p>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="w-[85vw] md:w-[500px] shrink-0 bg-sura-cream-200 rounded-[2.5rem] overflow-hidden hover:shadow-[0_10px_30px_rgba(20,52,43,0.12)] transition-all duration-300 border border-sura-gold-300/30 group">
        <div class="aspect-[4/3] overflow-hidden relative">
          <img src="/laweyan.jpg" alt="Taman Balekambang" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div class="absolute top-6 left-6 bg-sura-cream-100/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold text-sura-green-900 border border-sura-gold-300">
            Ekowisata
          </div>
        </div>
        <div class="p-8 md:p-10">
          <h3 class="text-2xl font-serif text-sura-green-900 mb-3">Taman Balekambang</h3>
          <p class="text-sura-green-700 text-base leading-relaxed">Paru-paru kota Surakarta. Ruang hijau terbuka yang ideal untuk wisata edukasi alam dan rekreasi keluarga.</p>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="w-[85vw] md:w-[500px] shrink-0 bg-sura-cream-200 rounded-[2.5rem] overflow-hidden hover:shadow-[0_10px_30px_rgba(20,52,43,0.12)] transition-all duration-300 border border-sura-gold-300/30 group">
        <div class="aspect-[4/3] overflow-hidden relative">
          <img src="/laweyan.jpg" alt="Kuliner Solo" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
          <div class="absolute top-6 left-6 bg-sura-cream-100/90 backdrop-blur px-4 py-1.5 rounded-full text-sm font-semibold text-sura-green-900 border border-sura-gold-300">
            Ekonomi Lokal
          </div>
        </div>
        <div class="p-8 md:p-10">
          <h3 class="text-2xl font-serif text-sura-green-900 mb-3">Kuliner &amp; UMKM Solo</h3>
          <p class="text-sura-green-700 text-base leading-relaxed">Rasakan cita rasa lokal otentik dari hidangan resep turun-temurun yang turut menghidupi warga sekitar.</p>
        </div>
      </div>

    </div>
  </section>
</template>
