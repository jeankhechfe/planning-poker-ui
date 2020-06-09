<template>
  <div class="container">
    <div class="row bar">
      <div class="col-sm-8">
        <input
          class="form-control"
          type="text"
          placeholder="Search Projects..."
          aria-label="Search"
        />
      </div>
      <div class="col-sm-4">
        <b-button
          variant="primary"
          v-b-modal.createProjectModal
          class="btn btn-success float-right"
          >Create Project</b-button
        >
        <b-modal
          id="createProjectModal"
          ref="createProjectModal"
          hide-footer
          hide-header
        >
          <div>
            <h3>Create New Project</h3>
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
                  @click="createProject"
                  >Create</b-button
                >
              </div>
            </b-form>
          </div>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "../service/axios-api";
import { mapActions } from "vuex";

export default {
  name: "ProjectsBar",
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    ...mapActions(["addProject"]),
    hideModal() {
      this.$refs["createProjectModal"].hide();
      this.name = "";
      this.description = "";
    },
    createProject() {
      const project = {
        name: this.name,
        description: this.description
      };
      const header = {
        Token: this.$store.getters.user.token,
      };
      axios
        .post("/projects", project, header)
        .then((response) => {
          this.addProject({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
          });
          this.hideModal();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.bar {
  background-color: #f6f6f6;
  padding: 15px 0;
  margin: 30px 0;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.form-control {
  border-radius: 0;
}
.form-control:focus {
  border-color: #cf142b;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.btn {
  border-radius: 0;
}
.btn-modal {
  margin-left: 15px;
}
</style>
