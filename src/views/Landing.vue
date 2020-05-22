<template>
  <div class="landing">
    <AboutContent />
    <RegisterAndLoginBtns />
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";
import RegisterAndLoginBtns from "@/components/RegisterAndLoginBtns";

export default {
  name: "Landing",
  components: {
    RegisterAndLoginBtns,
    AboutContent,
  },
  created() {
    // TODO: check if user is registered then redirect to dashboard
  }
};
</script>
