// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import PokeLogin from '../components/PokeLogin.vue'
import { useAuth } from '../auth/useAuth'
import PokeDex from '../components/PokeDex.vue'

const routes = [
  { path: '/', component: PokeLogin, name: 'login' },
  { path: '/Pokedex', component: PokeDex, name: 'pokedex' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const { isLoggedIn, checkLogin } = useAuth()
  checkLogin()
  if (to.name !== 'login' && !isLoggedIn.value) {
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router