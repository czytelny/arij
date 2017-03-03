<template>
  <div class="breadcrumbs-container">
    Breadcrumbs
  </div>
</template>

<script>
  export default {
    name: 'breadcrumbs',
  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .breadcrumbs-container {
    flex: none;
    background-color: #c4c4c4;
    color: white;
    padding: 0 10px;
    font-size: 1em;
    font-weight: bold;
  }
</style>
