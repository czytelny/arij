<template>
  <div>
    <transition name="fade">
      <div v-if="isError" class="error-message">
        <span v-if="!isRequired">This field is required</span>
        <span v-if="!isEmail">Wrong email format</span>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'a-val-message',
    props: {
      isError: Boolean,
      isRequired: Boolean,
      isEmail: Boolean
    }
  };
</script>
<style lang="less" scope>
  @import "./../../styles/variables.less";

  .error-message {
    font-size: .7em;
    color: @error-color;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */
  {
    opacity: 0
  }
</style>
