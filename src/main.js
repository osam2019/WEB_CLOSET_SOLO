import Vue from 'vue'
import App from './App.vue'
import Login from './views/Login.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import coverflow from './components/Coverflow.vue';

Vue.use(ElementUI);

// Vue.component('cover-flow', coverflow);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
