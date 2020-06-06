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
        <AssignUsersSection v-on:set-owner="set_owner"/>
        <div v-if="isOwner" class="container" style="padding: 0">
          <b-button
            variant="primary"
            class="btn btn-default"
            v-b-modal.editProjectModal
          >Edit Project</b-button>
          <b-button
            variant="primary"
            class="btn btn-danger"
            v-on:click="deleteProject"
          >Delete Project</b-button>
          <b-modal
          id="editProjectModal"
          ref="editProjectModal"
          hide-footer
          hide-header
        >
          <div>
            <h3>Edit {{project.name}}</h3>
            <hr />
            <b-form>
              <div class="form-group row">
                <label for="name" class="col-md-3 col-form-label text-md-right"
                  >Name</label
                >
                <div class="col-md-9">
                  <b-form-input
                    id="name"
                    class="form-control"
                    v-model="name"
                    placeholder="Project name"
                    name="name"
                    required
                  ></b-form-input>
                </div>
              </div>
              <div class="form-group row">
                <label
                  for="description"
                  class="col-md-3 col-form-label text-md-right"
                  >Description</label
                >
                <div class="col-md-9">
                  <b-form-textarea
                    id="description"
                    class="form-control"
                    v-model="description"
                    placeholder="Enter project description..."
                    rows="6"
                    max-rows="6"
                    name="description"
                    required
                  ></b-form-textarea>
                </div>
              </div>
              <div class="text-right">
                <b-button class="btn-modal" @click="hideModal">Cancel</b-button>
                <b-button
                  class="btn-modal"
                  variant="success"
                  @click="editProject"
                  >Edit</b-button
                >
              </div>
            </b-form>
          </div>
        </b-modal>
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
import AssignUsersSection from "@/components/AssignUsersSection";
import axios from "../service/axios-api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Body",
  components: {
    SideNav,
    TasksBar,
    TasksList,
    AssignUsersSection,
  },
  computed: mapGetters(["tasks"]),
  created() {
    axios
      .get("/projects/" + this.$route.params.id)
      .then(response => {
        this.project = response.data;
        this.name = this.project.name;
        this.description = this.project.description; 
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
          if(response.statusText=="OK")
            this.$router.push({ name: "Dashboard" });
        })
        .catch(error => {
          console.log(error);
        });
    },
    set_owner() {
      this.isOwner = true; 
    },
    hideModal() {
      this.$refs["editProjectModal"].hide();
    },
    editProject() {
      const project = {
        name: this.name,
        description: this.description
      };
      axios
        .put("/projects/" + this.$route.params.id, project)
        .then((response) => {
          this.name = response.data.name,
          this.project.name = response.data.name,
          this.description = response.data.description,
          this.project.description = response.data.description,
          this.hideModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      project: [],
      isOwner: false,
      name: null,
      description: null
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
  margin-bottom: 15px;
  margin-right: 15px;
}
</style>
