<template>
  <main class="CatalogList">
    <CatalogListItem
      v-for="starship in starships"
      :key="starship.id"
      :starship="starship"
      @selectStarship="selectStarship"
    />
  </main>
</template>

<script>
import CatalogListItem from './CatalogListItem'

export default {
  name: 'CatalogList',
  components: {
    CatalogListItem
  },
  props: {
    starships: {
      type: Array,
      required: true
    },
    addToBasket: {
      type: Function,
      required: true
    }
  },
  methods: {
    selectStarship (starship) {
      this.addToBasket(starship)
    }
  }
}
</script>

<style>
.CatalogList {
  display: flex;
  flex-wrap: wrap;
}
</style>
