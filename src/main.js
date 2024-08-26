import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import { createRouter, createWebHashHistory } from 'vue-router'
// import routes from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import i18n from './i18n';
// import AboutTahara from './Views/AboutTahara.vue'

const app = createApp(App)
// const routes = [
    
//     {
//         path:"/about-tahara",
//         name: AboutTahara,
//         component: AboutTahara,
//     },];
// const router = createRouter({
//   history:createWebHashHistory(),
//   routes
// })
app.use(createPinia())
// app.use(router)
// app.use(routes)
app.use(i18n);
app.mount('#app')
