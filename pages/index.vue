<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

// Initialize scroll reveal observer
useScrollReveal('[data-reveal]')
</script>

<template>
  <main class="bg-sura-cream-100 min-h-screen font-sans relative">
    <!-- Navbar remains fixed on top -->
    <TheNavbar class="relative z-50" />
    
    <!-- Hero stays behind and is pinned to the top -->
    <div class="sticky top-0 h-screen w-full z-0 overflow-hidden">
      <HeroSection />
    </div>

    <!-- The rest of the content scrolls UP over the Hero like a curtain -->
    <div class="relative z-10 bg-sura-cream-100 shadow-[0_-20px_50px_rgba(20,52,43,0.15)] rounded-t-[3rem] pb-0">
      <AboutSection />
      <DestinationHero />
      <DestinationCards />
      <EcoJourney />
      <ImpactStats />
      <GallerySection />
      <Testimonials />
      <CtaSection />
      <TheFooter />
    </div>
  </main>
</template>
