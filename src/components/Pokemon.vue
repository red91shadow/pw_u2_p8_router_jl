<template>
  <div class="pokedex-container">
    <div class="pokedex-pantalla">
      <img
        v-if="pokemonImagen"
        :src="pokemonImagen"
        alt="Pokémon"
        class="pokemon-display-image"
      />
      <div v-else class="no-pokemon-image">
        <p>No Pokémon</p>
      </div>

      <div class="pokemon-info-display">
        <div v-if="pokemonNombre">
          <h2>{{ pokemonNombre }}</h2>
          <h1>#{{ pokemonId }}</h1>
        </div>
        <div v-else>
          <p class="mensaje-inicial">Ingresa un nombre o número</p>
        </div>
      </div>
    </div>

    <div class="pokedex-controls">
      <input
        v-model="busquedaPokemon"
        type="text"
        placeholder="Buscar Pokémon..."
      />
      <p class="help-text">Nombre o ID (ej: pikachu, 25)</p>
    </div>
  </div>
</template>

<script>
import { consultarPokemonFachada } from "@/clients/PokemonClient.js";

export default {
  data() {
    return {
      busquedaPokemon: null, //=TExto del usuario
      pokemonNombre: null, //nombre del pokemon
      pokemonId: null, //id del pokemon
      pokemonImagen: null, //URL de la imagen
    };
  },
  watch: {
    busquedaPokemon(value, oldValue) {
      this.pokemonNombre = null;
      this.pokemonId = null;
      this.pokemonImagen = null;

      if (value && value.trim() !== "") {
        this.pokemonNombre = "Buscando...";
        this.consultarPokemonEnAPI(value.trim());
      } else {
        this.pokemonNombre = null;
      }
    },
  },

  methods: {
    async consultarPokemonEnAPI(query) {
      try {
        const resp = await consultarPokemonFachada(query);
        console.log(resp);

        this.pokemonNombre =
          resp.name.charAt(0).toUpperCase() + resp.name.slice(1);
        this.pokemonId = resp.id;
        this.pokemonImagen = resp.sprites.front_default;
      } catch (error) {
        this.pokemonNombre = "No encontrado";
        this.pokemonId = "";
        this.pokemonImagen = null;
        console.error("Error al buscar Pokémon:", error);
      }
    },
  },
  mounted() {},
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: "Arial", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.pokedex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(221, 50, 50);

  border-radius: 12px;
  padding: 20px;
  width: 300px;
}

.pokedex-pantalla {
  background-color: #72dae7;
  border: 2px solid #bbb;
  border-radius: 10px;
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
}

.pokemon-display-image {
  max-width: 100%;
  max-height: 100%;
}

.no-pokemon-image {
  color: gray;
  font-size: 1em;
  text-align: center;
}

.pokemon-info-display {
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 0.1px;
  font-size: 0.9em;
}

.pokemon-info-display h2,
.pokemon-info-display h1 {
  margin: 0.1px;
  font-size: 1.2em;
}

.mensaje-inicial {
  color: #888;
  font-size: 0.9em;
  margin: 0;
}

.pokedex-controls {
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 8px;
}

input {
  width: 100%;
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 6px;
  text-align: center;
  box-sizing: border-box;
}

.help-text {
  font-size: 0.75em;
  color: black;
  margin: 0;
}
</style>