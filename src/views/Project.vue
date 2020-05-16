<template>
  <div>
    <body>
      <div>
        <Header />
        <div class="text-center"><h2 class="title-one">Project Foo</h2></div> <!-- TODO: get project name dynamically -->
        <EpicsBar />
        <EpicsList />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import EpicsBar from "@/components/EpicsBar";
import EpicsList from "@/components/EpicsList";

export default {
  name: "Body",
  components: {
    Header,
    EpicsBar,
    EpicsList,
  },
};
</script>

<style scoped>
.title-one {
	color: #666666;
	display: inline-block;
	font-size: 32px;
	font-weight: 600;
	text-align: center;
	text-transform: uppercase;
	position:relative;
  margin-top: 30px;
}

.title-one:after {
	color: #CF142B;
	content: "||";
	position: absolute;
	right: -40px;
	top: -2px;
}

.title-one:before {
	color: #CF142B;
	content: "||";
	left: -40px;
	position: absolute;
	top: 0;
}
</style>
