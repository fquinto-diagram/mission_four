import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

// El orden es importante aquí
app.use(pinia) // Primero usar pinia
app.mount('#app') // Luego montar la aplicación