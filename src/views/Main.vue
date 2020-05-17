<template>
  <div>
    <body>
      <div>
        <Header />
        <ProjectsBar />
        <ProjectsList v-bind:projects="projects"/>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import ProjectsBar from "@/components/ProjectsBar";
import ProjectsList from "@/components/ProjectsList";

export default {
  name: "Body",
  components: {
    Header,
    ProjectsBar,
    ProjectsList,
  },
  // TODO: use axios to get data
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
