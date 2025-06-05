<template>
  <div class="options-container">
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
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