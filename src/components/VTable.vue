<template>
  <table>
    <slot></slot>
  </table>
</template>

<style scoped>
table {
  border: 1px solid rgba(34,36,38,.15);
  width: 100%;
  border-radius: .3rem;
  margin-top: 1em;
}
td {
  padding: .8em .8em;
  border-top: 1px solid rgba(34,36,38,.1);
}
table tr:first-child td {
  border-top: none;
}
</style>
