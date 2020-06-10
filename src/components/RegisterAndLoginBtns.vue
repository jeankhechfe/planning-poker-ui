<template>
  <div class="container">
    <div class="text-center">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <div v-if="!isUserLoggedIn">
            <router-link class="primary-btn login" :to="{ name: 'Login' }"
              >Login</router-link
            >
            <router-link class="primary-btn" :to="{ name: 'Register' }"
              >Register</router-link
            >
          </div>
          <div v-if="isUserLoggedIn">
            <router-link class="primary-btn" :to="{ name: 'Dashboard' }"
              >Dashboard</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterAndLoginBtns",
  data() {
    return {
      isUserLoggedIn: "",
      username: "",
    };
  },
  created() {
    let userSession = JSON.parse(localStorage.getItem("pp-app"));
    let user = userSession.user.user;
    this.isUserLoggedIn = user.token ? true : false;
  },
};
</script>

<style scoped>
.container {
  margin-top: 60px;
}
.primary-btn {
  text-decoration: none;
  text-transform: uppercase;
  color: #686868;
  padding: 8px 15px 10px 15px;
  background-color: rgba(255, 255, 255, 0);
  border: solid 1px #cf142b;
  border-radius: 0;
  margin: 20px;
}

.primary-btn:hover {
  background-color: #cf142b;
  border-color: #cf142b;
  color: #fff;
}
.login {
  padding: 8px 25px 10px 25px;
}
</style>
