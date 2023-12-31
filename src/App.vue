<template>
  <NavBar class="nav-component"/>
  <div class="post-nav-component">
    <router-view></router-view>
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>

.nav-component {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}

.post-nav-component {
  margin-top: 4.5rem;
  position: fixed;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
