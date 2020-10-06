import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueTyperPlugin from 'vue-typer'

Vue.use(VueTyperPlugin)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
