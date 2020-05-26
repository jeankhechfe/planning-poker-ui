<template>
  <div class="container">
    <h2>Pick a Vote</h2>
    <div class="btn-group">
      <button type="button" class="vote-btn" @click="estimate(1)">1 points</button>
      <button type="button" class="vote-btn" @click="estimate(2)">2 points</button>
      <button type="button" class="vote-btn" @click="estimate(3)">3 points</button>
      <button type="button" class="vote-btn" @click="estimate(5)">5 points</button>
      <button type="button" class="vote-btn" @click="estimate(8)">8 points</button>
      <button type="button" class="vote-btn" @click="estimate(13)">13 points</button>
      <button type="button" class="vote-btn" @click="estimate(21)">21 points</button>
      <button type="button" class="vote-btn" @click="estimate(34)">34 points</button>
      <button type="button" class="vote-btn" @click="estimate(55)">55 points</button>
    </div>
  </div>
</template>

<script>
import axios from "./../service/axios-api";

export default {
  name: "VotingCards",
  methods: {
    estimate(estimation) {
      console.log({
          estimation: estimation,
          userId: this.$store.getters.user.token,
          taskId: this.$route.params.id
        })
      axios
        .post("/tasks/" + this.$route.params.id + "/estimations", {
          estimation: estimation,
          userId: this.$store.getters.user.token,
          taskId: this.$route.params.id
        })
        .then(response => {
          // TODO: push data to store
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
.btn-group {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.vote-btn {
  text-transform: uppercase;
  border: 1px solid #cf142b;
  color: #686868;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
}
.vote-btn:hover,
.vote-btn:focus {
  background-color: #cf142b !important;
  border-color: #cf142b !important;
  color: #fff !important;
  box-shadow: none !important;
  outline: none;
}
</style>
