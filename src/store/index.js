import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js"
import project from "./modules/project.js"
import task from "./modules/task.js"
import estimation from "./modules/estimation.js"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    project,
    task,
    estimation
  }
});
