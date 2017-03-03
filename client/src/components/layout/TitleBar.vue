<template>
  <div class="title-bar">
    arij
    <span>logout [{{username}}]</span>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'title-bar',

  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .title-bar {
    background-color: @primary-color;
    color:white;
    text-align: center;
    padding: 5px 10px;
    font-size: 1em;
    font-weight: bold;
  }

</style>
