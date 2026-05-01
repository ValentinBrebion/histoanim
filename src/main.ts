import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import fr from './locales/fr.json'
import en from './locales/en.json'

// Détection de la langue du navigateur
const browserLang = navigator.language.split('-')[0]
const availableLocales = ['fr', 'en']
const defaultLocale = availableLocales.includes(browserLang) ? browserLang : 'fr'

const i18n = createI18n({
  legacy: false,  // Important pour la Composition API
  locale: defaultLocale,
  fallbackLocale: 'en',
  messages: {
    fr,
    en
  }
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    defaultTheme: 'dark'
  }
})

import App from './App.vue'
import router from './router/router'

// Création de l'application
const app = createApp(App)

// Utilisation des plugins
app.use(i18n)
   .use(vuetify)
   .use(router)
   .mount('#app')