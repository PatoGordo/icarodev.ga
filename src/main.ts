import { createApp } from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.use(VueScrollTo)

app.mount('#app')