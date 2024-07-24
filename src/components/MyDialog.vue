<template>
  <div class="back_modal">
    <div class="modal" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog"
}
</script>

<style scoped>
.back_modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background-color: white;
  width: 570px;
  height: 300px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid grey;
}
.modal > * {
  width: 100%;
}

</style>