<template>
  <div>
    <Header />
    <RegisterForm />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import RegisterForm from "@/components/Auth/RegisterForm.vue";

export default {
  name: "Register",
  components: {
    Header,
    RegisterForm,
  }
};
</script>

<style scoped>

</style>
