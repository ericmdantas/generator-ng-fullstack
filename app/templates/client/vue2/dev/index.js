import Vue from 'vue'
import VueRouter from 'vue-router'
import {router} from './app.route'
import AppCmp from './app'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router: router,
    render: h => h(AppCmp)
})
