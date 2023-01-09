import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './pages/PageHome.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
];

const router = new VueRouter ({
    routes,
    mode: 'history'
})

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue ({
    render: h => h(App),
    router
}).$mount('#app')