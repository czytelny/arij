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
    padding: 0 10px;
    margin: 5px 0;
    font-size: 1em;
    font-weight: bold;
  }
</style>
