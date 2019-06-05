import Vue from 'vue'
import App from './App.vue'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

import VueQrcodeReader from "vue-qrcode-reader";
Vue.use(VueQrcodeReader);

import VueRouter from 'vue-router'

import routes from '@/router/routes.js'

Vue.use(VueRouter)

const router = new VueRouter({routes});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
