<template>
  <div id="loginCard1">
    <div id="loginCard2" class="col-lg-6 col-xl-4">
      <div class="card mb-5 mb-xl-0">
        <div class="card-body p-5">
          <LoginForm></LoginForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginForm from "@/components/Login/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style>
#loginCard1 {
  text-align: center;
}
#loginCard2 {
  text-align: left;
  margin: 100px;
  display: inline-block;
  align-items: center;
}
</style>