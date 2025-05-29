<template>
  <!--<HolaMundo></HolaMundo>   ( esta es la forma larga de escribit-->
  <HolaMundo/> <!-- abrebiatura acortada-->
</template>

<!--la vista es un agrupador de componentes -->
<!-- -->

<script>
import HolaMundo from "@/components/HolaMundo.vue"; // el arroba sirve para direccionar a la carpeta raiz
export default {
  components: {
    HolaMundo,
  },
};
</script>

<style>
</style>