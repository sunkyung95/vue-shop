<template>
  <div id="logo" class="navbar-brand" @click="goMain()">
    shop
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
