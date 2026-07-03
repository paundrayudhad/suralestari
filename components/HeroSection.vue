<script setup>
import { useParallax } from '~/composables/useParallax'
const { offset } = useParallax(0.25)
</script>

<template>
  <section class="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-sura-cream-200">
    <!-- Parallax Backgrounds -->
    <ThreeParallaxBackground />
    
    <div class="absolute inset-0 pointer-events-none text-sura-gold-500" :style="{ transform: `translateY(${offset}px)` }">
      <KawungPattern class="opacity-[0.28]" />
    </div>

    <div class="relative z-10 text-center max-w-4xl px-6 mt-20" data-reveal>
      <div class="inline-block mb-6 px-4 py-1.5 rounded-full border border-sura-gold-300 text-sura-green-700 text-xs font-semibold tracking-[0.2em] bg-sura-cream-100/50 backdrop-blur-sm uppercase">
        WISATA BERKELANJUTAN &middot; SURAKARTA
      </div>
      
      <h1 class="text-5xl md:text-7xl font-serif text-sura-green-900 leading-[1.05] mb-8 drop-shadow-sm tracking-tight">
        Menjaga Tradisi,<br/> <span class="italic text-sura-earth-600">Menghidupi Bumi.</span>
      </h1>
      
      <p class="text-lg md:text-xl text-sura-green-700 max-w-2xl mx-auto mb-10 leading-[1.8] font-light">
        SuraLestari memadukan pesona keagungan masa lampau Surakarta dengan prinsip keberlanjutan masa depan &mdash; di mana setiap jejak langkah Anda merawat bumi dan memberdayakan sang empunya tradisi.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
        <NuxtLink to="#destinasi" class="w-full sm:w-auto bg-sura-green-500 hover:bg-sura-green-700 text-sura-cream-100 px-8 py-3.5 rounded-full transition-all hover:-translate-y-1 hover:shadow-lg font-medium text-lg">
          Mulai Jelajah
        </NuxtLink>
        <NuxtLink to="#tentang" class="w-full sm:w-auto border-2 border-sura-gold-500 text-sura-green-900 hover:bg-sura-gold-300/20 px-8 py-3.5 rounded-full transition-all hover:-translate-y-1 font-medium text-lg">
          Pelajari Misi Kami
        </NuxtLink>
      </div>

      <div class="flex items-center justify-center gap-6 text-sura-green-700/80 font-medium text-sm tracking-widest">
        <div class="flex items-center gap-2">
          <Icon name="heroicons:briefcase" class="w-5 h-5 text-sura-gold-500" />
          SDG 8
        </div>
        <div class="w-1.5 h-1.5 rounded-full bg-sura-gold-300"></div>
        <div class="flex items-center gap-2">
          <Icon name="heroicons:globe-asia-australia" class="w-5 h-5 text-sura-gold-500" />
          SDG 15
        </div>
      </div>
    </div>
    
    <!-- Gradient overlay for smooth transition to next section -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-sura-cream-100 to-transparent z-10 pointer-events-none"></div>
  </section>
</template>
