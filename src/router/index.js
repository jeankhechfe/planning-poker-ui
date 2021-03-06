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
      requested: "Dashboard",
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
    meta: {
      requiresAuth: false,
      requested: "Auth",
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresAuth: false,
      requested: "Auth",
    },
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
  let userSession, token;
  try {
    userSession = JSON.parse(localStorage.getItem("pp-app"));
    token = userSession.user ? userSession.user.user.token : null;
  } catch (error) {
    token = null;
  }

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (token) {
      axios.defaults.headers.common["Authorization"] = token;
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.matched.some((record) => record.meta.requested) && token) {
      next("/dashboard");
    } else {
      next();
    }
  }
});

export default router;
