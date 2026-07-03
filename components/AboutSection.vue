<template>
  <section id="tentang" class="py-24 bg-sura-cream-100 relative">
    <!-- Divider decor -->
    <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sura-gold-300/50 to-transparent"></div>
    
    <div class="max-w-7xl mx-auto px-6">
      
      <!-- Bento Grid Container -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:auto-rows-fr">
        
        <!-- Card 1: Main Vision (2x2) -->
        <div class="md:col-span-2 lg:col-span-2 md:row-span-2 lg:row-span-2 bg-sura-green-900 rounded-[2rem] p-8 lg:p-12 relative overflow-hidden group shadow-xl hover:shadow-2xl transition-all duration-300" data-reveal>
          <div class="absolute -top-12 -right-12 text-sura-gold-500/10 transform group-hover:scale-110 transition-transform duration-700 pointer-events-none w-80 h-80">
             <KawungPattern />
          </div>
          
          <div class="relative z-10 h-full flex flex-col justify-center">
            <h4 class="text-sura-gold-300 font-semibold tracking-[0.2em] text-xs mb-4 uppercase">Filosofi SuraLestari</h4>
            <h2 class="text-4xl md:text-5xl font-serif text-sura-cream-100 mb-6 leading-[1.05] tracking-tight">Sebuah Perjalanan yang <br/><span class="italic text-sura-gold-300 font-light">Merawat Jejak.</span></h2>
            <p class="text-lg text-sura-cream-200/90 leading-[1.8] font-light mb-0">
              Perjalanan terbaik bukanlah sekadar singgah, melainkan menjaga apa yang kita tinggalkan. Kami menuntun langkah Anda menyusuri warisan Surakarta—tempat setiap kunjungan tidak hanya memanjakan mata, tapi juga menghidupi nadi pengrajin dan merawat bumi agar tetap abadi untuk esok hari.
            </p>
          </div>
        </div>

        <!-- Card 2: Ekonomi Lokal (2x1 wide) -->
        <div class="md:col-span-2 lg:col-span-2 md:row-span-1 lg:row-span-1 bg-sura-cream-200 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-sura-gold-300/20 group flex flex-col sm:flex-row items-start sm:items-center gap-6" data-reveal>
          <div class="bg-sura-green-900 w-16 h-16 shrink-0 rounded-2xl flex items-center justify-center text-sura-gold-300 group-hover:rotate-12 transition-transform duration-500 shadow-lg">
             <Icon name="heroicons:currency-dollar" class="w-8 h-8" />
          </div>
          <div>
            <h3 class="text-2xl font-serif text-sura-green-900 mb-2 tracking-tight">Denyut Nadi Ekonomi <span class="italic font-light">(SDG 8)</span></h3>
            <p class="text-sura-green-700 leading-[1.7] text-sm md:text-base font-light">Setiap rupiah yang ditabur akan mekar menjadi kesejahteraan bagi seniman dan pengrajin Surakarta, memutar roda ekonomi kerakyatan secara berkesinambungan.</p>
          </div>
        </div>

        <!-- Card 3: Lingkungan Lestari (1x1) -->
        <div class="md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1 bg-sura-gold-300 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm group flex flex-col justify-between" data-reveal>
          <div class="bg-sura-cream-100/40 w-14 h-14 rounded-xl flex items-center justify-center text-sura-green-900 mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
             <Icon name="lucide:leaf" class="w-7 h-7" />
          </div>
          <div>
            <h3 class="text-xl font-serif text-sura-green-900 mb-2 leading-tight tracking-tight">Merawat Alam</h3>
            <p class="text-sura-green-900/80 text-sm leading-[1.7] font-light">Mendedikasikan praktik ramah lingkungan lewat pewarna alami dan pengelolaan limbah batik yang bijak.</p>
          </div>
        </div>

        <!-- Card 4: Budaya Hidup (1x1) -->
        <div class="md:col-span-1 lg:col-span-1 md:row-span-1 lg:row-span-1 bg-sura-cream-200 rounded-[2rem] p-8 hover:-translate-y-1 transition-transform duration-300 shadow-sm border border-sura-gold-300/20 group flex flex-col justify-between relative overflow-hidden" data-reveal>
          <div class="absolute bottom-0 right-0 text-sura-gold-500/10 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700 pointer-events-none w-40 h-40">
             <KawungPattern />
          </div>
          <div class="bg-sura-green-100/60 w-14 h-14 rounded-xl flex items-center justify-center text-sura-green-700 mb-6 group-hover:-rotate-12 transition-transform duration-500 relative z-10">
             <Icon name="lucide:landmark" class="w-7 h-7" />
          </div>
          <div class="relative z-10">
            <h3 class="text-xl font-serif text-sura-green-900 mb-2 leading-tight tracking-tight">Warisan Bernapas</h3>
            <p class="text-sura-green-700 text-sm leading-[1.7] font-light">Menjaga nyala api kebudayaan agar bangunan dan tradisi luhur tidak hanya dikenang dalam selembar foto.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
