<template>
  <div id="HButtons" class="d-flex">
    <b-nav-text>검색</b-nav-text>
    <b-nav-text @click="goLogin()">로그인</b-nav-text>
    <b-nav-text @click="goCart()">장바구니</b-nav-text>
  </div>
</template>

<script>
export default {
  name: "HButtons",
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goCart() {
      this.$router.push("/cart");
    },
  },
};
</script>

<style>
#HButtons {
  margin-left: 1600px;
}
</style>
