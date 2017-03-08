<template>
  <div class="page-footer">
    arij 2017

    <a href="http://github.com/czytelny/arij" target="_blank">
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

  .fa {
    color: #909090;
  }

  .page-footer {
    flex: none;
    background-color: @secondary-color;
    color: #909090;
    padding: 5px;
    font-size: .7em;
    text-align: left;
  }
</style>
