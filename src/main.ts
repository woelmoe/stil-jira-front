import { createApp } from 'vue'
import './assets/css/main.scss'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import { directives } from '@/directives'
import { stiljiraHandshake } from '@/plugins/stiljiraHandshake'

stiljiraHandshake()

const app = createApp(App)
directives.forEach((directive) => {
  app.directive(directive.name, directive.directive)
})

app.use(router).use(createPinia()).mount('#app')
