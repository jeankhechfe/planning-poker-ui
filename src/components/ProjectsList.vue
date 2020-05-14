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
    border: 1px solid #CF142B;
    color: #686868;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 0;
}
.single-project:hover {
    background-color: #43484E;
    color: #fff;
}
.single-project:hover .btn-primary {
    background-color: #ddd;
    color: #CF142B;
    border-color: #ddd;
}
.btn-primary:hover,
.btn-primary:focus,
 .btn-primary:active {
    background-color: #CF142B!important;
    border-color: #CF142B!important;
    color: #fff!important;
    box-shadow: none!important;
    border-color: none!important;
}
</style>