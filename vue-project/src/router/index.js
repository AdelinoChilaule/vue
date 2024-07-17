import { createRouter, createWebHistory } from 'vue-router'
import Signin from '../components/Signin.vue'
import Register from '../components/Register.vue'
import Main from '../components/Main.vue'
import DashBoard from '../components/Dashboard.vue'
import CriarEventos from '../components/CriarEventos.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard
  },
  {
    path: '/criareventos',
    name: 'criareventos',
    component: CriarEventos
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes
})

export default router

