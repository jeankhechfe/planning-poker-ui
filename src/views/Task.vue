<template>
  <div>
    <body>
      <div>
        <SideNav />
        <div class="task">
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <div class="text-center">
                  <h2 class="title-one">{{ task.name }}</h2>
                  <p>{{ task.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-md-8">
                <VotingCards v-on:add-estimation="add_estimation" />
                <CommentSection />
              </div>
              <div class="col-md-4">
                <OtherVotes v-bind:estimations="estimations" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import SideNav from "@/components/SideNav.vue";
import VotingCards from "@/components/VotingCards";
import CommentSection from "@/components/CommentSection";
import OtherVotes from "@/components/OtherVotes";
import axios from "../service/axios-api";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Body",
  components: {
    SideNav,
    VotingCards,
    CommentSection,
    OtherVotes,
  },
  computed: mapGetters(["estimations"]),
  created() {
    axios
      .get("/tasks/" + this.$route.params.id)
      .then((response) => {
        this.task = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("/tasks/" + this.$route.params.id + "/estimations")
      .then((response) => {
        if (response.status == 200) {
          this.setEstimations(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["setEstimations", "addEstimation"]),
    add_estimation(newEstimation) {
      var isVoted = false;
      this.estimations.forEach(estimation => {
        if(estimation.user.login == this.$store.getters.user.username) 
          isVoted = true;
      });
      if (!isVoted)
        this.addEstimation(newEstimation);
    }
  },
  data() {
    return {
      task: [],
    };
  },
};
</script>

<style scoped>
.task {
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
