<template>
  <span @click="goCart()">
      장바구니
  </span>
</template>

<script>
export default {
  name: "HeaderCartBtn",
  methods: {
    goCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style>
</style>
