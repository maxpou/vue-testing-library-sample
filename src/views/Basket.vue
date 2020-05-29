<template>
  <VLayout>
    <VTable v-if="basketStarships.length > 0">
      <tbody>
        <tr v-for="(basketLine, index) in basketStarships" :key="index">
          <td>{{ basketLine.name }}</td>
          <td><VPrice :amount="basketLine.cost_in_credits" /> / unit</td>
          <td>x{{ basketLine.quantity }}</td>
          <td><VPrice :amount="basketLine.subTotal" /></td>
        </tr>
      </tbody>
      <tfoot>
        <td colspan="3">Total</td>
        <td><VPrice :amount="basketTotalPrice" /></td>
      </tfoot>
    </VTable>
    <p v-else>
      Your basket is empty!
    </p>
  </VLayout>
</template>

<script>
import VLayout from '../components/VLayout'
import VTable from '../components/VTable'
import { mapGetters } from 'vuex'
import VPrice from '../components/VPrice'

export default {
  name: 'basket',
  components: {
    VLayout,
    VTable,
    VPrice
  },
  computed: {
    ...mapGetters([
      'basketStarships',
      'basketTotalPrice'
    ])
  }
}
</script>
