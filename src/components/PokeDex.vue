<template>
<div class="mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/2 shadow-xl">

  <h1 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">PokéDex</h1>

  <div v-if="!hasStarted" id="New">
    <PokeButton text="Buscar Pokèmon" @click="startSearch" class="mt-8 mb-8" type="submit"/>
  </div>

  <div v-else-if="loading" id="Loading" class="my-4 w-auto">
    <svg class="mx-auto w-8 h-8 text-blue-500 animate-spin dark:text-blue-500 fill-amber-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
    </svg>
    <span class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">Cargando...</span>
  </div>

  <div v-else-if="pokeName" id="Pokèmon" class="mt-4 mb-8 w-auto">
    <div class="flex flex-col">
      <div class="flex justify-center mt-5 mb-5 mx-5 rounded-2xl">
        <img :src="pokeImg" :alt="pokeName" style="cursor:pointer" @click="toggleShiny" class=" rounded-2xl hover:shadow-xl hover:bg-zinc-300/50 mx-5 w-40">
        <div>
          <h2 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">{{ pokeName }} {{ isShiny ? '✨':''  }}</h2>
          <span v-for="type in pokeTypes" :key="type.type.name" :class="usePokemon(type.type.name)">{{ type.type.name }}</span>
        </div>
      </div>
      <PokeButton @click="startSearch" text="Nuevo Pokémon" class="mb-5 mx-auto" type="submit"/>
    </div>
  </div>
</div>
<div v-if="error" id="Error" class="bg-red-300/60 border-2 border-red-600/60 m-auto max-w-1/2 rounded-2xl">
    <div class="my-4">
      <span>Hay un error</span><br>
      <span>{{ error.message }}</span>
    </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFetch } from '../composables/apiFetch'
import PokeButton from './PokeButton.vue'
import { usePokemon } from '../composables/types'


const hasStarted = ref(false)

const startSearch = () => {
  hasStarted.value = true
  fetchData(genreateId())
}

const { 
  genreateId,
  pokeName,   
  pokeTypes,
  pokeImg, 
  error, 
  loading, 
  fetchData, 
  toggleShiny, 
  isShiny,
} = useFetch("")

</script>

<style scoped>
</style>
