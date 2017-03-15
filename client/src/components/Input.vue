<template>
  <span class="inner-addon" :class="{'left-addon':withIcon}">
    <span class="fa"
          :class="iconClass"
          v-if="withIcon"></span>
    <input :type="type"
           :maxlength="maxlength"
           :minlength="minlength"
           :value="currentValue"
           @input="handleInput"/>
  </span>
</template>


<script>
  export default {
    name: 'a-input',
    props: {
      type: {
        type: String,
        default: 'text'
      },
      withIcon: {
        type: Boolean,
        default: false
      },
      maxlength: Number,
      minlength: Number,
      iconClass: String
    },
    data() {
      return {
        currentValue: this.value,
      };
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  };
</script>

<style>
  @import "../styles/variables.less";

  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .fa {
    position: absolute;
    padding: 9px;
    pointer-events: none;
  }

  /* align icon */
  .left-addon .fa {
    left: 0px;
  }

  .right-addon .fa {
    right: 0px;
  }

  /* add padding  */
  .left-addon input {
    padding-left: 30px;
  }

  .right-addon input {
    padding-right: 30px;
  }

</style>
