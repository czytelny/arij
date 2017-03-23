<template>
  <div class="horizontal-label">
    <div class="title-label">{{title}}</div>
    <div class="divider"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'a-horizontal-label',
    props: ['title'],
  }
</script>
<style lang="less" scoped>
  .horizontal-label {
    display: flex;

    .title-label {
      width: 15%;
      text-align: right;
      align-self: center;
    }

    .divider {
      width: 1px;
      background-color: #8391a5;
      margin: 0 20px;
    }
  }
</style>
