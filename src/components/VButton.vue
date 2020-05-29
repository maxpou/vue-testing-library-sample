<template>
  <a
    v-bind="$attrs"
    @click="$emit('click')"
    class="vButton"
  >{{ text }}</a>
</template>

<script>
export default {
  name: 'vButton',
  inheritAttrs: false,
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.vButton {
  background: 0 0 !important;
  box-shadow: 0 0 0 1px #a985d980 inset !important;
  color: #838383 !important;
  cursor: pointer;
  width: 100%;
  display: block;
  font-weight: 400;
  border-radius: .3rem;
  min-height: 1em;
  padding: .8em 1.5em .8em;
  text-align: center;
}
</style>
