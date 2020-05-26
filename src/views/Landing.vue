<template>
  <div class="landing">
    <AboutContent />
    <RegisterAndLoginBtns />
    <OurTeam />
  </div>
</template>

<script>
import AboutContent from "@/components/AboutContent.vue";
import RegisterAndLoginBtns from "@/components/RegisterAndLoginBtns";
import OurTeam from "@/components/OurTeam";
export default {
  name: "Landing",
  components: {
    RegisterAndLoginBtns,
    AboutContent,
    OurTeam,
  },
};
</script>
