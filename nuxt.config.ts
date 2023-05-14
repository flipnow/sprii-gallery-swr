// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/gallery': { swr: true },
  },
});
