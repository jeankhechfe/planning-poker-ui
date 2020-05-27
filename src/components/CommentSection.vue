<template>
  <div class="container">
    <h3>Comments</h3>

    <div class="actionBox">
      <ul class="commentList">
        <li v:v-for="(comment, index) in comments" :key="index">
          <div class="commenterImage">
            <img src="@/assets/poker-logo.png" />
          </div>
          <div class="commentText">
            <h4>Jess</h4>
            <p class="">Hello this is a test comment.</p>
            <span class="date sub-text">on March 5th, 2014</span>
          </div>
        </li>
      </ul>
      <form class="form-inline" role="form">
        <div class="form-group">
          <input class="form-control" type="text" placeholder="Your comment" />
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
      isVoted: false,
      comments: [],
    };
  },

  created() {
    axios
      .get("/tasks/" + this.$route.params.id + "/comments")
      .then((response) => {
        // TODO: push data to store
        console.log(response);
        if (response.status == 200) {
          this.comments = response.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
  width: 18%;
}
.actionBox .form-group * {
  width: 100%;
}
.taskDescription {
  margin-top: 10px 0;
}
.commentList {
  padding: 0;
  list-style: none;
  max-height: 200px;
  overflow: auto;
}
.commentList li {
  margin: 0;
  margin-top: 10px;
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
