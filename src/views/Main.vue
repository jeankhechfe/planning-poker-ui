<template>
  <div>
    <body>
      <div>
        <Header />
        <ProjectsBar />
        <ProjectsList />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ProjectsBar from "@/components/ProjectsBar";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Body",
  components: {
    Header,
    ProjectsBar,
    ProjectsList,
  },
};
</script>
