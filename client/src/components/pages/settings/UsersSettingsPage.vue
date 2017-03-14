<template>
  <div>
    <h3>Users</h3>

    <a-action-panel>
      <slot>
        <a-checkbox v-model="showAllUsers">
          Show removed users
        </a-checkbox>
      </slot>
    </a-action-panel>

    <users-table :show-all="showAllUsers"></users-table>
  </div>
</template>

<script>
  import Checkbox from './../../Checkbox'
  import TableActionPanel from './../../TableActionPanel'
  import UsersTable from './../../UsersTable'

  export default {
    name: 'users-settings-page',
    data() {
      return {
        showAllUsers: false
      }
    },
    components: {
      'a-checkbox': Checkbox,
      'a-action-panel': TableActionPanel,
      'users-table': UsersTable
    }
  };
</script>

<style>

</style>
