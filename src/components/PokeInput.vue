<template>
<input 
    @input="handleInput"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :required="required"
    class="bg-zinc-200/40 my-2 rounded-2xl justify-center mx-auto text-center py-2"
    >
</template>

<script setup lang="ts">
import type { Input } from './interface/input.ts'

const emit = defineEmits(['update:modelValue'])

const handleInput = (event: Event) =>{
    const value = (event.target as HTMLInputElement).value
    emit('update:modelValue', value)
}

withDefaults(defineProps<Input>(),{
    placeholder: '',
    type: '',
    label: '',
    modelValue: '',
    required: false
})

</script>

<style scoped>

</style>