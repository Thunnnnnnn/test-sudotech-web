import GoogleLogin from 'vue3-google-login'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(GoogleLogin, {
    clientId: String(useRuntimeConfig().public.googleClientId)
  })
})
