<template>
  <div>
    <body>
      <div>
        <Header />
          <h2>Tasks estimation here</h2>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "Body",
  components: {
    Header,
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
