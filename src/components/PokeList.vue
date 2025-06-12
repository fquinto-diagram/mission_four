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
                <PokeButton @click="remove(trainer)" text="Eliminar" type="submit"/>
            </div>
            <div v-if="!trainer.pokemon?.id">
                <PokeButton text="Assignar Pokémon" @click="asignPokemon(trainer, genreateId())" type="submit" />
            </div>
            <div v-else class="text-black m-auto">
                <h2 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">{{ trainerStore.namePoke(trainer.id) }}</h2>
                <p v-for="type in trainerStore.typePoke(trainer.id)" :key="type.type.name" :class="usePokemon(type.type.name)">{{ type.type.name }}</p>
                <img :src="trainerStore.imgPoke(trainer.id , shinyMap)" @click="newToggleShiny(trainer.id)" style="cursor:pointer" class="w-40"/>
            </div>
        </div>
    </div>
  </div>
</template>2

<script setup lang="ts">
import api from '../config/api'
import PokeButton from './PokeButton.vue'
import { useTrainerStore } from '../store/trainers'
import { reactive } from 'vue'
import { useFetch } from '../composables/apiFetch'
import { usePokemon } from '../composables/types'
import type { Trainer } from '../interface/trainer'

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


</script>