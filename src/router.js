import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import Portfolio from './views/Portfolio.vue'
import Services from './views/Services.vue'
import Skills from './views/Skills.vue'
import Contact from './views/Contact.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    } 
  
  ]
})
