<template>
  <div class="text-center">
          <router-link
            v-if="!loggedIn"
            class="primary-btn"
            :to="{ name: 'Login' }"
            >Login</router-link
          >
          <router-link
            v-if="!loggedIn"
            class="primary-btn"
            :to="{ name: 'Register' }"
            >Register</router-link
          >
  </div>
</template>

<script>
export default {
  name: "RegisterAndLoginBtns",
};
</script>

<style scoped>

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
