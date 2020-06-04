<template>
  <div>
    <body>
      <div>
        <SideNav />
        <div class="dashboard">
          <ProjectsBar />
          <ProjectsList v-bind:projects="projects" />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import ProjectsBar from "@/components/ProjectsBar";
import ProjectsList from "@/components/ProjectsList";
import SideNav from "@/components/SideNav";
import { mapGetters, mapActions } from "vuex";
import axios from "../service/axios-api";

export default {
  name: "Body",
  components: {
    SideNav,
    ProjectsBar,
    ProjectsList,
  },
  computed: mapGetters(["projects"]),
  methods: {
    ...mapActions(["setProjects", "setUsers"])
  },
  created() {
    axios
      .get("/projects")
      .then(response => {
        this.setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/users/")
      .then(response => {
        this.setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
.dashboard {
  overflow: hidden;
  min-height: 50px;
}

body {
  height: 100vh;
}
</style>
