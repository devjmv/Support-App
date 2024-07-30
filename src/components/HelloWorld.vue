<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})

function hello(h) {
  console.log(h)
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3 @click="hello(msg)">
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>

</style>
