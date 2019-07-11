import Vue from "vue";
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "expose-loader?$!expose-loader?jQuery!jquery";
window.$ = window.jQuery = require("jquery");

import AOS from 'aos'
import 'aos/dist/aos.css'

// import jquery_aniview from 'jquery-aniview';
// import './js/lib_jquery';
// import './js/lib_jquery.aniview';

Vue.config.productionTip = false;



new Vue({
  created() {
    AOS.init({
      once: false,
    });
  },
  router,
  store,
  // jquery_aniview,
  render: h => h(App)
}).$mount("#app");
