const webpack = require('webpack');

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css'},
      {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Pacifico&display=swap&subset=vietnamese'},
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css'
      },
      {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/css/select2.min.css'},
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'},
      {src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-018gW0jxNfVDWTpLjXBj_UcfCrnbiDs'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js'},
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.8/js/select2.min.js'},
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#fff'},
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~plugins/i18n.js'},
    {src: '~/plugins/axios.service.js'},
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-US'
          }, {
            code: 'vi',
            iso: 'vi-VN'
          }
        ],
        defaultLocale: 'vi',
        vueI18n: {
          fallbackLocale: 'vi',
          messages: {
            en: require('./locales/en.json'),
            vi: require('./locales/vi.json')
          }
        }
      },
    ],
    [
      '@nuxtjs/axios',
      {
        baseURL: 'https://testing-api.biz5s.com'
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {},
}
