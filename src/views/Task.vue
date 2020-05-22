<template>
  <div>
    <body>
      <div>
        <div class="sidenav container">
          <SideNav />
        </div>
        <div class="dashboard">
          <VotingCards />
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import VotingCards from "@/components/VotingCards";

export default {
  name: "Body",
  components: {
    SideNav,
    VotingCards,
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
