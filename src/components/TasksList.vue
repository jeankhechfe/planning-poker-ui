<template>
  <div class="container">
    <div class="row">
      <div class="tasks">
        <ul class="post-meta">
          <li>
            <i class="fa fa-clock"></i>
            <strong>Number of Tasks:</strong>
            {{ tasks.length }}
          </li>
        </ul>
        <div v-if="tasks.length == 0" class="text-center">
          <p>There are no tasks in this project</p>
        </div>
        <div v-if="unestimated_tasks.length != 0">
          <h4>Tasks need Estimation</h4>
          <div v-for="task in unestimated_tasks" v-bind:key="task.id" class="col-sm-12">
            <div class="row single-task">
              <div class="col-sm-2">
                <h5>{{ task.name }}</h5>
              </div>
              <div class="col-sm-8 text-center">
                <p>{{ task.description }}</p>
              </div>
              <div class="col-sm-2">
                <router-link
                  :to="{
                      name: 'Task',
                      params: { id: task.id },
                    }"
                  class="btn btn-estimate float-right"
                >Estimate now</router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-if="estimated_tasks.length != 0">
          <h4 style="margin-top: 40px;">Estimated Tasks</h4>
          <div v-for="task in estimated_tasks" v-bind:key="task.id" class="col-sm-12">
            <div class="row single-task">
              <div class="col-sm-2">
                <h5>{{ task.name }}</h5>
              </div>
              <div class="col-sm-8 text-center">
                <p>{{ task.description }}</p>
              </div>
              <div class="col-sm-2 text-center">
              <router-link
                  :to="{
                      name: 'Task',
                      params: { id: task.id },
                    }"
                  class="btn btn-estimate float-right"
                >view</router-link>
                <h3 v-if="task.estimation != 99999" class="estimation number">{{ task.estimation }}</h3>
                <h3 v-if="task.estimation == 99999" class="estimation number">INFINITY</h3>
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
  name: "TasksList",
  props: ["tasks"],
  data() {
    return {
      estimated_tasks: [],
      unestimated_tasks: [],
    };
  },
  created() {
    this.unestimated_tasks = this.tasks.filter(task => task.estimation == 0);
    this.estimated_tasks = this.tasks.filter(task => task.estimation != 0);
  },
  watch: {
    tasks: function(newTasks) {
      this.unestimated_tasks = newTasks.filter(task => task.estimation == 0);
      this.estimated_tasks = newTasks.filter(task => task.estimation != 0);
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.tasks {
  width: 100%;
  background-color: #eee;
  padding: 15px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease 0s;
}

.tasks .btn-estimate {
  margin-top: 1px;
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
p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.estimation.number {
  margin-bottom: 0;
  margin-top: 3px;
}
</style>
