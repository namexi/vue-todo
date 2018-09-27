import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './assets/styles/global.scss'

new Vue ({
    el: "#app",
    router,
    render: creater => creater(App)
})