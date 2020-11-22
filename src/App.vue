<template>
  <div id="app">
    <board-component />
  </div>
</template>

<script>
import BoardComponent from './components/BoardComponent/BoardComponent.vue';

export default {
  name: 'App',
  components: {
    [BoardComponent.name]: BoardComponent,
  },
};
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
