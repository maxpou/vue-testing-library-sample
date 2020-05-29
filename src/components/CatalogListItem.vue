<template>
  <div class="CatalogListItem">
    <div class="CatalogListItem__content">
      <router-link :to="{
        name: 'starshipDetail',
        params: { id: starship.id }
      }" tag="h2" class="CatalogListItem__title">
        {{ starship.name }}
      </router-link>
      <p class="CatalogListItem__description">
        {{ starship.manufacturer }}
      </p>
      <VPrice v-if="starship.cost_in_credits" :amount="starship.cost_in_credits" />
    </div>
    <div class="CatalogListItem__footer">
      <a
        v-if="starship.cost_in_credits"
        class="btn"
        role="button"
        :aria-label="`Add ${starship.name}`"
        @click="$emit('selectStarship', starship)">
        + Add to basket
      </a>
      <a
        v-else
        class="btn disabled"
        role="button"
        aria-disabled="true">
        Sold out
      </a>
    </div>
  </div>
</template>

<script>
import VPrice from './VPrice'

export default {
  name: 'CatalogListItem',
  components: {
    VPrice
  },
  props: {
    starship: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.CatalogListItem {
  display: flex;
  flex-direction: column;
  width: 290px;
  margin: .875em .5em;
}
.CatalogListItem__content {
  text-align: center;
  border-radius: 6px 6px 0 0;
  flex-grow: 1;
  padding: 1em;
  border: 1px solid rgba(214, 209, 230, 0.5);
  padding: 1em;
}
.CatalogListItem__footer {
  border-radius: 0 0 6px 6px;
  border-top: 0;
  text-align: center;
  font-weight: bold;
  background-color: #e4d9ff;
}
.btn {
  cursor: pointer;
  border: 1px solid rgba(214, 209, 230, 0.5);
  border-radius: 0 0 6px 6px;

  padding: 1em;
  display: inline-block;
  width: 100%;
}
.btn.disabled {
  border: 1px solid #ededed;
  border-radius: 0 0 6px 6px;
  cursor: not-allowed;
  background: #ededed;
}
.CatalogListItem__title {
  font-size: 1.2em;
  cursor: pointer;
  color: #5c4e7e;
}
.CatalogListItem__title:hover {
  color: #9368fd;
}
.CatalogListItem__description {
  font-size: 1em;
  margin-top: .5em;
}
</style>
