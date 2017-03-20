<template>
  <nav class="sidebar-left">
    <h5>Project Name</h5>
    <ul class="list-unstyled">
      <router-link to="/board">
        <li>Board</li>
      </router-link>
      <router-link to="/draft">
        <li>Draft Boards</li>
      </router-link>
      <router-link to="/backlog">
        <li>Backlog</li>
      </router-link>
    </ul>

    <div v-if="isLoggedUserAdmin">
      <hr>
      <h5>System settings</h5>
      <ul class="list-unstyled">
        <router-link to="/settings/projects">
          <li>Projects</li>
        </router-link>
        <router-link to="/settings/projects/add">
          <li>Add Projects</li>
        </router-link>
        <router-link to="/settings/users">
          <li>Users</li>
        </router-link>
        <router-link to="/settings/users/add">
          <li>Add Users</li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'side-navigation',
    computed: {
      isLoggedUserAdmin() {
        return (this.$store.state.users.logged.roles.indexOf('admin') !== -1)
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "../../styles/variables.less";

  hr {
    margin: 0 20%;
    border-color: @primary-color;
  }

  ul li {
    display: block;
  }

  h5 {
    font-size: 2em;
    color: #909090;
  }

  .sidebar-left {
    flex: none;
    background-color: @secondary-color;
    padding: 20px;
    width: 200px;
    overflow: auto;
    color: #cecece;
    white-space: nowrap;
    font-size: .8em;
  }
</style>
