<script setup lang="ts">
import { ref } from "vue";

const pokemonList = ref([]);

const getPokemon = async () => {
  const data = await fetch("https://pokeapi.co/api/v2/pokemon")
  const pokemon = await data.json();
  console.log(pokemon)
  pokemonList.value = pokemon.results;
}
</script>

<template>
  <button @click="getPokemon">
    Get Pokémon
  </button>

  <div v-for="(pokemon, i) in pokemonList" :key="i">
    <h4 :key="i">{{ pokemon.name }}</h4>
  </div>
</template>