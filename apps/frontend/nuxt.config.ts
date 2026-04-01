export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    exposeConfig: true,
    config: {
      content: [
        './app/**/*.{vue,js,ts}',
        './pages/**/*.{vue,js,ts}',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.{vue,js,ts}',
      ],
    },
  },
  devServer: {
    port: 3001,
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3000/api',
    },
  },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap',
        },
      ],
    },
  },
})