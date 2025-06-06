<template>
  <div>
    <img src="/public/pokelogo.png" alt="Pokemon Logo"
      class="w-64 mx-auto" 
    />
    <div class="mx-auto">
      <PokeDemo />
    </div>
  </div>
</template>

<script setup lang="ts">
import PokeDemo from './components/PokeDemo.vue'
</script>

<style scoped>

</style>