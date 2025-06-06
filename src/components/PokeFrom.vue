<template>
    <form>
        <PokeInput 
            v-model="form.basicInfo.name"
            type="text"
            placeholder="Nombre"
            required
        />
        <PokeInput 
            v-model="form.basicInfo.surname"
            type="text"
            placeholder="Apellido"
            required
        />
        <PokeInput 
            v-model="form.basicInfo.dni"
            type="text"
            placeholder="Apellido"
            required
        />
        <PokeInput
            v-model="form.contact.email"
            type="email"
            placeholder="ejemplo@correo.com"
            required
        />
    </form>
</template>

<script setup lang="ts">
import PokeInput from './PokeInput.vue'
import { reactive, } from 'vue'
import type { Trainer } from './interface/trainers.ts'

const generateIdTrainer =  Math.floor(Math.random()*100000)

const form = reactive<Trainer>({
    id: generateIdTrainer,
    basicInfo:{
        name: '',
        surname: '',
        dni: ''
    },
    contact:{
        email: ''
    },
    pokemon:{
        assignedPokemon: undefined
    },
})


</script>