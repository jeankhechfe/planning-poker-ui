<template>
  <div class="container">
    <h2>Users Votes</h2>
    <div class="no-estimation" v-if="estimations.length == 0">
      <h6>There are no votes yet...</h6>
    </div>
    <div v-for="estimation in estimations" v-bind:key="estimation.id">
      <p class="vote-text">
        {{ estimation.user.login }}:
        <strong v-show="isVoted">{{ estimation.estimation }}</strong>
        <strong v-show="!isVoted">*</strong>
        <br />
        {{new Date(estimation.updated).toLocaleString()}}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "./../service/axios-api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "OtherVotes",
  computed: mapGetters(["estimations"]),
  props: ["isVoted"],
  created() {
    axios
      .get("/tasks/" + this.$route.params.id + "/estimations")
      .then(response => {
        this.setEstimations(response.data);
        this.estimations.forEach(obj => {
          if (obj.estimation == 99999) {
            obj.estimation = "INFINITY";
          } else if (obj.estimation == 123456) {
            obj.estimation = "?";
          }
          // if(obj.user.login == this.$store.getters.user.username) { this.isVoted = true; }
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["setEstimations"])
  }
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
.vote-text {
  padding: 2px 10px;
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
</style>
