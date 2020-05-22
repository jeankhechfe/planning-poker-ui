<template>
  <div>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "@/components/Auth/RegisterForm.vue";

export default {
  name: "Register",
  components: {
    RegisterForm,
  },
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      is_admin: null,
    };
  },
  methods: {
    register: function() {
      let data = {
        name: this.name,
        email: this.email,
        password: this.password,
        is_admin: this.is_admin,
      };
      this.$store
        .dispatch("register", data)
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
