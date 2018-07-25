import Vue from 'vue'
import router from './app.route'
import store from './app.store'
import AppCmp from './app'

new Vue({
    router,
    store,
    render: h => h(AppCmp),
}).$mount('#app')
