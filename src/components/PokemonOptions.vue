<template>
  {{ mensaje2 }}
  <div class="options-container">
    <ul>
      <li
        @click="comunicarClick(pokemon.id)"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
      >
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensaje2: "mensaje2",
    };
  },
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },

  methods: {
    comunicarClick(id) {
      console.log("Se realizo un click.....");
      console.log(id);

      const objetoEnviado = {
        atributo1: id,
        atributo2: "Joel",
        atributo3: true,
      };

      //luego del emit se va el control al padre asi que deberia ser la ultima linea del metodo
      this.$emit("seleccionado", objetoEnviado); //en su primer argumento yo le doy un nombre, este caso seleccionado, este evento se emite al padre
      //como segundo argumento del emit envio el dato que deseo enviar
    },
  },
};
</script>

<style scope>
ul {
  list-style-type: none;
}

li {
  background: red;
  border: 1px solid;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 5px;
  width: 250px;
}

.options-container {
  display: flex;
  justify-content: center;
}

li:hover {
  background: rgba(0, 0, 0, 0.01);
}
</style>