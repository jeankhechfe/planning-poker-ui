<template>
  <div class="container">
    <div class="row">
      <div v-for="epic in epics" v-bind:key="epic.id" class="col-sm-4">
        <div class="single-epic">
          <h2 class="epic-name text-center">{{epic.name}}</h2>
          <ul class="post-meta">
            <li>
              <i class="fa fa-clock"></i>
              <strong> Tasks:</strong>
              {{epic.tasksNumber}}
            </li>
          </ul>
          <div class="epic-content">
            <p>{{epic.description}}</p>
          </div>
          <div class="text-right">
            <router-link :to="{ name: 'Epic', params: { id: epic.id, projectId: 2 } }" class="btn btn-primary">Open</router-link> <!-- get projectId dynamically -->
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
      epics: [
        {
          id: 1,
          name: "epic1",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          tasksNumber: 5
        },
        {
          id: 2,
          name: "epic2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          tasksNumber: 8
        },
        {
          id: 3,
          name: "epic3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          tasksNumber: 2
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
.single-epic .btn-primary {
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
.single-epic:hover .btn-primary {
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
ul {
  padding:0;
	overflow:hidden;
  margin: 1rem 0;
}
ul li {
	float: left;
	line-height: 15px;
	list-style: none;
	margin-right: 10px;
	padding-right: 10px;
	font-size: 16px;
	color:#999;
}
</style>