<template>
    <div class="flex flex-col my-8 items-center  min-h-screen bg-gradient-to-br">
        <div class="flex felx-row bg-white p-8 rounded-xl shadow-lg">
        <h1 class="text-2xl font-bold mb-4 capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">Hola, {{ userName }}! </h1><h1 class="text-2xl">👋</h1>
        </div>
        <PokeButton 
            @click="handleLogout" 
            text="Cerrar sesión" 
            type="button"
            class="mt-4"/>
    </div>
</template>

<script setup lang="ts">
import PokeButton from './PokeButton.vue'
import { useAuth } from '../auth/useAuth'
import { useRouter } from 'vue-router'

const { logout, userName } = useAuth()
const router = useRouter()

const handleLogout = () => {
  logout()
  router.push('/login')
}
</script>

