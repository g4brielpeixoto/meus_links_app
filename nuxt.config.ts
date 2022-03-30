export default {
  head: {
    title: 'Meus Links',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: ['@/assets/scss/base.scss', '@/assets/scss/normalize.scss'],

  plugins: ['@/plugins/accessor', '@/plugins/notifications.client'],

  components: [
    '@/components/atoms',
    '@/components/bosons',
    '@/components/molecules',
    '@/components/organisms',
    '@/components/templates',
  ],

  buildModules: ['@nuxt/typescript-build'],

  modules: ['@nuxtjs/style-resources', '@nuxtjs/axios', 'cookie-universal-nuxt'],

  axios: {
    baseUrl: process.env.NODE_ENV === 'production' ? 'https://meus-links-backend.herokuapp.com/' :
    'http://localhost:3333'
  },

  build: {}, 

  styleResources: {
    // your settings here
    sass: [],
    scss: ['@components/bosons/*.scss'],
    less: [],
    stylus: [],
    hoistUseStatements: true // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  }
}
