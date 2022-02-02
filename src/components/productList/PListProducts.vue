<template>
  <div id="productList1">
    <div id="productList2">
      <div class="productCard" @click="goProductDetail">
        <img
          src="https://image.thehyundai.com/static/2/3/0/45/A1/hnm40A1450325_01_1036821_002_001_1600.jpg"
          class="card-img-top pListImg"
          alt="..."
        />
        <p class="h6 pListName">name</p>
        <p class="h6 pListPrice">price</p>
      </div>
      <div class="productCard">
        <img
          src="https://image.thehyundai.com/static/2/3/0/45/A1/hnm40A1450325_01_1036821_002_001_1600.jpg"
          class="card-img-top pListImg"
          alt="..."
        />
        <p class="h6">name</p>
        <p class="h6">price</p>
      </div>
      <div class="productCard">
        <img
          src="https://image.thehyundai.com/static/2/3/0/45/A1/hnm40A1450325_01_1036821_002_001_1600.jpg"
          class="card-img-top pListImg"
          alt="..."
        />
        <p class="h6">name</p>
        <p class="h6">price</p>
      </div>
      <div class="productCard">
        <img
          src="https://image.thehyundai.com/static/2/3/0/45/A1/hnm40A1450325_01_1036821_002_001_1600.jpg"
          class="card-img-top pListImg"
          alt="..."
        />
        <p class="h6">name</p>
        <p class="h6">price</p>
      </div>
      <div class="productCard">
        <img
          src="https://image.thehyundai.com/static/2/3/0/45/A1/hnm40A1450325_01_1036821_002_001_1600.jpg"
          class="card-img-top pListImg"
          alt="..."
        />
        <p class="h6">name</p>
        <p class="h6">price</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PListProducts",
  methods: {
    goProductDetail() {
      this.$router.push("/productDetail");
    },
  },
};
</script>

<style>
#productList1 {
  width: 100%;
  padding: 2% 10% 2% 10%;
}
#productList2 {
  /* background: red; */
  width: 100%;
  height: 100%;
  display: inline-block;
}
.productCard {
  /* background: yellow; */
  width: 17%;
  margin: 4%;
  height: 520px;
  float: left;
}
.pListImg {
  width: 100%;
  height: 450px;
}
.pListName, .pListPrice {
  margin-top: 7px;
}
</style>
