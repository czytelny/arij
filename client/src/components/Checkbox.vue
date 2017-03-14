<template>
  <label class="el-checkbox">
    <span class="el-checkbox__input"
          :class="{
                    'is-disabled': disabled,
                    'is-checked': isChecked
                  }"
    >

      <span class="el-checkbox__inner"></span>
      <input
        class="el-checkbox__original"
        type="checkbox"
        :disabled="disabled"
        :value="label"
        :name="name"
        v-model="model"
        @change="handleChange"
        @focus="focus = true"
        @blur="focus = false">
    </span>
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>


<script>
  export default {
    name: 'a-checkbox',
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      checked: Boolean,
      name: String,
      trueLabel: [String, Number],
      falseLabel: [String, Number]
    },
    data() {
      return {
        selfModel: false,
        focus: false
      };
    },
    computed: {
      model: {
        get() {
          return this.value !== undefined
              ? this.value : this.selfModel;
        },
        set(val) {
          if (this.value !== undefined) {
            this.$emit('input', val);
          } else {
            this.selfModel = val;
          }
        }
      },
      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.label) > -1;
        } else if (this.model !== null && this.model !== undefined) {
          return this.model === this.trueLabel;
        }
        return null;
      },
    },
    methods: {
      handleChange(ev) {
        this.$emit('change', ev);
        if (this.isGroup) {
          this.$nextTick(() => {
            this.dispatch('ElCheckboxGroup', 'change');
          });
        }
      }
    }
  };
</script>

<style lang="less">
  @import "../styles/variables.less";

  @background: #8391a5;

  .el-checkbox {
    color: #1f2d3d;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .el-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: .5;
    position: relative;
    vertical-align: middle;
  }

  .el-checkbox__label {
    font-size: 14px;
    padding-left: 5px;
    font-weight: 200;
  }

  .el-checkbox__original {
    opacity: 0;
    outline: none;
    position: absolute;
    margin: 0;
    left: -999px;
  }

  .el-checkbox__inner {
    display: inline-block;
    position: relative;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    box-sizing: border-box;
    width: 18px;
    height: 18px;
    background-color: #fff;
    z-index: 1;
    transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
  }

  .el-checkbox__inner:after {
    box-sizing: content-box;
    content: "";
    border: 2px solid #fff;
    border-left: 0;
    border-top: 0;
    height: 8px;
    left: 5px;
    position: absolute;
    top: 1px;
    transform: rotate(45deg) scaleY(0);
    width: 4px;
    transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
    transform-origin: center;
  }

  .el-checkbox__input.is-checked .el-checkbox__inner:after {
    transform: rotate(45deg) scaleY(1);
  }

  .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: @background;
    border-color: @background;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner {
    background-color: #eef1f6;
    border-color: #d1dbe5;
    cursor: not-allowed;
  }

  .el-checkbox__input.is-disabled .el-checkbox__inner:after {
    cursor: not-allowed;
    border-color: #eef1f6;
  }

  .el-checkbox__input.is-disabled.is-checked .el-checkbox__inner {
    background-color: #d1dbe5;
    border-color: #d1dbe5;
  }

  .el-checkbox__input.is-disabled+.el-checkbox__label {
    color: #bbb;
    cursor: not-allowed;
  }

</style>
