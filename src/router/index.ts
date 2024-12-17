import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Theory from '../views/Theory.vue'
import Playground from '../views/Playground.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/theory',
      name: 'theory',
      component: Theory
    },
    {
      path: '/playground',
      name: 'playground',
      component: Playground
    }
  ]
})

export default router