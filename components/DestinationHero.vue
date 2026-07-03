<template>
  <section id="destinasi" class="py-24 bg-sura-cream-200 relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- Content -->
        <div class="lg:w-1/2" data-reveal>
          <h4 class="text-sura-gold-500 font-semibold tracking-[0.2em] text-xs mb-4 uppercase">Destinasi Unggulan</h4>
          <h2 class="text-4xl md:text-5xl font-serif text-sura-green-900 mb-6 tracking-tight leading-[1.05]">Jantung Peradaban yang <br/><span class="italic text-sura-earth-600 font-light">Berdetak Selaras Alam.</span></h2>
          <p class="text-lg text-sura-green-700 leading-[1.8] mb-8 font-light">
            Kampung Batik Laweyan, sentra batik tertua di Solo. Di balik gang-gang sempit berdinding tinggi, tradisi luhur, arsitektur Jawa-Eropa, dan semangat keberlanjutan hidup dalam satu harmoni.
          </p>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div class="flex items-start gap-3 p-4 bg-sura-cream-100 rounded-xl border border-sura-gold-300/30">
              <Icon name="heroicons:sparkles" class="w-6 h-6 text-sura-gold-500 shrink-0 mt-0.5" />
              <span class="text-sura-green-900 font-medium text-sm leading-snug">250+ motif batik dipatenkan</span>
            </div>
            <div class="flex items-start gap-3 p-4 bg-sura-cream-100 rounded-xl border border-sura-gold-300/30">
              <Icon name="heroicons:building-office-2" class="w-6 h-6 text-sura-gold-500 shrink-0 mt-0.5" />
              <span class="text-sura-green-900 font-medium text-sm leading-snug">Kawasan cagar budaya nasional</span>
            </div>
            <div class="flex items-start gap-3 p-4 bg-sura-cream-100 rounded-xl border border-sura-gold-300/30">
              <Icon name="heroicons:arrow-path-rounded-square" class="w-6 h-6 text-sura-green-500 shrink-0 mt-0.5" />
              <span class="text-sura-green-900 font-medium text-sm leading-snug">IPAL: pengolahan limbah batik ramah lingkungan</span>
            </div>
            <div class="flex items-start gap-3 p-4 bg-sura-cream-100 rounded-xl border border-sura-gold-300/30">
              <Icon name="heroicons:academic-cap" class="w-6 h-6 text-sura-green-500 shrink-0 mt-0.5" />
              <span class="text-sura-green-900 font-medium text-sm leading-snug">Workshop membatik untuk pengunjung</span>
            </div>
          </div>

          <NuxtLink to="#eco-journey" class="inline-flex items-center gap-2 bg-sura-green-500 hover:bg-sura-green-700 text-sura-cream-100 px-6 py-3 rounded-full transition-transform hover:-translate-y-1 font-medium">
            Lihat Pengalaman di Laweyan
            <Icon name="heroicons:arrow-right" class="w-5 h-5" />
          </NuxtLink>
        </div>
        
        <!-- Image/Visual -->
        <div class="lg:w-1/2 relative" data-reveal>
          <div class="aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(20,52,43,0.15)] relative">
            <NuxtImg src="/laweyan.jpg" alt="Kampung Batik Laweyan" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-sura-green-900/60 to-transparent"></div>
          </div>
          <div class="absolute -bottom-8 -left-8 w-48 h-48 bg-sura-gold-300/20 rounded-full blur-3xl pointer-events-none"></div>
          <div class="absolute -top-8 -right-8 w-64 h-64 bg-sura-green-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>
      </div>
    </div>
  </section>
</template>
