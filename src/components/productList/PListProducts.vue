<template>
  <div id="PListProducts">
    <span class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </span>
    <span class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </span>
    <span class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </span>
    <span class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </span>
    <span class="PList-product">
      <div class="PList-img">제품사진</div>
      <div>name</div>
      <div>price</div>
    </span>
  </div>
</template>

<script>
export default {
  name: "PListProducts",
};
</script>

<style>
.PList-product {
  background: red;
  float: left;
  margin: 50px
}
.PList-img {
  height: 300px;
  width: 250px;
  background: yellow;
}
</style>
