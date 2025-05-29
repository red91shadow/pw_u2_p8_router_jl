<template>
  <div class="container">
    <Contador title="Titulo 1" v-bind:value="1" /> <!-- la directiva v-bind sirve para ... :-->
    <Contador title="Titulo 2"  />
    <Contador title="Titulo 3" :value="22" /> <!-- shortcut de v-bind: es simplementes :-->
  </div>
</template>

<script>
// props es una abreviacion de properties , es una forma de comunicar datos desde un componente padre a un componenete hijo, funcionana como parametros personalizados qeu permiten que un componente hijo reciva valores definidos por su componente padre

import Contador from "@/components/Contador.vue";
export default {
  components: {
    Contador,
  },
};
</script>

<style></style>
