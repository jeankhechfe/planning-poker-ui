<template>
  <div class="container">
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
      <button type="button" class="vote-btn" @click="estimate(20)">
        20 points
      </button>
      <button type="button" class="vote-btn" @click="estimate(40)">
        40 points
      </button>
      <button type="button" class="vote-btn" @click="estimate(100)">
        100 points
      </button>
      <button type="button" class="vote-btn" @click="estimate(99999)">
        Infinity
      </button>
      <button type="button" class="vote-btn" @click="estimate(123456)">
        ?
      </button>
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
    };
  },

  created() {
    axios
      .get("/tasks/" + this.$route.params.id + "/estimations")
      .then((response) => {
        // TODO: push data to store
        console.log(response);
        if (response.status == 200) {
          this.estimations = response.data;
          response.data.forEach((obj) => {
            if (this.$store.getters.user.token) {
              this.isVoted = true;
              if (obj.estimation == 99999) {
                this.user_estimation = "INFINITY";
              } else if (obj.estimation == 123456) {
                this.user_estimation = "?";
              } else {
                this.user_estimation = obj.estimation;
              }

              console.log(JSON.parse(obj));
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    estimate(estimation) {
      console.log({
        user_estimation: estimation,
        userId: this.$store.getters.user.token,
        taskId: this.$route.params.id,
      });
      axios
        .post("/tasks/" + this.$route.params.id + "/estimations", {
          estimation: estimation,
          userId: this.$store.getters.user.token,
          taskId: this.$route.params.id,
        })
        .then((response) => {
          // TODO: push data to store
          console.log(response);
          if (response.status == 200) {
            this.isVoted = true;
            this.user_estimation = estimation;
          }
        })
        .catch((error) => {
          console.log(error);
        });
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
