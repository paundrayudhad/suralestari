// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt', 'nuxt-icon', '@nuxtjs/google-fonts', '@nuxt/image'],
  image: {
    domains: ['images.unsplash.com'],
    format: ['webp']
  },
  googleFonts: {
    families: {
      Fraunces: [400, 500, 600, 700],
      'Plus+Jakarta+Sans': [400, 500, 600, 700],
    },
    download: true,
    display: 'swap',
  },
  ssr: true,
  css: ['~/assets/css/main.css'],
  nitro: { preset: 'static' },
  app: {
    head: {
      title: 'SuraLestari — Jelajah Wisata Berkelanjutan Kota Solo',
      meta: [
        { name: 'description', content: 'Wisata berkelanjutan Surakarta: Kampung Batik Laweyan.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      htmlAttrs: {
        lang: 'id',
      }
    },
  },
  compatibilityDate: '2024-04-03',
})
