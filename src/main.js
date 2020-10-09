import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueTyperPlugin from 'vue-typer'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(VueTyperPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
