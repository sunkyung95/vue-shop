<template>
  <div id="header">
    <!-- <b-navbar toggleable="sm" type="light" variant="light">
      <HeaderLogo></HeaderLogo>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <HeaderCategorys></HeaderCategorys>
          <HeaderButtons></HeaderButtons>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar> -->

    <!-- <nav class="navbar navbar-light bg-light static-top">
      <div class="container">
        <HeaderLogo></HeaderLogo>
        와이이
        <a class="btn btn-primary" href="#signup">Sign Up</a>
      </div>
    </nav> -->

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <HeaderLogo></HeaderLogo>
    <HeaderCategorys></HeaderCategorys>
    <div class="d-flex">
      <HeaderLoginBtn></HeaderLoginBtn>
      <HeaderCartBtn></HeaderCartBtn>
    </div>
  </div>
</nav>
  </div>
</template>

<script>
import HeaderLogo from "@/components/common/Header/HeaderLogo.vue";
import HeaderCategorys from "@/components/common/Header/HeaderCategorys.vue";
import HeaderLoginBtn from "@/components/common/Header/HeaderLoginBtn.vue";
import HeaderCartBtn from "@/components/common/Header/HeaderCartBtn.vue";

export default {
  name: "Header",
  components: {
    HeaderLogo,
    HeaderCategorys,
    HeaderLoginBtn,
    HeaderCartBtn,
  },
};
</script>

<style>
</style>
