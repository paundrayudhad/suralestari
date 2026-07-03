<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
      isScrolled ? 'bg-sura-cream-100/90 backdrop-blur-md shadow-sm border-sura-gold-300/20 py-4' : 'bg-transparent py-6'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center">
      <NuxtLink to="/" class="font-serif text-2xl font-bold text-sura-green-900 flex items-center gap-2">
        SuraLestari
      </NuxtLink>
      
      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-8">
        <NuxtLink to="#tentang" class="text-sura-green-900 hover:text-sura-green-500 transition-colors font-medium">Tentang</NuxtLink>
        <NuxtLink to="#destinasi" class="text-sura-green-900 hover:text-sura-green-500 transition-colors font-medium">Destinasi</NuxtLink>
        <NuxtLink to="#eco-journey" class="text-sura-green-900 hover:text-sura-green-500 transition-colors font-medium">Eco Journey</NuxtLink>
        <NuxtLink to="#dampak" class="text-sura-green-900 hover:text-sura-green-500 transition-colors font-medium">Dampak</NuxtLink>
        <NuxtLink to="#galeri" class="text-sura-green-900 hover:text-sura-green-500 transition-colors font-medium">Galeri</NuxtLink>
        <NuxtLink to="#cta" class="bg-sura-green-500 hover:bg-sura-green-700 text-sura-cream-100 px-6 py-2 rounded-full transition-transform hover:scale-105 active:scale-95 font-medium shadow-md">Rencanakan Kunjungan</NuxtLink>
      </div>

      <!-- Mobile Menu Toggle -->
      <button @click="toggleMenu" class="md:hidden text-sura-green-900 focus:outline-none p-2 rounded-md hover:bg-sura-green-900/10 transition-colors" aria-label="Toggle Menu">
        <Icon v-if="!isMenuOpen" name="heroicons:bars-3" class="w-6 h-6" />
        <Icon v-else name="heroicons:x-mark" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isMenuOpen" class="md:hidden bg-sura-cream-100 absolute w-full border-b border-sura-gold-300/20 shadow-lg origin-top transition-all" >
      <div class="flex flex-col px-6 py-4 space-y-4">
        <NuxtLink @click="toggleMenu" to="#tentang" class="text-sura-green-900 font-medium hover:text-sura-green-500 transition-colors">Tentang</NuxtLink>
        <NuxtLink @click="toggleMenu" to="#destinasi" class="text-sura-green-900 font-medium hover:text-sura-green-500 transition-colors">Destinasi</NuxtLink>
        <NuxtLink @click="toggleMenu" to="#eco-journey" class="text-sura-green-900 font-medium hover:text-sura-green-500 transition-colors">Eco Journey</NuxtLink>
        <NuxtLink @click="toggleMenu" to="#dampak" class="text-sura-green-900 font-medium hover:text-sura-green-500 transition-colors">Dampak</NuxtLink>
        <NuxtLink @click="toggleMenu" to="#galeri" class="text-sura-green-900 font-medium hover:text-sura-green-500 transition-colors">Galeri</NuxtLink>
        <NuxtLink @click="toggleMenu" to="#cta" class="bg-sura-green-500 text-center text-sura-cream-100 px-6 py-3 rounded-full font-medium active:scale-95 transition-transform">Rencanakan Kunjungan</NuxtLink>
      </div>
    </div>
  </nav>
</template>
