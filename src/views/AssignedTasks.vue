<template>
<div>
  <body>
    <div>
      <SideNav />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="text-center">
              <h2 class="title-one">Your Assigned Tasks</h2>
              <h4 v-if="!loaded" style="margin-top: 50px">Loading...</h4>
              <div v-if="loaded">
                <h4 v-if="projects.length == 0" style="margin-top: 50px">You don't have any ;)</h4>
                <div v-for="project in projects" v-bind:key="project.id" style="margin-top: 30px">
                  <UserTasks v-bind:tasks="project.tasks" v-bind:project="project" v-if="project.tasks.length != 0"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import UserTasks from "@/components/UserTasks";
import axios from "../service/axios-api";

export default {
  name: "AssignedTasks",
  components: {
    SideNav,
    UserTasks,
  },
  created() {
    axios
      .get("/projects")
      .then(Response => {
        this.projects = Response.data;
        this.projects.forEach(project => {
          axios
            .get("/tasks/project/" + project.id) 
            .then(Response => {
              project.tasks = Response.data;
              project.tasks = project.tasks.filter(task => task.estimation == 0);
            })
            .catch(error => {
              console.log(error);
            });
        });
        console.log(this.projects);
        setTimeout(() => {
          this.loaded = true;
        }, 1000); 
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    load(){
      this.loaded = true;
    }
  },
  data() {
    return {
      projects: [],
      loaded: false
    };
  }
};
</script>

<style scoped>
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
</style>
