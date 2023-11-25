import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import "vue-progressive-image/dist/style.css"
import VueProgressiveImage from 'vue-progressive-image'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueProgressiveImage)
app.use(router)

app.mount('#app')
