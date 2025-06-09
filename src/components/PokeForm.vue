<template>
    <PokeButton v-if="!newTrainer" text="+"  class="my-5" @click="changeState"/>

    <div @submit.prevent="handleSubmit" class="mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/2 shadow-xl">
        <form v-if="newTrainer" class="flex flex-col text-black my-5 ">
        
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
            placeholder="DNI"
            required
        />
        <PokeInput
            v-model="form.contact.email"
            type="email"
            placeholder="ejemplo@correo.com"
            required
        />
        <div id="Buttons">
            <PokeButton class="mx-auto" text="Enviar"/>
        </div>
    </form>
    <PokeButton v-if="newTrainer" class="mx-auto" text="Atrás" @click="changeState"/>
    </div>
</template>

<script setup lang="ts">
import PokeInput from './PokeInput.vue'
import PokeButton from './PokeButton.vue'
import { reactive, ref } from 'vue'
import type { Trainer } from './interface/trainer.ts'
import { useTrainerStore } from './store/trainers.ts'

const generateIdTrainer =  Math.floor(Math.random()*100000)
const newTrainer = ref(false)

const changeState = () => {
  if (newTrainer.value === true){
    newTrainer.value = false
  }
  else{
    newTrainer.value = true
  }
}

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

const trainerStore =useTrainerStore()
const handleSubmit =()=>{
    trainerStore.addTrainer({...form})
    changeState()
    console.log(trainerStore.getAllTrainers)
}
</script>