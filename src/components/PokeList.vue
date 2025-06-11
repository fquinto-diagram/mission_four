<template>
  <div class="grid grid-cols-2 content-around">
    <div v-for="trainer in trainerStore.trainers" :key="trainer.id" class="my-4 bg-zinc-200/40 rounded-2xl mx-3 max-w-2xl shadow-xl ">
        <h1 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">{{ trainer.basicInfo.name }}</h1>
        <div class="grid grid-cols-2 ">
            <div id="BasicInfo" class="text-black">
                <h2 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">DNI</h2>
                <p>{{ trainer.basicInfo.dni }}</p>
                <h2 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">E-Mail</h2>
                <p>{{ trainer.contact.email }}</p>
                <PokeButton @click="remove(trainer)" text="Eliminar"/>
            </div>
            <div v-if="!trainer.pokemon?.id">
                <PokeButton text="Assignar Pokémon" @click="asignPokemon(trainer, genreateId())" />
            </div>
            <div v-else class="text-black m-auto">
                <h2 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">{{ namePoke(trainer) }}</h2>
                <p v-for="type in typePoke(trainer)" :key="type.type.name" :class="getTypeColor(type.type.name)">{{ type.type.name }}</p>
                <img :src="imgPoke(trainer)" @click="newToggleShiny(trainer.id)" style="cursor:pointer" class="w-"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import api from './composables/api'
import PokeButton from './PokeButton.vue'
import { useTrainerStore } from './store/trainers'
import { reactive } from 'vue'
import { useFetch } from './composables/apiFetch'
import { getTypeColor } from './composables/types'
import type { Trainer } from './interface/trainer'

const trainerStore = useTrainerStore()
const shinyMap= reactive<{[id: number]: boolean}>({})
const {genreateId, fetchData, pokemon} = useFetch(api.defaults.baseURL as string)

async function asignPokemon(trainer: Trainer, pokemonId: number) {
    try {
        await fetchData(pokemonId)
        if (pokemon.value && pokemon.value.id) {
            trainer.pokemon = pokemon.value
            trainerStore.updateTrainer(trainer)
        }else{
            alert('No se puede obtener el Pokémon')
        }
        
    } catch (error) {
        alert(`Hay un error: ${error}`)
    }
}

function newToggleShiny(trainerId: number){
    shinyMap[trainerId] = !shinyMap[trainerId]
}

async function remove(trainer:Trainer) {
    try{
        
        trainerStore.removeTrainer(trainer.id)
    }catch(error){
        alert(`Hay un error: ${error}`)
    }
}

// Las constantes son constantes Computed, sirven para hacer el codigo más leible

const namePoke = (trainer: Trainer)=> trainer.pokemon?.forms[0].name ?? ''
const imgPoke = (trainer: Trainer)=> shinyMap[trainer.id] ? trainer.pokemon?.sprites.front_shiny : trainer.pokemon?.sprites.front_default
const typePoke = (trainer: Trainer)=> trainer.pokemon?.types ?? []

</script>