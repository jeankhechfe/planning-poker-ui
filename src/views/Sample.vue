<template>
  <div class="Sample container">
    <img alt="Vue logo" src="../assets/poker-logo.png" />
    <h1>my app</h1>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Sample",
  components: {
    HelloWorld,
  },
};
</script>
