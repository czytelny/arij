<template>
  <div class="title-bar">
    Title Bar
  </div>
</template>

<script>
  export default {
    name: 'title-bar',
  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .title-bar {
    background-color: @primary-color;
    color: white;
    text-align: right;
    margin: 5px 0;
    padding: 0 10px;
    font-size: 1em;
    font-weight: bold;
  }

</style>
