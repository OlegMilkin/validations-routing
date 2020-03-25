import Vue from 'vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './routes'

import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app');
