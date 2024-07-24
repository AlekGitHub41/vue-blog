<template>
  <input type="text" class="input" :value="modelValue" @input="$emit('update:modelValue',$event.target.value)">
</template>

<script>
export default {
  name: "MyInput",
  props: ["modelValue"],

}
</script>

<style scoped>
.input {
  width: 100%;
  height: 50px;
  border: 1px solid red;
  padding-left: 10px;
  box-sizing: border-box;
}
</style>