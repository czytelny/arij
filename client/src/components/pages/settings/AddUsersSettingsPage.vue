<template>
  <div>
    <h3>Add User</h3>
    <form name="newUserForm" @submit.prevent="onSubmit">
      <div class="flex-container">
        <div class="description">
          <div class="flex-item">
            email
            <div class="sub-description">must be unique, identifier</div>
          </div>
          <div class="flex-item">
            name
            <div class="sub-description">displayed in tasks</div>
          </div>
          <div class="flex-item">
            password
          </div>
          <div class="flex-item">
            roles
            <div class="sub-description">privileges in system</div>
          </div>
          <div class="flex-item">
            projects
            <div class="sub-description">assign user to project(s)</div>
          </div>
        </div>
        <div class="inputs">
          <div class="flex-item">
            <input type="text" name="email" placeholder="email" autocomplete="off"></div>
          <div class="flex-item">
            <input type="text" name="name" placeholder="name" autocomplete="off">
          </div>
          <div class="flex-item">
            <input type="password" name="password" placeholder="password" autocomplete="off">
            <input type="password" name="passwordConfirm" placeholder="confirm password" autocomplete="off">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="column twelve">
          <button type="submit" class="button-primary">Add</button>
        </div>
      </div>
    </form>


  </div>
</template>

<script>
  import Checkbox from './../../Checkbox'
  import Input from './../../Input'

  export default {
    name: 'add-users-settings-page',
    data() {
      return {}
    },
    methods: {
      onSubmit() {
        console.log('submitting form')
      }
    },
    components: {
      'a-checkbox': Checkbox,
      'a-input': Input,
    }
  };
</script>

<style scoped>
  @import "./../../../styles/variables.less";

  .flex-container {
    display: flex;
  }

  .flex-item {
    height: 70px;
  }

  .flex-item input {
    margin: 0;
    width: 250px;
  }

  .sub-description {
    font-size: .7em;
    font-style: italic;
  }

  .description {
    text-align: right;
    border-right: 1px solid #8391a5;
    padding: 0 10px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    width: 15%
  }

  .inputs {
    width: 80%;
    display: flex;
    flex-direction: column;
  }


</style>
