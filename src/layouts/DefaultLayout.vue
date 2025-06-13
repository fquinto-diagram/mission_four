<template>
    <div class="min-h-screen bg-gradient-to-br">
        <img src="../pokelogo.png" class="w-64 mx-auto">
        <NavBar/>
        <main class="container mx-auto py-8">
            <router-view />
        </main>
    </div>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';

</script>