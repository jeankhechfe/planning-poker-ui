<template>
<div>
  <body>
    <div>
      <SideNav />
      <div class="projects">
        <div class="text-center">
          <h2 class="title-one">{{project.name}}</h2>
        </div>
        <TasksBar v-bind:project="project" />
        <TasksList v-bind:tasks="tasks" v-bind:project="project" />
        <!-- TODO: check if owner to display delete button -->
        <div class="container">
          <b-button
            variant="primary"
            class="btn btn-danger"
            v-on:click="deleteProject"
          >Delete Project</b-button>
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import TasksBar from "@/components/TasksBar";
import TasksList from "@/components/TasksList";
import axios from "../service/axios-api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Body",
  components: {
    SideNav,
    TasksBar,
    TasksList
  },
  computed: mapGetters(["tasks"]),
  created() {
    axios
      .get("/projects/" + this.$route.params.id)
      .then(response => {
        this.project = response.data;
      })
      .catch(error => {
        console.log(error);
      });
    axios
      .get("/tasks/project/" + this.$route.params.id)
      .then(response => {
        this.setTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["setTasks"]),
    deleteProject() {
      axios
        .delete("/projects/" + this.$route.params.id)
        .then(response => {
          this.$router.push({ name: "Dashboard" });
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      project: []
    };
  }
};
</script>

<style scoped>
.projects {
  overflow: hidden;
  min-height: 50px;
}
.title-one {
  color: #666666;
  display: inline-block;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  position: relative;
  margin-top: 30px;
}

.title-one:after {
  color: #cf142b;
  content: "||";
  position: absolute;
  right: -40px;
  top: -2px;
}

.title-one:before {
  color: #cf142b;
  content: "||";
  left: -40px;
  position: absolute;
  top: 0;
}

.btn {
  border-radius: 0;
  margin-bottom: 10px;
}
</style>
