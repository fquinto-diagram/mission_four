<template>
  <div>
    <img src="/public/pokelogo.png" alt="Pokemon Logo"
      class="w-64 mx-auto" 
    />
    <div class="mx-auto">
      <PokeDemo />
      
      <PokeForm />

      <PokeList />
    </div>
  </div>
</template>

<script setup lang="ts">
import PokeDemo from './components/PokeDemo.vue'
import PokeForm from './components/PokeForm.vue';
import PokeList from './components/PokeList.vue';
</script>

<style scoped>

</style>