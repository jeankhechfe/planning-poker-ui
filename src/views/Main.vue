<template>
  <div>
    <body>
      <div>
        <Header />
        <h1>Sidebar container</h1>
        <Content />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";

export default {
  name: "Body",
  components: {
    Header,
    Content,
  },
};
</script>
