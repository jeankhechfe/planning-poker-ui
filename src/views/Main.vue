<template>
  <div>
    <body>
      <div>
        <Header />
        <h1>Sidebar container</h1>
        <SearchBar />
        <ProjectsList />
        <Content />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Content from "@/components/Content.vue";
import SearchBar from "@/components/SearchBar";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Body",
  components: {
    Header,
    SearchBar,
    Content,
    ProjectsList,
  },
};
</script>
