<template>
  <div>
    <h3>Add User</h3>
    <div class="row">
      <div class="four columns">
      </div>
      <div class="seven columns ">
      </div>
    </div>
  </div>
</template>

<script>
  import Checkbox from './../../Checkbox'
  import Input from './../../Input'

  export default {
    name: 'add-users-settings-page',
    data() {
      return {
        showAllUsers: false,
        filterValue: ""
      }
    },
    components: {
      'a-checkbox': Checkbox,
      'a-input': Input,
    }
  };
</script>

<style>

</style>
