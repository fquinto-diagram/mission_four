<template>

    <div class="mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/2 shadow-xl">
        <form @submit.prevent="handleSubmit" class="flex flex-col text-black my-5 ">
        
        <h1 class="capitalize bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-bold text-2xl">Nuevo Entrenador</h1>

        <PokeInput 
            v-model="form.basicInfo.name"
            type="text"
            placeholder="Nombre"
            required
        />
        <span v-if="nameError" class="text-red-500">{{ nameError.error }}</span>
        <PokeInput 
            v-model="form.basicInfo.surname"
            type="text"
            placeholder="Apellido"
            required
        />
        <span v-if="surnameError" class="text-red-500">{{ surnameError.error }}</span>
        <PokeInput 
            v-model="form.basicInfo.dni"
            type="text"
            placeholder="DNI"
            required
        />
        <span v-if="dniError" class="text-red-500">{{ dniError.error }}</span>
        <PokeInput
            v-model="form.contact.email"
            type="email"
            placeholder="ejemplo@correo.com"
            required
        />
        <span v-if="emailError" class="text-red-500">{{ emailError.error }}</span>
        <div id="Buttons">
            <PokeButton class="mx-auto" text="Enviar" type="submit"/>
        </div>
        </form>
    </div>
</template>

<script setup lang="ts">
import PokeInput from './PokeInput.vue'
import PokeButton from './PokeButton.vue'
import { reactive } from 'vue'
import { useTrainerStore } from '../store/trainers.ts'
import { useFormValidation } from '../composables/formValidation.ts'
import { useFieldWatcher } from '../composables/validationFunction.ts'
import { useRouter } from 'vue-router'
import type { Trainer } from '../interface/trainer.interface.ts'

const router = useRouter()
const generateIdTrainer =  Math.floor(Math.random()*100000)
const trainerStore =useTrainerStore()
const { validateName, validateDni, validateEmail}= useFormValidation()

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
})

const errors= reactive({
    name: '',
    surname:'',
    dni:'',
    email:''
})

const nameError = useFieldWatcher(() => form.basicInfo.name, validateName, "Nombre inválido");
const surnameError = useFieldWatcher(() => form.basicInfo.surname, validateName, "Apellido inválido");
const dniError = useFieldWatcher(() => form.basicInfo.dni, validateDni, "DNI inválido");
const emailError = useFieldWatcher(() => form.contact.email, validateEmail, "Email inválido");

const handleSubmit =()=>{
    if(!errors.name && !errors.dni && !errors.email){
        trainerStore.addTrainer({...form})
        router.push({name: 'trainers'})
    }
}
</script>