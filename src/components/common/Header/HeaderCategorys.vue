<template>
  <div id="categorys" class="d-flex">
    <b-nav-text @click="goProductList()">category1</b-nav-text>
    <b-nav-text @click="goProductList()">category2</b-nav-text>
    <b-nav-text @click="goProductList()">category3</b-nav-text>
  </div>
</template>

<script>
export default {
  name: "Categorys",
  methods: {
    goProductList() {
      this.$router.push("/products");
    },
  },
};
</script>

<style>
</style>
