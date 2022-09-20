<script lang="ts">
import View from "./components/View.vue"
import MyPokemon from "./components/MyPokemon.vue"
export default {
  components: {
    View,
    MyPokemon
  },
}
</script>

<template>
  <h2>Hello world</h2>
  <View element="div">Hello from view</View>
  <MyPokemon />
</template>

<style scoped>
#app { 
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>
