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

<style lang="less">
  @import "../../styles/variables.less";

  .actions-bar {
    background-color: @primary-color;
    color: white;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: bold;
    border-top: 1px solid #5a5a5a;
  }
</style>
