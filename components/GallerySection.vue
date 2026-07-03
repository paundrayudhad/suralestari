<template>
  <section id="galeri" class="py-24 bg-sura-cream-200 relative">
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sura-gold-300/50 to-transparent"></div>
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16" data-reveal>
        <h4 class="text-sura-gold-500 font-semibold tracking-[0.2em] text-xs mb-4 uppercase">Koleksi Visual</h4>
        <h2 class="text-4xl md:text-5xl font-serif text-sura-green-900 mb-6 tracking-tight leading-[1.05]">Guratan Malam, <br/><span class="italic text-sura-earth-600 font-light">Rekam Jejak Zaman.</span></h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px]">
        <div class="rounded-xl overflow-hidden relative group lg:col-span-2 lg:row-span-2 shadow-sm" data-reveal>
          <NuxtImg src="/laweyan.jpg" alt="Proses membatik" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-sura-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p class="text-sura-cream-100 font-medium">Proses mencanting di salah satu galeri Laweyan.</p>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden relative group shadow-sm" data-reveal>
          <NuxtImg src="/laweyan.jpg" alt="Motif kain batik" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-sura-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p class="text-sura-cream-100 font-medium text-sm">Motif klasik warisan nenek moyang.</p>
          </div>
        </div>

        <div class="rounded-xl overflow-hidden relative group shadow-sm" data-reveal>
          <NuxtImg src="/laweyan.jpg" alt="Sudut kampung" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-sura-green-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <p class="text-sura-cream-100 font-medium text-sm">Sudut estetik Kampung Laweyan.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
