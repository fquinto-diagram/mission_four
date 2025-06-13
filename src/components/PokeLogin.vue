<template>
  <form class="flex flex-col text-black mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/2 shadow-xl" @submit.prevent="handleLogin">
    <h1 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl pb-4">LogIn</h1>
    <PokeInput
      placeholder="Email"
      type="email"
      v-model="form.email"
      required
    />
    <PokeInput
      placeholder="Contraseña"
      type="password"
      v-model="form.password"
      required
    />
    <span v-if="authStore.error" class="text-red-500 my-4">{{ authStore.error }}</span>
    <span v-if="authStore.success" class="text-green-500 my-4">{{ authStore.success }}</span>
    <PokeButton text="Entrar" type="submit" class="mx-auto my-4" />
  </form>
</template>

<script setup lang="ts">
import PokeInput from './PokeInput.vue'
import PokeButton from './PokeButton.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../store/useAuthStore'

const authStore = useAuthStore()
const router = useRouter()

const form = reactive({
  email: '',
  password: ''
})

function handleLogin() {
  if (authStore.login(form.email, form.password)) {
    router.push({ name: 'dashboard' })
  }
}
</script>