import { createApp } from 'vue'
import App from './App.vue'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import "./styles/style.css"
// @ts-ignore
import router from "./router/index"

import {createPinia} from "pinia"

const pinia = createPinia()

const app = createApp(App)

app.use(pinia)

app.use(Quasar, quasarUserOptions)
app.use(router)


app.mount('#app')
