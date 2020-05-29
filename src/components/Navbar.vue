<template>
  <header id="nav">
    <nav role="navigation">
      <router-link to="/">Catalog</router-link>
      <router-link to="/basket">Basket {{ basketSizeShown }}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    basketSize: {
      type: Number,
      default: 0
    }
  },
  computed: {
    basketSizeShown () {
      return this.basketSize === 0 ? '' : `(${this.basketSize})`
    }
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: 0px;
  left: 0px;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: #9368fd;
  margin: 0px auto;
}

nav {
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1260px;
  z-index: 1000;
  -webkit-box-pack: start;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
}

a {
  position: relative;
  text-decoration: none;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(255, 255, 255);
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
  border-width: 0px;
  margin: 0px 0.5rem 0px 0px;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
