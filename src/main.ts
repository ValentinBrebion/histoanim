import { createApp } from 'vue'
import './style.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Import des icônes Material Design
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Configuration de Vuetify
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
app.use(vuetify)
   .use(router)
   .mount('#app')