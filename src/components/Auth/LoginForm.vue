<template>
  <div>
    <div class="container">
      <div v-if="no_response" class="alert alert-danger" role="alert">
        Our backend serve is having some issues, please try again later
      </div>
      <div v-if="not_registered" class="alert alert-danger" role="alert">
        The username or password you have entered doesn't match any account
      </div>
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <div class="text-center">
                <router-link :to="{ name: 'Landing' }">
                  <img src="../../assets/poker-logo.png" class="logo" />
                </router-link>
              </div>
            </div>
            <div class="card-body">
              <form @submit.prevent="login">
                <div class="form-group row">
                  <label
                    for="username"
                    class="col-md-4 col-form-label text-md-right"
                    >Username</label
                  >
                  <div class="col-md-6">
                    <input
                      v-model="username"
                      id="username"
                      type="text"
                      class="form-control"
                      name="username"
                      required
                      autofocus
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label
                    for="password"
                    class="col-md-4 col-form-label text-md-right"
                    >Password</label
                  >
                  <div class="col-md-6">
                    <input
                      v-model="password"
                      id="password"
                      type="password"
                      class="form-control"
                      name="password"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="col-md-6 offset-md-4">
                    <div class="checkbox">
                      <label>
                        <input type="checkbox" name="remember" /> Remember Me
                      </label>
                    </div>
                  </div>
                </div>
                <div class="form-group row mb-0">
                  <div class="col-md-6 offset-md-4">
                    <button type="submit" class="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
            <div class="card-footer text-center">
              <div class="etc-login-form">
                <p>
                  new user?
                  <router-link to="/register">create new account</router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../../service/axios-api";
import { mapActions } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
      not_registered: false,
      no_response: false,
    };
  },
  methods: {
    ...mapActions(["setUser"]),
    login() {
      axios
        .post("/login", { Login: this.username, Password: this.password })
        .then((response) => {
          this.setUser({ username: this.username, token: response.data.token });
          axios.defaults.headers.common["Authorization"] = response.data.token;
          this.$router.push({ name: "Dashboard" });
        })
        .catch((error) => {
          if (!error.response) {
            this.no_response = true;
          } else if (
            error.response.status == 400 ||
            error.response.status == 401
          )
            this.not_registered = true;
        });
    },
  },
};
</script>

<style scoped>
.container {
  margin-top: 2rem;
}
.btn-primary {
  text-transform: uppercase;
  border: 1px solid #cf142b;
  color: #686868;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #cf142b !important;
  color: #fff !important;
  border-color: #cf142b !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
}
.form-control:focus {
  border-color: #cf142b;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.card,
.card-header,
.form-control {
  border-radius: 0;
}
.logo {
  width: 30%;
}
.etc-login-form p {
  margin: 0;
}
.alert {
  margin-bottom: 2rem;
}
</style>
