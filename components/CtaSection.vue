<template>
  <section id="cta" class="py-24 bg-sura-cream-200 relative overflow-hidden">
    <!-- Decorative faint line -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sura-gold-300/30 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-6 relative z-10">
      
      <div class="flex flex-col lg:flex-row items-center justify-between gap-16">
        
        <!-- Text Content -->
        <div class="lg:w-1/2 text-center lg:text-left" data-reveal>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif text-sura-green-900 mb-6 tracking-tight leading-[1.05]">
            Mulai Perjalanan <br/><span class="italic text-sura-earth-600 font-light">Baik Anda Hari Ini.</span>
          </h2>
          <p class="text-xl text-sura-green-700 mb-10 leading-[1.8] max-w-xl mx-auto lg:mx-0 font-light">
            Pelestarian sejati dimulai dari langkah kecil. Rencanakan kunjungan yang bertanggung jawab ke Surakarta dan jadilah bagian dari harmoni ini.
          </p>
          
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <button class="bg-sura-green-500 hover:bg-sura-green-700 text-sura-cream-100 px-8 py-4 rounded-full transition-all hover:-translate-y-1 font-medium text-lg shadow-[0_10px_30px_rgba(46,125,91,0.3)]">
              Rencanakan Kunjungan
            </button>
            <button class="border-2 border-sura-gold-500 text-sura-green-900 hover:bg-sura-gold-300/20 px-8 py-4 rounded-full transition-all hover:-translate-y-1 font-medium text-lg">
              Bagikan Misi Ini
            </button>
          </div>
        </div>

        <!-- 3D Globe Wrapper -->
        <div class="lg:w-1/2 w-full max-w-md mx-auto" data-reveal>
          <LocationGlobe />
        </div>

      </div>
    </div>
  </section>
</template>
