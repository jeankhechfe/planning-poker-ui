<template>
  <div class="container">
    <div class="assigned_users" v-if="assigned_users.length > 0">
      <h3>Assigned Users</h3>
      <div v-for="user in assigned_users" v-bind:key="user.id" class="col">
        <p class="user">
          {{ user.username }}
          <span class="float-right">{{ user.permissionType }}</span>
        </p>
      </div>
    </div>
    <div class="unassigned_users" v-if="unassigned_users.length > 0 && isOwner">
      <h3>Assign New User</h3>
      <div class="row single-task assign-n-user">
        <!-- These options will appear after the ones from 'options' prop -->
        <div class="col-sm-8 u-user-list">
          <b-form-select v-model="selected" class="select-user">
            <template v-slot:first>
              <b-form-select-option
                v-for="user in unassigned_users"
                v-bind:key="user.id"
                :value="user"
              >{{ user.username }}</b-form-select-option>
            </template>
          </b-form-select>
        </div>
        <div class="col-sm-4 text-right">
          <button class="btn btn-success" v-on:click="assigne(selected)">Assign User</button>
        </div>
      </div>
      <!-- These options will appear after the ones from 'options' prop -->
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
      isOwner: false,
      selected: null
    };
  },
  created() {
    axios
      .get("/permissions/project/" + this.$route.params.id)
      .then(response => {
        this.all_users.forEach(user => {
          let permission = response.data.filter(e => e.userId == user.id);
          if (permission.length > 0) {
            user.permissionType = permission[0].permissionType;
            if (
              permission[0].permissionType == "OWNER" &&
              this.$store.getters.user.token == permission[0].userId
            ) {
              this.isOwner = true;
              this.$emit("set-owner");
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
      console.log("test");
      axios
        .post("/permissions", {
          userId: user.id,
          projectId: this.$route.params.id,
          permissionType: "READ_WRITE"
        })
        .then(response => {
          if (response.statusText == "OK") {
            const index = this.unassigned_users.findIndex(u => u.id == user.id);
            if (index > -1) {
              this.unassigned_users.splice(index, 1);
            }
            user.permissionType = "READ_WRITE";

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
}
.user {
  padding: 2px 10px;
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.btn {
  border-radius: 0;
  margin: 5px;
}

.single-task {
  background-color: #d6d8db;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  padding: 10px 0;
  margin: 10px 0;
}
.u-user-list {
  margin-top: 5px;
}
.assign-n-user {
  margin: 15px;
}
.select-user {
  border-radius: 0;
}
</style>
