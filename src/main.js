import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);


import VueQrcodeReader from "vue-qrcode-reader";
 
Vue.use(VueQrcodeReader);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
