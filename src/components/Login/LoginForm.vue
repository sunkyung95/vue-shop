<template>
  <div>
    <div class="row">
      <div class="small text-uppercase fw-bold">로그인</div>
      <div class="small text-uppercase fw-bold">회원가입</div>
    </div>

    <hr />

    <div class="small text-uppercase fw-bold">아이디 또는 이메일</div>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
    <div class="small text-uppercase fw-bold">비밀번호</div>
    <input type="password" class="form-control" id="exampleFormControlInput1" />
    <button type="button" class="btn btn-dark form-control">로그인</button>

    <div id="showIdPwdDiv" class="row">
      <a href="#" class="small link-dark fw-bold" @click="goFindId()">아이디 찾기</a>
      <a href="#" class="small link-dark fw-bold" @click="goFindPass()">비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    goFindId() {
      this.$router.push("/findId");
    },
    goFindPass() {
      this.$router.push("/findPass");
    }
  },
};
</script>

<style>
#showIdPwdDiv a:nth-child(2) {
  float: left;
}
</style>
