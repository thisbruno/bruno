import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import VueTyperPlugin from 'vue-typer'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;


Vue.config.productionTip = false

Vue.use(VueTyperPlugin)
Vue.use(Vuetify, {
  theme: {
    primary: '#E31B6D',
   
  }
})



new Vue({
  router, VueTyperPlugin,
  render: h => h(App)
}).$mount('#app')
