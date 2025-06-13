import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/useAuthStore'

const routes = [
  {
    path: '/',
    component: ()=> import('../layouts/PublicLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: ()=> import('../components/PokeLogin.vue'),
      },
      {
        path: '404',
        name: 'not-found',
        component: ()=> import('../components/Error404.vue'),
      }
    ]
  },
  {
    path: '/app',
    component: ()=> import('../layouts/DefaultLayout.vue'),
    children: [
      { 
        path: 'dashboard', 
        name: 'dashboard',
        component: ()=> import('../components/PokeDashBoard.vue'),
      },
      { 
        path: 'trainers', 
        name: 'trainers',
        component: ()=> import('../components/PokeList.vue'),
      },
      { 
        path: 'pokedex', 
        name: 'pokedex',
        component: ()=> import('../components/PokeDex.vue'),
      },
      {
        path: 'create-trainers',
        name: 'create-trainers',
        component: ()=> import('../components/PokeForm.vue'),
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: 'not-found',
    component: () => import('../components/Error404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const authStore = useAuthStore()
  authStore.checkAuth()

  if (to.name === 'login' && authStore.isLoggedIn) {
    next({ name: 'dashboard' })
    return
  }

  if (to.path.startsWith('/app') && !authStore.isLoggedIn) {
    next({ name: 'login' })
    return
  }

  next()
})

export default router