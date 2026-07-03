<template>
  <section class="py-24 bg-sura-green-900 relative text-sura-cream-100 overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none text-sura-gold-300 flex items-center justify-center">
      <KawungPattern class="w-[200%] h-[200%] opacity-20" />
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-16" data-reveal>
        <h4 class="text-sura-gold-500 font-semibold tracking-widest text-sm mb-4">SUARA LOKAL</h4>
        <h2 class="text-4xl md:text-5xl font-serif text-sura-cream-100 mb-6">Cerita dari Mereka yang Menjaga</h2>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-sura-green-700/50 backdrop-blur border border-sura-gold-500/20 p-10 rounded-2xl relative" data-reveal>
          <Icon name="heroicons:chat-bubble-left-ellipsis-solid" class="absolute top-6 right-6 w-12 h-12 text-sura-gold-500/20" />
          <p class="text-xl font-serif italic text-sura-cream-100 mb-6 leading-relaxed relative z-10">
            "Batik bukan cuma kain, tapi napas kampung ini."
          </p>
          <div>
            <p class="font-bold text-sura-gold-300">Bapak Susanto</p>
            <p class="text-sm text-sura-cream-200/70">Pengrajin Batik, Laweyan</p>
          </div>
        </div>

        <div class="bg-sura-green-700/50 backdrop-blur border border-sura-gold-500/20 p-10 rounded-2xl relative" data-reveal>
          <Icon name="heroicons:chat-bubble-left-ellipsis-solid" class="absolute top-6 right-6 w-12 h-12 text-sura-gold-500/20" />
          <p class="text-xl font-serif italic text-sura-cream-100 mb-6 leading-relaxed relative z-10">
            "Wisatawan yang mau belajar membatik membuat tradisi ini terus hidup."
          </p>
          <div>
            <p class="font-bold text-sura-gold-300">Ibu Ratna</p>
            <p class="text-sm text-sura-cream-200/70">Pengelola Galeri</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
