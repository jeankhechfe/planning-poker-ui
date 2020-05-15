import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import About from "../views/About.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Project from "../views/Project.vue";
import Epic from "../views/Epic.vue";

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
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/project/:id",
    name: "Project",
    component: Project,
  },
  {
    path: "/project/:projectId/epic/:id",
    name: "Epic",
    component: Epic,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
