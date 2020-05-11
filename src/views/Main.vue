<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-nav>
        <b-nav-item href="#">PlanningPoker</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>{{ username }}</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-navbar>

    <body>
      <div>
        <h1>Sidebar container</h1>
        <Content />
      </div>
    </body>
  </div>
</template>

<script>
// @ is an alias to /src
import Content from "@/components/Content.vue";

export default {
  name: "Body",
  components: {
    Content,
  },
  props: {
    username: String,
  },
};
</script>
