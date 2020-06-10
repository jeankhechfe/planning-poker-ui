import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Project from "../views/Project.vue";
import Task from "../views/Task.vue";
import AssignedTasks from "../views/AssignedTasks";
import axios from "../service/axios-api";

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/",
    name: "Landing",
    component: Landing,
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/task/:id",
    name: "Task",
    component: Task,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user/tasks/",
    name: "AssignedTasks",
    component: AssignedTasks,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    let userSession = JSON.parse(localStorage.getItem("pp-app"));
    if (userSession.user.user.token) {
      axios.defaults.headers.common["Authorization"] =
        userSession.user.user.token;
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
