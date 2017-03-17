<template>
  <span class="inner-addon"
        :class="{'left-addon':withIcon}">
    <span class="fa"
          :class="iconClass"
          v-if="withIcon"></span>
    <span class="fa fa-trash-o clear-field" @click='clearInput' v-if="!hasEmptyValue"></span>
    <input :type="type"
           :class="[className, {'is-special': isSpecial}]"
           :maxlength="maxlength"
           :minlength="minlength"
           :value="currentValue"
           :placeholder="placeholder"
           @input="handleInput"/>
  </span>
</template>


<script>
  export default {
    name: 'a-input',
    props: {
      value: [String, Number],
      placeholder: String,
      type: {
        type: String,
        default: 'text'
      },
      withIcon: {
        type: Boolean,
        default: false
      },
      className: String,
      maxlength: Number,
      minlength: Number,
      iconClass: String,
      isSpecial: Boolean,
    },
    data() {
      return {
        currentValue: this.value,
      };
    },
    computed: {
      hasEmptyValue() {
        if (!this.value) {
          return true;
        }
        return this.value.length === 0;
      }
    },
    watch: {
      value(val) {
        this.setCurrentValue(val);
      }
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
        this.$emit('change', value);
      },
      setCurrentValue(value) {
        if (value === this.currentValue) return;
        this.currentValue = value;
      },
      clearInput() {
        this.currentValue = "";
        this.$emit('input', "");
        this.$emit('change', "");
      }
    }
  };
</script>

<style>
  @import "../styles/variables.less";

  input {
    transition: all .3s;
  }

  .inner-addon .fa.clear-field {
    cursor: pointer;
    right: 0;
    left: auto;
  }

  .inner-addon {
    position: relative;
  }

  /* style icon */
  .inner-addon .fa {
    position: absolute;
    padding: 9px;
    pointer-events: auto;
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

  input.is-special {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    outline: none;
    border: 1px solid transparent;
    border-bottom: 1px solid #bfbfbf;
    background: transparent;
    margin-bottom: 10px;
    border-radius: 0;
  }

  input.is-special:focus {
    border: 1px solid transparent;
    border-bottom: 1px solid #8391a5;
  }

</style>
