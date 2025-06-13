<template>
  <div class="mt-8 bg-zinc-200/40 rounded-2xl mx-auto max-w-1/ shadow-xl flex flex-row justify-center text-black p-2 capitalize ">
    <router-link :to="{name: 'dashboard'}" class="p-4">Dashboard</router-link>
    <router-link :to="{name: 'pokedex'}" class="p-4">PokéDex</router-link>
    <router-link :to="{name: 'trainers'}" class="p-4">Entrenadores</router-link>
    <router-link :to="{name: 'create-trainers'}" class="p-4">Crear Entrenadores</router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<script>
</script>