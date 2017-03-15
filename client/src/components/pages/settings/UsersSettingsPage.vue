<template>
  <div>
    <h3>Users</h3>

    <a-action-panel>
      <slot>

        <a-input :withIcon="true" iconClass="fa-search" v-model="filterValue"></a-input>
        <a-checkbox v-model="showAllUsers">
          Show removed users
        </a-checkbox>
      </slot>
    </a-action-panel>

    <users-table :show-all="showAllUsers" :filter="filterValue"></users-table>
  </div>
</template>

<script>
  import Checkbox from './../../Checkbox'
  import TableActionPanel from './../../TableActionPanel'
  import UsersTable from './../../UsersTable'
  import Input from './../../Input'

  export default {
    name: 'users-settings-page',
    data() {
      return {
        showAllUsers: false,
        filterValue: ""
      }
    },
    components: {
      'a-checkbox': Checkbox,
      'a-action-panel': TableActionPanel,
      'a-input': Input,
      'users-table': UsersTable
    }
  };
</script>

<style>

</style>
