<template>
  <div class="page-footer">
    <a href="http://github.com/czytelny/arij" target="_blank">
    arij 2017
      <i class="fa fa-github fa-1x" aria-hidden="true"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'footer-bar',

  }
</script>

<style lang="less" scoped>
  @import "../../styles/variables.less";

  a {
    color: #909090;
  }

  .page-footer {
    flex: none;
    background-color: @secondary-color;
    color: #909090;
    padding: 0 20px;
    font-size: .7em;
    text-align: left;
  }
</style>
