<template>
  <div>
    <h3>Users </h3>
    <div class="row">
      <div class="four columns">
        <a-input :withIcon="true"
                 iconClass="fa-search"
                 className="u-full-width without-bottom-margin"
                 :isSpecial="true"
                 placeholder="Filter..."
                 v-model="filterValue">
        </a-input>
      </div>
      <div class="seven columns ">
        <a-checkbox class="u-pull-right without-bottom-margin" v-model="showAllUsers">
          Show removed users
        </a-checkbox>
      </div>
    </div>

    <users-table :show-all="showAllUsers" :filter="filterValue"></users-table>
  </div>
</template>

<script>
  import Checkbox from '../../../common/Checkbox'
  import TableActionPanel from '../../../common/TableActionPanel'
  import UsersTable from './UsersTable'
  import Input from '../../../common/Input'

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
