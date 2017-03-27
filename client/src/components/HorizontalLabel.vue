<template>
  <div class="horizontal-label row">
    <div class="two columns title-label">
      {{title}}
      <div class="sub-description">{{description}}</div>
    </div>
    <div class="divider"></div>
    <span class="content">
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'a-horizontal-label',
    props: ['title', 'description'],
  }
</script>
<style lang="less" scoped>
  @row-padding: 10px;

  .horizontal-label {
    display: flex;
    padding: @row-padding 0;

    .title-label {
      min-width: 100px;
      flex: none;
      text-align: right;
      align-self: center;
    }

    .sub-description {
      font-size: .7em;
      font-style: italic;
    }

    .divider {
      border-right: 1px solid #8391a5;
      margin: -@row-padding 20px;
    }

    .content {
      width: 100%;
      align-self: center;
    }
  }
</style>
