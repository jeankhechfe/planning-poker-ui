import Vue from "vue";
import VueRouter from "vue-router";
import Sample from "../views/Sample.vue";
import Main from "../views/Main.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/sample",
    name: "Sample",
    component: Sample,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
