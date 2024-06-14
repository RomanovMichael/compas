// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/styles/main.scss',
    '~/styles/variables.scss',
    '~/styles/fonts.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/mixins.scss" as *;',
        },
      },
    },
    plugins: [
      svgLoader(),
    ],
  },
  modules: ['@pinia/nuxt', '@nuxt/content'],
})