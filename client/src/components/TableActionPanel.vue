<template>
  <div class="a-action-container">
    <div class="a-action-panel">
      <slot></slot>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'a-action-panel',
    props: []
  };
</script>

<style>
  @import "../styles/variables.less";

  .a-action-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }

  .a-action-panel {
    border-radius: 3px;
    background-color: rgba(131, 145, 165, 0.1);
    border:1px solid rgba(131, 145, 165, 0.15);
    width: 80%;
    padding: 15px 15px 0 15px;


  }


</style>
