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
                <VotingCards v-on:add-estimation="add_estimation" v-on:set-Voted="set_Voted" />
                <CommentSection />
              </div>
              <div class="col-md-4">
                <OtherVotes v-bind:estimations="estimations" v-bind:isVoted="isVoted" />
                <b-button
                  v-if="isOwner"
                  variant="primary"
                  class="btn btn-success"
                  v-on:click="finalize()"
                >Finalize Estimation</b-button>
                <b-button
                  v-if="isOwner"
                  variant="primary"
                  class="btn btn-danger"
                  v-on:click="deleteTask()"
                >Delete Task</b-button>
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
      axios
      .get("/tasks/" + this.$route.params.id)
      .then(response => {
        axios
        .get("/permissions/project/" + response.data.project.id)
        .then(response => {
          let permission = response.data.filter(p => p.permissionType == "OWNER");
          if(permission[0].userId == this.$store.getters.user.token)
            this.isOwner = true;
        })
        .catch((error) => {
          console.log(error);
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapActions(["setEstimations", "addEstimation"]),
    add_estimation(newEstimation) {
      const index = this.estimations.findIndex(e => e.user.login == this.$store.getters.user.username);
      if(index > -1) { this.estimations.splice(index, 1); }
      this.addEstimation(newEstimation);
    },
    set_Voted(x) {
      this.isVoted = x;
    },
    finalize() {
      let sum = 0, i = 0;
      this.estimations.forEach(e => {
        sum += e.estimation;
        i++;
      });
      let avg = sum/i;
      const fourier = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 99999]
      let index = fourier.findIndex(f => {
        return f > avg;
      });
      const task = {
        estimation: fourier[index]
      };
      axios
      .put("/tasks/" + this.$route.params.id, task)
      .then((response) => {
        if(response.statusText == "OK");
          this.$router.go(-1);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    deleteTask() {
      axios
        .delete("/tasks/" +  this.$route.params.id)
        .then(response => {
          console.log(response)
          if(response.statusText=="OK")
            this.$router.go(-1);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  data() {
    return {
      task: [],
      isVoted: false,
      isOwner: false
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
.btn {
  border-radius: 0;
  margin-right: 15px;
  margin-bottom: 15px;
}
</style>
