<template>
  <div>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/Auth/LoginForm.vue";

export default {
  name: "Login",
  components: {
    LoginForm,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login: function() {
      let username = this.username;
      let password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>
