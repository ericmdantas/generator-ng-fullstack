import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import {router} from './app.route'
import AppCmp from './app'

Vue.use(Vuex)
Vue.use(VueRouter)

new Vue({
    el: '#app',
    router: router,
    render: h => h(AppCmp),
})
