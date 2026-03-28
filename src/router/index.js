import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Present from '../views/Present.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/present/:id', component: Present }
]

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})
