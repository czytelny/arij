<template>
  <div class="actions-bar">
    Actions Bar
  </div>
</template>

<script>
  export default {
    name: 'actions-bar',
  };
</script>

<style lang="less" scope>
  @import "../../styles/variables.less";

  .actions-bar {
    background-color: @primary-color;
    color: #6c6c6c;
    padding: 5px 15px;
    font-size: .7em;
    text-align: center;
  }
</style>
