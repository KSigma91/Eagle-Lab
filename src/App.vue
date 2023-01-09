<template>
  <div id="app">
    <NavbarApp />
  </div>
</template>

<script>
import NavbarApp from './components/NavbarApp.vue'

export default {
  name: 'App',
  components: {
    NavbarApp
  }
}
</script>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap');

#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
