<template>
  <h1>Selecciona el Pokemon correcto</h1>
  <h1>{{ mensaje }}</h1>
  <PokemonImage
    v-if="pokemon"
    :pokemonId="pokemon.id"
    :mostrarImagen="mostrar"
    ref="miHijo1"
  />
  <PokemonOptions
    @seleccionado="recibioPadre($event)"
    :pokemons="vectorPokemon"
    ref="miHijo2"
  />

  <button @click="comunicarHijo()">Comunicar hijo</button>
  <!-- con la palabra reservada $event obtengo el dato del hijo-->
</template>

<script>
// vue siempre ejecuta primero el template
// desde cualquier parte yo puedo llamar una funcion conocidad como $emit, no necesariamente desde un metodo
import PokemonImage from "@/components/PokemonImage.vue";
import PokemonOptions from "@/components/PokemonOptions.vue";
import {
  obtenerAleatorioFachada,
  obtenerOpcionesFachada,
} from "@/clients/PokemonClient2.js";
export default {
  data() {
    return {
      vectorPokemon: [],
      pokemon: null,
      mostrar: false,
      mensaje: null,
    };
  },
  components: {
    PokemonImage,
    PokemonOptions,
  },
  methods: {
    async iniciarJuego() {
      const opciones = await obtenerOpcionesFachada(6);
      this.vectorPokemon = opciones;
      console.log(opciones);

      //elegimos un pokemon de los 4
      let pokemonCorrecto = obtenerAleatorioFachada(
        0,
        this.vectorPokemon.length
      );
      this.pokemon = this.vectorPokemon[pokemonCorrecto];
    },

    recibioPadre(id) {
      console.log("Mensaje recibido desde hijo");
      this.mostrar = true;
      console.log(id);
      this.validarRespuesta(id.atributo1);
    },

    validarRespuesta(opcionSeleccionada) {
      if (opcionSeleccionada === this.pokemon.id) {
        this.mensaje = "Correcto";
      } else {
        this.mensaje =
          "Perdiste, el  pokemon correcto era :" + this.pokemon.nombre;
      }
    },
    comunicarHijo() {
      console.log(this.$refs.miHijo1.mensaje1);
      this.$refs.miHijo1.mensaje1 = "Nuevo mensaje 1";

      console.log(this.$refs.miHijo2.mensaje2);
      this.$refs.miHijo2.mensaje2 = "Nuevo mensaje 2";
    },
  },
  //todos los ciclos de vida estas exentos del await
  mounted() {
    this.iniciarJuego();
  },
};
</script>

<style></style>
