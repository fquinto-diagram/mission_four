import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '../auth/useAuth'
import PublicLayout from '../layouts/PublicLayout.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import PokeLogin from '../components/PokeLogin.vue'
import Error404 from '../components/Error404.vue'
import PokeDex from '../components/PokeDex.vue'
import PokeDashBoard from '../components/PokeDashBoard.vue'
import PokeList from '../components/PokeList.vue'
import PokeForm from '../components/PokeForm.vue'

export const routes = [
  {
    path: '/',
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'login',
        component: PokeLogin
      },
      {
        path: '404',
        name: 'not-found',
        component: Error404
      }
    ]
  },
  {
    path: '/',
    component: DefaultLayout,
    children: [
      { 
        path: 'Dashboard', 
        name: 'dashboard',
        component: PokeDashBoard 
      },
      { 
        path: 'Trainers', 
        name: 'trainers',
        component: PokeList 
      },
      { 
        path: 'Pokedex', 
        name: 'pokedex',
        component: PokeDex 
      },
      {
        path: 'Form',
        name: 'form',
        component: PokeForm
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _from, next) => {
  const { isLoggedIn, checkLogin } = useAuth()
  checkLogin()
  
  // Allow access to public routes
  if (to.path.startsWith('/app')) {
    // Check authentication for protected routes
    if (!isLoggedIn.value) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router