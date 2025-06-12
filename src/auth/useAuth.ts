// src/composables/useAuth.ts
import { ref } from 'vue'

const isLoggedIn = ref(false)

export function useAuth() {
  function login() {
    isLoggedIn.value = true
    localStorage.setItem('loggedIn', 'true')
  }
  function logout() {
    isLoggedIn.value = false
    localStorage.removeItem('loggedIn')
  }
  function checkLogin() {
    isLoggedIn.value = localStorage.getItem('loggedIn') === 'true'
  }
  return { isLoggedIn, login, logout, checkLogin }
}