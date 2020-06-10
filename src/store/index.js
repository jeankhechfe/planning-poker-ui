import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user.js";
import project from "./modules/project.js";
import task from "./modules/task.js";
import estimation from "./modules/estimation.js";
import VuexPersist from "vuex-persist";

const vuexPersist = new VuexPersist({
  key: "pp-app",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexPersist.plugin],
  modules: {
    user,
    project,
    task,
    estimation,
  },
});
