<template>
  <span class="arij-tag" :class="{ special: isSpecial }">
    <slot></slot>
  </span>
</template>


<script>
  export default {
    name: 'a-tag',
    props: ['isSpecial']
  };
</script>

<style lang="less">
  @import "../../styles/variables.less";

  .arij-tag {
    background-color: @active-color;
    display: inline-block;
    padding: 0 5px;
    height: 22px;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid transparent;
    white-space: nowrap;
    margin-right: 3px;
  }

  .special {
    background-color: @active-color;
    border-color: #51d896;
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.5);
  }

</style>
