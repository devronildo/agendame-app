
// Components
import vuetify from '@/plugins/vuetify'
import router from '@/router/index'
import '@/scss/style.scss'
import { createApp } from 'vue'
import App from './App.vue'
// Composables
 

const app = createApp(App)

// registerPlugins(app)
app
   .use(router)
   .use(vuetify)
app.mount('#app')
