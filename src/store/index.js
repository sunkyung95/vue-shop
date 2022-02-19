import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
      createPersistedState()
  ],
  state: {
    loginToken: "",
  },
  mutations: {
    setLoginToken(state, token) {
        state.loginToken = token;
    }
  },
  actions: {
    saveLoginToken({ commit }, token) {
      commit("setLoginToken", token);
    },
  },
});
