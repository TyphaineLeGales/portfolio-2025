// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport:
        'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0',
      htmlAttrs: { lang: 'fr' },
    },
  },
  components: [
    { path: '~/components', pathPrefix: false, global: true },
  ],
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    '@nuxtjs/i18n'
  ],
  viewport: {
    breakpoints: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1440,
      '2xl': 1920,
    },
    defaultBreakpoints: { desktop: 'lg', mobile: 'xs', tablet: 'md' },
    fallbackBreakpoint: 'lg',
  },
  
})
