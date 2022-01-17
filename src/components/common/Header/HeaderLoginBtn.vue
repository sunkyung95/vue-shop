<template>
  <span id="HeaderLoginBtn"  @click="goLogin()">
      로그인
  </span>
</template>

<script>
export default {
  name: "HeaderLoginBtn",
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
#HeaderLoginBtn {
    margin-right: 15px;
}
</style>
