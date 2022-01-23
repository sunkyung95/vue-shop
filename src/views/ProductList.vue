<template>
  <!-- <div>
    <PListCategoryName></PListCategoryName>
    <PListSort></PListSort>
    <PListProducts></PListProducts>
  </div> -->
  <div id="productList1">
    <div id="productList2" class="row row-cols-1 row-cols-md-6 g-4">
      <div class="col productCard">
        <div class="card h-100">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col productCard">
        <div class="card h-100">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col productCard">
        <div class="card h-100">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col productCard">
        <div class="card h-100">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
      <div class="col productCard">
        <div class="card h-100">
          <img src="" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import PListCategoryName from "@/components/productList/PListCategoryName.vue";
// import PListProducts from "@/components/productList/PListProducts.vue";
// import PListSort from "@/components/productList/PListSort.vue";

export default {
  name: "ProductList",
  components: {
    // PListCategoryName,
    // PListProducts,
    // PListSort,
  },
};
</script>

<style>
#productList1 {
  display: inline-block;
  width: 100%;
}
#productList2 {
  margin: 50px;
}
.productCard {
  margin: 30px;
}
</style>