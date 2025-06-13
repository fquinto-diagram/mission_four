<template>
  <div class="flex flex-col items-center min-h-[80vh] my-8">
    <h1 class="text-4xl font-bold mb-4 pb-4 bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">
      404 - Page Not Found
    </h1>
    <img src="../PokeLost.jpg" >
    <p class="text-gray-600 mb-8">La página que buscas no existe</p>
    <PokeButton 
      @click="$router.push('/')"
      text="Volver al inicio"
      type="button"
    />
  </div>
</template>

<script setup lang="ts">
import PokeButton from './PokeButton.vue'
</script>