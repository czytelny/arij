<template>
  <button type="button"
          class="button-default"
    >
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'a-default-button',
    props: {
      isLoading: Boolean
    }
  }
</script>

<style scoped lang="less">
  @import "./../../styles/variables.less";

  .relative {
    position: relative;
  }

  #app .isLoading {
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -ms-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    color: #5b6063;
    background-color: #3C3F41;
    border: 1px solid #8391a5
  }


  .button-default {
    transition: all .2s;
  }

  .button-default:hover {
    background-color: rgba(206, 206, 206, 0.3);
  }


</style>
