import { defineStore } from 'pinia'
import { ref } from 'vue'

interface User {
  email: string;
  name: string;
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isLoggedIn = ref(false)
  const error = ref('')
  const success = ref('')

  function login(email: string, password: string): boolean {
    if (email === 'exemple@exemple.com' && password === 'password') {
      user.value = {
        email,
        name: 'Francesc'
      }
      isLoggedIn.value = true
      error.value = ''
      success.value = '¡Login correcto!'
      localStorage.setItem('user', JSON.stringify(user.value))
      return true
    }

    user.value = null
    isLoggedIn.value = false
    success.value = ''
    error.value = 'Email o contraseña incorrectos'
    return false
  }

  function logout() {
    user.value = null
    isLoggedIn.value = false
    localStorage.removeItem('user')
  }

  function checkAuth() {
    const savedUser = localStorage.getItem('user')
    if (savedUser) {
      user.value = JSON.parse(savedUser)
      isLoggedIn.value = true
    }
  }

  return {
    user,
    isLoggedIn,
    error,
    success,
    login,
    logout,
    checkAuth
  }
})