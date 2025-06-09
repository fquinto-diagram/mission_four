<template>
    <div v-for="trainer in getAllTrainers" :key="trainer.id">
        <h1 class="text-black"> {{ trainer.basicInfo.name }}</h1>
        <div id="BasicInfo" class="text-black">
            <p>{{ trainer.basicInfo.dni }}</p>
            <p>{{ trainer.contact.email }}</p>
        </div>
        <PokeButton v-if="!trainer.pokemon?.assignedPokemon" text="Assignar Pokémon"/>
        <div v-else="trainer.pokemon?.assignedPokemon">
            <p>{{ trainer.pokemon.assignedPokemon }}</p>

        </div>
    </div>
</template>

<script setup lang="ts">
import PokeButton from './PokeButton.vue'
import { useTrainerStore } from './store/trainers'
import { useFetch } from './composables/apiFetch'

const trainerStore = useTrainerStore()
const { getAllTrainers } = trainerStore

</script>