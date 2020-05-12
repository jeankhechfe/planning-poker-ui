<template>
  <div>
    <b-navbar>
      <b-navbar-nav>
        <b-nav-item><router-link :to="{ name: 'Main' }"><img class="logo" src="../assets/poker-logo.png"></router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item><router-link class="primary-btn" :to="{ name: 'Main' }">Home</router-link></b-nav-item>
        <b-nav-item><router-link class="primary-btn" :to="{ name: 'About' }">About</router-link></b-nav-item>
        <b-nav-item><router-link v-if="!loggedIn" class="primary-btn" :to="{ name: 'Login' }">Login</router-link></b-nav-item>
        <b-nav-item><router-link v-if="!loggedIn" class="primary-btn" :to="{ name: 'Register' }">Register</router-link></b-nav-item>
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
.navbar {
    background: #f6f6f6;
    box-shadow: rgba(0, 0, 0, 0.298039) 0 0 3px;
}

.primary-btn {
  text-decoration: none;
  text-transform: uppercase;
	color: #686868;
  padding: 8px 10px 10px 10px;
	background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
}

.primary-btn:hover {
	background-color:#CF142B;
	color:#fff;
}

</style>