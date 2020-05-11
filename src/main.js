import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

//Fontawesome
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontawesomeIcon } from "@fortawesome/vue-fontawesome";
import { faHome, faUser, faWrench } from "@fortawesome/free-solid-svg-icons";
library.add([faHome, faUser, faWrench]);

Vue.component("fa-icons", FontawesomeIcon);

//Bootstrap
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
