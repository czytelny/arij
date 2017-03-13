<template>
  <span class="a-tag">
    <slot></slot>
  </span>
</template>
<script>
  export default {
    name: 'a-tag',
  };
</script>
<style lang="less" scope>
  .a-tag {
    background-color: #8391a5;
    display: inline-block;
    padding: 0 5px;
    height: 24px;
    line-height: 22px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    white-space: nowrap;
  }
</style>
