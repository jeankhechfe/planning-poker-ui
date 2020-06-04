<template>
  <div class="container">
    <div class="assigned_users" v-if="assigned_users.length > 0">
      <h3>Assigned Users</h3>
      <div v-for="user in assigned_users" v-bind:key="user.id" class="col">
        <p class="user">{{ user.username }} <span class="float-right">{{ user.permissionType }}</span></p>
      </div>
    </div>
    <div class="unassigned_users" v-if="unassigned_users.length > 0 && isOwner">
      <h3>Unassigned Users</h3>
      <div v-for="user in unassigned_users" v-bind:key="user.id" class="col">
        <b-button
          variant="primary"
          class="btn btn-success float-right"
          v-on:click="assigne(user)"
        >Assign</b-button>
        <p class="user">{{ user.username }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "./../service/axios-api";

export default {
  name: "AssignUsersSection",
  data() {
    return {
      all_users: this.$store.getters.users,
      assigned_users: [],
      unassigned_users: [],
      isOwner: false
    };
  },
  created() {
    axios
      .get("/permissions/project/" + this.$route.params.id)
      .then(response => {
        this.all_users.forEach(user => {
          let permission = response.data.filter(e => e.userId == user.id);
          if(permission.length > 0) {
            user.permissionType = permission[0].permissionType
            if(permission[0].permissionType == "OWNER" && this.$store.getters.user.token == permission[0].userId) {
              this.isOwner = true;
            }
            this.assigned_users.push(user);
          } else {
            this.unassigned_users.push(user);
          }
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    assigne(user) {
    axios
      .post("/permissions", { 
        userId: user.id,
        projectId: this.$route.params.id,
        permissionType: "READ_WRITE"
      })
      .then(response => {
        if(response.statusText=="OK"){
            const index = this.unassigned_users.findIndex(u => u.id == user.id);
            if(index > -1) { this.unassigned_users.splice(index, 1); }
            user.permissionType = "READ_WRITE"
            this.assigned_users.push(user);
        }
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
.user {
  padding: 2px 10px;
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
.btn {
  border-radius: 0;
  padding: 1px 2px;
}
</style>
