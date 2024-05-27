import { createApp } from 'vue'
import App from './App.vue'
import WineList from './components/WineList.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/winelist', component: WineList },
    ]
});
const app = createApp(App)
app.use(router);
app.mount('#app')
