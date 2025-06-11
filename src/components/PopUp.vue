<template>
<div id="pop-up">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit sed cupiditate obcaecati porro quae quos molestiae eligendi quaerat, facilis dolorum vero iste facere, nihil, libero perferendis dolorem ratione et?</p>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

let popUp = ref(false)

export function togglePopUp(){
    popUp.value = !popUp.value
}
</script>