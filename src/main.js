import Vue from 'vue'
import App from './App.vue'
import router from './router';
import VueTyperPlugin from 'vue-typer'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "./fontAwesomeIcon.js";
import AOS from "aos";
import "aos/dist/aos.css";
import VueScrollProgressBar from '@guillaumebriday/vue-scroll-progress-bar'

Vue.use(BootstrapVue)
Vue.use(VueTyperPlugin)
Vue.use(VueScrollProgressBar)

new Vue({
    created() {
        AOS.init();
    },
  el: '#app',
  router,
  render: h => h(App)
})
