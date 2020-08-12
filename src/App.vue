<template>
  <div id="app">
    <HomePage msg="Welcome to luke"/>
  </div>
</template>

<script>
import HomePage from './views/Home'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
@import './assets/css/common.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
