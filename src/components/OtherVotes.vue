<template>
  <div class="container">
    <h2>Users Votes</h2>
    <div class="no-estimation" v-if="estimations == null">
      <h6>There are No previouse votes</h6>
    </div>
    <div v-for="estimation in estimations" v-bind:key="estimation.id">
      <p>
        {{ estimation.user.login }}:
        <strong>{{ estimation.estimation }}</strong>
      </p>
    </div>
  </div>
</template>

<script>
// import axios from "./../service/axios-api";

export default {
  name: "OtherVotes",
  props: ["estimations"],
  // created() {
  //   axios
  //     .get("/tasks/" + this.$route.params.id + "/estimations")
  //     .then(response => {
  //       this.estimations = response.data;
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // },
  // data() {
  // return {
  // estimations: null
  // }
  // }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #eee;
  padding: 15px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease 0s;
}
</style>
