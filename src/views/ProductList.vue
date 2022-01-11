<template>
  <div>
    <PListCategoryName></PListCategoryName>
    <PListProducts></PListProducts>
  </div>
</template>

<script>
import PListCategoryName from "@/components/productList/PListCategoryName.vue";
import PListProducts from "@/components/productList/PListProducts.vue";

export default {
  name: "ProductList",
  components: {
    PListCategoryName,
    PListProducts
  }
};
</script>

<style>
</style>