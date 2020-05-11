<template>
  <div class="about">
      <Header />
      <AboutContent />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import AboutContent from "@/components/AboutContent.vue";

export default {
  name: "About",
    components: {
    Header,
    AboutContent,
  },
};
</script>