<template>
  <button class="btn"><slot></slot>
  </button>
</template>

<script>
export default {
  name: "MyButtons"
}
</script>

<style scoped>
.btn {
  display: block;
  padding: 10px 15px 10px 15px;
  background-color: white;
  border: 1px solid red;
}
</style>