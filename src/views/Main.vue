<template>
  <div>
    <body>
      <div>
        <Header />
        <div class="sidenav container">
          <SideNav />
        </div>
        <div class="main">
          <ProjectsBar />
          <ProjectsList v-bind:projects="projects" />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ProjectsBar from "@/components/ProjectsBar";
import ProjectsList from "@/components/ProjectsList";
import SideNav from "@/components/SideNav";

export default {
  name: "Body",
  components: {
    SideNav,
    Header,
    ProjectsBar,
    ProjectsList,
  },
  // TODO: use axios to get data
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        },
        {
          id: 2,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        },
        {
          id: 3,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        },
        {
          id: 4,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
        },
      ],
    };
  },
};
</script>

<style scoped>
.main {
  overflow: hidden;
  min-height: 50px;
}

.sidenav {
  float: left;
  width: 50px;
  margin: 10px;
  margin-top: 30px;
}

body {
  height: 100vh;
}
</style>
