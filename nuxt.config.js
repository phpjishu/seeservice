module.exports = {

  router: {
    middleware: 'auth'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'xinyinuxt',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'xinyinuxt'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {
        type: "",
        src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js"
      }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    {
      src: 'assets/main.less',
      lang: 'less'
    },
    'element-ui/lib/theme-chalk/index.css',
    'static/icons/all.min.css'
  ],

  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/i-count-up',
    '@/plugins/vue-markdown'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

