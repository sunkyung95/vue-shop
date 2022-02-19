<template>
  <div id="loginForm">
    <div class="row">
      <span class="small text-uppercase fw-bold showRow">로그인</span>
      <span class="small text-uppercase fw-bold showRow">회원가입</span>
    </div>

    <hr />

    <div class="small text-uppercase fw-bold">아이디 또는 이메일</div>
    <input type="text" class="form-control" id="exampleFormControlInput1" />
    <div class="small text-uppercase fw-bold">비밀번호</div>
    <input type="password" class="form-control" id="exampleFormControlInput1" />
    <button type="button" class="btn btn-dark form-control" @click="login()">로그인</button>

    <div id="showIdPwdDiv" class="row">
      <a href="#" class="small link-dark fw-bold showRow" @click="goFindId()">아이디 찾기</a>
      <a href="#" class="small link-dark fw-bold showRow" @click="goFindPass()">비밀번호 찾기</a>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Login",
  methods: {
    goFindId() {
      this.$router.push("/login/findId");
    },
    goFindPass() {
      this.$router.push("/login/findPass");
    },
    login() {
      var params = {
        username: "mor_2314",
        password: "83r5^_",
      }

      axios
        .post("https://fakestoreapi.com/auth/login", params)
        .then((res) => {
          console.log("login res : ", res);
          this.$store.dispatch("saveLoginToken", res.data.token)
        })
        .catch((error) => {
          console.log("login error : ", error);
        })
    }
  },
};
</script>

<style>
#showIdPwdDiv {
  margin-top: 10px;
}

#loginForm {
  display: flex;
  flex-flow: column wrap;
}

.showRow {
  width: auto;
}
</style>
