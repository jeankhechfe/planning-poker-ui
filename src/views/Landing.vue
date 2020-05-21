<template>
  <div class="landing">
    <Header />
    <AboutContent />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutContent from "@/components/AboutContent.vue";

export default {
  name: "Landing",
  components: {
    Header,
    AboutContent,
  },
};
</script>
