<template>
  <button type="submit"
          class="button-primary"
          :class="{'isLoading': isLoading}"
          :disabled="isLoading">
    <div class='relative' >
      <i class="fa fa-circle-o-notch fa-spin fa-2x fa-fw" v-if="isLoading"></i>
    </div>
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'a-submit-button',
    props: {
      isLoading: Boolean
    }
  }
</script>

<style scoped>
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

  #app .isLoading i {
    color: white;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 30px;
    top: 5px;
  }


</style>
