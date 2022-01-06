import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/main",
    },
    {
      path: "/main",
      component: () => import("@/views/Main"),
    },
    {
      path: "/products",
      component: () => import("@/views/ProductList"),
    },
    {
      path: "/profile",
      component: () => import("@/views/UserProfile"),
    },
  ],
});
