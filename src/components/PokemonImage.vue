<template>
  {{ mensaje1 }}
  <div class="image-container">
    <img
      v-if="!mostrarImagen"
      class="ocultar"
      :src="ImagenFuente"
      alt="No se puede renderizar el pokemon"
    />

    <img
      v-if="mostrarImagen"
      :src="ImagenFuente"
      alt="Ne se puede renderizar el pokemon"
    />
  </div>
</template>

<script>
export default {
  //propiedades
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },

    mostrarImagen: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  data() {
    return {
      mensaje1: "mensaje1",
    };
  },

  computed: {
    ImagenFuente() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  position: absolute;
  right: 37%;
}

.ocultar {
  filter: brightness(0);
}

.image-container {
  height: 200px;
}
</style>