// src/composables/useAuth.ts
import { ref, computed } from 'vue'

interface User {
  name: string;
  email: string;
}

const isLoggedIn = ref(false)
const currentUser = ref<User | null>(null)

export function useAuth() {
  function login() {
    isLoggedIn.value = true
    currentUser.value = {
      name: 'Francesc',
      email: 'exemple@exemple.com'
    }
    localStorage.setItem('loggedIn', 'true')
    localStorage.setItem('user', JSON.stringify(currentUser.value))
  }

  function logout() {
    isLoggedIn.value = false
    currentUser.value = null
    localStorage.removeItem('loggedIn')
    localStorage.removeItem('user')
  }

  function checkLogin() {
    isLoggedIn.value = localStorage.getItem('loggedIn') === 'true'
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      currentUser.value = JSON.parse(savedUser)
    }
  }

  const userName = computed(() => currentUser.value?.name ?? '')

  return { 
    isLoggedIn, 
    login, 
    logout, 
    checkLogin,
    userName 
  }
}