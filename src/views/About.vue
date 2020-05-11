<template>
  <div class="about">
      <Header />
    <div class="text-center">
      <img alt="Vue logo" src="../assets/poker-logo.png" />
      <h1>The Best Agile Planning Tool</h1>
    </div>
    <p>Planning Poker is a digital card game designed to help agile and scrum development teams effectively set their sprint goals through collaborative planning and consensus-based estimations. Planning Poker is proven to be one of the most effective sprint planning tools for agile teams.</p>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "About",
    components: {
    Header,
  },
};
</script>