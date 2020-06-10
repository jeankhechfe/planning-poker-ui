<template>
  <div class="container">
    <div v-if="isEstimationFinalized">
      <h2>Voting to this task has finished</h2>
    </div>
    <div v-if="!isEstimationFinalized">
      <h2>Pick a Vote</h2>
      <div class="btn-group">
        <button type="button" class="vote-btn" @click="estimate(1)">
          1 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(2)">
          2 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(3)">
          3 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(5)">
          5 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(8)">
          8 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(13)">
          13 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(21)">
          21 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(34)">
          34 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(55)">
          55 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(89)">
          89 points
        </button>
        <button type="button" class="vote-btn" @click="estimate(99999)">
          Infinity
        </button>
        <button type="button" class="vote-btn" @click="estimate(123456)">
          ?
        </button>
      </div>
    </div>
    <div v-show="isVoted" style="margin-top:30px">
      <h2>You voted : {{ user_estimation }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "./../service/axios-api";

export default {
  name: "VotingCards",
  data() {
    return {
      isVoted: false,
      user_estimation: 0,
      isEstimationFinalized: false,
    };
  },

  created() {
    axios
      .get("/tasks/" + this.$route.params.id + "/estimations")
      .then((response) => {
        if (response.status == 200) {
          this.estimations = response.data;
          response.data.forEach((obj) => {
            this.isEstimationFinalized =
              obj.task.estimation != 0 ? true : false;
            if (this.$store.getters.user.username == obj.user.login) {
              this.isVoted = true;
              if (obj.estimation == 99999) {
                this.user_estimation = "INFINITY";
              } else if (obj.estimation == 123456) {
                this.user_estimation = "?";
              } else {
                this.user_estimation = obj.estimation;
              }
            }
          });
          this.$emit("set-Voted", this.isVoted);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    estimate(estimation) {
      if (!this.isEstimationFinalized) {
        axios
          .post("/tasks/" + this.$route.params.id + "/estimations", {
            estimation: estimation,
            userId: this.$store.getters.user.token,
            taskId: this.$route.params.id,
          })
          .then((response) => {
            if (response.status == 200) {
              this.isVoted = true;
              this.$emit("set-Voted", this.isVoted);
              if (estimation == 99999) {
                this.user_estimation = "INFINITY";
              } else if (estimation == 123456) {
                this.user_estimation = "?";
              } else {
                this.user_estimation = estimation;
              }
              response.data.estimation = this.user_estimation;
              this.$emit("add-estimation", response.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
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
