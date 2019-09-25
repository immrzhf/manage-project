import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MenuIndex from './views/MenuIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/MenuIndex',
      name: 'MenuIndex',
      component: MenuIndex
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
