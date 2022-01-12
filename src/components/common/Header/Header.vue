<template>
  <div id="header">
    <b-navbar toggleable="sm" type="light" variant="light">
      <HeaderLogo></HeaderLogo>
      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <HeaderCategorys></HeaderCategorys>
          <HeaderButtons></HeaderButtons>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import HeaderLogo from "@/components/common/Header/HeaderLogo.vue";
import HeaderCategorys from "@/components/common/Header/HeaderCategorys.vue";
import HeaderButtons from "@/components/common/Header/HeaderButtons.vue";

export default {
  name: "Header",
  components: {
    HeaderLogo,
    HeaderCategorys,
    HeaderButtons,
  }
};
</script>

<style>
</style>
