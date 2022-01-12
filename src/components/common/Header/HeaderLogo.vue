<template>
  <div id="logo">
    <b-navbar-brand @click="goMain()">Shop</b-navbar-brand>
  </div>
</template>

<script>
export default {
  name: "Logo",
  methods: {
    goMain() {
      this.$router.push('/')
    }
  }
};
</script>

<style>
</style>
