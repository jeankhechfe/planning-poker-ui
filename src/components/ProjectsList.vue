<template>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" v-bind:key="project.id" class="col-lg-4 col-md-6 col-sm-12">
        <div class="single-project">
          <h2 class="project-name text-center">{{ project.name }}</h2>
          <div class="project-content">
            <p>{{ project.description }}</p>
          </div>
          <div class="text-right">
            <router-link
              :to="{ name: 'Project', params: { id: project.id } }"
              class="btn btn-primary"
              >Open</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsList",
  props: ["projects"],
};
</script>

<style scoped>
.container {
  margin-top: 30px;
}
.single-project {
  background-color: #eee;
  padding: 15px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease 0s;
}
.project-name {
  font-size: 24px;
  padding-bottom: 2px;
  -webkit-box-shadow: 0 2px 0 -1px #ddd;
  box-shadow: 0 2px 0 -1px #ddd;
}
.single-project .btn-primary {
  text-transform: uppercase;
  border: 1px solid #cf142b;
  color: #686868;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
}
.single-project:hover {
  background-color: #43484e;
  color: #fff;
}
.single-project:hover .btn-primary {
  background-color: #ddd;
  color: #cf142b;
  border-color: #ddd;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background-color: #cf142b !important;
  border-color: #cf142b !important;
  color: #fff !important;
  box-shadow: none !important;
  border-color: none !important;
}
</style>
