<script setup>
import axios from 'axios';
import { ref } from 'vue';

const uri = import.meta.env.VITE_API_ENDPOINT_SUPPORT
const tikets = ref([])

axios.get(uri)
  .then(function (response) {

    tikets.value = response.data
    // Mostramos los datos obtenidos en la consola 
    tikets.value.forEach(element => {
      console.log(element.name);
    });

  })
  .catch(function (error) {

    // Si hubo algun error mostramos algo 
    console.log(error);

  })
  .finally(function () {

    // Se ejecuto sin problemas 

  });

</script>

<template>
  <div class="about">
    <h1 class="text-danger">This is an about page</h1>

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
