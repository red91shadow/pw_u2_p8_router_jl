<template>
  <div class="image-container">
    <img
      v-if="!mostrar"
      class="ocultar"
      :src="ImagenFuente"
      alt="No se puede renderizar el pokemon"
    />

    <img
      v-if="mostrar"
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
      requerid: true,
    },

    mostrarImagen: {
      type: Boolean,
      requird: true,
      default: false,
    },
  },
  data() {
    return {
      mostrar: this.mostrarImagen,
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
  right: 45%;
}

.ocultar {
  filter: brightness(0);
}

.image-container {
  height: 200px;
}
</style>