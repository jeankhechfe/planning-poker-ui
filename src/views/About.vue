<template>
  <div class="about">
    <MainView username="Burak Kocak" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainView from "@/components/MainView.vue";

export default {
  name: "mainview",
  components: {
    MainView,
  },
};
</script>
