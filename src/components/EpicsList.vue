<template>
  <div class="container">
    <div class="row">
      <div v-for="(epic, index) in epics" v-bind:key="epic.id" class="col-sm-12">
        <div class="single-epic">
          <h2 class="epic-name">{{epic.name}}</h2>
          <ul class="post-meta">
            <li>
              <i class="fa fa-clock"></i>
              <strong> Tasks:</strong>
              {{epic.tasks.length}}
            </li>
          </ul>
          <div class="epic-content">
            <p>{{epic.description}}</p>
          </div>
          <div class="row">
            <div class="col-md-12" style="padding-right: 30px;">
              <b-button
                variant="primary"
                v-b-modal.createTaskModal
                class="btn btn-success float-right"
              >Add Task</b-button>
            </div>
          </div>
          <b-modal id="createTaskModal" ref="createTaskModal" hide-footer hide-header>
            <div>
              <h3>Add Task to Epic {{epic.name}}</h3>
              <hr />
              <b-form>
                <div class="form-group row">
                  <label for="title" class="col-md-3 col-form-label text-md-right">Title</label>
                  <div class="col-md-9">
                    <b-form-input
                      id="title"
                      class="form-control"
                      v-model="title"
                      placeholder="Task title"
                      name="title"
                      required
                    ></b-form-input>
                  </div>
                </div>
                <div class="form-group row">
                  <label for="description" class="col-md-3 col-form-label text-md-right">Description</label>
                  <div class="col-md-9">
                    <b-form-textarea
                      id="description"
                      class="form-control"
                      v-model="description"
                      placeholder="Enter task description..."
                      rows="6"
                      max-rows="6"
                      name="description"
                      required
                    ></b-form-textarea>
                  </div>
                </div>
                <div class="text-right">
                  <b-button class="btn-modal" @click="hideModal(index)">Cancel</b-button>
                  <b-button class="btn-modal" variant="success" @click="createTask">Add</b-button>
                </div>
              </b-form>
            </div>
          </b-modal>
          <div>
            <h4>Tasks need Estimation</h4>
            <div v-for="task in epic.tasks" v-bind:key="task.id" class="col-sm-12">
              <div class="row single-task" v-if="task.estimation == null">
                <div class="col-sm-2">
                  <h5>{{task.name}}</h5>
                </div>
                <div class="col-sm-8 text-center">
                  <p>{{task.description}}</p>
                </div>
                <div class="col-sm-2">
                  <router-link
                    :to="{ name: 'Task', params: { id: epic.id, projectId: 2 } }"
                    class="btn btn-estimate float-right"
                  >Estimat now</router-link>
                </div>
              </div>
            </div>
            <h4 style="margin-top: 40px;">Estimated Tasks</h4>
            <div v-for="task in epic.tasks" v-bind:key="task.id" class="col-sm-12">
              <div class="row single-task" v-if="task.estimation != null">
                <div class="col-sm-2">
                  <h5>{{task.name}}</h5>
                </div>
                <div class="col-sm-8 text-center">
                  <p>{{task.description}}</p>
                </div>
                <div class="col-sm-2 text-center">
                  <h3 class="estimation">{{task.estimation}}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EpicsList",
  data() {
    return {
      title: '',
      description: '',
    }
  },
  methods: {
    hideModal(index) {
      this.$refs["createTaskModal"][index].hide();
    },
    createTask() {
      //TODO
    }
  },
  props: ["epics"]
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.single-epic {
  background-color: #eee;
  padding: 15px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease 0s;
}
.epic-name {
  font-size: 24px;
  padding-bottom: 2px;
  -webkit-box-shadow: 0 2px 0 -1px #ddd;
  box-shadow: 0 2px 0 -1px #ddd;
}
.single-epic .btn-estimate {
  text-transform: uppercase;
  border: 1px solid #cf142b;
  color: #686868;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
}
.single-task {
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.single-task:hover {
  background-color: #43484e;
  color: #fff;
}
.btn-estimate:hover,
.btn-estimate:focus,
.btn-estimate:active,
.single-task:hover .btn-estimate {
  background-color: #cf142b !important;
  border-color: #cf142b !important;
  color: #fff !important;
  box-shadow: none !important;
  border-color: none !important;
}
ul {
  padding: 0;
  overflow: hidden;
  margin: 1rem 0;
}
ul li {
  float: left;
  line-height: 15px;
  list-style: none;
  margin-right: 10px;
  padding-right: 10px;
  font-size: 16px;
  color: #999;
}
.btn {
  border-radius: 0;
}
.btn-modal {
  margin-left: 15px;
}
.single-task {
  padding: 10px 0;
  margin: 10px 0;
}
</style>