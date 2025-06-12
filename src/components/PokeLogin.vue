<template>
  <form class="flex flex-col text-black mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/2 shadow-xl" @submit.prevent="handleLogin">
    <h1 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl pb-4">LogIn</h1>
    <PokeInput
      placeholder="Email"
      v-model="form.email"
      required
    />
    <PokeInput
      placeholder="Contraseña"
      type="password"
      v-model="form.password"
      required
    />
    <span v-if="error" class="text-red-500 my-4">{{ error }}</span>
    <span v-if="success" class="text-green-500 my-4">{{ success }}</span>
    <PokeButton text="Entrar" type="submit" class="mx-auto my-4" />
  </form>
</template>

<script setup lang="ts">
import PokeInput from './PokeInput.vue'
import PokeButton from './PokeButton.vue'
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuth } from '../auth/useAuth'

const { login } = useAuth()
const router = useRoute()

const form = reactive({
  email: '',
  password: ''
})

const error = ref('')
const success = ref('')

function handleLogin() {
  if (form.email === 'exemple@exemple.com' && form.password === 'password') {
    error.value = ''
    success.value = '¡Login correcto!'
    login()
    router.push('/Pokedex')
  } else {
    success.value = ''
    error.value = 'Email o contraseña incorrectos'
  }
}
</script>