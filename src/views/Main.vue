<template>
  <div>
    <body>
      <div>
        <Header />
        <SearchBar />
        <ProjectsList />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SearchBar from "@/components/SearchBar";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Body",
  components: {
    Header,
    SearchBar,
    ProjectsList,
  },
};
</script>
