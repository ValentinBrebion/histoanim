import { createApp } from 'vue'
import './style.css'
// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

import router from './router/router';


createApp(App).use(vuetify).use(router).mount("#app");
