<template>
  <select name="" id="" @change="change">
    <option value="" disabled>Выберите сортировку</option>
    <option v-for="val in value" :value="val.name">{{ val.value }}</option>
  </select>
</template>

<script>
export default {
  name: "MySelect",
  props: {
    value: {
      type: Array,
      default: () => [],
    }
  },
  methods: {
    change(e) {
      this.$emit("change_", e.target.value)
    }
  }
}
</script>

<style scoped>

</style>