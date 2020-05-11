<template>
  <div>
    <Header />
    <LoginForm />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginForm from "@/components/Auth/LoginForm.vue";

export default {
  name: "Login",
  components: {
    Header,
    LoginForm,
  }
};
</script>