import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import router from './router'
import './style.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(PrimeVue)

app.mount('#app')