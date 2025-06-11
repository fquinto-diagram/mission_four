<template>
  <button 
    :type="type"
    @click="$emit('click')" 
    class="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >{{ text }} </button>
</template>

<script setup lang="ts">
import { type Props } from './interface/button';

const {text , type} = defineProps<Props>()

defineEmits(['click'])
</script>