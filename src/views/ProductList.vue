<template>
  <div>
    <PListCategoryName></PListCategoryName>
    <PListSort></PListSort>
    <PListProducts></PListProducts>
  </div>
</template>

<script>
import PListCategoryName from "@/components/productList/PListCategoryName.vue";
import PListProducts from "@/components/productList/PListProducts.vue";
import PListSort from "@/components/productList/PListSort.vue";

export default {
  name: "ProductList",
  components: {
    PListCategoryName,
    PListProducts,
    PListSort,
  },
};
</script>

<style>

</style>