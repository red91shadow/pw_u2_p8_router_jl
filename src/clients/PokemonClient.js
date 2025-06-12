// src/clients/PokeApiClient.js
import axios from "axios";

const consultarPokemon = async (query) => {
  // La API de Pokémon usa el nombre o ID en la URL
  const search_query = typeof query === "string" ? query.toLowerCase() : query;
  const respuesta = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${search_query}/`)
    .then((rpt) => rpt.data);
  return respuesta;
};

export const consultarPokemonFachada = async (query) => {
  return await consultarPokemon(query);
};

const consultarPokemonNombre = async (id) => {
  const respuesta = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((rpt) => rpt.data);
  return respuesta;
};

const consultarPokemonNombreFachda = async (id) => {
  const respuesta = await consultarPokemon(id);    
  return respuesta;
};
