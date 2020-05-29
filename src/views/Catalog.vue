<template>
  <VLayout>
    <input
      type="text"
      v-model.lazy="userSearch"
      placeholder="Filter results..."
      data-testid="catalog-filter"
      aria-label="Filter results"
    />
    <CatalogList
      :starships="filteredStarships"
      :addToBasket="addStarshipToBasket"
    />
    <vButton
      v-if="!fullyLoaded"
      :text="'Load more data...'"
      @click="loadMoreStarships"
    />
    <br>
  </VLayout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VLayout from '../components/VLayout'
import vButton from '../components/VButton'
import CatalogList from '../components/CatalogList'

export default {
  name: 'catalog',
  components: {
    VLayout,
    vButton,
    CatalogList
  },
  data () {
    return {
      userSearch: ''
    }
  },
  computed: {
    ...mapState({
      starships: state => state.catalog.starships,
      fullyLoaded: state => state.catalog.fullyLoaded
    }),
    filteredStarships () {
      return this.starships.filter(starship => starship.name.toLowerCase().includes(this.userSearch.toLowerCase()))
    }
  },
  mounted () {
    if (this.starships.length === 0) {
      this.loadMoreStarships()
    }
  },
  methods: {
    ...mapActions([
      'loadMoreStarships',
      'addStarshipToBasket'
    ])
  }
}
</script>

<style scoped>
input {
  padding: .7em 1em;
  width: 100%;
  border-radius: .3rem;
  border: 1px solid #d6d1e680;
  background: #fff;
  color: rgba(0,0,0,.8);
}
input:focus {
  outline: none;
  border: 1px solid #a985d9;
}
</style>
