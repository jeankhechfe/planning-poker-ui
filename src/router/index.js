import Vue from "vue";
import VueRouter from "vue-router";
import Sample from "../views/Sample.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  },
  {
    path: "/",
    name: "Main",
    component: Main,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
