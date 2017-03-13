<template>
  <span class="arij-tag" :class="{ special: isSpecial }">{{textMessage}}</span>
</template>


<script>
  export default {
    name: 'arij-tag',
    props: ['textMessage', 'isSpecial']
  };
</script>

<style>
  .arij-tag {
    background-color: #8391a5;
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
    margin-right: 1px;
  }

  .special {
    background-color: rgba(253, 151, 31, 0.08);
    border-color: #FD971F;
    color: #FD971F;
  }

</style>
