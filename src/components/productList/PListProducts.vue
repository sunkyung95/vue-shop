<template>
  <div id="PListProducts">
    <div class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PListProducts",
};
</script>

<style>
#PListProducts {
  padding: 100px;
}
.PList-product {
    background: red;
    
}
.PList-img {
  height: 300px;
  width: 250px;
  background: yellow;
}
</style>
