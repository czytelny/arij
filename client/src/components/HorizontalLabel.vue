<template>
  <div class="horizontal-label row">
    <div class="three columns title-label">{{title}}</div>
    <div class="divider"></div>
    <span class="content">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'a-horizontal-label',
    props: ['title'],
  }
</script>
<style lang="less" scoped>
  @row-padding: 10px;

  .horizontal-label {
    display: flex;
    padding: @row-padding 0;

    .title-label {
      min-width: 150px;
      flex: none;
      text-align: right;
      align-self: center;
    }

    .divider {
      width: 1px;
      background-color: #8391a5;
      margin: -@row-padding 20px;
    }

    .content {
      width: 100%;
      align-self: center;
    }
  }
</style>
