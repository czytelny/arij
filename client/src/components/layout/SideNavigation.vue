<template>
  <nav class="sidebar-left">
    <h3>Sidebar</h3>
    <div class="links">
      <ul class="list-unstyled">
        <li>Your profile</li>
        <li>Users</li>
        <li>System Roles</li>
        <li>Projects</li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'side-navigation',
  };
</script>

<style lang="less" scoped>
  @import "../../styles/variables.less";

  .sidebar-left {
    flex: none;
    background-color: @secondary-color;
    padding: 20px;
    width: 200px;
    overflow: auto;
    color: white;
    white-space: nowrap;
  }
</style>
