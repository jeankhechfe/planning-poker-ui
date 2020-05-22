<template>
  <div>
    <body>
      <div>
        <SideNav />
        <div class="projects">
          <div class="text-center"><h2 class="title-one">Project Foo</h2></div>
          <!-- TODO: get project name dynamically -->
          <EpicsBar />
          <EpicsList v-bind:epics="epics" />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import EpicsBar from "@/components/EpicsBar";
import EpicsList from "@/components/EpicsList";

export default {
  name: "Body",
  components: {
    SideNav,
    EpicsBar,
    EpicsList,
  },
  // TODO: use axios to get data
  data() {
    return {
      epics: [
        {
          id: 1,
          name: "First Epic",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          tasks: [
            {
              name: "task 1",
              description:
                "consecteturcon consectetur adipisicing elit. Eligendi non quis exercitatio sectetur adipisicing elit. Eligendi non quis exercitatio. Eligendi non quis exercitatio",
              estimation: null,
            },
            {
              name: "task 2",
              description:
                "consectetur adipisicing elit. Eligendi non quis exercitatio",
              estimation: null,
            },
            {
              name: "task 3",
              description:
                "consectetur adipisicing elit. Eligendi non quis exercitatio consectetur adipisicing elit. Eligendi non quis exercitatio consectetur adipisicing elit. Eligendi non quis exercitatio",
              estimation: 11,
            },
            {
              name: "task 4",
              description:
                "consectetur adipisicing elit. Eligendi non quis exercitatio",
              estimation: null,
            },
          ],
        },
      ],
    };
  },
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
</style>
