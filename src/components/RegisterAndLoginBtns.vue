<template>
  <div class="container">
    <div class="text-center">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <h5>Sign up now for a free account or if you already have one you can login using the buttons below;</h5>
          <div style="margin-top:30px">
            <router-link class="primary-btn" :to="{ name: 'Login' }">Login</router-link>
            <router-link class="primary-btn" :to="{ name: 'Register' }">Register</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterAndLoginBtns"
};
</script>

<style scoped>
.col-md-6 {
  background-color: #eee;
  padding: 15px 10px 30px 10px;
  -webkit-box-shadow: 3px 3px 5px -3px rgb(158, 158, 158);
  -moz-box-shadow: 3px 3px 5px -3px rgb(158, 158, 158);
  box-shadow: 3px 3px 5px -3px rgb(158, 158, 158);
}
.primary-btn {
  text-decoration: none;
  text-transform: uppercase;
  color: #686868;
  padding: 8px 10px 10px 10px;
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
</style>
