<template>
  <div class="container">
    <div class="row">
      <div v-for="project in projects" v-bind:key="project.id" class="col-sm-4">
        <div class="single-project">
          <h2 class="project-name text-center">{{project.name}}</h2>
          <div class="project-content">
            <p>{{project.description}}</p>
          </div>
          <div class="text-right">
            <router-link :to="{ name: 'Main' }" class="btn btn-primary">Open</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsList",
  data() {
    return {
      projects: [
        {
          id: 1,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
          id: 2,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
          id: 3,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        },
        {
          id: 4,
          name: "Foo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  /* background-color: #f6f6f6; */
  padding: 15px;
  margin-top: 30px;
}
.single-project {
    background-color: #eee;
    padding: 15px;
    margin-bottom: 30px;
}
.project-name {
    font-size: 24px;
    padding-bottom: 2px;
    -webkit-box-shadow: 0 2px 0 -1px #ddd;
    box-shadow: 0 2px 0 -1px #ddd;
}
.single-project .btn-primary {
    text-transform: uppercase;
    border: 1px solid #CF142B;
    color: #686868;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 0;
}
</style>