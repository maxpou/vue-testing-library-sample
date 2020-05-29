<template>
  <span>{{ priceShown }}</span>
</template>

<script>
export default {
  name: 'vPrice',
  props: {
    amount: {
      type: Number,
      required: true
    }
  },
  computed: {
    priceShown () {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      }).format(this.amount)
    }
  }
}
</script>
