<template>
  <navbar></navbar>
<router-view></router-view>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";
export default {
  name: "App",
  components:{
    Navbar,
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>