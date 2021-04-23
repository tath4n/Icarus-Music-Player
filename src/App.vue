<template>
  <h1>Icarus Player Music</h1>

  <PlayerMusic msg="Welcome to Your Vue.js App"/>
</template>

<script>
import PlayerMusic from './components/PlayerMusic.vue'

export default {
  name: 'App',
  components: {
    PlayerMusic
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
