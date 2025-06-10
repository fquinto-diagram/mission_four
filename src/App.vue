<template>
  <div>
    <img src="./pokelogo.png" alt="Pokemon Logo" class="w-64 mx-auto"/>
    <div class="mx-auto">
      <NavBar />

      <PokeDex />
      
      <PokeForm />

      <PokeList />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import PokeDex from './components/PokeDex.vue'
import PokeForm from './components/PokeForm.vue';
import PokeList from './components/PokeList.vue';
</script>

<style scoped>

</style>