<template>
  <div>
    <h2>Shop</h2>
    <div class="ui container shop">
      <div class="ui cards three column">
        <div class="card" v-for="starship in starships">
          <div class="content">
            <div class="header">{{ starship.name }}</div>
            <div class="meta">{{ starship.manufacturer }}</div>
            <div class="description" v-if="starship.cost_in_credits !== 'unknown'" >
              <i class="bitcoin icon"></i> {{ starship.cost_in_credits }}
            </div>
          </div>
          <div v-if="starship.cost_in_credits !== 'unknown'" @click="addToSelection(starship)"
            class="ui bottom orange attached button">
            <i class="plus icon"></i> add to selection
          </div>
          <div v-else class="ui disabled button">Sold out</div>
        </div>
      </div>
    </div>
    <div class="ui container load">
      <button class="fluid ui grey basic button" v-if="!isFullyloaded" @click="loadStarships(currentPage + 1)">
        load more data
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: mapGetters({
    starships: 'allStarships',
    currentPage: 'currentPage',
    isFullyloaded: 'isFullyloaded'
  }),
  methods: mapActions([
    'loadStarships',
    'addToSelection'
  ]),
  created () {
    this.$store.dispatch('loadStarships', this.currentPage)
  }
}
</script>

<style scoped>
div.shop {
  text-align: center;
}
div.load {
  margin: 1em;
}
</style>
