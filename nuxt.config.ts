// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxtjs/mdc"],

  runtimeConfig: {
    openaiApiKey: process.env.NUXT_OPENAI_API_KEY || "",
  },

  mdc: {
    highlight: {
      theme: "material-theme-palenight",
      langs: ["html", "markdown", "vue", "typescript", "javascript"],
    },
  },

  vite: {
    resolve: {
      alias: {
        debug: "debug/src/browser.js",
      },
    },
    define: {
      "process.env.DEBUG": "false",
    },
  },
});
