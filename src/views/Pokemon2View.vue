<template>
  <h1>Selecciona el Pokemon correcto</h1>
  <PokemonImage :pokemonId="150" :mostrarImagen="false" />
  <PokemonOptions :pokemons="vectorPokemon" />
</template>

<script>
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import { obtenerOpcionesFachada } from "@/clients/PokemonClient2.js";
export default {
  data() {
    return {
      vectorPokemon: [],
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(4);
      this.vectorPokemon = opciones;
      console.log(opciones);
    },
  },
  //todos los ciclos de vida estas exentos del await
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style></style>
