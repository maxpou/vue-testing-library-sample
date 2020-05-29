<template>
  <VLayout>
    <h2>{{ starship.name }}</h2>
    <VTable v-if="Object.keys(this.starship).length > 0">
      <tbody>
        <tr>
          <td>Model</td>
          <td>{{ starship.model }}</td>
        </tr>
        <tr>
          <td>Manufacturer</td>
          <td>{{ starship.manufacturer }}</td>
        </tr>
        <tr>
          <td>Passengers</td>
          <td>{{ starship.passengers }}</td>
        </tr>
        <tr>
          <td>Price</td>
          <td><VPrice :amount="starship.cost_in_credits" /></td>
        </tr>
      </tbody>
    </VTable>
  </VLayout>
</template>

<script>
import VLayout from '../components/VLayout'
import VTable from '../components/VTable'
import VPrice from '../components/VPrice'
import { getStarship } from '../services/swapi.api'
import { formatStarship } from '../services/dataFormatter'

export default {
  name: 'StarshipDetail',
  components: {
    VLayout,
    VTable,
    VPrice
  },
  data () {
    return {
      starship: {}
    }
  },
  async mounted () {
    const response = await getStarship(this.$route.params.id)
    this.starship = formatStarship(response.data)
  }
}
</script>
