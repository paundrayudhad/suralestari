<template>
  <footer class="bg-sura-green-900 text-sura-cream-100 py-16 border-t border-sura-gold-500/20">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid md:grid-cols-4 gap-12 mb-12">
        <div class="md:col-span-2">
          <h2 class="text-2xl font-serif text-sura-gold-300 mb-4">SuraLestari</h2>
          <p class="text-sura-cream-200/80 mb-6 max-w-sm">Menjelajah Solo, Melestarikan Warisan.</p>
        </div>
        
        <div>
          <h3 class="font-bold text-sura-gold-500 mb-4 tracking-widest text-sm uppercase">Navigasi</h3>
          <ul class="space-y-3">
            <li><NuxtLink to="#tentang" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Tentang</NuxtLink></li>
            <li><NuxtLink to="#destinasi" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Destinasi</NuxtLink></li>
            <li><NuxtLink to="#eco-journey" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Eco Journey</NuxtLink></li>
            <li><NuxtLink to="#galeri" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Galeri</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-sura-gold-500 mb-4 tracking-widest text-sm uppercase">Kontak</h3>
          <ul class="space-y-3">
            <li><a href="#" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Instagram</a></li>
            <li><a href="#" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Twitter</a></li>
            <li><a href="#" class="text-sura-cream-200 hover:text-sura-gold-300 transition-colors">Email</a></li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-sura-gold-500/20 text-sm text-sura-cream-200/60 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Dibuat untuk SDGs Creative Web Competition &mdash; BytesFest 2026.</p>
        <p>Proyek edukasi non-komersial.</p>
      </div>
    </div>
  </footer>
</template>
