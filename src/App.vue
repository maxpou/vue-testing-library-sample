<template>
  <div id="app">
    <Navbar
      :basket-size="basketSize"
    />
    <div class="page">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Navbar from './components/Navbar'

export default {
  components: {
    Navbar
  },
  computed: {
    ...mapGetters([
      'basketSize'
    ])
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Lato", sans-serif;
  color: rgba(34, 34, 34, 0.8);
}
</style>
