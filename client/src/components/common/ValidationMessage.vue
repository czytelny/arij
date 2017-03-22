<template>
  <div>
    <transition name="slide-fade">
      <div v-if="hasError" class="error-message">
        <span v-if="!isRequired">This field is required</span>
        <span v-if="!isEmail">This needs to be a valid email</span>
        <span v-if="!isSamePassword">Confirmation needs to be same as password </span>
      </div>
    </transition>
  </div>
</template>


<script>
  export default {
    name: 'a-val-message',
    props: {
      hasError: {type: Boolean, default: false},
      isRequired: {type: Boolean, default: true},
      isEmail: {type: Boolean, default: true},
      isSamePassword: {type: Boolean, default: true}
    }
  };
</script>

<style lang="less" scope>
  @import "./../../styles/variables.less";

  .error-message {
    font-size: .7em;
    color: @error-color;
  }

  .slide-fade-enter-active {
    /*transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
    transition: all .5s cubic-bezier(.63, .11, .83, 1.6);
  }

  .slide-fade-leave-active {
    transition: all .25s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for <2.1.8 */
  {
    transform: translateY(-5px);
    opacity: 0;
  }
</style>
