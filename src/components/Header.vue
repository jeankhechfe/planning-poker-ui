<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item><router-link :to="{ name: 'Main' }"><img class="logo" src="../assets/poker-logo.png"></router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link :to="{ name: 'Main' }">Home</router-link></b-nav-item>
        <b-nav-item><router-link :to="{ name: 'About' }">About</router-link></b-nav-item>
        <b-nav-item><router-link v-if="!loggedIn" :to="{ name: 'Login' }">Login</router-link></b-nav-item>
        <b-nav-item><router-link v-if="!loggedIn" :to="{ name: 'Register' }">Register</router-link></b-nav-item>
        <b-nav-item-dropdown v-if="loggedIn" right>
          <template v-slot:button-content>
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    username: String,
  },
  computed: {
    loggedIn() {
      return false; // TODO: implement function
    }
  }
};
</script>
<style scoped>
.logo {
  width: 50px;
}
</style>