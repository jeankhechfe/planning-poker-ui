<template>
  <div class="container">
    <h3>Comments</h3>

    <div class="actionBox">
      <div v-if="comments == null">
        <h6>There are no comments yet...</h6>
      </div>
      <ul class="commentList">
        <li v-for="comment in comments" :key="comment.id">
          <b-button
            v-if="comment.user.login == username"
            variant="primary"
            class="btn btn-danger float-right"
            v-on:click="deleteComment(comment.id)"
            >Delete</b-button
          >
          <div class="commenterImage">
            <img src="@/assets/poker-logo.png" />
          </div>
          <div class="commentText">
            <h4>{{ comment.user.login }}</h4>
            <p class>{{ comment.text }}</p>
            <span class="date sub-text">{{
              new Date(comment.created).toLocaleString()
            }}</span>
          </div>
        </li>
      </ul>
      <form class="form-inline" role="form" @submit.prevent="postComment">
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="newComment"
            placeholder="Your comment"
          />
        </div>
        <div class="form-group">
          <button class="vote-btn">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "./../service/axios-api";
export default {
  name: "CommentSection",
  data() {
    return {
      newComment: "",
      comments: null,
      username: "",
    };
  },
  methods: {
    postComment() {
      axios
        .post("/tasks/" + this.$route.params.id + "/comments", {
          text: this.newComment,
          taskId: this.$route.params.id,
          userId: this.$store.getters.user.token,
        })
        .then((response) => {
          if (response.status == 200) {
            this.comments.push(response.data);
            this.newComment = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteComment(id) {
      axios
        .delete("/tasks/" + this.$route.params.id + "/comments/" + id)
        .then((response) => {
          if (response.statusText == "OK") {
            const index = this.comments.findIndex((c) => c.id == id);
            if (index > -1) {
              this.comments.splice(index, 1);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getComments() {
      axios
        .get("/tasks/" + this.$route.params.id + "/comments")
        .then((response) => {
          this.comments = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.username = this.$store.getters.user.username;
    this.getComments();
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

.detailBox {
  width: 320px;
  border: 1px solid #bbb;
  margin: 50px;
}
.titleBox {
  background-color: #fdfdfd;
  padding: 10px;
}
.titleBox label {
  color: #444;
  margin: 0;
  display: inline-block;
}

.commentBox {
  padding: 10px;
  border-top: 1px dotted #bbb;
}
.commentBox .form-group:first-child,
.actionBox .form-group:first-child {
  width: 80%;
}
.commentBox .form-group:nth-child(2),
.actionBox .form-group:nth-child(2) {
  width: 20%;
}
.actionBox .form-group * {
  width: 100%;
  border-radius: 0;
}

.actionBox .form-control:focus {
  border-color: #cf142b;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.taskDescription {
  margin-top: 10px 0;
}
.commentList {
  padding: 0;
  list-style: none;
  overflow: auto;
  margin-left: -5px;
  margin-right: -5px;
}
.commentList li {
  margin: 10px 5px;
  padding: 2px 10px;
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.commentList li > div {
  display: table-cell;
}
.commenterImage {
  width: 30px;
  margin-right: 5px;
  height: 100%;
  float: left;
}
.commenterImage img {
  width: 100%;
  border-radius: 50%;
}
.commentText p {
  margin: 0;
}
.sub-text {
  color: #aaa;
  font-family: verdana;
  font-size: 11px;
}
.actionBox {
  border-top: 1px dotted #bbb;
  padding: 10px;
}
.vote-btn {
  text-transform: uppercase;
  border: 1px solid #cf142b;
  color: #686868;
  height: 37px;
  background-color: rgba(255, 255, 255, 0);
  border-radius: 0;
  margin-left: 20px;
}
.vote-btn:hover,
.vote-btn:focus {
  background-color: #cf142b !important;
  border-color: #cf142b !important;
  color: #fff !important;
  box-shadow: none !important;
  outline: none;
}
.btn {
  border-radius: 0;
  margin: 10px 0;
}
</style>
